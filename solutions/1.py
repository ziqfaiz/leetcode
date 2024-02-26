def twoSum(self, nums: list[int], target: int) -> list[int]:
        hash_map = {}
        for i in range(len(nums)):
            if nums[i] in hash_map:
                return [i, hash_map[nums[i]]]
            else:
                hash_map[target - nums[i]] = i
                print(hash_map)

arr = [2,7,11,15]

print(f"Output: {twoSum(None, arr, 9)}")