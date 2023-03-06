import PostModelo from 'componentes/PostModelo';
import fotoCapa from "assets/sobre_mim_capa.png";
import styles from './SobreMim.module.css'
import React from 'react'
import fotoSobreMim from 'assets/minha_foto.png'


export default function SobreMim() {
  return (
    <PostModelo
      fotoCapa={fotoCapa}
      titulo="Sobre mim"
    >
      <h3 className={styles.subtitulo}>
        Olá eu sou Matheus
      </h3>

      <img 
        src={fotoSobreMim} 
        alt="Foto do Matheus Santos" 
        className={styles.fotoSobreMim}
      />
      <p className={styles.paragrafo}>
        Eae, Tranquilo? Sou atualmete estudante de Front-End na Alura e estou aprendendo sobre React,e este é um projeto do curso React: desenvolvendo em React Router com JavaScript.
      </p>

    </PostModelo>
  )
}
