/**189-旋转数组
 * @date 2020.12.06 11:45
 */
var rotate = function (nums, k) {
    let pre;
    let next;
    let total = nums.length
    for (let i = 0; i < k; i++) {
        pre = nums[nums.length - 1];
        console.log(pre);
        for (let j = 0; j < total; j++) {
            next = nums[j];
            nums[j] = pre;
            pre = next;
        }
    }
    console.log(nums);
    return nums;
}
rotate([1, 2, 3, 4, 5, 6, 7], 3)

var rotate1 = function (nums, k) {
    k %= nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
    console.log("rotate1", nums);
}
var reverse = function (nums, start, end) {
    while (start < end) {
        let pre = nums[start];
        nums[start] = nums[end];
        nums[end] = pre;
        end--;
        start++;
    }
}

rotate1([1, 2, 3, 4, 5, 6, 7], 3)