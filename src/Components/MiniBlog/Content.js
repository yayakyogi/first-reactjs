import React, { useState } from "react";

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

  const listPost = blogs.map((blog) => {
    return (
      <div
        style={{
          width: "75%",
          background: "lightgreen",
          borderRadius: 10,
          padding: 10,
          marginBottom: 10,
        }}
        key={blog.id}
      >
        <h1>{blog.title}</h1>
        <p>{blog.body}</p>
      </div>
    );
  });
  return <div className="content">{listPost}</div>;
}
