package linkedlist

import "fmt"

type ListNode struct {
	val  int
	next *ListNode
}

func (ll *ListNode) insert(newNode *ListNode) {
	ll.next = newNode
}

func (ll *ListNode) display() {
	for ll != nil {
		fmt.Println(ll.val)
		ll = ll.next
	}
}

func main() {
	ll := ListNode{val: 1, next: nil}
	ll.insert(&ListNode{val: 2, next: nil})
	ll.display()
}
