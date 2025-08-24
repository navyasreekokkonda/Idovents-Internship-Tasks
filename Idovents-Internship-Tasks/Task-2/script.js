fetch('blogs.json')
  .then(res => res.json())
  .then(data => {
    const blogList = document.getElementById('blog-list');
    data.forEach(blog => {
      blogList.innerHTML += `
        <div class="blog-card">
          <img src="${blog.thumbnail}" alt="${blog.title}">
          <h2>${blog.title}</h2>
          <p>${blog.description}</p>
          <a href="blog.html?id=${blog.id}" class="read-more">Read More</a>
        </div>
      `;
    });
  })
  .catch(err => console.error("Error loading blogs:", err));

