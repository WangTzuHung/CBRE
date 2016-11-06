class AddMainTable < ActiveRecord::Migration
  def change
  	  create_table :posts do |t|
      t.string :name
      t.string :gender
      t.string :echelon
      t.string :age
      t.string :favorite
      t.string :mobile
      t.string :email
      t.timestamps null: false
    end
  end
end
