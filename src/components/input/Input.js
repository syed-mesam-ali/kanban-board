import React, { useState } from "react";
import "./Input.css";
import { connect } from "react-redux";
import { addToBoard } from "../../action";
import { toast } from "react-toastify";

function Input({ addToBoard }) {
  const [input, setInput] = useState("");
  function submitData() {
    // action creator is called to add new data
    addToBoard(input);
    setInput("");
    toast("New Card Added!");
  }
  return (
    <div className="inputDiv">
      <input
        className="form-control inputBox"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter the text"
      />
      <button type="text" className="btn btn-primary" onClick={submitData}>
        Add
      </button>
    </div>
  );
}

export default connect(null, { addToBoard })(Input);
