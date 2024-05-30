import React, { useEffect, useState } from 'react';
import './all.css'; // Import the CSS file

function All() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://inshortsapi.vercel.app/news?category=science");
      const result = await response.json();
      console.log(result);
      setData(result.data);
    }
    fetchData();
  }, []);

  return (
    <div className="container">
      {/* <h1 className="title">Data Fetching...</h1> */}
      <div className="cards">
        {data.map((item, index) => (
          <div className="card" key={index}>
            <img className="image" src={item.imageUrl} alt="No image" />
            <h2 className="item-title">{item.title}</h2>
            
            <div className="info">
              <p className="author">Author: {item.author}</p>
              <p className="content">{item.content}</p>
              <p className="date">Published on: {item.date}</p>
              <a className="read-more-link" href={item.readMoreUrl} target="_blank" rel="noopener noreferrer">Read more</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default All;
