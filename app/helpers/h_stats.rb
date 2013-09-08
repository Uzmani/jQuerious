helpers do 



def get_question_breakdown(quesiton_obj)

  output_array = []
  pie_slice = {:label => 0, :value => 0}

  quesiton_obj.choices.each do |choice|
    pie_slice[:label] = choice.option
    pie_slice[:value] = choice.answers.count
    output_array << pie_slice
    pie_slice = {:label => 0, :value => 0}
  end

  output_array.to_json

end


# [{label: "Answer 1", value: 100},
#  {label: "Answer 2", value: 200},
#  {label: "Answer 3", value: 150},
#  {label: "Answer 4", value: 50}].to_json



end



 # Survey.last.questions.first.choices.last.answers.count
