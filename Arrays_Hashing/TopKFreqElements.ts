function topKFrequent(nums: number[], k: number): number[] {
    let map = new Map();

    for (let num of nums){
        map.set(num, (map.get(num) || 0) + 1)
    }
    let sorted = [...map.entries()].sort((a, b) => b[1] - a[1])

    return sorted.slice(0, k).map((pair) => pair[0])
};

/*
I first didn't understand the question. It asks for the length of K elements to be returned containing most frequent elements inside

But I though I should return an array with elements that occurs k or more times in the given input.


So the solution in here is to use a map, and assign frequency of each element in the map.
ex: {1: 3 (times),
     2: 2(times),
     3: 1,
     4: 1
     }

then sort in descending order b - a (second index of nested array: b[1] - a[1])  [[1, 2], [3, 2]]

then slice the sorted array by k length,

then create a new array from the keys(first elements in the array of obj) using map()

and return it

*/