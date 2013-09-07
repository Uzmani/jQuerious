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

  createQuestion: function(form, link){
    this.showModal(form, link);
    $('#add_question').on('click', function(e){
      e.preventDefault();
      console.log('form create question was clicked');
    })
  }
}


$(document).ready(function() {

  var modal = new Modal();
  modal.showModal($('#signin'), $('#signin_link'));
  modal.showModal($('#signup'), $('#signup_link'));

  modal.createQuestion($("#question"), $('#create_survey'));
})
