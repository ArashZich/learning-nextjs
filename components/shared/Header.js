import React from "react";
import Link from "next/link";
import "../../styles/main.scss";

function Header(props) {
  const { title, children } = props;
  return (
    <React.Fragment>
      <p> {title} </p>
      {children}
      <p className="customClass">I am styled P element</p>
      <p className="customClassFromFile">I am styled P element</p>

      <Link href="/">
        <a> Home </a>
      </Link>

      <Link href="/about">
        <a> About </a>
      </Link>

      <Link href="/portfolios">
        <a> Portfolios </a>
      </Link>

      <Link href="/blogs">
        <a> Blogs </a>
      </Link>

      <Link href="/cv">
        <a> CV </a>
      </Link>

      <style global jsx>{`
        a {
          font-size: 20px;
        }
        .customClass {
          color: red;
        }
      `}</style>
    </React.Fragment>
  );
}

export default Header;
