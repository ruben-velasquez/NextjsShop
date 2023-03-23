import SideBar from "@/components/sidebar";
import style from "../styles/Home.module.css"

const Index = () => {
  return (
    <div className={style.home}>
      <SideBar />
      <div className={content}>
        <div className={style.hero}>
          <div className={style.heroContent}>
              <h1>Something...</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
