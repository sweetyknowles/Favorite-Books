class AddPhotoUrlToBook < ActiveRecord::Migration[5.1]
  def change
    add_column :photo_url, :string
  end
end
