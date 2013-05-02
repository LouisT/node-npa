NPA (v0.1.0)
======

Install: npm install npa

This project is [Unlicensed](http://unlicense.org/ "Title").
In other words, I don't care what you do with it.
However, if you make something interesting, I would like to check it out.

Information:
------
Well, the wiki article probably says enough. Find it [here](https://en.wikipedia.org/wiki/NATO_phonetic_alphabet "Title").

    NOTE: This was just for fun. Inspired by "Foxtrot Uniform Charlie Kilo" - Bloodhound Gang.

Usage:
------
    var NPA = require('npa')();

    NPA.toNPA(string) - Convert a string to NPA.

    NPA.fromNPA(string) - Convert a string from NPA.

    NPA.toMorse(string) - Convert a string to morse code.
 
    NPA.fromMorse(string) - Convert a string from morse code.


    Node.js:
       var NPA = require('npa')(),
           string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum.';
       var morse = NPA.toMorse(string);
       console.log('(toMorse) '+string+':\n '+morse+'\n\n');
       console.log('(fromMorse) '+morse+':\n '+NPA.fromMorse(morse)+'\n\n');
       var npa = NPA.toNPA(string);
       console.log('(toNPA) '+string+':\n '+npa+'\n\n');
       console.log('(fromNPA) '+npa+':\n '+NPA.fromNPA(npa)+'\n\n');

    Browser:
       <script src="./npa.js"></script>
       <script>
          var string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum.',
              morse = NPA.toMorse(string);
          alert('(toMorse) '+string+':\n '+morse+'\n\n');
          alert('(fromMorse) '+morse+':\n '+NPA.fromMorse(morse)+'\n\n');
          var npa = NPA.toNPA(string);
          alert('(toNPA) '+string+':\n '+npa+'\n\n');
          alert('(fromNPA) '+npa+':\n '+NPA.fromNPA(npa)+'\n\n');
       </script>
