# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Reader.destroy_all
Book.destroy_all

#test reader

kent = Reader.create! ({
    name: "Kent",
    photo_url: "http://englishbookgeorgia.com/blogebg/wp-content/uploads/2016/03/media1.gif",
    location: "Chicago",
    bio:"I am an owl, love to read all sorts. I write!",
    favorite_genre: "Mystery, Drama, Crime/Thriller"

})

diana = Reader.create! ({
    name: "Diana",
    photo_url: "https://i.pinimg.com/originals/e2/43/0c/e2430c6bff26da006141114bddd8710d.jpg",
    location: "Seattle",
    bio: "I am a mom, thats you can be until they grow up! LOVE THEM.",
    favorite_genre: "Drama,Scifi, Thriller"

    
})
owen = Reader.create! ({
    name: "Owen",
    photo_url: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/18424094_10154438579181319_3097860592699459989_n.jpg?_nc_cat=0&oh=fb86cdf4e53f10abb1e55fb8ac1ce3bd&oe=5B5AD8CA",
    location: "Bath",
    bio: "I am drummer, doing software development now. What a change!",
    favorite_genre: "Horror,Scifi, Thriller"

    
})
isreal = Reader.create! ({
    name: "Isreal",
    photo_url: "http://c8.alamy.com/comp/K7H0MM/enjoy-relax-times-with-reading-book-asian-women-thai-teen-smile-with-K7H0MM.jpg",
    location: "California",
    bio: "I am high schooler! love to do all cheeky things. GO Figure!",
    favorite_genre: "Fantasy,Mystery,Horror,Scifi"
})

book_one = Book.create!({
    reader_id: owen.id,
    title: "Outpost",
    author: "W.Michael Gear",
    photo_url: "https://prodimage.images-bn.com/pimages/9780756413378_p0_v2_s550x406.jpg",
    publish: "February 20, 2018",
    genre: "Fiction/SciFi",
    synopis: "When the ship Turalon arrives in orbit, Supervisor Kalico Aguila discovers a failing colony, its government overthrown and the few remaining colonists now gone wild. Donovan offers the chance of a lifetime, one that could leave her the most powerful woman in the solar system.",
       
})

book_two = Book.create!({
    reader_id: owen.id,
    title: "CyberStorm",
    author: "Mathew Mather",
    photo_url: "https://images-na.ssl-images-amazon.com/images/I/51E3rlEMB0L.jpg",
    publish: "March 15, 2013",
    genre: "Fiction/SciFi",
    synopis: "Sometimes the worst storms aren't caused by Mother Nature, and sometimes the worst nightmares aren't in the ones in our heads...",
       
})





book_three = Book.create!({
    reader_id: kent.id,
    title: "In The Woods",
    author: "Tana French",
    photo_url: "https://images.gr-assets.com/books/1348442606l/237209.jpg",
    publish: "May 17,2007",
    genre: "Mystery/Fiction/Thriller/Crime",
    synopis: "As dusk approaches a small Dublin suburb in the summer of 1984, mothers begin to call their children home. But on this warm evening, three children do not return from the dark and silent woods. When the police arrive, they find only one of the children. He is gripping a tree trunk in terror, wearing blood-filled sneakers and unable to recall a single detail of the previous hours.",      
 })

 book_four = Book.create!({
    reader_id: kent.id,
    title: "Inferno",
    author: "Dan Brown",
    photo_url: "https://images.gr-assets.com/books/1397093185l/17212231.jpg",
    publish: "May 14,2013",
    genre: "Mystery/Fiction/Thriller/Conspiracy",
    synopis: "
    In the heart of Italy, Harvard professor of symbology Robert Langdon is drawn into a harrowing world centered on one of history’s most enduring and mysterious literary masterpieces . . .",      
 })
 comment_one = Review.create! ({
     book_id: book_one.id,
    content:"Amazing book, if you are looking for suspense and thrill
    this will glue you to it, seriously check out! "

    
})

comment_two = Review.create! ({
     book_id: book_two.id,
    content:"read in a slow motion! if you like to loose out on suspence this is the one for you:)! "

    
})