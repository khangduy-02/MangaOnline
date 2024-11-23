import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import './index.css';

function Content() {

  const truyenItems = [
    { id: 1, title: 'Truyện 1', backgroundUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT57tZNxKchz9qcyNn6k1DEO9mGSfJCgppZfw&s" },
    { id: 2, title: 'Truyện 2', backgroundUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT57tZNxKchz9qcyNn6k1DEO9mGSfJCgppZfw&s" },
    { id: 3, title: 'Truyện 3', backgroundUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT57tZNxKchz9qcyNn6k1DEO9mGSfJCgppZfw&s" },
    { id: 4, title: 'Truyện 4', backgroundUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT57tZNxKchz9qcyNn6k1DEO9mGSfJCgppZfw&s" },
    { id: 5, title: 'Truyện 5', backgroundUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT57tZNxKchz9qcyNn6k1DEO9mGSfJCgppZfw&s" },
    { id: 6, title: 'Truyện 6', backgroundUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT57tZNxKchz9qcyNn6k1DEO9mGSfJCgppZfw&s" },
    { id: 7, title: 'Truyện 7', backgroundUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT57tZNxKchz9qcyNn6k1DEO9mGSfJCgppZfw&s" },
    { id: 8, title: 'Truyện 8', backgroundUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT57tZNxKchz9qcyNn6k1DEO9mGSfJCgppZfw&s" },
    { id: 9, title: 'Truyện 9', backgroundUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT57tZNxKchz9qcyNn6k1DEO9mGSfJCgppZfw&s" },
    { id: 10, title: 'Truyện 10', backgroundUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT57tZNxKchz9qcyNn6k1DEO9mGSfJCgppZfw&s" },
    { id: 1, title: 'Truyện 1', backgroundUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT57tZNxKchz9qcyNn6k1DEO9mGSfJCgppZfw&s" },
    { id: 2, title: 'Truyện 2', backgroundUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT57tZNxKchz9qcyNn6k1DEO9mGSfJCgppZfw&s" },
    { id: 3, title: 'Truyện 3', backgroundUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT57tZNxKchz9qcyNn6k1DEO9mGSfJCgppZfw&s" },
    { id: 4, title: 'Truyện 4', backgroundUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT57tZNxKchz9qcyNn6k1DEO9mGSfJCgppZfw&s" },
    { id: 5, title: 'Truyện 5', backgroundUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT57tZNxKchz9qcyNn6k1DEO9mGSfJCgppZfw&s" },
    { id: 6, title: 'Truyện 6', backgroundUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT57tZNxKchz9qcyNn6k1DEO9mGSfJCgppZfw&s" },
    { id: 7, title: 'Truyện 7', backgroundUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT57tZNxKchz9qcyNn6k1DEO9mGSfJCgppZfw&s" },
    { id: 8, title: 'Truyện 8', backgroundUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT57tZNxKchz9qcyNn6k1DEO9mGSfJCgppZfw&s" },
    { id: 9, title: 'Truyện 9', backgroundUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT57tZNxKchz9qcyNn6k1DEO9mGSfJCgppZfw&s" },
    { id: 10, title: 'Truyện 10', backgroundUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT57tZNxKchz9qcyNn6k1DEO9mGSfJCgppZfw&s" },
  ];


  const recommendedItems = [
    { id: 1, title: 'Truyện 1', backgroundUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT57tZNxKchz9qcyNn6k1DEO9mGSfJCgppZfw&s" },
    { id: 2, title: 'Truyện 2', backgroundUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT57tZNxKchz9qcyNn6k1DEO9mGSfJCgppZfw&s" },
    { id: 3, title: 'Truyện 3', backgroundUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT57tZNxKchz9qcyNn6k1DEO9mGSfJCgppZfw&s" },
    { id: 4, title: 'Truyện 4', backgroundUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT57tZNxKchz9qcyNn6k1DEO9mGSfJCgppZfw&s" },
    { id: 5, title: 'Truyện 5', backgroundUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT57tZNxKchz9qcyNn6k1DEO9mGSfJCgppZfw&s" },
    { id: 6, title: 'Truyện 6', backgroundUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT57tZNxKchz9qcyNn6k1DEO9mGSfJCgppZfw&s" },
    { id: 7, title: 'Truyện 7', backgroundUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT57tZNxKchz9qcyNn6k1DEO9mGSfJCgppZfw&s" },
    { id: 8, title: 'Truyện 8', backgroundUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT57tZNxKchz9qcyNn6k1DEO9mGSfJCgppZfw&s" },
    { id: 9, title: 'Truyện 9', backgroundUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT57tZNxKchz9qcyNn6k1DEO9mGSfJCgppZfw&s" },
    { id: 10, title: 'Truyện 10', backgroundUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT57tZNxKchz9qcyNn6k1DEO9mGSfJCgppZfw&s" },
    { id: 1, title: 'Truyện 1', backgroundUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT57tZNxKchz9qcyNn6k1DEO9mGSfJCgppZfw&s" },
    { id: 2, title: 'Truyện 2', backgroundUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT57tZNxKchz9qcyNn6k1DEO9mGSfJCgppZfw&s" },
    { id: 3, title: 'Truyện 3', backgroundUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT57tZNxKchz9qcyNn6k1DEO9mGSfJCgppZfw&s" },
    { id: 4, title: 'Truyện 4', backgroundUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT57tZNxKchz9qcyNn6k1DEO9mGSfJCgppZfw&s" },
    { id: 5, title: 'Truyện 5', backgroundUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT57tZNxKchz9qcyNn6k1DEO9mGSfJCgppZfw&s" },
    { id: 6, title: 'Truyện 6', backgroundUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT57tZNxKchz9qcyNn6k1DEO9mGSfJCgppZfw&s" },
    { id: 7, title: 'Truyện 7', backgroundUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT57tZNxKchz9qcyNn6k1DEO9mGSfJCgppZfw&s" },
    { id: 8, title: 'Truyện 8', backgroundUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT57tZNxKchz9qcyNn6k1DEO9mGSfJCgppZfw&s" },
    { id: 9, title: 'Truyện 9', backgroundUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT57tZNxKchz9qcyNn6k1DEO9mGSfJCgppZfw&s" },
    { id: 10, title: 'Truyện 10', backgroundUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT57tZNxKchz9qcyNn6k1DEO9mGSfJCgppZfw&s" },
  ];

  const itemsPerPage = 10;
  const [page, setPage] = useState(1);

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const currentItems = truyenItems.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="container">
      <div>
        <h3 className="title">Truyện đề cử</h3>
        <div className="image-header">
          {recommendedItems.map((item, index) => (
            <button className="image-button" key={index}>
              <img
                src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT57tZNxKchz9qcyNn6k1DEO9mGSfJCgppZfw&s"}
                alt={`Image ${index + 1}`}
                className="button-image"
              />
            </button>
          ))}
        </div>
      </div>

      <div className="content-container">
        <div className="left-container">
          <h3 className="title">Danh sách truyện</h3>
          <div className="left-content-container">
            {currentItems.map(item => (
              <div className="left-item" key={item.id}>
                <img
                  src={item.backgroundUrl}
                  alt={item.title}
                  className="left-image"
                />
                <h4>{item.title}</h4>
              </div>
            ))}
          </div>
          <div className="pagination-container">
            <Pagination
              count={Math.ceil(truyenItems.length / itemsPerPage)}
              page={page}
              onChange={handleChangePage}
              color="primary"
            />
          </div>
        </div>

        <div className="right-container">
          <h3 className="title">Bảng xếp hạng</h3>
          <table className="my-table">
            <thead>
              <tr>
                <th>TOP</th>
                <th>Truyện Tranh</th>
                <th>Lượt xem</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1</td><td>Row 1, Cell 2</td><td>Row 1, Cell 3</td></tr>
              <tr><td>2</td><td>Row 2, Cell 2</td><td>Row 2, Cell 3</td></tr>
              <tr><td>3</td><td>Row 3, Cell 2</td><td>Row 3, Cell 3</td></tr>
              <tr><td>4</td><td>Row 4, Cell 2</td><td>Row 4, Cell 3</td></tr>
              <tr><td>5</td><td>Row 5, Cell 2</td><td>Row 5, Cell 3</td></tr>
              <tr><td>6</td><td>Row 6, Cell 2</td><td>Row 6, Cell 3</td></tr>
              <tr><td>7</td><td>Row 7, Cell 2</td><td>Row 7, Cell 3</td></tr>
              <tr><td>8</td><td>Row 8, Cell 2</td><td>Row 8, Cell 3</td></tr>
              <tr><td>9</td><td>Row 9, Cell 2</td><td>Row 9, Cell 3</td></tr>
              <tr><td>10</td><td>Row 10, Cell 2</td><td>Row 10, Cell 3</td></tr>
            </tbody>
          </table>
        </div>
      </div>


    </div>
  );
}

export default Content;
