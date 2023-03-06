import styles from "./Banner.module.css"
import React from 'react'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from "assets/minha_foto.png"

export default function Banner() {
  return (
    <div className={styles.banner}>
        <div className={styles.apresentacao}>
            <h1 className={styles.titulo}>
                Olá Mundo
            </h1>

            <p className={styles.paragrafo}>
                Olá, Meu nome é Matheus Santos estudante de Front-End da Alura,e esse é um projeto do curso. Prazer!
            </p>
        </div>
        <div className={styles.imagens}>
            <img
                className={styles.circuloColorido}
                src={circuloColorido} 
                aria-hidden={true}
             />
             <img 
                className={styles.minhaFoto} 
                src={minhaFoto} 
                alt="Foto do Matheus" 
            />
        </div>
    </div>
  )
}
