import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import { withRouter } from "next/router";

function Portfolio(props) {
  return (
    <BaseLayout>
      <h1>I am Portfolio page</h1>
      <h2>{props.router.query.title}</h2>
    </BaseLayout>
  );
}

export default withRouter(Portfolio);
