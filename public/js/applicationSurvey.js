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
  createHiddenInput: function(id){
    var input = '<input id="' + id + '"' + ' value="' + this.questionCounter + '"'+ ' name="' + id + '" type="hidden">'
    $('#master_survey').prepend(input)
  },
  showTitle: function(eventClick, displayTag){
    var that = this

    eventClick.on('click', function(e){
      e.preventDefault();
      //save to form
      var userInput = $('input:first').val();
      displayTag.text(userInput);
      //hide
      $('#master_survey input').hide();
      $(this).hide();
      //show
      $('#prompt').text('Create Question: ')
      that.questionCounter += 1
      that.questionSelector = 'question[' + that.questionCounter + '][title]'
      that.createInput(that.questionSelector);
      $('#save_question').show();
    })
  },
  saveQuestion: function(){
    var that = this
    $('#form_buttons').on('click', '#save_question', function(e){
      e.preventDefault();
      //save to form
      var userInput = $('input:first').val();
      $('#displayed').append('<p>Question ' + that.questionCounter + ' : ' + userInput + '</p>');
      //hide
      $('#master_survey input').hide();
      $('#save_question').hide();
      //show
      $('#prompt').text('Create Answer Choice:');
      that.choiceCounter += 1
      var hiddenSelector = 'choice[' + that.choiceCounter + '][question]'
      that.createHiddenInput(hiddenSelector)
      console.log('CHECK NEW CHOICE INPUT TAG FOR VALUE')
      that.choiceSelector = 'choice[' + that.choiceCounter + '][option]'
      that.createInput(that.choiceSelector);

      $('#save_choice').show();
    })
  },
  showChoice: function(){
    var that = this
    $('#form_buttons').on('click', '#save_choice', function(e){
      e.preventDefault();
      //save to form
      var userInput = $('input:first').val();
      $('#displayed').append('<p>Choice ' + that.choiceCounter + ' : ' + userInput + '</p>');
      //hide
      $('#master_survey input').hide();
      $('#prompt').hide()
      $('#save_choice').hide();
      //show
      $('#add_question').show();
      $('#add_choice').show();
      $('#confirm_survey').show();
    })
  }
}

//document ready
$(function() {
  var survey = new Survey();
  survey.showTitle($('#save'), $('#_formConfirmation h1'))
  survey.saveQuestion()
  survey.showChoice()
})
