import style from "../../styles/Navbar.module.css";
import { BiShoppingBag, AiOutlineUser } from "react-icons/bi";

export default function Options() {
    return (
        <div className={style.options}>
            <div className={style.option}>
                <BiShoppingBag />
                <p>My Cart</p>
            </div>
            <div className={style.option}>
                <AiOutlineUser />
                <p>Account</p>
            </div>
        </div>
    );
}
