const findKthLargest = (nums, k) => {
    const partition = (arr, low, high) => {
        const pivot = arr[high];
        let i = low;

        for (let j = low; j < high; j++) {
            if (arr[j] >= pivot) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
                i++;
            }
        }

        [arr[i], arr[high]] = [arr[high], arr[i]];
        return i;
    };

    const quickSelect = (arr, low, high, k) => {
        const pivotIndex = partition(arr, low, high);

        if (pivotIndex === k - 1) {
            return arr[pivotIndex];
        } else if (pivotIndex < k - 1) {
            return quickSelect(arr, pivotIndex + 1, high, k);
        } else {
            return quickSelect(arr, low, pivotIndex - 1, k);
        }
    };

    return quickSelect(nums, 0, nums.length - 1, k);
};

const nums = [10, 4, 12, 9, 87, 34];
const K = 1;
console.log(findKthLargest(nums, K));
