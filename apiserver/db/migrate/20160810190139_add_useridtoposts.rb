class AddUseridtoposts < ActiveRecord::Migration[5.0]
  def change
    add_column :posts, :key, :string
  end
end
