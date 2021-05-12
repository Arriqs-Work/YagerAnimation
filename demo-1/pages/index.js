import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import gsap from 'gsap'



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CreativeOne React Components</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <h1>Browse CreativeOne's React.js Component Library</h1>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/C1Logo-2019.svg" alt="CreativeOne Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
