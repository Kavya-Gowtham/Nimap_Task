import React from "react";
import "./Home.css";

function BlockInfo() {
  return (
    <div>
      <p className="info">
        This form has the default HTML form behavior of browsing to a new page
        when the user submits the form. If you want this behavior in React, it
        just works. But in most cases, it’s convenient to have a JavaScript
        function that handles the submission of the form and has access to the
        data that the user entered into the form. The standard way to achieve
        this is with a technique called “controlled components”. This form has
        the default HTML form behavior of browsing to a new page when the user
        submits the form. If you want this behavior in React, it just works. But
        in most cases, it’s convenient to have a JavaScript function that
        handles the submission of the form and has access to the data that the
        user entered into the form. The standard way to achieve this is with a
        technique called “controlled components”. This form has the default HTML
        form behavior of browsing to a new page when the user submits the form.
        If you want this behavior in React, it just works. But in most cases,
        it’s convenient to have a JavaScript function that handles the
        submission of the form and has access to the data that the user entered
        into the form. The standard way to achieve this is with a technique
        called “controlled components”.
      </p>
      <h3 className="note">
        NOTE: Here should be the text related to selected dropdown option.
      </h3>
    </div>
  );
}
export default BlockInfo;
