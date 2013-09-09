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
      that.choiceSelector = 'choice[' + that.choiceCounter + '][option]'
      that.createInput(that.choiceSelector);

      $('#save_choice').show();
    })
  },
  saveChoice: function(){
    var that = this
    $('#form_buttons').on('click', '#save_choice', function(e){
      e.preventDefault();
      //save to form
      var userInput = $('input:first').val();
      $('#displayed').append('<p>- ' + userInput + '</p>');
      //hide
      $('#master_survey input').hide();
      $('#prompt').hide()
      $('#save_choice').hide();
      //show
      $('#add_form_btns').show();
    })
  },
  addChoice: function(){
    var that = this
    $('#form_buttons').on('click', '#add_choice', function(e){
      e.preventDefault();
    //hide
    $('#add_form_btns').hide();
    //show
    $('#prompt').text('Create Answer Choice: ');
    $('#prompt').show();
      that.choiceCounter += 1
      var hiddenSelector = 'choice[' + that.choiceCounter + '][question]'
      that.createHiddenInput(hiddenSelector)
      that.choiceSelector = 'choice[' + that.choiceCounter + '][option]'
      that.createInput(that.choiceSelector);
      $('#save_choice').show();
    })
  },
  addQuestion: function(){
    var that = this
    $('#form_buttons').on('click', '#add_question', function(e){
      e.preventDefault();
      //hide
      $('#add_form_btns').hide();
      //show
    $('#prompt').text('Create Question: ');
    $('#prompt').show();
      that.questionCounter += 1
      that.questionSelector = 'question[' + that.questionCounter + '][title]'
      that.createInput(that.questionSelector);
      $('#save_question').show();
    })
  },
  finishForm: function(){
    var that = this
    $('#form_buttons').on('click', '#confirm_survey', function(e){
      e.preventDefault();
      //hide
      $('#add_form_btns').hide();
      //show
      $('#submit').show();
    })
  },
  submitSurvey: function(){
    $('#master_survey').on('click', function(e){
      e.preventDefault();
      var $data = $(this).serialize();
      $.ajax({
        url: this.action,
        type: this.method,
        data: $data
      }).done(function(response){
        console.log('Ajax Successful');
      }).fail(function(jqXHR, textStatus){
        console.log(textStatus);
      });
    })
  }
}

//document ready
$(function() {
  var survey = new Survey();
  survey.showTitle($('#save'), $('#_formConfirmation h1'))
  survey.saveQuestion();
  survey.saveChoice();
  survey.addChoice();
  survey.addQuestion();
  survey.finishForm();
  survey.submitSurvey();
})
