import style from "./Footer.module.css"
import SocialList from "./SocialList"

export default function FooterTitle({title, description}) {
    return (
        <div className={style.footerTitle}>
            <h1>{title}</h1>
            <p>{description}</p>
            <SocialList />
        </div>
    )
}
