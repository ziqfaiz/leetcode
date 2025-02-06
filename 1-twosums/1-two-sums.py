class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        temp = {}

        for i,num in enumerate(num):
            complement = target-num

            if complement in temp:
                return [i, temp[complement]]

            else:
                temp[num]=i
        return False