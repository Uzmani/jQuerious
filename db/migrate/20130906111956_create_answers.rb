class CreateAnswers < ActiveRecord::Migration
  def change
    create_table :answers do |t|
      t.references :user
      t.references :question #redundant, since a choice belongs to a question
      t.references :choice
      t.timestamps
    end
  end
end
