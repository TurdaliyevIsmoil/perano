import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="signup" component={<MainPage />} />
    </Routes>
  );
}

export default App;
