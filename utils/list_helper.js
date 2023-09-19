const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  let total = 0;
  blogs.forEach((element) => {
    total += element.likes;
  });

  return total;
};

const favouriteBlog = (blogs) => {
  let maxLikes = 0;

  blogs.forEach((element) => {
    if (element.likes > maxLikes) {
      maxLikes = element.likes;
    }
  });

  return maxLikes;
};

const mostBlogs = (array) => {
  const countAuthors = {};
  const arrayOfAuthors = array.map((element) => element.author);

  arrayOfAuthors.forEach(
    (el) => (countAuthors[el] = (countAuthors[el] || 0) + 1)
  );

  const values = Object.values(countAuthors);
  const maxValue = Math.max(...values);

  function newObj() {
    for (const property in countAuthors) {
      if (countAuthors[property] === maxValue)
        return { author: property, blogs: countAuthors[property] };
    }
  }

  return newObj();
};

const mostLikes = (blogs) => {
  let authors = blogs.map((blog) => blog.author);
  authors = [...new Set(authors)];

  let total = new Array(authors.length).fill(0);
  blogs.map((blog) => (total[authors.indexOf(blog.author)] += blog.likes));

  let index = total.indexOf(Math.max(...total));

  return {
    author: authors[index],
    likes: total[index],
  };
};

module.exports = {
  dummy,
  totalLikes,
  favouriteBlog,
  mostBlogs,
  mostLikes,
};
