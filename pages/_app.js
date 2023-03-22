import React from "react";
import App, { Container } from "next/app";
import { DynamicContextProvider } from "@dynamic-labs/sdk-react";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return {
      title: "Welcome!",
      pageProps
    };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <DynamicContextProvider
        settings={{
          environmentId: process.env.NEXT_PUBLIC_DYNAMIC_ENV_ID,
          privacyPolicyUrl: "https://example.com/policies/privacy-policy",
          termsOfServiceUrl: "https://example.com/policies/terms-of-service"
        }}
      >
        <Container>
          <h1>{this.props.title}</h1>
          <Component {...pageProps} />
        </Container>
      </DynamicContextProvider>
    );
  }
}

export default MyApp;
