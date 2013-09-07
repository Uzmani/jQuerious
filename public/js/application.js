function Modal(){
}

Modal.prototype = {
  showModal: function(form, link){
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
  modal.showModal($('#signin'), $('#signin_link'));
  modal.showModal($('#signup'), $('#signup_link'))
})
