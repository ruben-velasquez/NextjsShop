import style from "../../styles/Button.module.css";

export default function Button({ label, href="", black=false }) {
    const styles = black ? [style.button, style.black] : [style.button]

    return (
        <a className={styles.join(" ")}>
            {label}
        </a>
    )
}
