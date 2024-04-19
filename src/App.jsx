import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Countries from "./components/Countries";
import { ShowProvider } from "./components/ShowProvider";

function App() {
  return (
    <>
      <BrowserRouter>
        <ShowProvider>
          <Header />
          <div className="content">
            <div className="menu">
              <Menu />
            </div>
            <div className="routes">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/countries" element={<Countries />} />
              </Routes>
            </div>
          </div>
        </ShowProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
