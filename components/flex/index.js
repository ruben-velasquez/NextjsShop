import style from "./Flex.module.css"

export default function Flex({ children }) {
    return (
        <div className={style.flex}>
            {children}
        </div>
    )
}