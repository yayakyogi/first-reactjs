import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";

export default function Content() {
  const [blogs, setBlogs] = useState([
    { title: "My New Website", body: "lorem ipsum...", author: "mario", id: 1 },
    {
      title: "Welcome to the party",
      body: "lorem ipsum...",
      author: "yoshi",
      id: 2,
    },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);

  const handleDelete = (id) => {
    const newBlog = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlog);
  };

  useEffect(() => {
    if (blogs.length < 3) {
      console.log("Sukses menghapus blog");
    }
  }, [blogs]);

  return (
    <div className="content">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
    </div>
  );
}
