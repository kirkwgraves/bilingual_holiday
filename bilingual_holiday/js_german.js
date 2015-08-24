var Greeting = (function(greeting) {
  
  var germanMessage = "";

  var germanLexicon = {
    Merry: "Fröhliche",
    Christmas: "Weihnachten",
    and: "und",
    Happy: "frohes",
    New: "neues",
    Year: "Jahr"
  };

  greeting.translateToGerman = function(userInput) {

      for(i = 0; i < userInput.length; i++) {
        germanMessage += (germanLexicon[userInput[i]] || userInput[i]) + " ";
        
        output = document.getElementById('outputTranslatedMsg');
        output.innerHTML = germanMessage;
      
      }   
    
  }


  
  return greeting;

})(Greeting);
