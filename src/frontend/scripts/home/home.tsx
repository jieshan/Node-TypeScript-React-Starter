import * as $ from "jquery";
import * as React from "react";
import * as ReactDOM from "react-dom";

import "../../styles/home.css";

/**
 * Kickstart the page on window ready
 */
$(document).ready(() => {
    const container = $(".pageContainer").first();

    ReactDOM.render(
        <div className="helloWorld">Hello, world!</div>,
        container[0]
    );
});
