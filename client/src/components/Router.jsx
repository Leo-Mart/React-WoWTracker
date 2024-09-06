import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import SideMenu from "./SideMenu";
import Home from "../views/Home";
import Footer from "./Footer"
import CharacterPage from "../views/CharacterPage";
import NotFound from "../views/NotFound";
import RegisterUser from "../views/RegisterUser";


const Router = () => {
  return (
    <BrowserRouter>      
      <NavBar />
      <section className="flex">
        {/* <SideMenu /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character/:id" element={<CharacterPage />} />
          <Route path="/register" element={<RegisterUser />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </section>
      <Footer />

    
    </BrowserRouter>
  )
}
export default Router