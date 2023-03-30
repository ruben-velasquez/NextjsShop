import style from "../../styles/Blocklevel.module.css";

export default function BlockLevel({ title, description, children }) {
    return (
    <div className={style.blockLevel}>
        <div className={style.blockLevelTitle}>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
        <div className={style.blockLevelContent}>
            {children}
        </div>
    </div>
    )
}