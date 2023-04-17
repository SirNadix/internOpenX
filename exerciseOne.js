function lengthOfLongestSubstring(str) {
	let longestString = '';
  
	for (let i = 0; i < str.length; i++) {
	  if (longestString.includes(str[i])) {
		return longestString;
	  } else {
		longestString += str[i];
	  }
	}
	return longestString;
  }
  
  const test1 = 'ababbasd';
  const test2 = 'pwwkew';
  const test3 = 'llojdoos';
  
  const result1 = lengthOfLongestSubstring(test1);
  const result2 = lengthOfLongestSubstring(test2);
  const result3 = lengthOfLongestSubstring(test3);
  
  console.log(`The result for ${test1} is ${result1} and have length ${result1.length}`);
  console.log(`The result for ${test2} is ${result2} and have length ${result2.length}`);
  console.log(`The result for ${test3} is ${result3} and have length ${result3.length}`);