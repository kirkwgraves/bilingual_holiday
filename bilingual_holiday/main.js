var Greeting = (function() {


  return {

    getInput: function() {
      var userInput = $('#takesEnglish').val();
      return userInput;
    },

    translate: function() {

        var userInput = $('#takesEnglish').val();
        var language = $('#languages').val();

        var wordsArray = userInput.split(" ");

        console.log('You need to translate ' + userInput + ' to ' + language);

        console.log(wordsArray);

        if (wordsArray.length > 0 && language == 'German') {
          Greeting.translateToGerman(wordsArray);
        };

        if (wordsArray.length > 0 && language == 'Spanish') {
          Greeting.translateToSpanish(wordsArray);
        }
    }

  };
})();




$(document).on('click', '#translateButton', function() {
  var inputEl =
  if ($(radio is selected).val() === x)
}else 
{

}
});
















