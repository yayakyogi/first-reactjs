import PropTypes from "prop-types";

export default function BlogList(props) {
  const { blogs, title, handleDelete } = props;
  const listPost = blogs.map((blog) => {
    return (
      <div
        style={{
          borderRadius: 10,
          marginBottom: 30,
          display: "flex",
          justifyContent: "space-between",
        }}
        key={blog.id}
      >
        <div>
          <h1 style={{ color: "red" }}>{blog.title}</h1>
          <p>{blog.body}</p>
        </div>
        <button style={{ width: 100 }} onClick={() => handleDelete(blog.id)}>
          Hapus
        </button>
      </div>
    );
  });
  return (
    <div>
      <h1 style={{ color: "red", marginBottom: 20 }}>{title}</h1>
      {listPost}
    </div>
  );
}

BlogList.propType = {
  blogs: PropTypes.object,
  title: PropTypes.string,
  handeClick: PropTypes.func,
};
