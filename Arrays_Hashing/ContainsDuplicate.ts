function containsDuplicate(nums: number[]): boolean {
    nums.sort()
    let l: number = 0;
    let r: number = 1;
    while ( r < nums.length){
        if (nums[l] == nums[r]){
            return true
        }
        l++
        r++
    }
    return false
};


// need to write explanation of my solution  