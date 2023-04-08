import style from "./Navbar.module.css";
import { BiShoppingBag, BiUser } from "react-icons/bi";

export default function Options() {
    return (
        <div className={style.options}>
            <div className={style.option}>
                <BiShoppingBag />
                <p>My Cart</p>
            </div>
            <div className={style.option}>
                <BiUser />
                <p>Account</p>
            </div>
        </div>
    );
}