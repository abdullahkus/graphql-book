const data = {
  books: [
    {
      "id": 1,
      "title": "AHarry Potter and the Sorcerer's Stone",
      "genre_id": 1,
      "author_id": 1,
      "publisher_date": "1997-06-26"
    },
    {
      "id": 2,
      "title": "ZThe Lord of the Rings",
      "genre_id": 1,
      "author_id": 2,
      "publisher_date": "1954-07-29"
    },
    {
      "id": 3,
      "title": "The Hobbit",
      "genre_id": 1,
      "author_id": 2,
      "publisher_date": "1937-09-21"
    },
    {
      "id": 4,
      "title": "To Kill a Mockingbird",
      "genre_id": 2,
      "author_id": 3,
      "publisher_date": "1960-07-11"
    },
    {
      "id": 5,
      "title": "The Great Gatsby",
      "genre_id": 2,
      "author_id": 4,
      "publisher_date": "1925-04-10"
    },
    {
      "id": 6,
      "title": "The Catcher in the Rye",
      "genre_id": 2,
      "author_id": 5,
      "publisher_date": "1951-07-16"
    },
    {
      "id": 7,
      "title": "The Hunger Games",
      "genre_id": 3,
      "author_id": 6,
      "publisher_date": "2008-09-14"
    },
    {
      "id": 8,
      "title": "Divergent",
      "genre_id": 3,
      "author_id": 7,
      "publisher_date": "2011-05-03"
    },
    {
      "id": 9,
      "title": "The Maze Runner",
      "genre_id": 3,
      "author_id": 8,
      "publisher_date": "2009-10-06"
    },
    {
      "id": 10,
      "title": "The Fault in Our Stars",
      "genre_id": 4,
      "author_id": 9,
      "publisher_date": "2012-01-10"
    },
    {
      "id": 11,
      "title": "The Da Vinci Code",
      "genre_id": 7,
      "author_id": 10,
      "publisher_date": "2003-03-18"
    },
    {
      "id": 12,
      "title": "The Chronicles of Narnia",
      "genre_id": 1,
      "author_id": 11,
      "publisher_date": "1950-03-14",
    },
    {
      "id": 13,
      "title": "The Alchemist",
      "genre_id": 6,
      "author_id": 12,
      "publisher_date": "1988-08-01"
    },
    {
      "id": 14,
      "title": "The Kite Runner",
      "genre_id": 2,
      "author_id": 13,
      "publisher_date": "2003-05-01"
    },
    {
      "id": 15,
      "title": "The Girl with the Dragon Tattoo",
      "genre_id": 7,
      "author_id": 14,
      "publisher_date": "2005-08-27"
    },
    {
      "id": 16,
      "title": "The Secret",
      "genre_id": 8,
      "author_id": 15,
      "publisher_date": "2006-03-01"
    },
    {
      "id": 17,
      "title": "The Help",
      "genre_id": 9,
      "author_id": 16,
      "publisher_date": "2009-02-10"
    },
    {
      "id": 18,
      "title": "The Immortal Life of Henrietta Lacks",
      "genre_id": 10,
      "author_id": 17,
      "publisher_date": "2010-02-02"
    },
    {
      "id": 19,
      "title": "The Girl on the Train",
      "genre_id": 7,
      "author_id": 18,
      "publisher_date": "2015-01-13"
    },
    {
      "id": 20,
      "title": "The Handmaid's Tale",
      "genre_id": 3,
      "author_id": 19,
      "publisher_date": "1985-10-01"
    },
    {
      "id": 21,
      "title": "The Secret Garden",
      "genre_id": 5,
      "author_id": 20,
      "publisher_date": "1911-04-01"
    },
    {
      "id": 22,
      "title": "The Name of the Wind",
      "genre_id": 1,
      "author_id": 21,
      "publisher_date": "2007-03-27"
    },
    {
      "id": 23,
      "title": "The Wise Man's Fear",
      "genre_id": 1,
      "author_id": 21,
      "publisher_date": "2011-03-01"
    },
    {
      "id": 24,
      "title": "The Lies of Locke Lamora",
      "genre_id": 1,
      "author_id": 22,
      "publisher_date": "2006-06-27"
    },
    {
      "id": 25,
      "title": "The Republic",
      "genre_id": 11,
      "author_id": 23,
      "publisher_date": "1980-01-01"
    },
    {
      "id": 26,
      "title": "The Old Man and the Sea",
      "genre_id": 2,
      "author_id": 24,
      "publisher_date": "1952-09-01"
    },
    {
      "id": 27,
      "title": "The Picture of Dorian Gray",
      "genre_id": 2,
      "author_id": 25,
      "publisher_date": "1890-06-20"
    },
    {
      "id": 28,
      "title": "The Adventures of Huckleberry Finn",
      "genre_id": 2,
      "author_id": 26,
      "publisher_date": "1884-12-10"
    },
    {
      "id": 29,
      "title": "The Bell Jar",
      "genre_id": 2,
      "author_id": 27,
      "publisher_date": "1963-01-14"
    },
    {
      "id": 30,
      "title": "The Giver",
      "genre_id": 3,
      "author_id": 28,
      "publisher_date": "1993-05-12"
    },
    {
      "id": 31,
      "title": "The Outsiders",
      "genre_id": 4,
      "author_id": 29,
      "publisher_date": "1967-04-01"
    },
    {
      "id": 32,
      "title": "The Cat in the Hat",
      "genre_id": 5,
      "author_id": 30,
      "publisher_date": "1957-03-02"
    },
    {
      "id": 33,
      "title": "The Giving Tree",
      "genre_id": 5,
      "author_id": 31,
      "publisher_date": "1964-09-01"
    },
    {
      "id": 34,
      "title": "The Lion, the Witch and the Wardrobe",
      "genre_id": 1,
      "author_id": 32,
      "publisher_date": "1950-10-01"
    },
    {
      "id": 35,
      "title": "The Very Hungry Caterpillar",
      "genre_id": 5,
      "author_id": 33,
      "publisher_date": "1969-09-01"
    },
    {
      "id": 36,
      "title": "The Giving Tree",
      "genre_id": 5,
      "author_id": 34,
      "publisher_date": "1964-09-01"
    },
  ],
  authors: [
    {
      "id": 1,
      "first_name": "J.K.",
      "last_name": "Rowling"
    },
    {
      "id": 2,
      "first_name": "J.R.R.",
      "last_name": "Tolkien"
    },
    {
      "id": 3,
      "first_name": "Harper",
      "last_name": "Lee"
    },
    {
      "id": 4,
      "first_name": "F. Scott",
      "last_name": "Fitzgerald"
    },
    {
      "id": 5,
      "first_name": "J.D.",
      "last_name": "Salinger"
    },
    {
      "id": 6,
      "first_name": "Suzanne",
      "last_name": "Collins"
    },
    {
      "id": 7,
      "first_name": "Veronica",
      "last_name": "Roth"
    },
    {
      "id": 8,
      "first_name": "James",
      "last_name": "Dashner"
    },
    {
      "id": 9,
      "first_name": "John",
      "last_name": "Green"
    },
    {
      "id": 10,
      "first_name": "Dan",
      "last_name": "Brown"
    },
    {
      "id": 11,
      "first_name": "C.S.",
      "last_name": "Lewis"
    },
    {
      "id": 12,
      "first_name": "Paulo",
      "last_name": "Coelho"
    },
    {
      "id": 13,
      "first_name": "Khaled",
      "last_name": "Hosseini"
    },
    {
      "id": 14,
      "first_name": "Stieg",
      "last_name": "Larsson"
    },
    {
      "id": 15,
      "first_name": "Rhonda",
      "last_name": "Byrne"
    },
    {
      "id": 16,
      "first_name": "Kathryn",
      "last_name": "Stockett"
    },
    {
      "id": 17,
      "first_name": "Rebecca",
      "last_name": "Skloot"
    },
    {
      "id": 18,
      "first_name": "Paula",
      "last_name": "Hawkins"
    },
    {
      "id": 19,
      "first_name": "Margaret",
      "last_name": "Atwood"
    },
    {
      "id": 20,
      "first_name": "Frances",
      "last_name": "Hodgson Burnett"
    },
    {
      "id": 21,
      "first_name": "Patrick",
      "last_name": "Rothfuss"
    },
    {
      "id": 22,
      "first_name": "Scott",
      "last_name": "Lynch"
    },
    {
      "id": 23,
      "first_name": "Plato",
      "last_name": ""
    },
    {
      "id": 24,
      "first_name": "Ernest",
      "last_name": "Hemingway"
    },
    {
      "id": 25,
      "first_name": "Oscar",
      "last_name": "Wilde"
    },
    {
      "id": 26,
      "first_name": "Mark",
      "last_name": "Twain"
    },
    {
      "id": 27,
      "first_name": "Sylvia",
      "last_name": "Plath"
    },
    {
      "id": 28,
      "first_name": "Lois",
      "last_name": "Lowry"
    },
    {
      "id": 29,
      "first_name": "S.E.",
      "last_name": "Hinton"
    },
    {
      "id": 30,
      "first_name": "Dr.",
      "last_name": "Seuss"
    },
    {
      "id": 31,
      "first_name": "Shel",
      "last_name": "Silverstein"
    },
    {
      "id": 32,
      "first_name": "C.S.",
      "last_name": "Lewis"
    },
    {
      "id": 33,
      "first_name": "Eric",
      "last_name": "Carle"
    },
    {
      "id": 34,
      "first_name": "Shel",
      "last_name": "Silverstein"
    },

  ],
  genres: [
    {
      id: 1,
      name: "Fantasty"
    },
    {
      id: 2,
      name: "Literary Fiction"
    },
    {
      id: 3,
      name: "Science Fiction"
    },
    {
      id: 4,
      name: "Young Adult"
    },
    {
      id: 5,
      name: "Children's Literature"
    },
    {
      id: 6,
      name: "Philosophical Fiction"
    },
    {
      id: 7,
      name: "Thriller"
    },
    {
      id: 8,
      name: "Self-help"
    },
    {
      id: 9,
      name: "Historical Fiction"
    },
    {
      id: 10,
      name: "Non-fiction"
    },
    {
      id: 11,
      name: "Philosophy"
    }
  ]
};

export default data