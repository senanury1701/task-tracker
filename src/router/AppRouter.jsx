import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import index from "../pages/index";
import CardDetail from "../pages/Detail";
const AppRouter = () => {
    return(
        <BrowserRouter>
            <Navbar/>
            <Routes >
                <Route path="/" element={index}>
                    <Route path="/:id" element={<CardDetail />} />
                </Route>
            </Routes>

            <Footer/>
        </BrowserRouter>
    )
}
export default AppRouter