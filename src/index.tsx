import { render } from "preact";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const App = () => {
  return <h1>Hello World Test</h1>;
};

render(App, document.getElementById("app"));
