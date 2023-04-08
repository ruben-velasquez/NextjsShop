import style from "./Footer.module.css"
import FooterElement from "./FooterElement"
import FooterTitle from "./FooterTitle"
import NewsletterBox from "./newsletterbox"

export default function Footer() {
    return (
        <footer className={style.footer}>
            <div className={style.content}>
                <FooterTitle 
                    title="Title"
                    description="My description about the webpage"
                />
                <FooterElement>
                    <h1>Shop</h1>
                    <p>Top Products</p>
                    <p>Top Sellers</p>
                    <p>Discounts</p>
                </FooterElement>
                <FooterElement>
                    <h1>Company</h1>
                    <p>Blog</p>
                    <p>Contact Us</p>
                    <p>FAQ</p>
                </FooterElement>
                <FooterElement>
                    <h1>My Account</h1>
                    <p>Account</p>
                    <p>On Cart</p>
                    <p>Sign out</p>
                </FooterElement>
                <FooterElement>
                    <h1>Newsletter</h1>
                    <NewsletterBox />
                    <p>Subscribe on the newstler to recieve all the new information about us</p>
                </FooterElement>
            </div>
            <div className={style.copyright}>
                <p>PasteRight 2077. Any Rights Reserved</p>
            </div>
        </footer>
    )
} 