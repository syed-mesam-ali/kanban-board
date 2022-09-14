import axios from "axios";

export default axios.create({
  baseURL: "https://kanban-board-server-syed.herokuapp.com/",
});
