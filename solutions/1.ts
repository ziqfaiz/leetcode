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

let arr: number[] = [2,7,11,15];

console.log(solution(arr,9));