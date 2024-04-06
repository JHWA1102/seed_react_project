import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            {/* <div className="nav-area">
                <Link href="/" className="logo">
                    Logo
                </Link>
            </div> */}
            <Navbar />
            <MobileNav />
        </header>
    );
};

export default Header;