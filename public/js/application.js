function Modal(){
}

Modal.prototype = {
  showSigninModal: function(form, link){
    $(form).easyModal({
      top: 200,
      overlay: 0.2
    });

    $(link).click(function(e){
      $(form).trigger('openModal');
      e.preventDefault();
    });
  }
}


$(document).ready(function() {

  var modal = new Modal();
  modal.showSigninModal($('#signin'), $('#signin_link'));
  //modal.showSignupModal
})
