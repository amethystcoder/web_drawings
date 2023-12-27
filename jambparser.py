print("welcome to jamb parser")
year = input("input year and press enter")
subject = input("input subject and press enter")
questions = input("input all the questions to parse")

blah = []
newtxt = ""

for i in range(0,len(questions)):
    newtxt += questions[i]
    if questions[i] == "A" and questions[i+1] == ".":
        blah.append(newtxt)
        newtxt = ""
        newtxt += questions[i]
    if questions[i] == "B" and questions[i+1] == ".":
        blah.append(newtxt)
        newtxt = ""
        newtxt += questions[i]
    if questions[i] == "C" and questions[i+1] == ".":
        blah.append(newtxt)
        newtxt = ""
        newtxt += questions[i]
    if questions[i] == "D" and questions[i+1] == ".":
        blah.append(newtxt)
        newtxt = ""
        newtxt += questions[i]
    if questions[i] == "E" and questions[i+1] == ".":
        blah.append(newtxt)
        newtxt = ""
        newtxt += questions[i]
    
blah.append(newtxt) 
'''
for b in blah:
    print(b) '''
    
''' file = open('jambquestions.json',"w")
file.write(str(blah))
file.close() '''