$(document).ready(function() {

  $('#signin').easyModal({
    top: 200,
    overlay: 0.2
  });

  $('#signin_link').click(function(e){
    $('#signin').trigger('openModal');
    e.preventDefault();
  })
})
