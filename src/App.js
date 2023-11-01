import React, { Component } from "react";
import { exportComponentAsPNG } from "react-component-export-image";
import photo from "./images/Delegate-post_TEMP.png";
import photo_1 from "./images/RuwandiekaPeiris_SecretariatMember - m peiris.jpg";
class App extends Component {
  certificateWrapper = React.createRef();
  state = {
    Name: "",
  };
  render() {
    return (
      <div className="App">
        <div className="Meta">
          <h1>ACM Certificates</h1>
          <p>Please enter your name.</p>
          <input
            type="text"
            placeholder="Please enter your name..."
            value={this.state.Name}
            onChange={(e) => {
              this.setState({ Name: e.target.value });
            }}
          />

          <button
            onClick={(e) => {
              e.preventDefault();
              exportComponentAsPNG(this.certificateWrapper, {
                html2CanvasOptions: { backgroundColor: null },
              });
            }}
          >
            Download
          </button>
        </div>

        <div id="downloadWrapper" ref={this.certificateWrapper}>
          <div id="certificateWrapper">
            <div class="wrapperName">
              {" "}
              <p>{this.state.Name}</p>
            </div>

            <div class="pic-container pic-medium pic-circle photo-frame">
              <img class="pic" src={`${photo_1}`} alt="" />
              <div class="pic-overlay">
                <a>
                  <i class="fa fa-window-close-o" aria-hidden="true"></i>
                </a>
                <a>
                  <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <img src={`${photo}`} alt="Certificate" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
