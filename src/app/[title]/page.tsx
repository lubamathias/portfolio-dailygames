import { getTitle } from "../search/[title]/page"
import { GameProps } from "@/utils/types/games"
import Image from "next/image"
import styles from "./page.module.css"
import { Background } from "@/components/background"
import next, { Metadata } from "next"


interface PropsParams {
    params: Promise <{
        title: string
        id: string
    }>
}
export async function generateMetadata({params} : PropsParams): Promise<Metadata> {
    try {
        const response: GameProps = await fetch (`${process.env.NEXT_API_URL}//next-api/?api=game&id=${params.id}`, {next: {revalidate: 60}})
        .then((res) => res.json)
        .catch(() => {
            return {
                title: "Projeto Daily Games - descubra jogos incríveis",
                description: "Diversos jogos para você saber mais!",
            }
        })

        return {
            title : response.title,
            description: '${response.description.slice(0, 100)}...',
            openGraph: {
                title: response.title,
                images: [response.image_url]
            },
            robots: {
                index: true,
                follow: true,
                nocache: true,
                googleBot: {
                index: true,
                follow: true,
                noimageindex: true,
                }
            }
        }
    } catch (err) {
        return {
            title: "Daly Games - descubra jogos incríveis",
            description: "Diversos jogos para você saber mais!",
        }
    }
}

export default async function Game({
    params
}: PropsParams){

    const { title } = await params;

    const game: GameProps[] = await getTitle(title)


    return (
        <main className={styles.main}>
            <Background/>
            <section className={styles.container}>
                {game
                .map((item) => (
                    <div className={styles.map}>
                        <div className={styles.imageContainer}>
                            <Image
                            alt={item.title}
                            src={item.image_url}
                            fill
                            quality={100}
                            className={styles.image}
                            />
                        </div>


                        <div className={styles.borderContainer}>
                            <h2 className={styles.title}>
                                {item.title}
                            </h2>
                            <div className={styles.info}>
                                <p>
                                    {item.description}
                                </p>
                                <div className={styles.extraInfos}>
                                    <h4 className={styles.subItens}>
                                        {item.release && (
                                       <>
                                           Lançamento:
                                            <span>
                                                {item.release}
                                            </span>
                                       </>
                                        )}
                                    </h4>
                                    <h4 className={styles.subItens}>
                                        Categorias:
                                        {item.categories.map((categories, index) => (
                                            <span key={index}>- {categories}</span>
                                        ))}
                                    </h4>
                                    <h4 className={styles.subItens}>
                                        Plataformas:
                                        {item.platforms.map((platform, index) => (
                                            <span key={index}>- {platform} </span>
                                        ))}
                                    </h4>
                                </div>
                        </div>


                        </div>


                    </div>
                ))}
            </section>
        </main>
    )
}