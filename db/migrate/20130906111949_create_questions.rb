class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.references :survey
      t.string :title
      t.timestamps
    end
  end
end
