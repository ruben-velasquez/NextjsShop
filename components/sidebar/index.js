import style from "./Sidebar.module.css"
import PageButton from "./pageButon"
import Section from "./section"

export default function SideBar() {
    return (
        <div className={style.sidebar}>
            <Section name="Menu">
                <PageButton name="Home" url="#"/>
                <PageButton name="About" url="#"/>
                <PageButton name="New" url="#"/>
                <PageButton name="Delivery" url="#"/>
                <PageButton name="Contact" url="#"/>
            </Section>
            <Section name="Categories">
                <PageButton name="Men" url="#"/>
                <PageButton name="Women" url="#"/>
                <PageButton name="Kids" url="#"/>
                <PageButton name="Tecnology" url="#"/>
            </Section>
        </div>
    )
}