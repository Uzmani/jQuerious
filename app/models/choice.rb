class Choice < ActiveRecord::Base
  has_many :answers
  # define associations to users through answers
  belongs_to :questions #should be singular

  # add validations
  
end
