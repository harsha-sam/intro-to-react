import React from 'react';
import Book from './Book';
import books from "../../../books-data";

// const firstBook =  {
//     img: "https://images-na.ssl-images-amazon.com/images/I/41pIJKMo8RL._SX355_BO1,204,203,200_.jpg",
//     title: "Where to Begin: A Small Book About Your Power to Create Big Change",
//     author: "Cleo Wade"
// }
// const secondBook =     {
//     img: "https://m.media-amazon.com/images/I/41bffUhJ4xL.jpg",
//     title: "A Promise Land",
//     author: "Barack Obama"
// }
const BookList = () => {
    return(
        <section className="products">
            {
                books.map((book) => {
                return <Book {...book}></Book>
                })
            }
        </section>
    )
}
export default BookList;