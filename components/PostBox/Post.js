import Image from 'next/image'
import style from './PostBox.module.css'
import Button from '../button'

export default function Post({ image: imageURL, title, description, date }) {
  return (
    <div className={style.post}>
        <div className={style.image}>
            <Image width={350} height={200} src={imageURL} alt="Post Image" />
        </div>

        <h3 className={style.title}>{title}</h3>
        <p>{description}</p>
        <Button black={true} outlined={true} label="Learn More"/>
    </div>
  )
}