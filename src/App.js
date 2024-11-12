import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Sidebar from "./Sidebar";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Header />
        <div className="contents">
          <Routes>
            <Route exact path="/" element={<Main />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
