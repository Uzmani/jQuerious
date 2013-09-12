class Question < ActiveRecord::Base
  has_many :choices
  belongs_to :survey 

  # add validations
end
