import style from "../../styles/Sidebar.module.css"

export default function PageButton({ name, url }) {
    return (
        <a className={style.pageButton} href={url}>
            {name}
        </a>
    )
}