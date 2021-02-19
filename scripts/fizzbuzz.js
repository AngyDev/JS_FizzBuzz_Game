/**
 * Starts the game
 */
function playGame() {
    var fizzbuzz = "";

    for (var i = 1; i <= 100; i++) {
        fizzbuzz += i + " " + isFizzBuzz(i) + "<br>";
        document.getElementById("list").innerHTML = fizzbuzz;
    }
}

/**
 * Checks if the value is multiple of three or of five or of both
 * @param {int} value 
 */
function isFizzBuzz(value) {
    var msg = "";

    if (value % 3 == 0) {
        msg = "Fizz";
    }

    if (value % 5 == 0) {
        msg += "Buzz";
    }

    return msg;
}