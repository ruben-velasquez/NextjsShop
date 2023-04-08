import style from "./Sidebar.module.css"

export default function PageButton({ name, url }) {
    return (
        <a className={style.pageButton} href={url}>
            {name}
        </a>
    )
}