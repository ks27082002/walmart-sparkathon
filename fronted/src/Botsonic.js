import React, { Component } from "react";

class BotsonicChat extends Component {
  componentDidMount() {
    (function (w, d, s, o, f, js, fjs) {
      if (!w[o]) {
        w[o] = function () {
          (w[o].q = w[o].q || []).push(arguments);
        };
      }
      js = d.createElement(s);
      fjs = d.getElementsByTagName(s)[0];
      js.id = o;
      js.src = f;
      js.async = 1;
      fjs.parentNode.insertBefore(js, fjs);
    })(window, document, "script", "Botsonic", "https://widget.botsonic.com/CDN/botsonic.min.js");

    if (window.Botsonic) {
      window.Botsonic("init", {
        serviceBaseUrl: "https://api-azure.botsonic.ai",
        token: "57934222-4e24-4d9a-bf92-9b6c7a48bfe1",
      });
    }
  }

  render() {
    return <div></div>;
  }
}

export default BotsonicChat;
