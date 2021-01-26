import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <sl-button size="large">Click me</sl-button>

      <br /><br />

      If you see the button above, you are using Web Components with Shoelace!

      <br /><br />

      <a href="https://github.com/shoelace-style/shoelace#readme">https://github.com/shoelace-style/shoelace#readme</a>
    </div>
  )
}
