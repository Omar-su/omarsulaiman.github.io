import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./home/HomePage";


function App() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage/> } />
    </Routes>
  );
}

const AppWrapper = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default AppWrapper;