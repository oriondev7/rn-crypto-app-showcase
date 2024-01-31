import React from 'react'
import styles from '../styles/Global'

export const Button = ({ assetURL, link }) => {
  return (
    <div 
      className={styles.btnBlack}
      onClick={() => window.open(link, "_blank")}
    >
      <img 
        src={assetURL} 
        alt="expot_icon"
        className={styles.btnIcon}
      />

      <div className="flex flex-col justify-start ml-4">
        <p className={`
          ${styles.btnText}
          font-normal
          text-xs
        `}>
          Download on
        </p>

        <p className={`
          ${styles.btnText}
          font-bold
          text-sm
        `}>
          Expo
        </p>
      </div>
    </div>
  )
}
