import React, { createContext, useEffect, useState } from 'react'
import axios from "axios"


let apidata = createContext()

const ContextApi = ({children}) => {

    let [info, setInfo] = useState([])

    let getdata = () => axios.get("https://dummyjson.com/products?&limit=0").then((response)=>{
        setInfo(response.data.products);
    })
    useEffect(()=>{
        getdata()
    },[])

  return (
    <apidata.Provider value={info}>{children}</apidata.Provider>
  )
}

export { apidata, ContextApi }
