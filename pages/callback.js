import React, { useEffect } from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import { withRouter } from "next/router";
import auth0Client from "../services/auth0";

function Callback(props) {
  const { router } = props;
  const didMount = async () => {
    await auth0Client.handleAuthentication();
    router.push("/");
  };

  useEffect(() => {
    didMount();
  }, []);

  return (
    <BaseLayout>
      <BasePage>
        <h1> Verifying login data ... </h1>
      </BasePage>
    </BaseLayout>
  );
}

export default withRouter(Callback);
