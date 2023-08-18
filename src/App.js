import { useState } from "react";
import "./App.css";
//import Student from './components/Student';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import About from "./components/About";

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  const toggleRedMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#900C3F";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    // <Router>
      <>
      <Navbar
        title="TextUtils"
        home="About"
        mode={mode}
        toggleMode={toggleMode}
        toggleRedMode={toggleRedMode}
      />
      <Alert alert={alert} />
      <div className="container mb-3" mode={mode}>
        {/* <Routes> */}
          {/* <Route path="/about" element={<About />} />
          <Route
            path="/"
            element={ */}
              <TextForm
                showAlert={showAlert}
                heading="Enter your text here to analyze"
              />
          f
          
        {/* </Routes> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
