import styles from "./page.module.css"
import Image from "next/image"
import { GameProps } from "@/utils/types/games"
import Link from "next/link"

export function Cards({image_url, title, id}: GameProps) {
    return(
        <Link href={`/${title}`}>
            <div className={styles.container} key={id}>
                <div className={styles.card}>
                    <Image
                    alt="Imagem do jogo"
                    src="https://sujeitoprogramador.com/next-api/foto1.png"
                    fill
                    quality={100}
                    className={styles.image}
                    />
                </div>
                <div>
                    <strong className={styles.title}>{title}</strong>
                </div>
            </div>
        </Link>
    )
}