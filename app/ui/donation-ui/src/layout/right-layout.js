import React from "react";
import { Link } from "react-router-dom";

export const RightLayout = props => {
  return (
    <div>
      {props.title ? (
        <div className="page-title">
          <div className="title_left">
            <h3>{props.title}</h3>
          </div>
          {props.linkTo ? (
            <div className="title_right">
              <Link to={props.linkTo} className="btn btn-info pull-right">
                {props.linkText}
              </Link>
            </div>
          ) : null}
        </div>
      ) : null}
      <div className="clearfix" />
      {props.searchBox ? props.searchBox : null}
      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <div className="x_panel">
            <div className="x_content">{props.children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
