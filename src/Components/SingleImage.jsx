import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { searchSingleImage } from '../redux/action';
import styles from "./SingleImage.module.css";

export const SingleImage = () => {
    let {id} = useParams();
    const singleImage = useSelector((store) => store.singleImage)
    const isLoading = useSelector((store) => store.isLoading)
    const dispatch = useDispatch();
    const isWebShareSupported = navigator.share !== undefined;
    const handleDownload = async () => {
        console.log(singleImage.urls.full)
        const imageBlob = await fetch(`${singleImage.urls.full}`)
                                .then((response)=>response.arrayBuffer())
                                .then((buffer)=>new Blob([buffer], {type: "image/jpeg"}))
        

        // console.log(imageBlob)
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(imageBlob)
        link.download = `${singleImage.blur_hash}.jpg`
        document.body.appendChild(link)
        link.click();
        document.body.removeChild(link)
    }
    
    const handleShare = () => {
        
        navigator.share({
          title: 'Image Title',
          text: 'Check out this image!',
          url: singleImage.urls.full,
        })
        .then(() => console.log('Shared successfully.'))
        .catch((error) => console.error('Sharing failed:', error));
      };

    useEffect(()=>{
        window.scrollTo(0,0)
        dispatch(searchSingleImage(id))
    },[id])
  return (
    <div>
        {
            isLoading && <div>
                <h1>...Loading</h1>
            </div>
        }
        {
            singleImage &&
            <div style={{marginTop:"20px"}}>
                <img className={styles.img} src={singleImage.urls.full} alt={singleImage.alt_description}/>
                <br/>
                <br/>
                <button onClick={()=>handleDownload()}>Download</button>
                {isWebShareSupported && (
                    <button onClick={handleShare}>Share</button>
                )}
            </div>
        }
    </div>
  )
}
