import React from 'react';
import styles from '../styles/Global';
import assets from '../assets';
import { Button } from './Button';

export const SectionWrapper = ({
  title,
  description,
  showButton,
  mockupImage,
  banner,
  reverse
}) => {
  return (
    <div className={`
      min-h-screen 
      ${styles.section} 
      ${reverse ? styles.bgWhite : styles.bgPrimary}
      ${banner}
    `}>
      <div className={`
        flex items-center
        ${reverse ? styles.boxReverseClass : styles.boxClass}
        w-11/12
        sm:w-full
        minmd:w-3/4
      `}>
        <div className={`
          ${styles.descDiv}
          ${reverse ? " fadeRightMini" : " fadeLeftMini"}
          ${reverse ? styles.textRight : styles.textLeft}
        `}>
          <h1 className={`
            ${reverse ? styles.blackText : styles.whiteText}
            ${styles.h1Text}
          `}>{title}</h1>
          <p className={`
              ${reverse ? styles.blackText : styles.whiteText}
              ${styles.descriptionText}
            `}>{description}</p>
          {showButton && (
            <Button
              assetURL={assets.expo}
              link="https://expo.dev"
            />
          )}
        </div>

        <div
          className={`
            flex-1
            ${styles.flexCenter}
            p-8
            sm:px-0
          `}
        >
          <img 
            src={mockupImage} 
            alt="mockup" 
            className={`
              ${reverse ? " fadeLeftMini" : " fadeRightMini"}
              ${styles.sectionImg}
            `}
          />
        </div>
      </div>
    </div>
  )
}
