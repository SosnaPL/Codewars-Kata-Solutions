'''
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here http://rosalind.info/problems/list-view/ (source)

DNA_strand ("ATTGC") # return "TAACG"

DNA_strand ("GTAT") # return "CATA"
'''
def DNA_strand(dna):
    result = []
    check = ["A", "C", "T", "G"]
    replace = ["T", "G", "A", "C"]
    chars = list(dna)
    for char in chars:
        if(char in check):
            result.append(replace[check.index(char)])
        else:
            result.append(char)
    return "".join(result)