class Choice < ActiveRecord::Base
  has_many :answers
  # define associations to users through answers
  belongs_to :question 

  # add validations
  
end
