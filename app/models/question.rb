class Question < ActiveRecord::Base
  has_many :choices
  belongs_to :questions
  # Remember to create a migration!
end
