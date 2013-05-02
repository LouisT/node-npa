/*
  NPA (NATO phonetic alphabet) - v0.1.1 - Node.js & Browser
  By Louis T. <louist@ltdev.im>
  https://github.com/LouisT/node-npa/
  https://en.wikipedia.org/wiki/NATO_phonetic_alphabet
*/
(function(Setup) {
  "use strict"
  var NPA = function () {
          if (!(this instanceof NPA)) {
             return new NPA();
          };
          this.data = {
               'a':['Alfa','.-'],'b':['Bravo','-...'],'c':['Charlie','-.-.'],'d':['Delta','-..'],'e':['Echo','.'],
               'f':['Foxtrot','..-.'],'g':['Golf','--.'],'h':['Hotel','....'],'i':['India','..'],'j':['Juliett','.---'],
               'k':['Kilo','-.-'],'l':['Lima','.-..'],'m':['Mike','--'],'n':['November','-.'],'o':['Oscar','---'],
               'p':['Papa','.--.'],'q':['Quebec','--.-'],'r':['Romeo','.-.'],'s':['Sierra','...'],'t':['Tango','-'],
               'u':['Uniform','..-'],'v':['Victor','...-'],'w':['Whiskey','.--'],'x':['Xray','-..-'],'y':['Yankee','-.--'],
               'z':['Zulu','--..'],'1':['One','.----'],'2':['Two','..---'],'3':['Three','...--'],'4':['Four','....-'],
               '5':['Five','.....'],'6':['Six','-....'],'7':['Seven','--...'],'8':['Eight','---..'],'9':['Nine','----.'],
               '0':['Zero','-----'],'-':['Dash','-....-'],',':['Comma','--..--'],
          };
          this.revs = {
               'one':'1','two':'2','three':'3','four':'4','five':'5','six':'6','seven':'7','eight':'8','nine':'9','dash':'-',
               'comma':',',
          };
  };
  NPA.prototype.__ucfirst  = function (str) {
          return str.replace(/(\w)(.[^\.\?\!]+\w)/g,function (a,b,c) {
                 return b.toUpperCase()+c;
          });
  };
  NPA.prototype.__buildMorse = function () {
          if (!('morse' in this)) {
             this.morse = {};
             for (var key in this.data) {
                 if (this.data.hasOwnProperty(key)) {
                    this.morse[this.data[key][1]] = key;
                 };
             };
          };
          return (!!Object.keys(this.morse).length?this.morse:false);
  };
  NPA.prototype.__runner = function (str,mode) {
          var str = String(str).toLowerCase(),
          switch (mode) {
                 case 2:
                      var spaces = str.split('-'),
                          ret = [];
                      for (var num in spaces) {
                          var piece = [], 
                              split = spaces[num].split(',');
                          for (var letn in split) {
                              var curr = split[letn].toLowerCase();
                              piece.push((!(curr in this.revs)?curr[0]:this.revs[curr]));
                          };
                          ret.push(piece.join(''));
                      };
                      return this.__ucfirst(ret.join(' '));
                 case 3:
                      if (this.__buildMorse()) {
                         var spaces = str.replace(/[^\-\.\s]/g,'').split('  '),
                             ret = [];
                         for (var num in spaces) {
                             var piece = [],
                                 split = spaces[num].split(' ');
                             for (var morn in split) {
                                 if (this.morse[split[morn]]) {
                                    piece.push(this.morse[split[morn]]);
                                 };
                             };
                             ret.push(piece.join(''));
                         };
                         return ret.join(' ').toUpperCase();
                      };
                      return false;
                 case 1:
                 default:
                      var spaces = str.split(' '),
                          ret = [];
                      for (var num in spaces) {
                          var piece = [],
                              self = this;
                          if (mode === 1) {
                             spaces[num] = spaces[num].replace(/[^a-z0-9\s\-]/gi,'');
                          };
                          spaces[num].replace(/./gi,function (char) {
                              piece.push((self.data[char]?self.data[char][(mode===1?'1':'0')]:char));
                          });
                          ret.push(piece.join((mode===1?' ':',')));
                      };
                      return ret.join((mode===1?'  ':'-'));
          };
  };
  NPA.prototype.toMorse = function (str) {
          return this.__runner(str,1);
  };
  NPA.prototype.fromMorse = function (str) {
          return this.__runner(str,3);
  };
  NPA.prototype.toNPA = function (str) {
          return this.__runner(str,0);
  };
  NPA.prototype.fromNPA = function (str) {
          return this.__runner(str,2);
  };
  Setup(NPA);
})((typeof exports!=='undefined'?function(fn){module.exports=fn;}:function(fn){this['NPA']=fn();}));
