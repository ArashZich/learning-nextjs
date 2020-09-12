import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";

import axios from "axios";
import Link from "next/link";

function Portfolios(props) {
  const { posts } = props;

  const renderPosts = () => {
    return posts.map((post) => {
      return (
        <li key={post.id}>
          <Link as={`/portfolio/${post.id}`} href={`/portfolio?id=${post.id}`}>
            <a style={{ fontSize: "20px" }}> {post.title} </a>
          </Link>
        </li>
      );
    });
  };

  return (
    <BaseLayout>
      <BasePage>
        <h1>I am Portfolios page</h1>
        <ul>{renderPosts()}</ul>
      </BasePage>
    </BaseLayout>
  );
}

Portfolios.getInitialProps = async () => {
  let posts = {};
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    posts = response.data;
  } catch (err) {
    console.error(err);
  }
  return { posts: posts.splice(0, 10) };
};

export default Portfolios;
