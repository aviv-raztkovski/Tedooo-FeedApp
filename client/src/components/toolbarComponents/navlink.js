import { Link } from "react-router-dom"; // eslint-disable-line

export default function Navlink({ text }) {
    return (
        // <Link to={"#"} className="navlink">
        //     {/* <svg className="search-icon">
        //             <use xlink:href="../img/svg/sprites.svg#icon-search"></use>
        //         </svg> */}
        //     <h2 className="navlink-text">{text}</h2>
        // </Link>
        <button className="navlink">
            <h2 className="navlink-text">{text}</h2>
        </button>
    )
}