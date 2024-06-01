function isAnagram(s: string, t: string): boolean {
    if (s.length != t.length) return false
    let hashS = new Map<string, number>();
    let hashT = new Map<string, number>();

    Array.from(s).map((i: string) => hashS.set(i, hashS.has(i) ? (hashS.get(i) + 1) : 1))
    Array.from(t).map((i: string) => hashT.set(i, hashT.has(i) ? (hashT.get(i) + 1) : 1))

    for(let i = 0; i < t.length; i++){
        if (hashT.get(t[i]) != hashS.get(t[i])) {
            return false
        }
    }
    return true
};

// need to add my explanation 