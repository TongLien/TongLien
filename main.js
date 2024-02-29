var i=0;
while(i<10)
{
    console.log(i);
    i++;
}

for(let a=0;a<16;a++)
{
    console.log(a);
}

let a = [
    "TienLong",
    "TongLien",
    "TTL",
]
console.log(a);
console.log(a.pop());
console.log(a.shift());
console.log(a);

let dt = {
    name: "TTL",
    age: "15",
    located: "TG Province",
}
console.log(dt);

let b = [
    "TienLong",
    ["LNMC",{
        ten: "MC",
        tuoi: "15",
    }],
    "TTL",
]
console.log(b[1][1].ten);
