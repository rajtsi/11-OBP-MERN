
// String
// Number
// Boolean


// Object


// let mock1Mark = [20, 30,..    ..   20];

// let batch = [1, 4, 5    ..   . ..  0];
// let name = ["Vasu", ' acnxnnx', ..   ];

// [name, mark, batch]

// let allDetail = [[, 1,], [], []][, 1,]

// [1, 3, "vasu",]

// let k = {
//     markMock1: null, // key: value 
//     batch: 3,
//     name: "vasu",
//     address: 'Pune',
//     attendence: [true, false],
//     add: function (a, b) {
//         return a + b;
//     }
// };



// console.log(typeof k);
// console.log(k.name);

// console.log(k.add(2, 3));

let details = [{
    Name: "A",   //-> k.Name, k.va\ 
    Value: 0,
    dummy: 10,
    dummy1: 20,
    dummy3: 30
}, {
    Name: "a",
    Value: 1

}, {
    Name: "c",
    Value: 1
}, {
    Name: "D",

}
]

let kk = ['dummy1', 'Value', 'name', 'p']
// for each element in array check if the Name is in capital latter if yes print The Value key inside that element ignore otherwise

for (let i = 0; i < details.length; i++) {
    let k = details[i];
    // if (k.Name.charCodeAt(0) < 97) {
    //     console.log(k.Value);
    // }

    // we will print the corresponding key value that is given in kk array 

    console.log(k[kk[i]]);
}


let l = {
    p: 10,
    l: 9
};

let newKey = 'ananannanna';

l[newKey] = 10; //additon
console.log(l);

delete l[newKey];

console.log(l);

let keyarr = Object.values(l);// -> ['p', 'l'];
console.log(keyarr);

// if using [] literal to access the value of a key in object you need to make sure you use key as string 

// if you are using dot(.) operator to access the value of a key in object you need to make sure you never use string insted only use that key name as var



// most of teh time we use dot(.) operator to access the value of a key 
// but cases where our key is a variable with some value we need to use[KeyVar] to access teh value of  KeyVar


// rajat.sirName
// rajat["sirName"]

// let key = 'sirName'

// rajat.'sirName'


largeDataset.preferences.notifications.email = true nested Object concept and accessing object

Object.keys(largeDataset.profile);


const largeDataset = {
    id: "usr_982341",
    isActive: true,
    username: "dev_architect",
    email: "alex@example.com",
    age: 32,
    profile: {
        firstName: "Alex",
        lastName: "Rivers",
        avatar: "https://dicebear.com",
        bio: "Building things with JavaScript."
    },
    roles: ["admin", "developer", "moderator"],
    preferences: {
        theme: "dark",
        notifications: {
            email: true,
            push: false,
            sms: true
        },
        language: "en-US"
    },
    metrics: {
        loginCount: 142,
        lastLogin: "2026-09-29T10:14:00Z",
        sessionDurationAverage: 45.5,
        score: 98.7
    },
    security: {
        twoFactorEnabled: true,
        passwordChangedAt: "2026-05-12",
        recoveryCodes: [1092, 8831, 4429, 9012]
    },
    metadata: {
        createdVia: "web_app",
        ipAddress: "192.168.1.45",
        userAgent: "Mozilla/5.0...",
        apiVersion: "v2.4.1"
    }
};

// your task is to print the values corresponding to all keys in this object one by one


//Object.keys(Object_Name);//-> aray of keys

console.log(Object.values(largeDataset))//  -> array of values 


