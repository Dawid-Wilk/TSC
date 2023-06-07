import { useState, useEffect } from 'react';
import axios from 'axios';

export const Startseite = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const sortedData = data.sort((a, b) => a.title.localeCompare(b.title));

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return(
    <div className="content">
      <div className="banner-container">
        <img 
                src="./images/banner.svg" 
                alt="baner"
            />
        <div className="text-banner">
          <h1>Startseite</h1>
        </div>
      </div>
      <div className='data-container'>
        <h1>Zadanie 1</h1>
        <ul>
        {sortedData
          .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
          .map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
        <div className='pagination'>
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => goToPage(number)}
            disabled={number === currentPage}
          >
            {number}
          </button>
        ))}
      </div>
      </div>
    </div>
  )
}