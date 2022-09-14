import React from "react";
import Navlink from "./navlink";
import ProfileImg from "../ProfileImg"

// import {ReactComponent as SearchIcon} from "../../img/svg/search.svg";

export default function Toolbar() {
    const logo = "../../../public/logo192.png"

    const toolbarLinks = {
        home: "Home",
        messaging: "Messaging",
        notifications: "Notifications",
    }

    return (
        <nav className="toolbar">
            <div className="rightSide">
                <img src={logo} alt={"logo"} />
                <form className="search">
                    <button className="btn btn-search">
                        {/* <SearchIcon width={"40px"} height={"40px"} /> */}
                        {/* <svg className="search-icon">
                            <use xlink:href="../img/svg/sprites.svg#icon-search"></use>
                        </svg> */}
                    </button>
                    <input type="text" className="search-input" placeholder="Search"></input>
                </form>
            </div>
            <div className="leftSide">
                <Navlink text={toolbarLinks.home} />
                <Navlink text={toolbarLinks.messaging} />
                <Navlink text={toolbarLinks.notifications} />
                <ProfileImg img={"../../img/profileImgPlaceholder.jpg"} />
            </div>
        </nav>
    )
}
