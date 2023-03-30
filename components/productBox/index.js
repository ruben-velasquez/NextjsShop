import Image from 'next/legacy/image'
import ReactStars from "react-stars"
import style from "../../styles/Productbox.module.css"

export default function ProductBox({ name, description, image, price, rating }) {
    return (
        <div className={style.productBox}>
            <div className={style.productImage}>
                <Image width={500} height={500} layout="responsive" src={image} alt="Product" />
            </div>
            <div className={style.productInfo}>
                <h2>{name}</h2>
                <p>{description}</p>
                <div className={style.productFooter}>
                    <h3>{price}</h3>
                    <ReactStars
                        count={5}
                        value={rating}
                        edit={false}
                        size={24} />
                </div>
            </div>
        </div>
    )
}
