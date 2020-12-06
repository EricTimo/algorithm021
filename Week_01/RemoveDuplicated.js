var removeDuplicates = function (nums) {
    let total = nums.length;
    if (total == 0) {
        return 0;
    }
    let p = 0;
    let n = 1;
    while (n < total) {
        if (nums[p] != nums[n]) {
            p++
            nums[p] = nums[n];
        }
        n++;
    }
    console.log(nums, p + 1);
    return p + 1;
}

var removeDuplicates1 = function (nums) {
    let val
    let n = 0;
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if (val != element) {
            val = element;
            n = 1;
        } else {
            n++;
            if (n > 1) {
                nums.splice(i, 1);
                i--;
            }
        }
    }
    console.log(nums, nums.length);
    return nums.length;
}
removeDuplicates([1, 1, 2])
removeDuplicates1([1, 1, 2])