import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import axios from "axios";

function index(props) {
  const { initialProps, userData } = props;
  return (
    <BaseLayout>
      <h1>I am Index page</h1>
      <h2>{userData.title}</h2>
    </BaseLayout>
  );
}

index.getInitialProps = async () => {
  let userData = {};
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    userData = response.data;
  } catch (err) {
    console.error(err);
  }
  return { initialProps: [1, 2, 3, 4], userData };
};

export default index;
