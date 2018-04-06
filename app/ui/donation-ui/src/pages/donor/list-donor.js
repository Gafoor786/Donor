import React, { Component } from "react";
import {
  Modal,
  Button,
  Collapse,
  OverlayTrigger,
  Tooltip
} from "react-bootstrap";
import ReactTable from "react-table";
import CollapsablePanel from "components/collapsable-panel";
import Confirm from "components/confirm";
import SearchUser from "components/user/search";
import DonorService from "services/donor-service";
import { Link } from "react-router-dom";
import { RightLayout } from "layout/right-layout";

export default class ListDonor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      isLoading: true,
      showModal: false,
      pages: 1,
      showConfirm: false,
      idToDelete: null,
      showFilter: false
    };
  }

  fetchData(param) {
    DonorService.getAllDonor(param)
      .then(response => {
        let data = response.data;
        this.setState({ data: data, isLoading: false });
      })
      .catch(err => {
        this.setState({ isLoading: false });
      });
  }

  onDelete(rowMeta) {
    DonorService.deleteDonor(rowMeta.original.id)
      .then(response => {
        let data = [
          ...this.state.data.slice(0, rowMeta.index),
          ...this.state.data.slice(rowMeta.index + 1)
        ];
        this.setState({
          data: data,
          isLoading: false
        });
      })
      .catch(err => {
        this.setState({ isLoading: false });
      });
  }
  render() {
    return (
      <div>
        <RightLayout title="Donors" linkTo="/donor/add" linkText="Add Donor" />
        <CollapsablePanel
          isOpen={this.state.data ? false : true}
          title="Search"
        >
          <SearchUser onSearch={param => this.fetchData(param)} />
        </CollapsablePanel>
        {this.renderTable()}
      </div>
    );
  }

  renderTable() {
    if (!this.state.data) {
      return null;
    }
    const { data, isLoading, showFilter } = this.state;
    return (
      <RightLayout>
        <div className="table-responsive">
          <ReactTable
            data={data}
            defaultFilterMethod={(filter, row, column) => {
              const id = filter.pivotId || filter.id;
              return row[id] !== undefined
                ? String(row[id]).indexOf(filter.value) > -1
                : true;
            }}
            loading={isLoading}
            defaultPageSize={10}
            columns={[
              {
                Header: "Id",
                accessor: "id",
                filterable: showFilter
              },
              {
                Header: "First Name",
                accessor: "firstname",
                filterable: showFilter
              },
              {
                Header: "Last Name",
                accessor: "lastname",
                filterable: showFilter
              },
              {
                Header: "Phone",
                accessor: "phone",
                filterable: showFilter
              },
              {
                Header: "Email",
                accessor: "email",
                filterable: showFilter
              },
              {
                Header: (
                  <span
                    style={{
                      display: "block",
                      textAlign: "center",
                      cursor: "pointer"
                    }}
                    onClick={() => {
                      this.setState({ showFilter: !this.state.showFilter });
                    }}
                  >
                    <i className="fa fa-filter" />
                  </span>
                ),
                sortable: false,
                id: "id",
                accessor: d => d.id,
                Cell: rowMeta => (
                  <div class="row-action">
                    <OverlayTrigger
                      placement="bottom"
                      overlay={
                        <Tooltip id={"edit" + rowMeta.original.id}>
                          Edit
                        </Tooltip>
                      }
                    >
                      <Link to={"/donor/" + rowMeta.original.id + "/edit"}>
                        <i className="fa fa-edit" />
                      </Link>
                    </OverlayTrigger>

                    <OverlayTrigger
                      placement="bottom"
                      overlay={
                        <Tooltip id={"edit" + rowMeta.original.id}>
                          Donation Details
                        </Tooltip>
                      }
                    >
                      <Link to={"/donor/" + rowMeta.original.id + "/details"}>
                        <i className="fa fa-money" />
                      </Link>
                    </OverlayTrigger>

                    <OverlayTrigger
                      placement="bottom"
                      overlay={
                        <Tooltip id={"delete" + rowMeta.original.id}>
                          Delete
                        </Tooltip>
                      }
                    >
                      <Confirm
                        onConfirm={() => {
                          this.onDelete(rowMeta);
                        }}
                        body="Are you sure you want to delete?"
                        confirmText="Confirm Delete"
                        title="Delete Donor"
                      >
                        <a>
                          <i className="fa fa-trash-o" />
                        </a>
                      </Confirm>
                    </OverlayTrigger>
                  </div>
                )
              }
            ]}
            className="-striped -highlight"
          />
        </div>
      </RightLayout>
    );
  }
}
