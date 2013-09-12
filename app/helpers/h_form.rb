# what is this file for?

helpers do

  def parse_form(data)
    

    @survey = Survey.create(name: data["survey"]["name"], user_id: current_user.id)

    data["question"].each do |number, title|
      question = Question.create(title: title["title"], survey_id: @survey.id)

      data["choice"].each do |key, value|
        if number == value["question"]
          question.choices << Choice.create(option: value["option"])
        end
      end
    end
     
  end

end
