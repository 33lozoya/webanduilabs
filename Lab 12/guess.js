let attempts = 0;
const actualPassword="HelloWorld"

function checkPassword() {
    const guessedPassword = document.getElementById("password").value;
    const attemptsElement = document.getElementById("numAttempts");

    //line deleted
  
    if (guessedPassword === actualPassword) {
      alert("Congratulations, you guessed the password!!");
    } else {
      alert("Sorry, that's not the correct password. Please try again.");
    }

    //line deleted
  }
  
