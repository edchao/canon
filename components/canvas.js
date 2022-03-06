import Link from 'next/link'
import styles from './canvas.module.css'


function Canvas({ children }) {
  return(
    <>
    <div className={styles.canvas}>
      {children}
    </div>
    </>
  )
}

export default Canvas
