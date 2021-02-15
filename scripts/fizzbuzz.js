function playGame() {

    var msg = "";
    var fizzbuzz = "";

    for (i = 1; i <= 100; i++) {

        if (i % 3 == 0) {
            msg = "Fizz";
        }

        if (i % 5 == 0) {
            msg += "Buzz";
        }

        fizzbuzz += i + " " + msg + "<br>";
        document.getElementById("list").innerHTML = fizzbuzz;
        msg = "";
    }
}