import Link from 'next/link'
import styles from './navbar.module.css'


function Navbar(props) {

  const selected = props.selected;

  if (selected == "about"){
    console.log("hi");
  }

  return(
    <>
    <div className={styles.nav}>
      <div className={styles.logo}>C</div>
      <div className={styles.categories}>
        <Link name="about" href="/about"><a><div className={styles.category_title_selected}>About</div></a></Link>
        <Link name="reality" href="/reality"><a><div className={styles.category_title}>Reality</div></a></Link>
        <Link name="" href="/self"><a><div className={styles.category_title}>Self</div></a></Link>
        <Link href="/meaning"><a><div className={styles.category_title}>Meaning</div></a></Link>
        <Link href="/death"><a><div className={styles.category_title}>Death</div></a></Link>
      </div>
    </div>
    </>
  )
}

export default Navbar
