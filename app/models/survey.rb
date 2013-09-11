class Survey < ActiveRecord::Base
  has_many :questions
  belongs_to :user #alias to :creator

  #add validations
end
