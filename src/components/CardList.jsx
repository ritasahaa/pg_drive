import React from 'react';
import Card from './Card';
import './CardList.css';


const CardList = ({ data ,type}) => {
  return (
    <div className="card-list">
      {data.map(item => (
        <Card key={item.id} {...item} type={type}/>
      ))}
    </div>
  );
};


export default CardList;
