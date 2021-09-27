import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const sites = [
    '113a3bd3',
    'a3ec6c6a',
    '14bbfdec',
    'c3fe3722',
    'a1e4a32d',
    '76f1976c',
    '1ddfbc16',
    'a5341028',
    '8d33ea6f',
    '8bf65db9',
    '533c587d',
    '40e2861f',
    'f04ddafb',
    'fcea6c2e',
    '80cc77c2',
    'ae96cc0f',
    '44dbfbfa',
    'eaaef113',
    '24bec635',
    'c9b5be7e',
    '0d2101e7',
    'fe9e915d',
    '9ad39898',
    '8fa449ae',
    '56773e28',
    '44029624',
    '341c182e',
    '5cbf9015',
    '4c01d5b7',
    '7529b41f',
    '58d4dbe1',
    '610ae7bd',
    '4c64cef0',
    '54703499',
    '7d05aae8',
    '97438600',
    '3ab240d8',
    '7205c059',
    '6e90b409',
    'a33b03c6',
    'e82b021b',
    '54b90782',
    '3a9c94b6',
    '93bd1a10',
    '32bb098f',
    'f62d4ac7',
    '38335057',
    '105cc8f8',
    'ef7a2444',
    '1c83c85b',
    'b44d9562',
    '1a3b734d',
    '654e4659',
    '32c4324c',
    '47683917',
    'e00be31a',
    '2b429363',
    'd49dfaeb',
    '488bed00',
    '829e39c4',
    'e9034050',
    'a24b67fc',
    '686cfc76',
    '0a2a5471',
    'f1a5e466',
    'a877e909',
    '3515add4',
    '5dd94d5f',
    'a3da65a1',
    'cbbea31b',
    '9fec61a2',
    'e1ba2717',
    '5ebaeb26',
    'dd62bf56',
    'cddd2e81',
    '3bc7b26f',
    'b741b5fb',
    '5aa096af',
    '60fc7e79',
    '76b3470d',
    'efef4f2c',
    '0ea6810a',
    '730bdd09',
    '2e4a27af',
    'c42e4c5a',
    '43c5654f',
    '7315a443',
    '6ffc8070',
    '3a8cb3dd',
    'b6946654',
    '186b2741',
    '0068cfdf',
    '0dbc236c',
    'e0becca3',
    '0eb9e1e8',
    '8d6eef6a',
    '89bde761',
    'fc9a5bb3',
    'b1e8eaea',
    '03698965',
    '5ada24fc',
    'e9fc9fc2',
    '435300d8',
    '5bd97a66',
    'a87f67b9',
    'aab52fde',
    '29d16c09',
    '47a58c62',
    '2c4eda38',
    'b1b729b6',
    '49fadfb8',
    '0f29462d'
  ];

export default function Home() {
    return (
      <div className={styles.AppContainer}>
        <Head>
          <title>CreativeOne React Components</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>
          <div>
            <ul>
              {sites.map(site => <li>https://api.duda.co/api/analytics/site/{site}?result=traffic</li>)}
              
            </ul><br /><br />
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
  