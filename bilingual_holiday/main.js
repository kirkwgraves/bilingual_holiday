var Greeting = (function() {

  return {

    getInput: function() {
      var userInput = document.getElementById('takesEnglish').value;
      return userInput;
    },

    translate: function() {

        var userInput = document.getElementById('takesEnglish').value;
        var language = document.getElementById('languages').value;

        var wordsArray = userInput.split(" ");

        // console.log('You need to translate ' + userInput + ' to ' + language);

        // console.log(wordsArray);

        if (wordsArray.length > 0 && language == 'German') {
          Greeting.translateToGerman(wordsArray);
        };

        if (wordsArray.length > 0 && language == 'Spanish') {
          Greeting.translateToSpanish(wordsArray);
        };
    }

  }

})();


document.getElementById('translate').addEventListener('click', Greeting.translate);