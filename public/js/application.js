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

  var question_counter = 1

  $('#new_question_link').on('click', function(e){
    e.preventDefault();
    $(this).hide(); //new question button hide

    $.ajax({
      url: '/form/question',
      type: 'get'
    }).done(function(response){
      $('#_question').append(response);

      $('#add_question').on('click', function(e){
        var question_name = "question" + question_counter + "[title]"
        question_counter += 1
        var input = $('#question_name').attr('name', question_name);
        $("#_question").append("<div>Question: " + input.val() + "</div>");
        $('#questionFormDiv').hide();
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
