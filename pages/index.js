import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import pic from "../public/mtkenya.jpg"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mt Kenya Adventure</title>
        <meta name="description" content="Mt Kenya Adventure, travel, adventure, Mt Kenya" />
        <link rel="icon" href="/logo.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.coverHold}>
          <Image src={pic} />
        </div>
        
        
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}

