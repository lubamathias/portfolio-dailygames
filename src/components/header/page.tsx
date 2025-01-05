import Link from "next/link";
import logoGames from "/public/images/logoGames.png";
import Image from "next/image";
import styles from './page.module.css'
import { FaGamepad } from "react-icons/fa";



export default function Header(){
    return(
        <header className={styles.header}>
            <div className={styles.contain}>
                <div className={styles.container}>
                    <nav className={styles.nav}>
                        <Link href={'/'}>
                        {/*imagem obtida em freepik, feita por: katemangostar*/}
                            <Image
                            alt="logo Games Time"
                            src={logoGames}
                            className={styles.logoGames}
                            />
                        </Link>
                        <Link href='/' className={styles.link}>
                            GAMES
                        </Link>
                        <Link href='/profile' className={styles.link}>
                            PERFIL
                        </Link>
                    </nav>
                    <div className={styles.iconContainer}>
                        <Link href={'/profile'}>
                            <FaGamepad className={styles.icon}/>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}