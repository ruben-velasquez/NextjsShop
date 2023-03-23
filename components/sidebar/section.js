import style from "../../styles/Sidebar.module.css"

export default function Section({ name, children }) {
    return (
        <div className={style.section}>
            <div className={style.title}>
                <h2>{ name }</h2>
            </div>
            <div className={style.content}>
                { children }
            </div>
        </div>
    )
}