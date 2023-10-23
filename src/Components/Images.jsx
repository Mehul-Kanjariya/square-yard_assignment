import React from 'react'
import styles from "./Images.module.css"

export const Images = ({img}) => {
  return (
    <div>
      <div className={styles.img}>
        <img src={`${img.urls.full}&w=150&dpr=2`} alt={img.alt_description} />
      </div>
      <div className={styles.likes}>
        <p>Likes: {img.likes}</p>
        <p>Downloads: {img.downloads}</p>
      </div>
    </div>
  )
}
