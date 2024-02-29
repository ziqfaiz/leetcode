/** 
 * Twosums
 */ 

let solution = (arr: number[], target: number): (number|undefined)[] => {
    let map = new Map<number, number>();

    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])){
            console.log(map);
            return[i,map.get(arr[i])]
        }

        else{
            map.set(target-arr[i],i);
        }
       
    }
    return [];
}

let solution2 = (arr: number[], target: number): (number|undefined)[] => {
    let map = new Map<number, number>();

    arr.forEach((element, index) => {
        if (map.has(element)){
            return [index, map.get(element)];
            
        }
        else{
            map.set(target-element, index);
        }
        
    });

    console.log(map);
    return [];
}


let arr: number[] = [2,7,11,15];

console.log(solution2(arr,9));