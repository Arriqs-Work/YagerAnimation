import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import gsap from 'gsap'
import HorizontalStepper from '../components/HorizontalStepper'


export default function FactFinder() {
  return (

    <div className={styles.container}>
      <Head>
        <title>Change Path FactFinder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <div><HorizontalStepper /></div>
      </main>

      <footer className={styles.footer}>
        <a
          href="/"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/C1Logo-2019.svg" alt="CreativeOne Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
