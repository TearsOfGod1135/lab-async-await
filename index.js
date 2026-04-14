// Write your code here!
// Function to display posts on the page
function displayPosts(posts) {
  const postList = document.getElementById('post-list');

  // Clear existing posts before adding new ones
  postList.innerHTML = '';

  // Loop through the posts array
  posts.forEach(post => {
    // Create elements
    const li = document.createElement('li');
    const title = document.createElement('h1');
    const body = document.createElement('p');

    // Add content
    title.textContent = post.title;
    body.textContent = post.body;

    // Append elements
    li.appendChild(title);
    li.appendChild(body);
    postList.appendChild(li);
  });
}

// Async function to fetch posts from API
async function fetchPosts() {
  try {
    // Fetch data from JSONPlaceholder API
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    // Convert response to JSON
    const posts = await response.json();

    // Call display function
    displayPosts(posts);

  } catch (error) {
    console.error('Error fetching posts:', error);
  }
}

// Call the function to start the process
fetchPosts();