const url = "https://jsonplaceholder.typicode.com/users";

// 1 вариант - try/catch
try {
    const response = fetch(url);

    // обрабатывает Promise от fetch и извлекает JSON-данные из ответа
    const data = response.then(_response => _response.json());

    // выводит JSON-данные в консоль (только пользователей)
    const _json = data.then(json => {
        //console.log(json)
        json.forEach(element => {
            console.log(element.username);
        });
    });
    console.log(_json);

} catch (error) {
  console.error(error.message);
}


// 2 вариант - Promise .catch
const response = fetch(url, {
    method: "POST",
    body: JSON.stringify({username: "example"}),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
});
console.log(response);

response
.catch((err) => {
    console.error(err);
    console.log('Custom error');
})
.finally(() => {
    console.log('finally: Experiment completed');
});
// обрабатывает Promise от fetch и извлекает JSON-данные из ответа
const data = response.then(_response => _response.json());
/*
const _json = data.then(json => {
    //console.log(json)
    json.forEach(element => {
        console.log(element.username);
    });
});
*/


// Async/Await
function delay(){
    return new Promise(resolve => console.log('Hello 1.1'));
}

console.log('Hello1');
const _response = async () => {
    await delay();
}
_response()

console.log('Hello2');
console.log('Hello3');


/*
console.log("first");
setTimeout(() => {
  console.log("Hello");
}, 2000);
console.log("second");
console.log("third");
*/