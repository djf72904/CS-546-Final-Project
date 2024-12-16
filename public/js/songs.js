const songs = [
    {
        level: 1,
        name: "Random",
        bpm: 40
    },
    {
        level: 1,
        bpm: 40,
        name: "Winterlude",
        artist: "Bob Dylan",
        link: "https://www.youtube.com/watch?v=BM-1X4SjkU4"
    },
    {
        level: 1,
        bpm: 40,
        name: "Xcogitate",
        artist: "Prince",
        link: "https://www.youtube.com/watch?v=5jisdQc41Zw"
    },
    {
        level: 1,
        bpm: 40,
        name: "One Love",
        artist: "Massive Attack",
        link: "https://www.youtube.com/watch?v=qvkyXiOeq9o"
    },
    {
        level: 2,
        name: "Random",
        bpm: 50
    },
    {
        level: 2,
        bpm: 50,
        name: "Open Arms",
        artist: "Journey",
        link: "https://www.youtube.com/watch?v=3ByIYof4mqo"
    },
    {
        level: 2,
        bpm: 50,
        name: "Somebody To Love",
        artist: "Queen",
        link: "https://www.youtube.com/watch?v=g-DF1Mzy_3g"
    },
    {
        level: 2,
        bpm: 50,
        name: "Simple Man",
        artist: "Lynyrd Skynyrd",
        link: "https://www.youtube.com/watch?v=8eNoms9wsGc"
    },
    {
        level: 3,
        name: "Random",
        bpm: 60
    },
    {
        level: 3,
        bpm: 60,
        name: "Exhausted",
        artist: "Foo Fighters",
        link: "https://www.youtube.com/watch?v=Ttzjq29EgwU"
    },
    {
        level: 3,
        bpm: 60,
        name: "Something In The Way",
        artist: "Nirvana",
        link: "https://www.youtube.com/watch?v=4VxdufqB9zg"
    },
    {
        level: 3,
        bpm: 60,
        name: "The Unforgiven",
        artist: "Metallica",
        link: "https://www.youtube.com/watch?v=domjqjQ_WRI"
    },
    {
        level: 4,
        name: "Random",
        bpm: 70
    },
    {
        level: 4,
        bpm: 70,
        name: "I Could Have Lied",
        artist: "Red Hot Chili Peppers",
        link: "https://www.youtube.com/watch?v=4upIYEHHM2o"
    },
    {
        level: 4,
        bpm: 70,
        name: "Hotel California",
        artist: "Eagles",
        link: "https://www.youtube.com/watch?v=BciS5krYL80"
    },
    {
        level: 4,
        bpm: 70,
        name: "Undone - The Sweater Song",
        artist: "Weezer",
        link: "https://www.youtube.com/watch?v=mLawKw3Qgig"
    },
    {
        level: 5,
        name: "Random",
        bpm: 80
    },
    {
        level: 5,
        bpm: 80,
        name: "Come Out and Play",
        artist: "The Offspring",
        link: "https://www.youtube.com/watch?v=GHUql3OC_uU"
    },
    {
        level: 5,
        bpm: 80,
        name: "Interstate Love Song",
        artist: "Stone Temple Pilots",
        link: "https://www.youtube.com/watch?v=UjjyC8lmoQs"
    },
    {
        level: 5,
        bpm: 80,
        name: "Santeria",
        artist: "Sublime",
        link: "https://www.youtube.com/watch?v=upoEYQ7dcEk"
    },
    {
        level: 6,
        name: "Random",
        bpm: 90
    },
    {
        level: 6,
        bpm: 90,
        name: "Drive",
        artist: "Incubus",
        link: "https://www.youtube.com/watch?v=fgT9zGkiLig"
    },
    {
        level: 6,
        bpm: 90,
        name: "Contact",
        artist: "The Police",
        link: "https://www.youtube.com/watch?v=1UoY19flAj0"
    },
    {
        level: 6,
        bpm: 90,
        name: "Re-Hash",
        artist: "Gorillaz",
        link: "https://www.youtube.com/watch?v=Tv1SYqLllKI"
    },
    {
        level: 7,
        name: "Random",
        bpm: 100
    },
    {
        level: 7,
        bpm: 100,
        name: "Man in the Mirror",
        artist: "Michael Jackson",
        link: "https://www.youtube.com/watch?v=Z9NYDgbKsBE"
    },
    {
        level: 7,
        bpm: 100,
        name: "Black Hole Sun",
        artist: "Soundgarden",
        link: "https://www.youtube.com/watch?v=3mbBbFH9fAg"
    },
    {
        level: 7,
        bpm: 100,
        name: "Bobo On The Corner",
        artist: "Beastie Boys",
        link: "https://www.youtube.com/watch?v=e3CX8MUhuZY"
    },
    {
        level: 8,
        name: "Random",
        bpm: 110
    },
    {
        level: 8,
        bpm: 110,
        name: "Dont Think Twice, Its All Right",
        artist: "Bob Dylan",
        link: "https://www.youtube.com/watch?v=1iHhWh9FtsQ"
    },
    {
        level: 8,
        bpm: 110,
        name: "Everything She Wants",
        artist: "Wham!",
        link: "https://www.youtube.com/watch?v=vDYw__at664"
    },
    {
        level: 8,
        bpm: 110,
        name: "All Shes Got",
        artist: "Sum 41",
        link: "https://www.youtube.com/watch?v=UxtMzaiqjew"
    },
    {
        level: 9,
        name: "Random",
        bpm: 120
    },
    {
        level: 9,
        bpm: 120,
        name: "Its My Life",
        artist: "Bon Jovi",
        link: "https://www.youtube.com/watch?v=bY3vXr7fm8k"
    },
    {
        level: 9,
        bpm: 120,
        name: "Im so Afraid",
        artist: "Fleetwood Mac",
        link: "https://www.youtube.com/watch?v=ZN3MneMAX9s"
    },
    {
        level: 9,
        bpm: 120,
        name: "Big Me",
        artist: "Foo Fighters",
        link: "https://www.youtube.com/watch?v=pLdJQFTnZfA"
    },
    {
        level: 10,
        name: "Random",
        bpm: 130
    },
    {
        level: 10,
        bpm: 130,
        name: "Venice Queen",
        artist: "Red Hot Chili Peppers",
        link: "https://www.youtube.com/watch?v=3s86rJvMIS0"
    },
    {
        level: 10,
        bpm: 130,
        name: "Dancing in the Moonlight",
        artist: "King Harvest",
        link: "https://www.youtube.com/watch?v=g5JqPxmYhlo"
    },
    {
        level: 10,
        bpm: 130,
        name: "Lovesong",
        artist: "The Cure",
        link: "https://www.youtube.com/watch?v=cI0QizfB7qo"
    }
]
