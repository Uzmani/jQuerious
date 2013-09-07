function Modal(){
}

Modal.prototype = {

  showModal: function(form, link){
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
  }
}


$(document).ready(function() {

  var modal = new Modal();
  modal.showModal($('#signin'), $('#signin_link'));
  modal.showModal($('#signup'), $('#signup_link'));

  modal.createQuestion($("#question"), $('#create_survey'));
})
