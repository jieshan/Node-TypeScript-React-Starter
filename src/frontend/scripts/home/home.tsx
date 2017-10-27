import * as $ from "jquery";
import * as React from "react";
import * as ReactDOM from "react-dom";

/**
 * Kickstart the page on window ready
 */
$(document).ready(() => {
    const container = $(".pageContainer").first();

    ReactDOM.render(
        <div>Hello, world!</div>,
        container[0]
    );
});
