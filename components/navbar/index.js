import style from "../../styles/Navbar.module.css";
import Options from "./options";
import SearchBox from "./searchBox";

export default function Navbar() {
    return (
        <nav className={style.nav}>
            <div className={style.title}>
                <h1>Título</h1>
        </div>
        <div>
            <SearchBox />
        </div>
        <div>
            <Options />
        </div>
        </nav>
    )
}