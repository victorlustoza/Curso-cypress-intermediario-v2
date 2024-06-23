import './gui_commands'
import './api_commands'
import './cli_commands'
import 'cypress-plugin-api'

const app = window.top;
if (!app.document.head.querySelector("[data-hide-command-log-request]")) {
  const style = app.document.createElement("style");
  style.innerHTML = `
  .command-name-request,
  .command-name-xhr,
  .command-name-page-load,
  .command-name-new-url,
  .command-name-page-load-start,
  .command-name-page-load-end {
  display: none;
  }
  .command-method::before {
  content: none !important;
  background-color: red;
  }
  .command-method {
  background-color: #e37100;
  color: white;
  border-radius: 3px;
  padding: 3px 5px;
  }
  .command-method span {
  color: white;
  }
  .reporter .command-name-assert .command-state-passed .command-method span {
  background-color: unset !important;
  color: white !important;
  }
  .reporter .command-name-assert .command-state-passed .command-method {
    background-color: #399100;
}
  `;
  style.setAttribute("data-hide-command-log-request", "");
  app.document.head.appendChild(style);
}