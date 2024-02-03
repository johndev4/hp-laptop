import React, { useState } from "react";
import viteLogo from "/vite.svg";
import loadingGif from "./assets/loading.gif";
import hpComponents from "./assets/hp-bf064tx/components.png";
import hpCover from "./assets/hp-bf064tx/cover.png";
import "./App.css";

function App() {
  var imgCover = React.createRef();

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h1 className="hp-model-name mt-4">HP Pavilion bf064tx</h1>
            <div className="slider-container">
              <br />
              <input
                type="range"
                id="slider"
                defaultValue={100}
                style={{ width: "30%" }}
                onInput={(ev) =>
                  (imgCover.current.style.opacity = `${ev.nativeEvent.target.value}%`)
                }
              />
            </div>
            {hpComponents && hpComponents ? (
              <div className="img-laptop-container">
                <img
                  src={hpComponents}
                  alt="components"
                  id="img-components"
                  className="img-laptop"
                />
                <img
                  src={hpCover}
                  alt="cover"
                  id="img-cover"
                  className="img-laptop"
                  ref={imgCover}
                />
              </div>
            ) : (
              <div className="gif-loading-container">
                <img src={loadingGif} alt="loading" id="gif-loading" />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
