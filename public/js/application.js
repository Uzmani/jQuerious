function Modal(){
}

Modal.prototype = {
  showModal: function(selector, show){
    $(show).easyModal({
      top: 200,
      overlay: 0.2
    });

    $(selector).click(function(e){
      $(show).trigger('openModal');
      e.preventDefault();
    });
  }
}


$(document).ready(function() {

  $('#signin').easyModal({
    top: 200,
    overlay: 0.2
  });

  $('#signin_link').click(function(e){
    $('#signin').trigger('openModal');
    e.preventDefault();


  })

  // var modal = new Modal();
  // modal.showModal($('#signin'), $('#signin_link'));
})
