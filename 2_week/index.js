const url = "https://jsonplaceholder.typicode.com/posts";
const urlPatch = "https://jsonplaceholder.typicode.com/posts/1";

async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    // get DOM, get element by id
    // only class whith small taht
    const divData = document.getElementById("jsondata");
    //divData.innerText = "Hello"
    data.forEach(post => {
        divData.innerHTML += post.title + "/br"
    });
}

//getData();

// Post

const title = document.getElementById("title");
const boby = document.getElementById("body");
const userId = document.getElementById("userID");
const btn = document.getElementById("btnSend");

//console.log(title.value);
console.log("btn", btn);

const json = {
    title: "",
    boby: "",
    userId: "-1"
}

btn.addEventListener("click", (event) => {
    // console.log(event);
    //console.log(title.value);
    json.title = title.value;
    json.boby = boby.value;
    json.userId = userId.value;

    console.log(json);
    //sendPost(json);
    //sendPatch(body: body.value)
    getOptions();
});

async function sendPost(_body) {
    await fetch(url, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(_body)
    })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.log(error));
}

async function sendPatch(_body) {
    await fetch(urlPatch, {
        method: "PATCH",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(_body)
    })
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.log(error));
}


// Options
async function sendOptions() {
    await fetch(url, {
        method: "OPTIONS",
        headers: {
            "Content-type": "application/json"
        },
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error));
}