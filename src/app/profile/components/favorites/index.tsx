'use client'

import { useState } from "react";
import { FaPlus, FaRegTrashAlt } from "react-icons/fa";
import { MdAddTask } from "react-icons/md";
import styles from './page.module.css'


export function Favorites(){

    const [input, setInput] = useState('')
    const [showInput, setShowInput] = useState (false)
    const [gameName, setGameName] = useState('')

    function handleButton() {
        setShowInput(!showInput);

        input !== '' && setGameName(input);

        setInput('')
    }


    function handleDelete(){
        setGameName('')
    }
    return (
        <div className={styles.container}>

            <div>
                {showInput ? (
                    <div>
                        <input type="text"
                        value={input}
                        onChange={((event) => setInput(event.target.value))}
                        />
                    <button onClick={handleButton} className={styles.button}>
                        <MdAddTask/>
                    </button>
                    </div>
                ) : (
                    <button onClick={handleButton} className={styles.button}>
                        <FaPlus/>
                    </button>
                )}
            </div>
            <div className={styles.favoriteGame}>
                {gameName && (
                    <div className={styles.favoriteGame1}>
                        <div>
                            <span>Jogo favorito:</span>
                            <p>{gameName}</p>
                        </div>
                        <button onClick={handleDelete} className={styles.button}>
                            <FaRegTrashAlt/>
                        </button>
                    </div>

                ) }

                {!gameName && (
                    <span>adicionar jogo favorito</span>
                )}
            </div>
        </div>
    )
}