import Image from "next/image"
import userImg from "/public/images/user.png"
import styles from "./page.module.css"
import { IoIosSettings, IoMdShare } from "react-icons/io";
import { Favorites } from "./components/favorites";


export default function Profile() {
    return(
        <main className={styles.main}>
            <section className={styles.section}>
                <div className={styles.profile}>
                    <Image
                    alt="user Image"
                    src={userImg}
                    className={styles.userImg}
                    
                    />
                    <h3>Usuário xxx</h3>
                </div>
                <div className={styles.iconsContainer}>
                    <button className={styles.iconButton}>
                        <IoIosSettings className={styles.icon}/>
                    </button>
                    <button className={styles.iconButton}>
                        <IoMdShare className={styles.icon}/>
                    </button>
                </div>
            </section>

            <section className={styles.favoritesContainer}>
                <div className={styles.favorites}>
                    <Favorites/>
                </div>
                <div className={styles.favorites}>
                    <Favorites/>
                </div>
                <div className={styles.favorites}>
                    <Favorites/>
                </div>
            </section>
        </main>
    )
}