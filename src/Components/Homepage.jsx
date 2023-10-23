import React, { useEffect } from 'react'
import styles from "./Homepage.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { Images } from './Images';
import { Search } from './Search';
import { getData } from '../redux/action';
import { Link } from 'react-router-dom';

const Homepage = () => {
  const data = useSelector((store) => store.data)
  const isLoading = useSelector((store) => store.isLoading)
  const dispatch = useDispatch();

  useEffect(()=>{
    if(!data.length){
        dispatch(getData());
    }
  },[])
  return (
    <div>
        <Search/>
        {
            isLoading && <div>
                <h1>...Loading</h1>
            </div>
        }
        <div className={styles.container}>
        {
            data?.map((e,i) => {
            return (
                <Link to={`/photos/${e.id}`} style={{color:"black", textDecoration:"none"}}>
                <div className={styles.parent} key={i} >
                <Images img={e} key={i} />
                </div>
                </Link>
            )
            })
        }
        </div>
    </div>
  )
}

export default Homepage