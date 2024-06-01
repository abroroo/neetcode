function twoSum(nums: number[], target: number): number[] {
    let l:number = 0
    let r: number = 1
    while (l <= nums.length){
        while(r <= nums.length){
            if (nums[l] + nums[r] == target){
                return [l, r]
            }
            r++
        }
        l++
        r = l + 1
    }
    return [0]
};
