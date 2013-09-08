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
  showTitle: function(eventClick, displayTag){
    var that = this

    eventClick.on('click', function(e){
        $('#add_choice').show();
      e.preventDefault();
      //save to form
      var userInput = $('input:first').val();
      displayTag.text(userInput);
      //hide
      $('#master_survey input').hide();
      $(this).hide();
      //show
      $('#prompt').text('Create Question: ')
      that.questionSelector = 'question[' + that.questionCounter + ']'
      that.createInput(that.questionSelector);
    })
  },
  showQuestion: function(displayTag){
    var that = this

    $('#form_buttons').on('click', '#add_choice', function(e){
      e.preventDefault();
      //increase counter
      that.questionCounter += 1
      //save to form
      var userInput = $('input:first').val();
      $('#displayed').append('<p>Question ' + that.questionCounter + ' : ' + userInput + '</p>');
      //hide
      $('#master_survey input').hide();
      //show
      $('#prompt').text('Create Answer Choice:');
      that.choiceSelector = 'choice[' + that.choiceCounter + ']'
      that.createInput(that.choiceSelector);
      $('#add_question').show();
      $('#confirm_survey').show();
    })
  },
  showChoice: function(){

  }
}

//document ready
$(function() {
  var survey = new Survey();
  survey.showTitle($('#save'), $('#_formConfirmation h1'))
  survey.showQuestion($('#prompt'))
})
