import React from "react";
import { randomColor } from "../../util/random-hex";
import "./job-post.scss";

const JobPost = ({ company, title, location, tags, link, date }) => {
  return (
    <div className="job-post">
      <div className="job-post__header">
        <div className="job-post__header--main">
          <div className="job-post__header--logo" 
          style={{
            color: randomColor(),
          }}>{company}</div>
          <div className="job-post__header--title">
            <div className="title">
              <h3>
                Role : <span>{title} </span>
              </h3>
              <h4>
                Location : <span>{location || 'Remote'}</span>
              </h4>
              <h4>
                Date posted : <span>{date}</span>
              </h4>
            </div>
            <ul className="tags">
              {tags.map((item,index) => (
                <li key={index+item} className="tag">{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <button className="job-post__btn">
          <a href={link} className="btn" target="_blank" rel="noreferrer">
            Apply <span>&rarr;</span>
          </a>
        </button>
      </div>
    </div>
  );
};

export default JobPost;
