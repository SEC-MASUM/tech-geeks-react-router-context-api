import React, { useContext, useEffect, useState } from "react";
import "./BlogDetails.css";
import { BsChevronLeft } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import { BlogContext } from "../../App";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blogs] = useContext(BlogContext);
//   console.log(blogs);

  const blog = blogs.find((blog) => blog._id === id);
  console.log(blog);
  //   const [blog, setBlog] = useState([]);

  //   useEffect(() => {
  //     fetch(`https://retro-tech-talks.herokuapp.com/getBlog/${id}`)
  //       .then((res) => res.json())
  //       .then((data) => setBlog(data));
  //   }, [id]);
  return (
    <>
      <div className="header-gradient" />

      <div>
        <button className="back-button" onClick={() => navigate(-1)}>
          <BsChevronLeft />
          <p>Back</p>
        </button>
        <div className="blog-details">
          <div className="blog-image">
            <img src={blog?.imageURL} alt="" />
          </div>
          <h1>{blog?.title}</h1>
          <p>{blog?.blog}</p>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
