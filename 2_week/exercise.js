const posts_url = "https://jsonplaceholder.typicode.com/posts";

// Harjutus 1: Lihtne GET-päring (Fookus: fetch ja Promise)
const response = fetch(posts_url, {
    method: "GET",
});
const data = response.then(_response => _response.json());
const _json = data.then(json => {
    json.forEach(element => {
        console.log(element.title);
    });
});
response.catch((err) => {
    console.error(err);
});
console.log(_json);     


// Harjutus 2: Ümberkorraldamine async/await abil (Fookus: async/await ja vigade töötlus)
async function fetchPostsAsync() {
    try {
        const response = await fetch(posts_url);
        const data = await response.json();
        data.forEach(element => {
            console.log(element.title);
        });
    } catch (error) {   
        console.error(error.message);
    }
}
fetchPostsAsync();


// Harjutus 3: Kohandatud päringu loomine (Fookus: Request ja POST)
