import styles from './layout.module.css'
import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
    <div className={styles.container}>
    {children}
    </div>
    </>
  )
}
