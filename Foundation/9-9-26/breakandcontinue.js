//you will print number form 1 to 100  and if its divisible by 3 you will also print an string "Divisible by 3", if not you wil not print anything other tahn number
// do this by using continue;

for (let a = 1; a < 100; a++) {

    console.log(a);
    if (a % 3 !== 0) {
        continue;
    }
    console.log(a);

}