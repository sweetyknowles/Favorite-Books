class CreateBooks < ActiveRecord::Migration[5.1]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.string :publish
      t.string :genre
      t.string :synopis
      t.references :reader, foreign_key: true

      t.timestamps
    end
  end
end
