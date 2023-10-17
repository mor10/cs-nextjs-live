// next.js about page

// Path: pages/about.js
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function About() {
    return (
        <div className={styles.container}>
        <Head>
            <title>About</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
            <h1>About</h1>
            <p>
            This is the about page.
            </p>
            <Link href="/">
            <a>Go home</a>
            </Link>
        </main>
        </div>
    )
    }

