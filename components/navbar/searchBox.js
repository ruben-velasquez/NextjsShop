import style from "./Navbar.module.css";
import { BiSearch } from "react-icons/bi";

export default function SearchBox() {
    return (
        <div className={style.searchBox}>
            <input type="text" placeholder="Search" />
            <a className={style.icon} href="#">
                <BiSearch />
            </a>
        </div>
    )
}