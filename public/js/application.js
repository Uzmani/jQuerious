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
  },

  createSurvey: function(form, link){
    this.showModal(form, link);
    $('#add_title').on('click', function(e){
      e.preventDefault();
      console.log('form create question was clicked');

      $.ajax({
        url: '/survey/new',
        type: 'get'
      }).done(function(response){
        var input = $('input[name="survey[name]"]');
        $('#question').prepend('<p>' + input.val() + '</p>');
        $('#surveydiv').hide();
        $('#question').show();
      }).fail(function(jqXHR, textStatus, errorThrown){
        console.log(errorThrown);
      })

    })
  }
}


$(document).ready(function() {

  var modal = new Modal();
  modal.showModal($('#signin'), $('#signin_link'));
  modal.showModal($('#signup'), $('#signup_link'));

  modal.createSurvey($("#survey_form"), $('#create_survey'));

  //modal.createSurvey($("#question"), $('#create_survey'));
})
