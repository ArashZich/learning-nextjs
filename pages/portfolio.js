import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import { withRouter } from "next/router";
import axios from "axios";

function Portfolio(props) {
  const { portfolio } = props;
  return (
    <BaseLayout>
      <h1> {portfolio.title} </h1>
      <p> Body: {portfolio.body} </p>
      <p> ID: {portfolio.id} </p>
    </BaseLayout>
  );
}

Portfolio.getInitialProps = async ({ query }) => {
  const portfolioId = query.id;
  let portfolio = {};
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${portfolioId}`
    );
    portfolio = response.data;
  } catch (err) {
    console.error(err);
  }
  return { portfolio };
};

export default withRouter(Portfolio);
