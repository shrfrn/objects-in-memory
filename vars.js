var num = 3
var firstName = 'Bob'
var isAdmin = true

var nums = [3, 4, 5, 6]     // nums => 0x0020

var student = {             // student => 0x0050
    name: 'Barry',
    age: 20,
    grade: 70,
    classes: ['Math', 'History', 'Biology']
}

function foo() {            // foo => 0x00a0
    console.log('Hi')
}

var numCopy = num           // numCopy => 3
var numsCopy = nums         // numsCopy => 0x0020
var studentCopy = student   // studentCopy => 0x0050
var fooCopy = foo           // fooCopy => 0x00a0