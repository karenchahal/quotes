import React from "react";

const Quotes = props => {
  return <div>{props.data ? props.data.quote : "No quotes available"}</div>;
};

export default Quotes;
