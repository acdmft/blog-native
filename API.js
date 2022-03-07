export function fetchPosts() {
  fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((res) => res.json())
    .then((res) => {
      return res;
    })
    .catch((err)=>console.log(err));
}