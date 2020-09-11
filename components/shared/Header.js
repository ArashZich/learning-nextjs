import React from "react";
import Link from "next/link";

function Header() {
  return (
    <React.Fragment>
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
