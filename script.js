


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

// LINK TO

$("#button1").click(function() {
    $('html, body').animate({
        scrollTop: $("#person1").offset().top
    }, 2000);
});

$("#button2").click(function() {
    $('html, body').animate({
        scrollTop: $("#person2").offset().top
    }, 2000);
});

// CALCULATE HOURS

$('.p1Hours').keyup(function () {

    var sum = 0;

    $('.p1Hours').each(function() {
        sum += Number($(this).val());
    });

    $('#totalHours1').val(sum);

});

$('.p2Hours').keyup(function () {

    var sum = 0;

    $('.p2Hours').each(function() {
        sum += Number($(this).val());
    });

    $('#totalHours2').val(sum);

});
