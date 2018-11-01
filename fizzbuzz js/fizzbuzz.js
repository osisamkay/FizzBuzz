for (index = 1; index <= 100; index++) {
    if (index % 3 == 0) {
        document.write("Fizz");
    }
    if (index % 5 == 0) {
        document.write("Buzz");
    }
    if ((index % 3 != 0) && (index % 5 != 0)) {
        document.write(index);
    }
    document.write(`<br>`);
}