import axios from "axios";
import * as types from "./actionType";

export const getImagesReq = () => {
    return {
        type:types.REQUEST_GET
    }
}

export const successImagesReq = (payload) => {
    return {
        type:types.REQUEST_SUCCESS,
        payload
    }
}

export const failureImagesReq = () => {
    return {
        type:types.REQUEST_FAILURE
    }
}

export const getSingleImagesReq = () => {
    return {
        type:types.SINGLE_IMAGE_REQUEST_GET
    }
}

export const successSingleImagesReq = (payload) => {
    return {
        type:types.SINGLE_IMAGE_REQUEST_SUCCESS,
        payload
    }
}

export const failureSingleImagesReq = () => {
    return {
        type:types.SINGLE_IMAGE_REQUEST_FAILURE
    }
}

export const getData = () => (dispatch) => {
    dispatch(getImagesReq());
    axios
        .get(`https://api.unsplash.com/photos/random?count=10`,{
            headers: {
              Authorization: `Client-ID zIq3TLfagYAnjzc-lPAc60gFWilpNg_DvH5cht0RVGI`,
            },
          })
        .then((res)=>{
            // console.log(res)
            dispatch(successImagesReq(res.data));
        })
        .catch((err)=>{
            dispatch(failureImagesReq());
        })
}

export const searchData = (payload) => (dispatch) => {
    dispatch(getImagesReq())
    axios
        .get(`https://api.unsplash.com/search/photos?query=${payload}`,{
            headers: {
                Authorization: `Client-ID zIq3TLfagYAnjzc-lPAc60gFWilpNg_DvH5cht0RVGI`
            }
        })
        .then((res)=>{
            // console.log(res)
            dispatch(successImagesReq(res.data.results));
        })
        .catch((err)=>{
            dispatch(failureImagesReq());
        })
}

export const searchSingleImage = (id) => (dispatch) => {
    dispatch(getSingleImagesReq())
    axios
        .get(`https://api.unsplash.com/photos/${id}`,{
            headers: {
                Authorization: `Client-ID zIq3TLfagYAnjzc-lPAc60gFWilpNg_DvH5cht0RVGI`
            }
        })
        .then((res)=>{
            // console.log(res.data)
            dispatch(successSingleImagesReq(res.data));
        })
        .catch((err)=>{
            dispatch(failureSingleImagesReq());
        })
}