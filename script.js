
let activities = [];


// $('#total').click(function(totalHours){
//   alert("The total hours are" + totalHours)
//   console.log('the button is working');
// });



  
  $('#save').click(function(){
    getActivities();
    for(let i = 0; i < activities.length; i++) {
      if(activities[i] == ''){
         alert('Input can not be left blank');
         return false;
      }
      else{
        return true;
      }
    }
  });


function getActivities(){
  let activity1 = document.getElementById('activity1').value;
  let activity2 = document.getElementById('activity2').value;
  let activity3 = document.getElementById('activity3').value;
  let activity4 = document.getElementById('activity4').value;
  let activity5 = document.getElementById('activity5').value;
  activities.push(activity1);
  activities.push(activity2);
  activities.push(activity3);
  activities.push(activity4);
  activities.push(activity5);
  console.log(activities);
}


function getHours(){
  let hours1 = document.getElementById('hours1').value;
  let hours2 = document.getElementById('hours2').value;
  let hours3 = document.getElementById('hours3').value;
  let hours4 = document.getElementById('hours4').value;
  let hours5 = document.getElementById('hours5').value;
  let totalHours = hours1 + hours2 + hours3 + hours4 + hours5;
  console.log(totalHours);
}
