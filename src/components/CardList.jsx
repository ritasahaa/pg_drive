import React from 'react';
import Card from './Card';
import './CardList.css';
import axios from 'axios';
import { useState ,useEffect} from 'react';



const CardList = () => {
  const[list,setList]=useState()
console.log("data",list)
  useEffect(()=>{
    axios.get("http://localhost:3001/api/get/product").then((ele)=>{
      setList(ele.data)
    })
  },[])
  return (
    <div className="card-list">
      {list?.map((ele)=>{
        return  <Card key={ele.id}  ele= {ele} />
      })}
    </div>
  );
};


export default CardList;
