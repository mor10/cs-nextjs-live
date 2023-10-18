// next.js about page

// Path: pages/about.js
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/home.module.css'

export default function About() {
    return (
        <div className={styles.container}>
        <Head>
            <title>About me</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
            <h1>Contact</h1>
            <p>
            this is the new page I just created!
            </p>
            <Link href="/">
                Go home
            </Link>
        </main>
        </div>
    )
    }

