function Modal(){
}

Modal.prototype = {
  showModal: function(form, link){
    console.log('in showModal function');

    $(form).easyModal({
      top: 200,
      overlay: 0.7
    });

    $(link).on('click', function(e){
      $(form).trigger('openModal');
      e.preventDefault();
    });
  }
}

$(document).ready(function() {
 $('.container').hide().fadeIn(800);

  var modal = new Modal();
  modal.showModal($('#signin'), $('#signin_link'));
  modal.showModal($('#signup'), $('#signup_link'));


  //Create Survey Page

  // Constant for dynamically naming input fields
  var question_counter = 0

  //Display none will not hide buttons in application.css, using jquery here instead
  $('#submit').hide();
  $('#new_question_link').hide();

  // 1. Add Survey Name to Form
  //     Render Question
  $('#save_survey_name').on('click', function(e){
    e.preventDefault();
    $('h1').text($('#question_name').val());
    $(this).parent().hide();
    $(this).hide(); //new question button hide

    $.ajax({
      url: '/form/question',
      type: 'get'
    }).done(function(response){
      $('#_partial').append(response);
      $('#new_choice_link').hide();

    // 3. Add Question to Form
      $('#add_question').on('click', function(e){
        question_counter += 1
        var question_name = "Question" + question_counter + "[title]"
        var input = $('#question_name').attr('name', question_name);
        $("#_partial").append("<div>Question" + question_counter + ": " + input.val() + "</div>");
        $(this).parent().hide();
      }) // add question on click
    }); //done
  }) //new question link

  $('#submit').on('click', function(e){  //submits form
    e.preventDefault();
    $.ajax({
      url: '/survey/create',
      type: 'post',
      data:  $('#master_survey').serialize()
    }).done(function(response){
      console.log('ajax form submit successful');
    }).fail(function(a, b, message){
      console.log(message);
    })
  })


}) //document ready
