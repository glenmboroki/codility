String.prototype.camelCase = function() {
    // Split the string into an array of words
    const words = this.trim().split(/\s+/);
  
    // Capitalize the first letter of each word and join them together
    const camelCased = words.map(word => {
      const firstLetter = word.slice(0, 1).toUpperCase();
      const rest = word.slice(1);
      return firstLetter + rest;
    }).join('');
  
    return camelCased;
  };

  const input1 = 'hello case';
console.log(input1.camelCase()); // Output: HelloCase

const input2 = 'camel case word';
console.log(input2.camelCase()); // Output: CamelCaseWord
