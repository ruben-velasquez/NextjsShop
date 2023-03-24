import style from "../../styles/Button.module.css";

export default function Button({ label, href }) {
    return (
        <a className={style.button}>
            {label}
        </a>
    )
}
