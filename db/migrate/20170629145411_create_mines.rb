class CreateMines < ActiveRecord::Migration[5.0]
  def change
    create_table :mines do |t|
      t.string :name, null: false
      t.string :info, null: false
      t.string :dependencies
      t.string :documentation_uri

      t.timestamps
    end
  end
end
