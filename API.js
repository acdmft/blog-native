export function fetchPosts(userId) {
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
    .then((res) => res.json())
    .then((res) => {
      console.log('fetchPosts')
      return res;
    })
    .catch((err)=>console.log(err));
}