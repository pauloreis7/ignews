import { Head } from "next/document";

import styles from './styles.module.scss'

export function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de setembro de 2021</time>
            <strong>Lorem, ipsum dolor sit amet consectetur adipisicing elit</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A aperiam, reprehenderit fugit blanditiis nobis quis!</p>
          </a>

          <a href="#">
            <time>12 de setembro de 2021</time>
            <strong>Lorem, ipsum dolor sit amet consectetur adipisicing elit</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A aperiam, reprehenderit fugit blanditiis nobis quis!</p>
          </a>

          <a href="#">
            <time>12 de setembro de 2021</time>
            <strong>Lorem, ipsum dolor sit amet consectetur adipisicing elit</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A aperiam, reprehenderit fugit blanditiis nobis quis!</p>
          </a>
        </div>
      </main>
    </>
  )
}