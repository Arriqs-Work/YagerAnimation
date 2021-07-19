import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import gsap from 'gsap'
import Link from 'next/link'

const LinkstoComponents =()=> {
  const boxShadowColors = ['f05b2d', 'f26a40', 'f37953', 'f48866', 'f69679']
  const boxShadow = `5px 5px 0px 0px #${boxShadowColors[0]}, 10px 10px 0px 0px #${boxShadowColors[1]}, 15px 15px 0px 0px #${boxShadowColors[2]}, 20px 20px 0px 0px #${boxShadowColors[3]}, 25px 25px 0px 0px #${boxShadowColors[4]}, 5px 5px 15px 5px rgba(0,0,0,0)`;
  return (
    <div>
      <div className="linkContainer">
        <Link href="/factfinder"><a className="componentLink">Fact Finder demo</a></Link>
      </div>
      <style>
        {`
          .componentLink {
            -webkit-box-shadow: ${boxShadow};
            box-shadow: ${boxShadow};
            background: #ef4c1a;
            padding: 1em;
            border-radius: 10px;
            transition: box-shadow 2s;
            color: #fff
          }

          .componentLink:hover {
            box-shadow: none
          }

          .linkContainer {
            margin-top: 1em;
            display: flex
          }
        `}
      </style>
    </div>
    
  )
}

export default function Home() {
  return (
    <div className={styles.AppContainer}>
      <Head>
        <title>CreativeOne React Components</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <h1>Browse CreativeOne's React.js Component Library</h1><br /><br />
          <LinkstoComponents />
        </div>
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
