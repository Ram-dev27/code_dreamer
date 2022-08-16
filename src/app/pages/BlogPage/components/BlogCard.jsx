import React from 'react';
import style from './blogCard.module.css';

function BlogCard({ data }) {
  return (
    <div className={style.container}>
      <img className={style.image} src={data.image} alt="img" />
      <h4 className={style.heading}>{data.title}</h4>
      <p className={style.content}>{data.description}</p>
    </div>
  );
}

export default BlogCard;
