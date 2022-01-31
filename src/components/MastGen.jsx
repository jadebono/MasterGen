import React, { useState } from "react";
import sha256 from "sha256";

function crunch(phra, dpth = false) {
  phra = sha256(phra, { asBytes: true });
  return phra;
}

function toHexString(byteArray) {
  return byteArray.reduce(
    (output, elem) => output + ("0" + elem.toString(16)).slice(-2),
    ""
  );
}

export default function MastGen() {
  const [vars, setVars] = useState({ phrase: "", depth: "" });
  const [mst, setMst] = useState("");

  function updateVars(event) {
    let { name, value } = event.target;
    setVars((prevVars) => {
      return {
        ...prevVars,
        [name]: value,
      };
    });
  }

  function submitVars(event) {
    event.preventDefault();
    let { phrase, depth } = vars;
    // validation of depth, if not a number, set to 0, otherwise round to the nearest integer
    if (isNaN(depth)) {
      depth = 0;
    } else {
      depth = Math.round(depth);
    }
    let hashedByeArray = "";
    let dpth = depth <= 1 || !depth ? 0 : (depth -= 1);
    while (dpth >= 0) {
      hashedByeArray = crunch(phrase);
      phrase = toHexString(hashedByeArray);
      dpth--;
    }
    setMst(phrase);
  }

  return (
    <React.Fragment>
      <div>
        <form>
          <div className="d-flex justify-content-center">
            <div className="mb-3 w-50">
              <label htmlFor="inputPhrase" className="form-label">
                Enter your phrase here:
              </label>
              <input
                type="password"
                className="form-control"
                paceholder="Enter your text here"
                name="phrase"
                value={vars.phrase}
                onChange={updateVars}
              />
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="mb-3 ">
              <label htmlFor="inputDepth" className="form-label">
                Enter your depth here:
              </label>
              <input
                type="password"
                className="form-control"
                name="depth"
                value={vars.depth}
                onChange={updateVars}
              />
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={submitVars}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <h4 className="text-center text-primary my-5">
        Your master password is:
      </h4>
      <h4 className="text-center text-danger mt-5">{mst}</h4>
    </React.Fragment>
  );
}
