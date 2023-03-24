function mergeStrings(str1, str2) {
    // Initialize overlap length to the shorter of the two strings
    let overlapLength = Math.min(str1.length, str2.length);
  
    // Find the maximum overlap by checking substrings of increasing length
    for (let i = overlapLength; i > 0; i--) {
      if (str1.slice(-i) === str2.slice(0, i)) {
        overlapLength = i;
        break;
      }
    }
  
    // Concatenate the strings, taking into account the overlap
    return str1 + str2.slice(overlapLength);
  }
  