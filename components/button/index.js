import style from "./Button.module.css";

export default function Button({ label, href="", black=false, outlined=false }) {
    let styles = black ? [style.button, style.black] : [style.button]
    styles = outlined ? [style.button, , style.outlined] : styles

    return (
        <a className={styles.join(" ")}>
            {label}
        </a>
    )
}
