import { createRef } from "react";
import loadingGif from "./assets/loading.gif";
import hpComponents from "./assets/hp-bf064tx/components.png";
import hpCover from "./assets/hp-bf064tx/cover.png";
import "./App.css";

function App() {
  var laptopCoverRef = createRef();
  var laptopComponentsRef = createRef();
  var loadingContainerRef = createRef();

  const laptopImgLoaded = (ev) => {
    if (laptopComponentsRef?.current && laptopCoverRef?.current) {
      loadingContainerRef.current.style.display = "none";
    }
  };

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
                  (laptopCoverRef.current.style.opacity = `${ev.nativeEvent.target.value}%`)
                }
              />
            </div>
            <div className="gif-loading-container" ref={loadingContainerRef}>
              <img src={loadingGif} alt="loading" id="gif-loading" />
            </div>
            {hpComponents && hpCover ? (
              <div className="img-laptop-container">
                <img
                  src={hpComponents}
                  alt="components"
                  id="img-components"
                  className="img-laptop"
                  ref={laptopComponentsRef}
                  onLoad={laptopImgLoaded}
                />
                <img
                  src={hpCover}
                  alt="cover"
                  id="img-cover"
                  className="img-laptop"
                  ref={laptopCoverRef}
                  onLoad={laptopImgLoaded}
                />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
