import Image from 'next/legacy/image'
import style from '../../styles/PostBox.module.css'
import Button from '../button'

export default function Post({ image: imageURL, title, description, date }) {
  return (
    <div className={style.post}>
        <div className={style.image}>
            <Image width={100} height={80} layout="responsive" src={imageURL} alt="Post Image" />
        </div>
        
        <h3 className={style.title}>{title}</h3>
        <p>{description}</p>
        <Button label="Learn More" black={true}/>
    </div>
  )
}
