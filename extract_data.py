import sys
import string

def get_strings(filename, min_length=4):
    with open(filename, "rb") as f:
        content = f.read()
    
    result = ""
    current = ""
    for b in content:
        c = chr(b)
        if c in string.printable:
            current += c
        else:
            if len(current) >= min_length:
                result += current + "\n"
            current = ""
    return result

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python strings.py <filename>")
        sys.exit(1)
    
    printable_strings = get_strings(sys.argv[1])
    # Search for keywords in the printable strings
    keywords = ["Area", "Plot", "Location", "Approved", "DTCP", "HMDA", "YTDA", "Venture", "Project", "Kaku", "Jangam"]
    for line in printable_strings.split("\n"):
        if any(kw.lower() in line.lower() for kw in keywords):
            print(line)
