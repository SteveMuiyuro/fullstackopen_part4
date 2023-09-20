const Blog = require("../models/blog");

const initialBlogs = [
  {
    title: "The great trek",
    author: "John Grisham",
    url: "www.treks.com",
    likes: 17,
  },

  {
    title: "The Legal Partner",
    author: "John Mwangi",
    url: "www.legals.com",
    likes: 20,
  },
];

const nonExistingId = async () => {
  const blog = new Blog({ content: "willremovethissoon" });
  await blog.save();
  await blog.deleteOne();

  return blog._id.toString();
};

const blogsInDb = async () => {
  const blogs = await Blog.find({});
  return blogs.map((blog) => blog.toJSON());
};

module.exports = {
  initialBlogs,
  nonExistingId,
  blogsInDb,
};
