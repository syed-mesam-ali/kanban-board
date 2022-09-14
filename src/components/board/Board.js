import React from "react";
import "./Board.css";
import Card from "../card/Card";

function Board({ stageId, stageData }) {
  return (
    <div className="board">
      <h4 className="boardHeader">Stage : {stageId}</h4>
      <div className="boardBody">
        {stageData.length === 0 ? (
          <h4 className="t-a-c">No Data</h4>
        ) : (
          stageData.map((item) => (
            <Card
              key={item.id}
              cardTitle={item.text}
              id={item.id}
              stageId={stageId}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Board;
