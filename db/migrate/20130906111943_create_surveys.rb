class CreateSurveys < ActiveRecord::Migration
  def change
    create_table :surveys do |t|
      t.references :user	#alias to :creator
      t.string :name
      t.timestamps
    end
  end
end
