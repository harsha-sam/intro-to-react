import React from 'react';

const Book = ({img, title, author}) => {
    return <article className="product">
        <img src={img} alt={title}/>
        <h3>{title}</h3>
        <h4>{author}</h4>
    </article>
}
export default Book;