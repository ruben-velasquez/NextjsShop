import style from './Footer.module.css'
import { FaTwitter, FaFacebook, FaGithub } from "react-icons/fa"

export default function SocialList() {
  return (
    <div className={style.socialList}>
        <FaFacebook />
        <FaTwitter />
        <FaGithub  />
    </div>
  )
}
