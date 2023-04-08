import BlockLevel from "@/components/blockLevel";
import Button from "@/components/button";
import Flex from "@/components/flex";
import PostBox from "@/components/PostBox";
import ProductBox from "@/components/productBox";
import PromotionBox from "@/components/promotionBox";
import SideBar from "@/components/sidebar";
import style from "../styles/Home.module.css"

const Index = () => {
  const posts = [
    {
      title: "My First Post",
      description: "Some description for the current post about the store and his articles",
      imageURL: "https://th.bing.com/th/id/OIG.6wE_Ksh_bcJs6j.fKYcG?pid=ImgGn",
      id: 1
    },
    {
      title: "My Second Post",
      description: "Some description for the current post about the store and his articles",
      imageURL: "https://th.bing.com/th/id/OIG.QOTE4RHT1RRSpyNpx7kk?pid=ImgGn",
      id: 2 
    },
    {
      title: "My Third Post",
      description: "Some description for the current post about the store and his articles",
      imageURL: "https://th.bing.com/th/id/OIG._QAq3aCH0c6TxgPTMfvz?pid=ImgGn",
      id: 3
    },
  ]

  return (
    <div className={style.home}>
      <div className={style.main}>
        <div className={style.content}>
          <div className={style.hero}>
            <div className={style.heroContent}>
              <h1>Some Amaizing Title</h1>
              <p>lorem ipsum dolor sit amet consectetur</p>
              <Button label="Something" href="#" outlined={true} />
            </div>
          </div>
          <Flex>
            <ProductBox
              name="Black Shirt"
              description="¡A nice shirt!"
              price="$20"
              rating={5}
              image="https://media.discordapp.net/attachments/835918308166336545/1088611684777730058/e885d341-42cf-45d4-a02b-4e03452b1eef.jpg?width=448&height=448"
            />
            <PromotionBox
              firstTitle="50%"
              secondTitle="OFF this week"
              description="Don't miss this amazing opportunity to save big on your favorite products! For a limited time only, you can get 50% off everything in our store. Whether you're looking for clothes, accessories, electronics, or home goods, you'll find something you love at a fraction of the price. Hurry up and shop now before this offer expires!"
              buttonLabel="Shop Now"
              buttonHref="#"
            />
            <ProductBox
              name="Black Pant"
              description="¡A nice Pant!"
              price="$15"
              rating={3}
              image="https://media.discordapp.net/attachments/835918308166336545/1088614152869777498/7ba717ea-da79-46e8-b04f-5aa7dab07db7.jpg?width=448&height=448"
            />
            <ProductBox
              name="Black Shoe"
              description="¡A nice Shoe!"
              price="$25"
              rating={4.5}
              image="https://media.discordapp.net/attachments/835918308166336545/1088611684983246948/04d13207-4721-470c-8130-ff10be2e39a4.jpg?width=448&height=448"
            />
            <ProductBox
              name="Black Jacket"
              description="¡A nice jacket!"
              price="$30"
              rating={4}
              image="https://media.discordapp.net/attachments/835918308166336545/1088611685184569467/3deebac0-bfa1-40d6-abd1-780e2f6b6b83.jpg?width=448&height=448"
            />
          </Flex>
        </div>
        <SideBar />
      </div>
      <BlockLevel title="Deals of the day" description="Don't lose this unique opportunity">
       <Flex>
          <ProductBox
            name="Black Cap"
            description="¡A nice cap!"
            price="$10"
            rating={3}
            image="https://media.discordapp.net/attachments/835918308166336545/1088611685406875768/60d016ce-7088-41e2-b777-cc92d1188bda.jpg?width=448&height=448"
          />
          <ProductBox
            name="Black dress"
            description="¡A nice dress!"
            price="$30"
            rating={4.5}
            image="https://media.discordapp.net/attachments/835918308166336545/1088611685595615336/b061a4a3-3f01-40f1-ac2e-77201eb1a6a8.jpg?width=448&height=448"
          />
          <ProductBox
            name="Black dress"
            description="¡A nice dress!"
            price="$30"
            rating={4.5}
            image="https://media.discordapp.net/attachments/835918308166336545/1088611685595615336/b061a4a3-3f01-40f1-ac2e-77201eb1a6a8.jpg?width=448&height=448"
          />
        </Flex>
      </BlockLevel>
      <div className={style.container}>
        <PostBox posts={posts}/>
      </div>
    </div>
  );
}

export default Index;
