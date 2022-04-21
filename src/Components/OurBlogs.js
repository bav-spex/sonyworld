import React from "react";
import "./../SCSS/_ourblogs.scss";
import calender from "./../Assets/Icon/calender.svg";
function OurBlogs({ ourBlogsData }) {
  return (
    <div className="container-fluid ourBlogs__container">
      <div className="ourBlogs__block">
        <div className="section__title__block">
          <p className="section__title">Our Blogs</p>
          <button className="viewall__button">View All</button>
        </div>
        <div className="row ourBlogs__row">
          {ourBlogsData.map((blog, blogIndex) => {
            return (
              <div key={blog.id} className="col-12 col-sm-4 blog">
                <div className="blog__image__block">
                  <img src={blog.image} alt="" className="blog__image" />
                </div>
                <p className="blog__title">{blog.title}</p>
                <p className="blog__description">{blog.description}</p>
                <div className="blog__date__block">
                  <img src={calender} alt="" className="blog__calender__icon" />
                  <p className="blog__Date">{blog.date}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default OurBlogs;
