class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

let second = new ListNode(2, null);
let first = new ListNode(1, second);

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  if (l1 != null && l2 != null) {
    console.log(l1.val);
    console.log(l2.val);
    l1.val = 10;
    console.log(l1.val);
  }

  return null;
}

addTwoNumbers(first, second);

