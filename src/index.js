import { helloWorld } from "./js/hello-world";
import "./scss/index.scss";

const main = () => {
  const test = document.getElementById("test");
  test.innerHTML = helloWorld();
};

main();
