import React from "react";
import Header from "../shared/Header";
function BaseLayout(props) {
  const { children } = props;
  return (
    <React.Fragment>
      <Header /> {children}
    </React.Fragment>
  );
}

export default BaseLayout;
