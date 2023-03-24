import Button from "@/components/button";
import SideBar from "@/components/sidebar";
import style from "../styles/Home.module.css"

const Index = () => {
  return (
    <div className={style.home}>
      <SideBar />
      <div className={style.content}>
        <div className={style.hero}>
          <div className={style.heroContent}>
            <h1>Some Amaizing Title</h1>
            <p>lorem ipsum dolor sit amet consectetur</p>
            <Button label="Something" href="#" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
