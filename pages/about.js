import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";

function about() {
  return (
    <BaseLayout>
      <BasePage className="about-page">
        <h1>I am About page</h1>
      </BasePage>
    </BaseLayout>
  );
}

export default about;
