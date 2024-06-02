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
