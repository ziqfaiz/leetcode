package main

import (
	"fmt"
)

type ListNode struct {
	val  int
	next *ListNode
}

func (ll *ListNode) insert(newNode *ListNode) *ListNode {
	ll.next = newNode
	return newNode
}

// make it acept an array
func (ll *ListNode) display() {
	for ll != nil {
		fmt.Println(ll.val)
		ll = ll.next
	}
}

func addTwoNumbers(l1, l2 *ListNode) *ListNode {
	solution := new(ListNode)
	return solution
}

func main() {
	ll1 := ListNode{val: 5, next: nil}
	ll1.insert(&ListNode{val: 1, next: nil}).insert(&ListNode{val: 2, next: nil})
	ll1.display()
	ll2 := ListNode{val: 6, next: nil}
	ll2.insert(&ListNode{val: 1, next: nil})
	ll2.display()
}
