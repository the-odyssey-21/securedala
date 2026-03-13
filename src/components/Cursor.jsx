// src/components/Cursor.jsx
import { useCursor } from '../hooks/useCursor'
import styles from './Cursor.module.css'

export default function Cursor() {
  const { ringRef, dotRef } = useCursor()

  return (
    <>
      <div ref={ringRef} className={styles.ring} />
      <div ref={dotRef}  className={styles.dot}  />
    </>
  )
}
