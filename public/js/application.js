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

    $('#signin_form').on('submit', function(e){
      e.preventDefault();

    console.log("I've been submitted");
      $.ajax({
        type: this.method,
        url: this.action
      }).done(function(response){
        console.log('ajax request made');
      }).fail(function(jqXHR, textStatus){
        console.log("ajax request failed: " + textStatus);
        console.log(jqXHR);
      })
    })
  }
}


$(document).ready(function() {

  var modal = new Modal();
  modal.showSigninModal($('#signin'), $('#signin_link'));
  modal.showSignupModal
})
