import "./App.css";

import NavWrapper from "./components/shared/Wrapper/NavWrapper";
import AboutPage from "./Pages/AboutPage/AboutPage";
import HomePage from "./Pages/HomePage/HomePage";

function App() {
  return (
    <>
      <NavWrapper />
      <HomePage />
      <AboutPage />
      
    </>
  );
}

export default App;
