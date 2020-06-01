import React from "react";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId:
          "990499559164-r54p1l5b1f41f4blsco89jv76ouug7nv.apps.googleusercontent.com",
        scope: "email",
      });
    });
  }

  render() {
    return <div>Google Auth</div>;
  }
}

export default GoogleAuth;
