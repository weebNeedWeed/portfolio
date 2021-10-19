import ReactDOM from "react-dom";
import img from "../assets/test.png";

const App = () => (
  <h1>
    <img src={img} alt="" />
  </h1>
);

ReactDOM.render(<App />, document.getElementById("root"));
