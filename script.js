function factorialize(n) {
    // If the number is less than 0, reject it.
    if (n < 0)
        return -1;

    // If the number is 0, its factorial is 1.
    else if (n == 0)
        return 1;

    // Otherwise, call the recursive procedure again
    else {
        return (n * factorialize(num - 1));

    }

}
factorialize(5);
console.log(factorialize(5))