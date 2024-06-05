function groupAnagrams(strs: string[]): string[][] {
    let hash = new Map()
    for (let str of strs) {
        let sorted = str.split('').sort().join('');
        if (!hash.has(sorted)){
            hash.set(sorted, [str])
        } else {
            hash.get(sorted).push(str)
        }
    }
    return Array.from(hash.values())
};


// fucked up time complexity  O(n * klog(k))

// since sort can't be used with str, we convert the str to an array and sort
// we set sorterd array in hash and populate it again if we encounter same str
//for example:
// hash = {
//     'abc': ['abc', 'abc']
//     'ljk': ['ljk']
//     'dej': ['dej', 'dej', 'dej']
// }
// aftre looping over all strs we create new array from the valus of hashes