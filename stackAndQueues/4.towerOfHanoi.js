// 3.4 In the classic problem of the Towers of Hanoi, you have 3 rods and N disks of different
// sizes which can slide onto any tower. The puzzle starts with disks sorted in ascending
// order of size from top to bottom (e.g., each disk sits on top of an even larger one). You
// have the following constraints:
// (A) Only one disk can be moved at a time.
// (B) A disk is slid off the top of one rod onto the next rod.
// (C) A disk can only be placed on top of a larger disk.
// Write a program to move the disks from the first rod to the last using Stacks.
// ________________________________________________________________pg 118

// constructor: 3 stacks, N numbers on stack 1
// moveDisks: move top of stack1 to stack2, then move top of stack1 to stack3
// move top of stack2(empty) to stack3
// move top of stack1 to stack2(empty), move top of stack3 to stack2,
// move top of stack3(empty) to stack1, 
// repeat until stack1 is empty while alternating between stack2 and stack3
// account for N === 0, N === 1, N === 2?

// 1 > 2
// 3 > 2
// 3 > 1
// 2 > 1
// 2 > 3
// 1 > 2
// 1 > 3
// 2 > 3