let num: number[][] =[[1,2,3,4,5,6,7,8,9,10]];

let person:{
    name: string,
    age: number
} = {
    name: 'John',
    age: 30 
}

let greeting: (name: string) => string;
greeting = function(name: string){
    return `Hello ${name}`;
}

let greeting2 = (name: string): string => {
    return `Hello ${name}`;
}

let printArray = (arr: number[][]) => {
    arr.forEach(row => {
        row.forEach(element => {
            console.log(element);
        });
    });
}
console.log(greeting2(person.name));

printArray(num);