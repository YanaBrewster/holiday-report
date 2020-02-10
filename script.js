


//  TASK
// Input form activity task
//
// 1) Take 5 activities from 1st user and store
// 2) Take hours spent from 1st user and store
// 3) Display total of hours spent for 1st user
//
// 4) Take 5 activities from 2d user and store
// 5) Take hours spent from 2d user and store
// 6) Display total of hours spent for 1st user
//
// 7) Provide link to change between each user


let person1Activities = [];
let person1Hours = [];
let person2Activities = [];
let person2Hours = [];

function getActivities(){
  let person1Activity1 = document.getElementById('p1Activity1').value;
  let person1Activity2 = document.getElementById('p1Activity2').value;
  let person1Activity3 = document.getElementById('p1Activity3').value;
  let person1Activity4 = document.getElementById('p1Activity4').value;
  let person1Activity5 = document.getElementById('p1Activity5').value;

  let person2Activity1 = document.getElementById('p2Activity1').value;
  let person2Activity2 = document.getElementById('p2Activity2').value;
  let person2Activity3 = document.getElementById('p2Activity3').value;
  let person2Activity4 = document.getElementById('p2Activity4').value;
  let person2Activity5 = document.getElementById('p2Activity5').value;

  person1Activities.push(person1Activity1);
  person1Activities.push(person1Activity2);
  person1Activities.push(person1Activity3);
  person1Activities.push(person1Activity4);
  person1Activities.push(person1Activity5);
  console.log(person1Activities);
}

function getHours(){
  let person1Hours1 = document.getElementById('p1Hours1').value;
  let person1Hours2 = document.getElementById('p1Hours2').value;
  let person1Hours3 = document.getElementById('p1Hours3').value;
  let person1Hours4 = document.getElementById('p1Hours4').value;
  let person1Hours5 = document.getElementById('p1Hours5').value;
  person1Hours.push(person1Hours1);
  person1Hours.push(person1Hours2);
  person1Hours.push(person1Hours3);
  person1Hours.push(person1Hours4);
  person1Hours.push(person1Hours5);
  console.log(person1Hours);
}

  $('#save').click(function(){
    // getActivities();
    getHours();
    // for(let i = 0; i < activities.length; i++) {
    //   if(activities[i] == ''){
    //      alert('Input can not be left blank');
    //   }
    //   else{
    //     return activities;
    //   }
    // }

    for (let i = 0; i < person1Hours.length; i++){
      if(person1Hours[i] == ''){
        alert('Input can not be left blank');
     }
     else{
       return person1Hours;
     }
    }
    person1HoursCalculate();
  });

  function person1HoursCalculate(){
    let person1HoursIntegers = [];
    for (let i = 0; i <person1Hours.length-1; i++) {
      person1HoursIntegers[i] = parseInt(person1Hours[i]);
      person1HoursIntegers.push(person1HoursIntegers[i]);
      console.log(person1HoursIntegers);

    }

    // let person1HoursTotal = sum(person1HoursIntegers);
    // console.log(person1HoursTotal);
  }



// function showResults(){
//   for
// }

//   $('#save').click(function(){
//     getActivities();
//     for(let i = 0; i < activities.length; i++) {
//       if(activities[i] == ''){
//          alert('Input can not be left blank');
//          return false;
//       }
//       else{
//         return true;
//       }
//     }
//   });
//
//
// function getActivities(){
//   let activity1 = document.getElementById('activity1').value;
//   let activity2 = document.getElementById('activity2').value;
//   let activity3 = document.getElementById('activity3').value;
//   let activity4 = document.getElementById('activity4').value;
//   let activity5 = document.getElementById('activity5').value;
//   activities.push(activity1);
//   activities.push(activity2);
//   activities.push(activity3);
//   activities.push(activity4);
//   activities.push(activity5);
//   console.log(activities);
// }
//
// $( "#total1" ).click(function() {
//
// // let p1Hours1 = document.getElementById('p1Hours1').value;
// // let p1Hours2 = document.getElementById('p1Hours2').value;
// // let p1Hours3 = document.getElementById('p1Hours3').value;
// // let p1Hours4 = document.getElementById('p1Hours4').value;
// // let p1Hours5 = document.getElementById('p1Hours5').value;
// function add() {
//     var sum = 0;
//     $(".add1").each(function() {
//         sum += +this.value;
//     });
//     return sum;
//     console.log(sum);
//   }
// });
