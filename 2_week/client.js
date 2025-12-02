const url = "http://localhost:3000/data";
// const url = "https://jsonplaceholder.typicode.com/todos"


async function getJsonData() {
    const response = await fetch(url);

// get
    console.log("status", response.status);
    console.log("IsOk", response.ok);
    // get
    if(response.status == 200) {
        console.log("Everythink ok");
    } else if (response.status >= 400) {
        console.log("Error ", response.statusText);
    }
    const MyJson = await response.json();
    console.log(MyJson);
    MyJson.products.forEach(element => {
        console.log(element.name);

    });
}

// get function
//getJsonData();

// for post
const data = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
]

// post
const url2 = "http://localhost:3000/send";
async function sendData() {
    const response = await fetch(url2, {
        method: "POST",
        headers: { "Content-type": "application/json"},
        body: JSON.stringify(data),
    });

    if(response.ok && response == 200) {
        console.log(await response.json());
    } else {
        console.log("error");
    }
}

// function post
sendData();


/*
const data = response.then((item) => item.json());
data.then(MyJson => {
    console.log(MyJson);
})
*/