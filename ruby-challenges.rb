# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

reposts1 = 7
# Expected output: '7 is odd'
reposts2 = 42
# Expected output: '42 is even'
reposts3 = 221
# Expected output: '221 is odd'

def is_even_or_odd num
        if num % 2 == 0
            return "#{num} is even" 
        else num % 2 == 1
            return "#{num} is odd"
        end
    end
puts is_even_or_odd 7 
puts is_even_or_odd 42
puts is_even_or_odd 221

# Pseudo code:
# Create a method called is_even_or_odd using snake_case that takes in a number and determines if its odd or even.
# The parameter is a number
# Use a conditional to determine even or odd- using modulo, so if 2 divides its even if it doesn't it's odd. 


# # -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# # HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# # Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# # Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# # Expected output: 'bby Rd'

def vowel_remover(string)
   string = string.delete('aeiou')
   string = string.delete('AEIOU')
return string 
end

puts vowel_remover(beatles_album1)
puts vowel_remover(beatles_album2)
puts vowel_remover(beatles_album3)

# # Pseudo code:
# Create a method called vowel_remover that takes in a string and removes vowels.
# The parameter is a string
# Use bulit in method delete to delete vowles from string and return word without vowels.
# Create a second function to delete capital vowels.
# Then return it as a string.

# # -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_test_case1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_test_case2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_test_case3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def is_palindrome(string)
    string_o = string.downcase
    if string_o == string_o.reverse
        return "#{string} is a palindrome"
    else
        return "#{string} is not a palindrome"
    end
end

puts is_palindrome(palindrome_test_case2)

# # Pseudo code:
# Create a method called is_palindrome.
# The parameter is a string
# Create a secondary method called string_o to change the string to lowercase letters.
# using string_o complete the task of reversing the string. 
# use a condtional to determine if the string is a palindrome. 