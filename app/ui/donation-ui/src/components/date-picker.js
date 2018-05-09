import React, { Component } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import DateUtils from "common/date-utils";

export default class Date extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: this.transform(this.props.value)
    };
    if (this.props.selectsStart || this.props.selectsEnd) {
      this.state.startDate = this.transform(this.props.startDate);
      this.state.endDate = this.transform(this.props.endDate);

      if (this.props.selectsStart) {
        //this.state.date = this.state.startDate;
      }

      if (this.props.selectsEnd) {
        //this.state.date = this.state.endDate;
      }
    }
  }

  transform(value) {
    if (!value || typeof value == "string") return value ? moment(value) : null;
    return value;
  }

  componentWillReceiveProps(nextProps, prevState) {
    // console.log(
    //   "reciving",
    //   nextProps.startDate,
    //   nextProps.endDate,
    //   nextProps.value
    // );
    this.setState({
      startDate: this.transform(nextProps.startDate),
      endDate: this.transform(nextProps.endDate),
      date: this.transform(nextProps.value)
    });
  }

  handleChange(date) {
    this.setState({
      date: date
    });
    //console.log(this.props.selectsStart ? "start" : "end", this.state);
    this.props.onChange(DateUtils.toServerDate(date));
  }

  render() {
    let valueProps = {};
    if (this.props.selectsStart || this.props.selectsEnd) {
      valueProps = {
        startDate: this.state.startDate,
        endDate: this.state.endDate
      };
      if (this.props.selectsStart) {
        valueProps.selectsStart = true;
      }
      if (this.props.selectsEnd) {
        valueProps.selectsEnd = true;
      }
    }

    return (
      <div>
        <DatePicker
          {...valueProps}
          placeholderText={this.props.placeholderText}
          showMonthDropdown={this.props.showMonthDropdown ? true : false}
          showYearDropdown={this.props.showYearDropdown ? true : false}
          isClearable={true}
          ref="datePicker"
          dateFormat="DD-MMM-YYYY"
          className="form-control col-md-7 col-xs-12"
          selected={this.state.date}
          onChange={date => {
            this.handleChange(date);
          }}
        >
          <div>
            {this.props.children}
            {this.props.showQuickLinks && (
              <div class="quick-links">
                <div>
                  <a
                    onClick={e => {
                      this.props.onQuickLink(
                        moment(),

                        moment()
                      );
                    }}
                  >
                    Today
                  </a>
                  <a
                    onClick={e => {
                      this.props.onQuickLink(
                        moment().subtract(1, "days"),

                        moment().subtract(1, "days")
                      );
                    }}
                  >
                    Yesterday
                  </a>
                </div>
                <div>
                  <a
                    onClick={e => {
                      this.props.onQuickLink(
                        moment().startOf("month"),

                        moment().endOf("month")
                      );
                    }}
                  >
                    This Month
                  </a>
                  <a
                    onClick={() => {
                      this.props.onQuickLink(
                        moment()
                          .subtract(1, "months")
                          .startOf("month"),

                        moment()
                          .subtract(1, "months")
                          .endOf("month")
                      );
                    }}
                  >
                    Last Month
                  </a>
                </div>
                <div>
                  <a
                    onClick={() => {
                      this.props.onQuickLink(
                        moment().startOf("year"),

                        moment().endOf("year")
                      );
                    }}
                  >
                    This Year
                  </a>
                  <a
                    onClick={() => {
                      this.props.onQuickLink(
                        moment()
                          .subtract(1, "years")
                          .startOf("year"),

                        moment()
                          .subtract(1, "years")
                          .endOf("year")
                      );
                    }}
                  >
                    Last Year
                  </a>
                </div>
              </div>
            )}
          </div>
        </DatePicker>
      </div>
    );
  }
}
