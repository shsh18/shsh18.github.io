//app.js

// Function to toggle the visibility of blog posts
function toggleBlogPosts() {
    const posts = document.querySelectorAll('.blog-post');
    posts.forEach(post => {
        post.classList.toggle('hidden');
    });
}

// Smooth scroll for navigation links
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
