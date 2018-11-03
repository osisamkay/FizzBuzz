for (let index = 1; index < 100; index++) {
    if (((index % 3) || (index % 5)) == 0) {
        document.write("FizzBuzz");
    } else {
        if ((index % 3) == 0) {
            document.write("Fizz");
        } else {
            if ((index % 5) == 0) {
                document.write("Buzz")
            } else {
                document.write(index);
            }
        }
    }
    document.write(`<br>`);
}