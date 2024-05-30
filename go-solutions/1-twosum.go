package main

import "fmt"

func twosum(nums []int, target int) []int {
	m := make(map[int]int)
	for i := 0; i < len(nums); i++ {
		residue := target - nums[i]
		val, ok := m[residue]
		if ok {
			return []int{val, i}
		} else {
			m[nums[i]] = i
		}
	}
	return []int{}
}

func main() {
	fmt.Print(twosum([]int{2, 3, 11, 7}, 9))
}
