# CHALLENGE 1
 1. create an array of three strings that correspond to the three possible outcomes of the comparison.
 2. We then use the Number function to convert the boolean expressions a > b and a >= b to numbers (0 or 1).
 3. add them together to get the index of the string to be returned.


 # CHALLENGE 2
 This solution uses two loops.
 1. The first loop counts the occurrences of each character in the string by iterating over each character and updating a counts object. 
 2. The counts object is a key-value pair where the keys are the characters and the values are the counts.

 3. The second loop converts the counts object to a list of arrays in the order of appearance.
 4. It does this by iterating over the characters in the string and checking whether the character has already been counted. 
 5. If the character has not been counted, it adds a new array to the result list that contains the character and its count, and marks the character as counted by setting its count to 0.#   c o d i l i t y  
 