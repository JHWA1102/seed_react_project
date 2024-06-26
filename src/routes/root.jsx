import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Root() {
    return (
        <div id="container">
            <Header />
            <div className="content">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}