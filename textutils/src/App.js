import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import TextForm from "./components/TextForm";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Corrected import statement
import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light");

  const changeMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navigation SiteName="TextUtils" mode={mode} changeMode={changeMode} />
        <div
          style={{
            backgroundColor: mode === "dark" ? "#212529" : "white",
            color: mode === "dark" ? "white" : "black",
            minHeight: "100vh", // Corrected height to minHeight and changed 100vw to 100vh
          }}
        >
          <Routes>
            <Route
              path="/"
              element={
                <TextForm
                  Heading="Enter the Text Below to Analyze"
                  mode={mode}
                  changeMode={changeMode}
                />
              }
            />
            <Route path="/AboutUs" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;