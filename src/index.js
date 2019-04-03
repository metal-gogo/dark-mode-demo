import React from "react";
import ReactDOM from "react-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "./styles.scss";
import "react-lazy-load-image-component/src/effects/blur.css";

import PlayIcon from "./icons/Play";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <LazyLoadImage
        alt="Portada de las mil y una noches"
        height="256"
        src="https://images.findawayworld.com/v1/image/cover/CD254573?width=768&height=768"
        width="256"
        effect="blur"
        className="cover-image"
      />
      <PlayIcon className="icon-play" width={56} />
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
