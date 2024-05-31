import React, { useEffect, useState } from 'react';
import './all.css'; // Import the CSS file

function All() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://inshortsapi.vercel.app/news?category=all");
      const result = await response.json();
      console.log(result);
      setData(result.data);
    }
    fetchData();
  }, []);

  return (
    <div className="container">
      {/* <h1 className="title">Data Fetching...</h1> */}
      <div className="cards" >
      {data.map((item, index) => (
          <a href={item.readMoreUrl}  target='_blank'>
            <button style={{border:"none",backgroundColor:"white"}}>
            <div className="card" key={index}>
            <img className="image" src={item.imageUrl}  style={{cursor: "pointer"}}/>
            <h3 className="item-title">{item.title}</h3>
            
            <div className="info">
              <p className="author">Author: {item.author}</p>
              <p className="content">{item.content}</p>
              <p className="date">Published on: {item.date}</p>
              <a className="read-more-link" href={item.readMoreUrl} target="_blank" rel="noopener noreferrer">Read more</a>
            </div>
          </div>
            </button>
          </a>
        ))}
      </div>
    </div>
  );
}

export default All;
