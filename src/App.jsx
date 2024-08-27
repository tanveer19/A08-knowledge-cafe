import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs";
import Text from "./components/Text/Text";

function App() {
  return (
    <div>
      <div className="header m-auto mb-3">
        <Header></Header>
      </div>
      <div className="row">
        <div className="">
          <Blogs></Blogs>
          <Text></Text>
        </div>
        <div className="">
          <ToastContainer></ToastContainer>
        </div>
      </div>
    </div>
  );
}

export default App;
