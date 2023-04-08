import style from "./Footer.module.css"

export default function FooterElement({children}) {
  return (
    <div className={style.footerElement}>
        {children}
    </div>
  )
}
