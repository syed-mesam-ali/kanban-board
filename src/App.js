import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Input from "./components/input/Input";
import Board from "./components/board/Board";
import { connect } from "react-redux";
import { getBoardData } from "./action";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App({ getBoardData, data }) {
  const stage = [0, 1, 2, 3];
  useEffect(() => {
    getBoardData();
  }, []);
  function getCurrentStageData(stageId) {
    const response = data.filter((x) => x.stage == stageId);
    return response;
  }
  return (
    <div>
      <div className="textColor">
        <Header />
        <Input />
        <div className="row">
          {stage.map((item) => (
            <div className="col-lg-3" key={item}>
              <Board stageId={item} stageData={getCurrentStageData(item)} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
const mapStateToProps = (state) => {
  return { data: state.data };
};
export default connect(mapStateToProps, {
  getBoardData,
})(App);
