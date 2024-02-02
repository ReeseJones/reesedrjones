module.exports = {
    tags: ["posts"],
    layout: "post_layout.html",
    date: "git Last Modified",
    parent: "posts",
    eleventyComputed: {
      eleventyNavigation: {
        key: data => data.title,
        parent: data => data.parent
      }
    }
  };