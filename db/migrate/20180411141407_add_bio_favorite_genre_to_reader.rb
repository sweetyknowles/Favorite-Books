class AddBioFavoriteGenreToReader < ActiveRecord::Migration[5.1]
  def change
    add_column :readers, :bio,  :string
    add_column :readers, :favorite_genre, :string
  end
end
