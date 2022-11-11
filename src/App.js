import { BrowserRouter, Route, Routes } from "react-router-dom";
import BusinessNews from "./components/Data/BusinessNews";
import EntertainmentNews from "./components/Data/EntertainmentNews";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/business" element={<BusinessNews />} />
        <Route exact path="/entertainment" element={<EntertainmentNews />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
