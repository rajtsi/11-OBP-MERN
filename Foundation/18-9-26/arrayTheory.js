



// array - > 


// function (array)
// {

//     //its making a butiful ui and showing mark there for each student 



// }



// Creating an array of fruits (Array Literal)

// let fruits = [10, 12, 3, 1, 20, -2, 40, 110];


// // make a function which will take he position of the student in line and then will printthe number of the student and it will take input from 1 to 8

// function func() {
//     fruits[a - 1] += 2;
// }

// func(fruits);

// console.log(fruits);
// fruits[i]->  i+1
// fruits[i]=fruits[i]+2;

// // write a function that take a varaible and then increase the value of elements whose index is even by this variable and decreases the value of the elements whose eindex is odd by this varaible 


// for(let i=0;i<8;i++)
// {
//     fruits[i]+=2;
// }





let num = [1, 2, 2, 2, 2, 25, 0, 1, 1, 1, 1];

// func-> it will take an input as parameter 
// and the 


function midify(a) {

    for (let i = 0; i < 11; i++) {
        if (i % 2 == 0) {
            num[i] += a;
        }
        else {
            num[i] -= a;
        }
        console.log(num[i]);
    }

}

midify(10);

// if index is odd then make its value as square of older value
// if even do nothing
