import React, { Component } from "react";
import { View, FlatList } from "react-native";
import { Text, Spinner, Icon, List, ListItem } from "native-base";

import DonorService from "../service/donor-service";

export default class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      donors: [],
      data: []
    };
  }

  componentDidMount() {
    this.fetchDonor(this.props);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.searchText !== newProps.searchText) {
      this.onSearch(newProps.searchText);
    }
    if (this.props.filter !== newProps.filter) {
      this.fetchDonor(newProps);
    }
  }

  onSearch(text) {
    const filteredDonors = this.state.data.filter(
      d => d.firstname.indexOf(text) >= 0
    );
    this.setState({ donors: filteredDonors });
  }

  getAddress(item) {
    const address = [];
    if (item.doorNo) {
      address.push(item.doorNo);
    }
    if (item.street) {
      address.push(item.street);
    }
    if (item.area) {
      address.push(item.area);
    }
    if (item.city) {
      address.push(item.city);
    }
    if (item.state) {
      address.push(item.state);
    }
    if (item.country) {
      address.push(item.country);
    }
    return address.join(", ");
  }

  fetchDonor(props) {
    console.log("userlist-fetch donor", props);
    this.setState({ isLoading: true });
    DonorService.getAllDonors(props.filter).then(donors => {
      console.log("fetch donors", donors);
      this.setState({ donors, data: donors, isLoading: false });
    });
  }

  render() {
    const { getAddress } = this;

    if (this.state.isLoading) {
      return <Spinner color="blue" />;
    }
    return (
      <List noIndent style={{ padding: 0 }}>
        <FlatList
          data={this.state.donors}
          renderItem={row => {
            const { item } = row;

            return (
              <ListItem
                key={item.id}
                onPress={() => {
                  this.props.onSelect(item);
                }}
              >
                <View>
                  <View>
                    <Text style={{ textAlign: "left", alignSelf: "stretch" }}>
                      {item.firstname}
                    </Text>
                  </View>
                  <View>
                    <Text note style={{ textAlign: "left", marginTop: 10 }}>
                      {getAddress(item)}
                    </Text>
                    <View style={{ marginTop: 10 }}>
                      <Icon
                        style={{
                          fontSize: 12
                        }}
                        name="md-phone-portrait"
                      >
                        {" "}
                        <Text
                          note
                          style={{ marginLeft: 10, position: "relative" }}
                        >
                          {item.phone}
                        </Text>
                      </Icon>
                    </View>
                  </View>
                </View>
              </ListItem>
            );
          }}
        />
      </List>
    );
  }
}
