let x = 1
let arr = [ "a", 1, true, undefined]


let arr2 = [
    ["a", "b"],
    [1, true, false]
]

console.log(arr2[1][1][0]);


let json = {
    name: "Vladimir",
    type: {
        color: "red",
        width: 10,
        count: {
            type: 1
        },
        sum: function(x, y){
            return x + y;
        },
        calc2: () => "10"
    },
}


let json2 = [
    {
        name: "Maria",
        //name: ["Vladimir","VVP"],
        type: {
            color: "red",
            width: 10,
            count: {
                type: 1
            },
            sum: function(x, y){
                return x + y;
            },
            calc2: () => "10"
        },
    }
];

json2.forEach(item => {
    console.log(item.name);
});

let sJSON = JSON.stringify(json2)
console.log(JSON.stringify(json2))

let tJSON = '{"name":"Vladimir","type":{"color":"red","width":10,"count":{"type":1}}}'
console.log(JSON.parse(tJSON))

/*
console.log("-----", json2.name[0], "---------");

console.log(json.name);
console.log(json.type.color);
console.log(json.type.sum(5, 15));
console.log(json.type.calc2());

json.name = "Zhan";
console.log(json.name);

for (let index = 0; index < arr.length; index++) {
    console.log(arr[index])
}


let newArr = Object.entries(json);
console.log(newArr[1].type)

let arrValues = Object.values(json);
console.log("value:", arrValues[1].color);


let subQuery = Object.values(arrValues[1]);;
console.log(subQuery[1]);

let arrKeys = Object.keys(json);
console.log(arrKeys);

Object.entries(json).forEach((item) => {
    console.log(item[1]);
})
    */