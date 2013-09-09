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
  modal.showModal($('#form_success'), $('#submit'))
})
