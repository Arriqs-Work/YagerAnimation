import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HorizontalStepper from '../components/HorizontalStepper'


export default function FactFinder() {
  return (

    <div className={styles.AppContainer}>
      <Head>
        <title>Change Path FactFinder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <div style={{display: 'flex', justifyContent: 'center'}}><HorizontalStepper /></div>
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
