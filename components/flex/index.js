import style from "../../styles/Flex.module.css"

export default function Flex({ children }) {
    return (
        <div className={style.flex}>
            {children}
        </div>
    )
}