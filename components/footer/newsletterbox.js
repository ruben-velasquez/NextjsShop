import style from './Footer.module.css'

export default function NewsletterBox() {
  return (
    <div className={style.newsletterBox}>
        <div className={style.inputBox}>
            <input type="email" placeholder='example@email.com' />
        </div>
        <div className={style.buttonBox}>
            <button>
                <p>Submit</p>
            </button>
        </div>
    </div>
  )
}
