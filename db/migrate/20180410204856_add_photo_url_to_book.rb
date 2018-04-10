class AddPhotoUrlToBook < ActiveRecord::Migration[5.1]
  def change
    add_column :books, :photo_url, :string
  end
end
