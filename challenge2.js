function orderedCount(str) {
    const counts = {};
    const result = [];
    
    // Count the occurrences of each character in the string
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      counts[char] = counts[char] ? counts[char] + 1 : 1;
    }
    
    // Convert the counts object to a list of arrays
    for (let char of str) {
      if (counts[char] > 0) {
        result.push([char, counts[char]]);
        counts[char] = 0; // Mark the character as counted
      }
    }
    
    return result;
  }
  