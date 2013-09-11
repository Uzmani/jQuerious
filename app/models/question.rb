class Question < ActiveRecord::Base
  has_many :choices
  belongs_to :questions # a question belongs to questions?

  # add validations
end
