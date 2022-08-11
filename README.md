# CS6388MiniProject

Note to Professor: Hello Professor, I apologize for not being able to complete the entire mini project. I unfortunately have had a death in the family as well as starting a new role at my job and have had very little time to be able to work on this project with everything happening outside of school/trying to get in my HWs for this class as well as my other class. I got a bit backloaded towards the end of the semester with HW 5,6,7 in this course as well as the final assessments in my other class given all of the personal stuff I had to deal with outside of school and work. I believe that if I had more time I would be able to complete the project in entirerty as I feel comfortable with the objectives of the project and understand the end goal as well as getting A's on every HW in the class. Again, I am really sorry for not turning in a 100% completed project. I have attempted 65% of this project with the meta model, decoration and the webgme design studio code. I understand what is needed for the interpretation section as this is similar to the last few HWs. The only part that i was unfamilar with was the simulation. I am upset with not being able to complete the design studio in entirty but feel confident in my learnigns from the class given that I have a 97% at the moment. Thank you for a great semester, I really enjoyed being in your class!

## Read Me
What is a Petri Net: A Petri net, also known as a place/transition net, is one of several mathematical modeling languages for the description of distributed systems. A Petri net is a directed bipartite graph that has two types of elements, places and transitions, depicted as circles and rectangles, respectively. A place can contain any number of markings, depicted as black circles. A transition is enabled if all places connected to it as inputs contain at least one token.

Typical Use Case: state machines, data flow, parallelism, communication protocols, synchronization controls, etc.

How to install the design studio: I have not completed my design studio, but if it was the following steps would be followed to install the design studio: Install the following: NodeJS, MongoDb, WebGME CLI. Then run the mongod command from the MongoDb installation, then run webgme start from the project root. From there you can access the design studio from the following address: http://localhost:8888.

How to start modeling: Create a new project and select the seed to be petrinetds.

What features: This design studio will allow the user to create petri nets as well as view the classification that their petri net falls under. Below are the following classifications:

● Free-choice petri net​ - if the intersection of the inplaces sets of two transitions are not
empty, then the two transitions should be the same (or in short, each transition has its
own unique set if ​inplaces)​
● State machine​ - a petri net is a state machine if every transition has exactly one ​inplace
and one ​outplace​.
● Marked graph​ - a petri net is a marked graph if every place has exactly one out transition
and one in transition.
● Workflow net ​- a petri net is a workflow net if it has exactly one source place s where *s
=∅, one sink place o where o* =∅, and every x∈P∪T is on a path from s to o.
