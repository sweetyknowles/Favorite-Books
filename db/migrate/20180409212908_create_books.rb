class CreateBooks < ActiveRecord::Migration[5.1]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.string :photo_url
      t.string :publish
      t.string :genre
      t.string :synopis

      t.timestamps
    end
  end
end
