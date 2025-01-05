"use client"
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react"
import styles from './page.module.css'
import { FaSearch } from "react-icons/fa";



export function Input(){
    const [searchGame, setSearchGame] = useState('')
    const router = useRouter()

    async function handleSearch(event: FormEvent){
        event.preventDefault();

        if (searchGame === '') return;

        router.push(`/search/${searchGame}`)
    }

    return(
        <form onSubmit={handleSearch} className={styles.form}>
            <input type="text"
                placeholder="Procurando algum jogo?"
                value={searchGame}
                onChange={(event) => setSearchGame(event.target.value)}
                className={styles.input}
            />
            <button type="submit" className={styles.button}>
                <FaSearch className={styles.icon}/>
            </button>
        </form>
    )
}