
/*
 #1
 */
 userObj = {
     firstName : 'Bohdan',
     lastName : 'Rudenko',
     age: 22
 };
 console.log(userObj);



/*
 #2
 */
 userObj.fullName = function() {
    return userObj.firstName + ' ' + userObj.lastName;
 };
 console.log(userObj.fullName());

/*
 #3
 */



function defUpperStr (str) {
    return (str || 'Default text').toUpperCase();
}
console.log(defUpperStr('Дэрам'));

/*
 #4
 */


function evenFn(n) {
    var arr = [];
    for (i=1; i<=n; i++) {
       if (i%2 == 0) {
        arr.push(i);

       }
    }
    return arr;
}

 console.log(evenFn(10)); 
 console.log(evenFn(15)); 
 console.log(evenFn(20));

/*
 #5
 */
function weekFn(n) {
    var dayOfWeek;
    switch (n) {
        case 1: dayOfWeek ='Понедельник'; break;
        case 2: dayOfWeek = 'Вторник';break;
        case 3: dayOfWeek = 'Среда';break;
        case 4: dayOfWeek = 'Четверг';break;
        case 5: dayOfWeek = 'Пятница';break;
        case 6: dayOfWeek = 'Суббота';break;
        case 7: dayOfWeek = 'Воскресенье';break;
        default :  dayOfWeek =null
    }
    return dayOfWeek;
}
console.log(weekFn(5));

/*
 * #6
 */ 
//  var age,k; 
//  function ageClassification (k) {
//      var age = k > 0 && k<24 ? 'детский возраст' :k > 23 && k<45 ? 'молодой возраст' :  k>44 && k<61 ? 'средний возраст' : k>60 && k<76 ? 'пожилой возраст' : k>75 && k<89 ? 'старческий возраст'  : k>90 && k<123 ? 'долгожители' : 'null' ;
//     return age;


// слишком усложнил?

//  }
function ageClassification(num) {
    return num > 0
      ? num > 24
        ? num > 44
          ? num > 65
            ? num > 75
              ? num > 90
                ? num > 122
                  ? null
                  : 'долгожители'
                : 'старческий возраст'
              : 'пожилой возраст'
            : 'средний возраст'
          : 'молодой возраст'
        : 'детский возраст'
      : null;
  }
 console.log(ageClassification(76));


/*
 * #7
*/

function oddFn(n) {
    var i = 0;
    let arr = [];
        while (i++ < n) if (i%2 !== 0) arr.push(i);
        return arr;
    }
    console.log(oddFn(10));

/*
 * #8

 */
 function cbRandom(a,b) {
    return Math.ceil(Math.random() * (a-b) + b);
 }
 function cbPow(a,b) {
     return Math.pow(a,b)
 }
 function cbAdd(a,b) {
     return a+b;
 }

 function mainFunc(a,b,callback) {
    if (callback && typeof callback === 'function') {
        return callback(a, b)
    } else
    return false;
 }


 console.log(mainFunc(2, 5, cbRandom));
 console.log(mainFunc(10, 30, cbRandom));
 
 console.log( mainFunc(2, 5, cbPow));
 console.log( mainFunc(2, 5, cbAdd));
 console.log( mainFunc(2, 5, 'not a func'));