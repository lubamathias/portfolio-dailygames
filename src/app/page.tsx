import { GameProps } from "@/utils/types/games";
import Image from "next/image";
import styles from "./page.module.css"
import { IoIosArrowDropright } from "react-icons/io";
import Link from "next/link";
import {Cards} from "@/components/cards/page"
import { Input } from "@/components/input";
import { Background } from "@/components/background";


async function getDalyGames(){
  
  try{
    const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game_day`, {next: {revalidate: 15}})
    return res.json();
  }catch(err){
    throw new Error(`Failed to fetch data`)
  }
}

async function getGamesList(){
  try {
    const response = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=games`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch, status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error(`Failed to fetch data: ${err}`);
  }
}
export default async function Home(){
  const dalyGame :GameProps = await getDalyGames();
  const gamesList :GameProps[] = await getGamesList();




  return(
    <>
      <Background/>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.dalyGame}>
            <Image
              alt="Game Picture"
              src={dalyGame.image_url}
              quality={100}
              fill={true}
              className={styles.imageDalyGame}
            />
            <div className={styles.gameTitle}>
              <h2>
                {dalyGame.title}
              </h2>
              <Link href={`/${dalyGame.title}`} className={styles.link}>
                <IoIosArrowDropright className={styles.arrow}/>
              </Link>
            </div>
          </div>

          <Input/>

          <div className={styles.cardsContainer}>
            {gamesList
            .map((item) => (
                <div className={styles.cardsCards}>
                  <Cards
                    id={item.id}
                    image_url={item.image_url}
                    title={item.title}
                  />
                </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}