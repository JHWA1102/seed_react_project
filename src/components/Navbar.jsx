import { useNavigate } from "react-router-dom";
import { menuItemsData } from "../menuItemsData"
import MenuItems from "./MenuItems";
import { useState } from "react";

const Navbar = () => {
    const depthLevel = 0;
    const navigate = useNavigate();
    const [token, setToken] = useState();
    const navigateToLogin = () => {
        if(!token) {
            navigate("/login");
        } else {
            navigate("/mypage");
        }
    };

    return (
        <nav className="desktop-nav" style={{marginLeft : "200px"}}>
            <ul className="menus">
                {menuItemsData.map((menu, index) => {
                    return <MenuItems items={menu} key={index} depthLevel={depthLevel}/>;
                })}
                <img src={`${process.env.PUBLIC_URL}/assets/img3.png`} style={{width : "20px", height : "20px", margin: "8px 0px 0px 2px"}}></img>
                <img src={`${process.env.PUBLIC_URL}/assets/img7.png`} style={{width : "40px", height : "30px", margin: "8px 0px 0px 600px" }} onClick={navigateToLogin}></img>
            </ul>
        </nav>
    );
};

export default Navbar;