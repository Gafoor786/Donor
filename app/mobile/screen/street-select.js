import React, { Component } from "react";
import { Content } from "native-base";

import AppContainer from "../components/app-container";
import StreetList from "../components/street-list";

export default class StreetSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ""
    };
  }

  render() {
    return (
      <AppContainer
        key="14"
        title="Streets"
        showDrawer={false}
        showSearch
        onSearchTextChange={text => {
          this.setState({ searchText: text });
        }}
        {...this.props}
      >
        <Content style={{ padding: 0 }}>
          <StreetList
            searchText={this.state.searchText}
            onSelect={item => {
              this.props.navigation.state.params.onSelect(item);
              this.props.navigation.goBack();
            }}
          />
        </Content>
      </AppContainer>
    );
  }
}
