import { useState } from 'react'
import styles from './index.module.css'
import DefaultListIcon from './icons/DefaultListIcon'
import DefaultGridIcon from './icons/DefaultGridIcon'

type ToggleProps = {
  gridIcon?: React.ReactNode
  listIcon?: React.ReactNode
}

export default function Toggle({ gridIcon, listIcon }: ToggleProps) {
  const [isActive, setIsActive] = useState(false)

  function handleToggle() {
    setIsActive(!isActive)
  }

  return (
    <button
      className={styles['toggle']}
      onClick={handleToggle}
      aria-pressed={isActive}
      tabIndex={0}
      aria-label='Toggle grid or list view'
    >
      <span
        className={`${styles['icon']} ${!isActive ? styles['active'] : ''}`}
        aria-hidden='true'
      >
        {listIcon ? listIcon : <DefaultListIcon />}
      </span>

      <div
        className={`${styles['slider']} ${isActive ? styles['active'] : ''}`}
        aria-hidden='true'
      >
        <div className={styles['circle']}></div>
      </div>

      <span
        className={`${styles['icon']} ${isActive ? styles['active'] : ''}`}
        aria-hidden='true'
      >
        {gridIcon ? gridIcon : <DefaultGridIcon />}
      </span>
    </button>
  )
}
