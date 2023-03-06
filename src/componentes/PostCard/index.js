import styles from "./Post.module.css"
import React from 'react'
import { Link } from "react-router-dom"
import BotaoPrincipal from "componentes/Botao"

export default function PostCard({ post }) {
  return (
    <Link to={`/posts/${post.id}`}>
      <div className={styles.post}>
        <img
            className={styles.post} 
            src={`/assets/posts/${post.id}/capa.png`}
            alt="Imagem de capa" 
        />

        <h2 className={styles.titulo}>
            {post.titulo}
        </h2>
        <BotaoPrincipal>
          Ler
        </BotaoPrincipal>
      </div>
    </Link>

  )
}
