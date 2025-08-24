const params = new URLSearchParams(window.location.search);
const blogId = params.get('id');

fetch('blogs.json')
  .then(res => res.json())
  .then(data => {
    const blog = data.find(b => b.id == blogId);
    if (blog) {
      document.getElementById('blog-detail').innerHTML = `
        <h1>${blog.title}</h1>
        <img src="${blog.thumbnail}" alt="${blog.title}">
        <p>${blog.content}</p>
      `;
    } else {
      document.getElementById('blog-detail').innerHTML = "<p>Blog not found.</p>";
    }
  })
  .catch(err => console.error("Error loading blog:", err));
