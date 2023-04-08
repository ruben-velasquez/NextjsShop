import Button from "../button";
import styles from './Promotionbox.module.css'

export default function PromotionBox({ firstTitle, secondTitle, description, buttonLabel, buttonHref }) {
    return (
        <div className={styles.promotionBox}>
            <div className={styles.title}>
                <h1>{firstTitle}</h1>
                <h2>{secondTitle}</h2>
            </div>
            <p>{description}</p>
            <Button label={buttonLabel} href={buttonHref} outlined={true}/>
        </div>
    )
}
