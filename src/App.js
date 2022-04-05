import "./App.css";
import signUp from "./assets/undraw_access_account_re_8spm.svg";
import { SignUp } from "./components/SignUp.jsx";

function App() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <SignUp />
        </div>
        <div className="col-md-7">
          <img className="img-fluid w-100" src={signUp} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
