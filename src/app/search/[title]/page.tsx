import { Cards } from "@/components/cards/page"
import { GameProps } from "@/utils/types/games"
import Link from "next/link"
import Image from "next/image"
import styles from './page.module.css'
import { Input } from "@/components/input"
import { Background } from "@/components/background"


// @ts-ignore
export async function getTitle (title: string): Promise<GameProps[]>{
    console.log(title)
    try{
        const res = await fetch (`${process.env.NEXT_API_URL}/next-api/?api=game&title=${title}`)
        return res.json() as Promise<GameProps[]>;
    } catch (err) {
        throw new Error ('failed to fetch data')
    }
}
export default async function Search({
    params: {title} 
}: {
    params: {title:string}
}) {

    const game: GameProps[] = await getTitle(title)

    return (
        <main className={styles.main}>
            <Background/>
            <Input/>

            {!game && (
                <p>Jogo não encontrado</p>
            )}

             <section className={styles.section}>
                 {game && game
                    .map((item) => (
                    <div className={styles.cards}>
                      <Cards
                        id={item.id}
                        image_url={item.image_url}
                        title={item.title}
                      />
                    </div>
                ))}
             </section>
        </main>
    )
}