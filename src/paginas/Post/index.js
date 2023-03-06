import React from 'react';
import styles from './Post.module.css';
import { Route, Routes, useParams } from 'react-router-dom';
import posts from 'json/posts.json';
import PostModelo from 'componentes/PostModelo';
import ReactMarkdown from "react-markdown";
import './Post.css';
import NaoEncontrado from 'paginas/NaoEncontrado';
import PaginaPadrao from 'componentes/PaginaPadrao';
import PostCard from 'componentes/PostCard';

export default function Post() {
    const parametros = useParams();

    const post  = posts.find((post) => {
        return post.id === Number(parametros.id);
    })

    if(!post) {
        return <NaoEncontrado />
    }

    const postRecomendados = posts
        .filter((post) => post.id !== Number(parametros.id))
        .sort((a, b) => a.id - b.id)
        .slice(0,4)

  return (
    <Routes>
        <Route path="*" element={<PaginaPadrao />}>
            <Route index element={
                <PostModelo
                    fotoCapa={`/assets/posts/${post.id}/capa.png`}
                    titulo={post.titulo}
                >
                    <div className='post-markdown-container'>
                        <ReactMarkdown>
                            {post.texto}
                        </ReactMarkdown>    
                    </div>

                    <h2 className={styles.tituloOutrosPosts}>
                        Outros posts que você pode gostar: 
                    </h2>

                    <ul className={styles.postsRecomendados}>
                        {postRecomendados.map((post) => (
                            <li key={post.id}>
                                <PostCard post={post} />
                            </li>
                        ))}
                    </ul>

                </PostModelo>
            }/>

        </Route>
    </Routes>

  )
}
