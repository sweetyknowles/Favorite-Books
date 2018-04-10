# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Reader.destroy_all


#test reader

Reader_one = Reader.create! ({
    name: "Kent",
    photo_url: "http://englishbookgeorgia.com/blogebg/wp-content/uploads/2016/03/media1.gif",
    location: "Chicago"
})

Reader_two = Reader.create! ({
    name: "Diana",
    photo_url: "https://i.pinimg.com/originals/e2/43/0c/e2430c6bff26da006141114bddd8710d.jpg",
    location: "Seattle"
})
owen = Reader.create! ({
    name: "Owen",
    photo_url: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/18424094_10154438579181319_3097860592699459989_n.jpg?_nc_cat=0&oh=fb86cdf4e53f10abb1e55fb8ac1ce3bd&oe=5B5AD8CA",
    location: "Bath"
})
reader_four = Reader.create! ({
    name: "Isreal",
    photo_url: "http://c8.alamy.com/comp/K7H0MM/enjoy-relax-times-with-reading-book-asian-women-thai-teen-smile-with-K7H0MM.jpg",
    location: "California"
})

Book_one = Book.create!({
    reader_id: owen.id,
    title: "In The Woods",
    author: "Tana French",
    photo_url: "https://images.gr-assets.com/books/1348442606l/237209.jpg",
    publish: "May 17,2007",
    genre: "Mystery/Fiction/Thriller/Crime",
    synopis: "As dusk approaches a small Dublin suburb in the summer of 1984, mothers begin to call their children home. But on this warm evening, three children do not return from the dark and silent woods. When the police arrive, they find only one of the children. He is gripping a tree trunk in terror, wearing blood-filled sneakers and unable to recall a single detail of the previous hours.",
       
})