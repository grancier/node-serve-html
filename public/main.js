function longestConsistentFragment(A) {
  A.map((number, idx) => {
    if (printDup(number)) {
      console.log("idx!!: ", idx)
    }
  })
}

// Javascript program for the above approach
 
// Function to print repeating
// digits present in the number N
function printDup(N)
{
  // Stores the count of
  // unique digits
  let resCount = 0;
 
  // Map to store frequency
  // of each digit
  let cnt = Array(10).fill(0);
 
  // Traversing the string
  const digits = N.toString().split('');
  const realDigits = digits.map(Number);
  realDigits.map((digit) => {
    cnt[digit]++;
  })
  // Traverse the Map
  for (var i = 0; i < 10; i++) {
 
    // If frequency
    // of digit exceeds 1
    if (cnt[i] > 0) {
      resCount++
      console.log(`${i}: ${cnt[i]}`);
    }
  }
 
  if (resCount > 0 && resCount <=  2) {
    return true
  }

  return false
}
 
const obj1 = {
  name: 'Ben Sherman',
  age: 42,
  address: '271 Oak Drive'
}

const obj2 = {
  name: 'Ben Sherman',
  career: 'accountant',
  country: 'Denamrk'
}

const newObj = Object.assign({}, obj1, obj2)

console.log(newObj)
console.log(longestConsistentFragment([23,26, 27, 3330, 333,33,30,0, 55, 505]))