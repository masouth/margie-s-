$(document).ready(function() {

  // I love what you are trying to do here!
  //since youve made an object for each type of book we can specify this when we call the which book method
  var fic = {};
  var nonFic = {};
  var easyFic = {};

  easyFic.answers = ["E BER", "E POL", "E WIL", "E MIN", "E SMI", "E KIN"];
  nonFic.answers = ["636.8", "001.7", "323.4", "900.98", "292.2", "741.5"];
  fic.answers = ["FIC KIN", "FIC HAH", "FIC ANG", "FIC PAU", "FIC RUS", "FIC DUP"];

  fic.whichBook = function(question) { // I think i need an image/ button here to connect to from html//

    var randomNumber = Math.random();

    var randomNumberForWhichBook = randomNumber * this.answers.length;

    var randomIndex = Math.floor(randomNumberForWhichBook);

    var answer = this.answers[randomIndex];

    $("#answer").text(answer);

    console.log(question);
    console.log(answer);
  };

  fic.whichBook("Which fiction book?");

//});//

nonFic.whichBook = function(question) { // I think i need an image/ button here to connect to from html//

    var randomNumber = Math.random();

    var randomNumberForWhichBook = randomNumber * this.answers.length;

    var randomIndex = Math.floor(randomNumberForWhichBook);

    var answer = this.answers[randomIndex];

    $("#answer").text(answer);

    console.log(question);
    console.log(answer);
  };

  nonFic.whichBook("Which NF book?");

//});//
easyFic.whichBook = function(question) { // I think i need an image/ button here to connect to from html//

    var randomNumber = Math.random();

    var randomNumberForWhichBook = randomNumber * this.answers.length;

    var randomIndex = Math.floor(randomNumberForWhichBook);

    var answer = this.answers[randomIndex];

    $("#answer").text(answer);

    console.log(question);
    console.log(answer);
  };

  easyFic.whichBook("Which Easy Fiction book?");

  $("#ficButton").click (onClick);

});
