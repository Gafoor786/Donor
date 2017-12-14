import React, { Component } from "react";
import $ from "jquery";

const Menus = [
  {
    title: "Fundraising",
    icon: "fa-money",
    children: [
      {
        title: "All Fundrising"
      },
      {
        title: "Add New"
      }
    ]
  },
  {
    title: "Donors",
    icon: "fa-user-o",
    children: [
      {
        title: "All Donor"
      },
      {
        title: "Add New"
      }
    ]
  },
  {
    title: "Settings",
    icon: "fa-gear",
    children: [
      {
        title: "User"
      },
      {
        title: "Role & Permission"
      },
      {
        title: "Settings"
      }
    ]
  }
];
const SubMenu = props => {
  if (!props.items) {
    return <span />;
  }

  return (
    <ul className="nav child_menu">
      {props.items.map(item => {
        return (
          <li>
            <a href="#">{item.title}</a>
          </li>
        );
      })}
    </ul>
  );
};
const Menu = props => {
  return (
    <ul className="nav side-menu">
      {props.items.map(item => {
        return (
          <li>
            <a>
              <i className={"fa " + item.icon} /> {item.title}
              {item.children ? (
                <span className="fa fa-chevron-down" />
              ) : (
                <span />
              )}
            </a>
            <SubMenu items={item.children} />
          </li>
        );
      })}
    </ul>
  );
};

export default class Sidebar extends Component {
  bindMenuHandlers() {
    var $SIDEBAR_MENU = $("#sidebar-menu");

    $SIDEBAR_MENU.find("a").on("click", function(ev) {
      var $li = $(this).parent();

      if ($li.is(".active")) {
        $li.removeClass("active active-sm");
        $("ul:first", $li).slideUp(function() {
          //setContentHeight();
        });
      } else {
        // prevent closing menu if we are on child menu
        if (!$li.parent().is(".child_menu")) {
          $SIDEBAR_MENU.find("li").removeClass("active active-sm");
          $SIDEBAR_MENU.find("li ul").slideUp();
        }

        $li.addClass("active");

        $("ul:first", $li).slideDown(function() {
          //setContentHeight();
        });
      }
    });
  }
  componentDidMount() {
    this.bindMenuHandlers();
  }
  render() {
    return (
      <div className="col-md-3 left_col">
        <div className="left_col scroll-view">
          <div className="navbar nav_title" style={{ border: 0 }}>
            <a className="site_title">
              <span>Donation Manager</span>
            </a>
          </div>

          <div className="clearfix" />

          <div
            id="sidebar-menu"
            className="main_menu_side hidden-print main_menu"
          >
            <div className="menu_section">
              <Menu items = {Menus}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
