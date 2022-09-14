import Api from "../api/Api";

// api call to get latest data for board
export const getBoardData = () => {
  return async function (dispatch, getState) {
    const response = await Api.get("/kanban");
    dispatch({ type: "GET_DATA", payload: response.data });
  };
};

// api call to add new card data
export const addToBoard = (text) => {
  return async function (dispatch, getState) {
    const data = {
      id: new Date().getTime(),
      text: text,
      stage: 0,
    };
    await Api.post("/kanban", data);
    dispatch(getBoardData());
  };
};

// api call to update the stage of a card
export const updateStage = (id, stageType) => {
  return async function (dispatch, getState) {
    let cardData = getState().data.filter((item) => item.id === id);
    if (stageType == "next") {
      cardData[0].stage = cardData[0].stage + 1;
    } else {
      cardData[0].stage = cardData[0].stage - 1;
    }
    await Api.put(`/kanban/${id}`, cardData[0]);
    dispatch(getBoardData());
  };
};

// api call to delete a card from board
export const deleteCard = (id) => {
  return async function (dispatch, getState) {
    await Api.delete(`/kanban/${id}`);
    dispatch(getBoardData());
  };
};
