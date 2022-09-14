import React from "react";
import "./Card.css";
import { connect } from "react-redux";
import { updateStage } from "../../action";
import { deleteCard } from "../../action";
import { toast } from "react-toastify";

function Card({ cardTitle, id, updateStage, stageId, deleteCard }) {
  function updateTheStage(stageType) {
    updateStage(id, stageType);
    toast("Stage Updated!");
  }
  return (
    <div className="card">
      <h4 className="cardTitle">{cardTitle}</h4>
      <div className="cardButton">
        <button
          className={"backButton btn btn-xs btn-primary "}
          disabled={stageId === 0 ? "disabled" : ""}
          onClick={() => updateTheStage("back")}
          title="Previous Stage"
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button
          className={"deleteButton btn btn-xs btn-danger "}
          onClick={() => {
            deleteCard(id);
            toast("Card Deleted!");
          }}
          title={"Delete Card"}
        >
          <i className="fa-solid fa-trash"></i>
        </button>
        <button
          className={"nextButton btn btn-xs btn-primary "}
          disabled={stageId === 3 ? "disabled" : ""}
          onClick={() => updateTheStage("next")}
          title={"Next Stage"}
        >
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

export default connect(null, { updateStage, deleteCard })(Card);
