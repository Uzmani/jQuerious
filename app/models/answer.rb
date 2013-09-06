class Answer < ActiveRecord::Base
  # Remember to create a migration!
  belongs_to :users
  belongs_to :questions
  belongs_to :choices
end
