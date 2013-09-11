# what is this file for?

helpers do

  require 'pry'
  def parse_form(data)
    data
    binding.pry

    #data.each do |key, value|
      #case key
      #when survey
        #survey.each do |s|        survey[title] = val
          #Survey.create(title: s)
        # end
      #when question
        #question.each do |num|      question[no][title] = val
          # Question.create(title: num[title])
        # end
      #when choice                          choice[no][option] = val
        #choice.each do |num|         choice[no][question] = question id
          #Choice.create(option: num[option], question: num[question])
        # end
      #end
    #end
  end

end
