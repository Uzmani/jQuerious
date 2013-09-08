function Survey(){
  this.choiceCounter = 0
  this.questionCounter = 0
  this.questionSelector = ''
  this.choiceSelector = ''
}

Survey.prototype = {
  createInput: function(id){
    var input = '<input id="' + id + '"' + ' name="' + id + '" type="text">'
    $('#master_survey').prepend(input)
  },
  showInputEvent: function(eventClick, displayTag){
    var that = this

    eventClick.on('click', function(e){
      e.preventDefault();
      //save to form
      var header = $('input:first').val();
      console.log(header)
      console.log(displayTag)
      displayTag.text(header);
      //hide
      $('#master_survey input').hide();
      $(this).hide();
      //show
      $('#prompt').text('Create Question: ')
      that.questionSelector = 'question[' + that.questionCounter + ']'
      console.log(that.questionSelector)
      var selectinput = that.questionSelector
      that.createInput(selectinput);
      $('#add_choice').show();
    })
  }
}

//document ready
$(function() {
  var survey = new Survey();
  survey.showInputEvent($('#save'), $('#_formConfirmation h1'))
})
