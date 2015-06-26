# CoOpRPG
Work in progress - will eventually be a text-based RPG for two players (sitting next to each other).
It will stay a single-page app - with documentation/about/links on different pages, I guess.
Maybe make a separate splash page?

At present:
  Bootstrap added;
  p1 and p2 objects exist;;
  Clicking buttons changes things on the html page;
  The play() error has been resolved;
  A function exists that can change exactly one stat at a time.
  A function sets player names.
  A function is in progress to alter equipment
To do:
  Make the function that alters equipment work
  Make a setAge() function
  Figure out the null error that I showed Chhun
  Implement a way of displaying/hiding player information
  	(button in header?)
  Implement icons?
  Implement social class/role
  	(Determines what NPCs expect of you)
  	(Dependent on stats, equipment, age)
  Implement multiple states:
  	Play? state (both players click PLAY, goes to...)
  	Make Characters state (interface to:
  		Increase/reduce stats
  		Get/drop equipment (off a list)
  		Set name
  		Set age
  		Set adjectives?
  			One positive description, one negative?
  		Set social class/role)
  	Game states (actual gameplay)
