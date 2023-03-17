import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutPage } from "./about/About";
import { ContactPage } from "./contact/Contact";
import { HomePage } from "./home/HomePage";
import { MediaPage } from "./media/Media";
import { ProjectsPage } from "./projects/Projects";


function App() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage/> } />
      <Route path="/media" element={<MediaPage/> } />
      <Route path="/projects" element={<ProjectsPage/> } />
      <Route path="/contact" element={<ContactPage/> } />
      <Route path="/about-me" element={<AboutPage/> } />
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