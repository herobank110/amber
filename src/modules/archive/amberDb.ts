export type Concert = {
  id: number;
  title: string;
  when: string;
  poster: string;
};

const database = {
  concerts: [
    {
      id: 1,
      title: "A Spring Concert",
      when: "2014-04-26T19:30",
      poster: "April 2014.jpeg",
    },
    {
      id: 2,
      title: "Spring Concert",
      when: "2017-04-02T19:30",
      poster: "April 2017.PNG",
    },
    {
      id: 3,
      title: "Spring Concert",
      when: "2022-04-06T19:30",
      poster: "April 2022.PNG",
    },
    {
      id: 4,
      title: "A Christmas Concert",
      when: "2014-12-03T19:30",
      poster: "Dec 2014.jpeg",
    },
    {
      id: 5,
      title: "St Anne's Christmas Concert",
      when: "2015-12-10T19:00",
      poster: "Dec 2015.jpeg",
    },
    {
      id: 6,
      title: "Christmas Concert",
      when: "2016-12-07T19:00",
      poster: "Dec 2016.PNG",
    },
    {
      id: 7,
      title: "Season's Greetings",
      when: "2019-10-11T19:30",
      poster: "Dec 2019.jpeg",
    },
    {
      id: 8,
      title: "Christmas",
      when: "2022-12-18T17:00",
      poster: "Dec 2-22.JPG",
    },
    {
      id: 9,
      title: "Christmas Festival",
      when: "2023-12-17T17:00",
      poster: "Dec 2023.PNG",
    },
    {
      id: 10,
      title: "A Summer Concert",
      when: "2014-07-13T19:30",
      poster: "July 2014.jpeg",
    },
    {
      id: 11,
      title: "A Short Ride",
      when: "2015-07-05T14:30",
      poster: "July 2015.jpeg",
    },
    {
      id: 12,
      title: "Seas & Storms",
      when: "2016-07-03T15:00",
      poster: "July 2016.jpeg",
    },
    {
      id: 13,
      title: "Musical Menagerie",
      when: "2017-07-02T15:00",
      poster: "July 2017.jpeg",
    },
    {
      id: 14,
      title: "When at night I go to sleep",
      when: "2018-07-01T15:30",
      poster: "July 2018.jpeg",
    },
    {
      id: 15,
      title: "Around the World in 60 Minutes",
      when: "2019-07-07T15:00",
      poster: "July 2019.jpg",
    },
    {
      id: 16,
      title: "The Orchestra's Day Out at the Zoo",
      when: "2023-07-02T15:00",
      poster: "July 2023.PNG",
    },
    {
      id: 17,
      title: "Toy Box",
      when: "2022-06-26T15:00",
      poster: "June 2022.PNG",
    },
    {
      id: 18,
      title: "A Mothering Sunday Concert",
      when: "2015-03-15T19:30",
      poster: "March 2015.jpeg",
    },
    {
      id: 19,
      title: "Mozart Requiem",
      when: "2016-03-13T19:30",
      poster: "March 2016.jpeg",
    },
    {
      id: 20,
      title: "Spring Concert",
      when: "2018-03-18T19:30",
      poster: "March 2018.jpeg",
    },
    {
      id: 21,
      title: "Small Forces",
      when: "2019-03-24T19:30",
      poster: "March 2019.jpg",
    },
    {
      id: 22,
      title: "Beyond Beethoven",
      when: "2020-03-29T19:30",
      poster: "March 2020.jpeg",
    },
    {
      id: 23,
      title: "Serenade to Springtime",
      when: "2023-03-26T19:30",
      poster: "March 2023.PNG",
    },
    {
      id: 24,
      title: "Bach Beethoven Rossini",
      when: "2019-05-12T19:30",
      poster: "May 2019.jpeg",
    },
    {
      id: 25,
      title: "A St Cecilia Concert",
      when: "2014-11-23T19:30",
      poster: "Nov 2014.jpeg",
    },
    {
      id: 26,
      title: "Concert",
      when: "2015-11-22T19:30",
      poster: "Nov 2015.jpeg",
    },
    {
      id: 27,
      title: "German Fursten",
      when: "2018-11-25T19:30",
      poster: "Nov 2018.jpg",
    },
    {
      id: 28,
      title: "Before Beethoven",
      when: "2019-11-17T19:30",
      poster: "Nov 2019.jpg",
    },
    {
      id: 29,
      title: "Brahms Dvorak",
      when: "2021-11-17T19:30",
      poster: "Nov 2021.PNG",
    },
    {
      id: 30,
      title: "Beethoven & Weber",
      when: "2022-11-27T19:00",
      poster: "Nov 2022.JPG",
    },
    {
      id: 31,
      title: "Roath Chamber Orchestra Revisited",
      when: "2023-11-26T19:00",
      poster: "Nov 2023.PNG",
    },
    {
      id: 32,
      title: "Concert",
      when: "2016-11-20T19:30",
      poster: "November 2016.jpeg",
    },
    {
      id: 33,
      title: "An Afternoon of Chamber Music",
      when: "2015-09-19T14:00",
      poster: "Sept 2015.jpeg",
    },
  ] as Concert[],
};

export default database;
