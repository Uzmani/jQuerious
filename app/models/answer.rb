class Answer < ActiveRecord::Base
  # Remember to create a migration!
  belongs_to :users
  belongs_to :questions #through choice
  belongs_to :choices
  # ^ these should all be singular

  # add validations
end
