const postListEl = document.querySelector('.post-list');

async function main() {
  const id = localStorage.getItem("id");
  const posts = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );
  const postsData = await posts.json();
  console.log(postsData);

  postListEl.innerHTML = postsData.map((posts) => postsHTML(posts)).join('');
}

function postsHTML(posts) {
    return `<div class="post">
    <div class="post__title">${posts.title}</div>
    <p class="post__body">${posts.body}</p>
    </div>`
}

main();
