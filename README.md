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
 5. If the character has not been counted, it adds a new array to the result list that contains the character and its count, and marks the character as counted by setting its count to 0.



# camelcase

This is a simple JavaScript method for converting strings to CamelCase. All words in the input string will have their first letter capitalized and any spaces will be removed.

Usage
To use this method, simply call the .camelCase() method on a string:

If the input string contains multiple words separated by spaces, they will be combined into a single CamelCase string:


Limitations
This method only works with ASCII strings. If you need to support Unicode characters, you may need to use a more advanced regular expression or library.

Contributing
If you find a bug or would like to suggest an improvement, please open an issue or submit a pull request on GitHub.

License
This code is licensed under the MIT License. Feel free to use it in your own projects!



# MERGE OVERLAPING STRINGS

Here's how the function works:

1.First, we initialize the overlap length to the length of the shorter of the two input strings.
2.Then, we loop through possible overlap lengths in decreasing order, starting from the initial overlap length. For each possible overlap length, 3.we check if the end of the first string matches the start of the second string using slice(). If we find a match, we update the overlap length and break out of the loop.
4.Finally, we concatenate the two strings using +, but we slice the second string to remove the overlapped characters.

