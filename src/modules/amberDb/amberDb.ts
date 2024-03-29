import { isDevMode } from "../../utils/utils";

export type ProgrammeItem = {
  composer: string;
  title: string;
  /** ie soloists */
  performanceNotes?: string;
};

export type Concert = {
  id: number;
  title: string;
  when: string;
  thumb: string;
  poster: string;
  facebook?: string;
  programme?: ProgrammeItem[];
};

type ID = number;

const mockDb = {
  concerts: [
    {
      id: 1,
      title: "A Spring Concert",
      when: "2014-04-26T19:30",
      thumb: "/share/concerts/April 2014_thumb.jpeg",
      poster: "/share/concerts/April 2014.jpeg",
      programme: [
        {
          composer: "Beethoven",
          title: "Overture to The Creatures of Prometheus, Op. 43",
        },
        {
          composer: "Mozart",
          title: "Concerto for Flute and Harp in C major, K. 299/297c",
          performanceNotes:
            "Solos: Nicole Esposito, flute; and Rita Costanzi, harp",
        },
        {
          composer: "Schubert",
          title: "Symphony No. 8 in B minor, D. 759, 'Unfinished'",
        },
      ],
    },
    {
      id: 2,
      title: "Spring Concert loremipsumdolorsitametconsecteturadipiscingelit",
      when: "2017-04-02T19:30",
      thumb: "/share/concerts/April 2017_thumb.PNG",
      poster: "/share/concerts/April 2017.PNG",
      facebook: "https://www.facebook.com/events/395345450829467/",
    },
    {
      id: 3,
      title: "Spring Concert",
      when: "2022-04-06T19:30",
      thumb: "/share/concerts/April 2022_thumb.PNG",
      poster: "/share/concerts/April 2022.PNG",
      facebook: "https://www.facebook.com/events/1080501699194922/",
      programme: [
        {
          composer: "Beethoven",
          title: "Symphony No. 6 in F major, Op. 68, 'Pastoral'",
        },
        {
          composer: "Mozart",
          title: "Piano Concerto No. 21 in C major, K. 467",
          performanceNotes: "Solo: Ingrid Fliter, piano",
        },
      ],
    },
    {
      id: 4,
      title: "A Christmas Concert",
      when: "2014-12-03T19:30",
      thumb: "/share/concerts/Dec 2014_thumb.jpeg",
      poster: "/share/concerts/Dec 2014.jpeg",
    },
    {
      id: 5,
      title: "St Anne's Christmas Concert",
      when: "2015-12-10T19:00",
      thumb: "/share/concerts/Dec 2015_thumb.jpeg",
      poster: "/share/concerts/Dec 2015.jpeg",
      facebook: "https://www.facebook.com/events/1725314061021207/",
    },
    {
      id: 6,
      title: "Christmas Concert",
      when: "2016-12-07T19:00",
      thumb: "/share/concerts/Dec 2016_thumb.PNG",
      poster: "/share/concerts/Dec 2016.PNG",
      facebook: "https://www.facebook.com/events/543646365837590/",
    },
    {
      id: 7,
      title: "Season's Greetings",
      when: "2177-10-11T19:30",
      thumb: "/share/concerts/Dec 2019_thumb.jpeg",
      poster: "/share/concerts/Dec 2019.jpeg",
      facebook: "https://www.facebook.com/events/2967555769925243/",
    },
    {
      id: 8,
      title: "Celebrate! 10 Years of Roath Chamber Orchestra",
      when: "2077-12-18T17:00",
      thumb: "/share/concerts/Dec 2022_thumb.JPG",
      poster: "https://roathchamber.org/share/upload/Dec%202022.a041bd.jpg",
      facebook: "https://www.facebook.com/events/695774711855625/",
    },
    {
      id: 9,
      title: "Christmas Festival",
      when: "2023-12-17T17:00",
      thumb: "/share/concerts/Dec 2023_thumb.PNG",
      poster: "/share/concerts/Dec 2023.PNG",
      facebook: "https://www.facebook.com/events/177429568773354/",
    },
    {
      id: 10,
      title: "A Summer Concert",
      when: "2014-07-13T19:30",
      thumb: "/share/concerts/July 2014_thumb.jpeg",
      poster: "/share/concerts/July 2014.jpeg",
    },
    {
      id: 11,
      title: "A Short Ride",
      when: "2015-07-05T14:30",
      thumb: "/share/concerts/July 2015_thumb.jpeg",
      poster: "/share/concerts/July 2015.jpeg",
      facebook: "https://www.facebook.com/events/438551302993260/",
    },
    {
      id: 12,
      title: "Seas & Storms",
      when: "1716-07-03T15:00",
      thumb: "/share/concerts/July 2016_thumb.jpeg",
      poster: "/share/concerts/July 2016.jpeg",
      facebook: "https://www.facebook.com/events/602111969965403/",
      programme: [
        {
          composer: "Beethoven",
          title: "Overture to The Creatures of Prometheus, Op. 43",
        },
      ],
    },
    {
      id: 13,
      title: "Musical Menagerie",
      when: "2017-07-02T15:00",
      thumb: "/share/concerts/July 2017_thumb.jpeg",
      poster: "/share/concerts/July 2017.jpeg",
      facebook: "https://www.facebook.com/events/133041403927056/",
    },
    {
      id: 14,
      title: "When at night I go to sleep",
      when: "2018-07-01T15:30",
      thumb: "/share/concerts/July 2018_thumb.jpeg",
      poster: "/share/concerts/July 2018.jpeg",
      facebook: "https://www.facebook.com/events/2144715355543863/",
    },
    {
      id: 15,
      title: "Around the World in 60 Minutes",
      when: "2019-07-07T15:00",
      thumb: "/share/concerts/July 2019_thumb.jpg",
      poster: "/share/concerts/July 2019.jpg",
      facebook: "https://www.facebook.com/events/2189435221152196/",
    },
    {
      id: 16,
      title: "The Orchestra's Day Out at the Zoo",
      when: "2023-07-02T15:00",
      thumb: "/share/concerts/July 2023_thumb.PNG",
      poster: "/share/concerts/July 2023.PNG",
      facebook: "https://www.facebook.com/events/209130961985710/",
    },
    {
      id: 17,
      title: "Toy Box",
      when: "2022-06-26T15:00",
      thumb: "/share/concerts/June 2022_thumb.PNG",
      poster: "/share/concerts/June 2022.PNG",
      facebook: "https://www.facebook.com/events/1106400593274570/",
    },
    {
      id: 18,
      title: "A Mothering Sunday Concert",
      when: "2015-03-15T19:30",
      thumb: "/share/concerts/March 2015_thumb.jpeg",
      poster: "/share/concerts/March 2015.jpeg",
      facebook: "https://www.facebook.com/events/850189531708468/",
    },
    {
      id: 19,
      title: "Mozart Requiem",
      when: "2016-03-13T19:30",
      thumb: "/share/concerts/March 2016_thumb.jpeg",
      poster: "/share/concerts/March 2016.jpeg",
      facebook: "https://www.facebook.com/events/1128656563824991/",
    },
    {
      id: 20,
      title: "Spring Concert",
      when: "2018-03-18T19:30",
      thumb: "/share/concerts/March 2018_thumb.jpeg",
      poster: "/share/concerts/March 2018.jpeg",
      facebook: "https://www.facebook.com/events/1980078358926583/",
    },
    {
      id: 21,
      title: "Small Forces",
      when: "2019-03-24T19:30",
      thumb: "/share/concerts/March 2019_thumb.jpg",
      poster: "/share/concerts/March 2019.jpg",
      facebook: "https://www.facebook.com/events/639158556540232/",
    },
    {
      id: 22,
      title: "Beyond Beethoven",
      when: "2020-03-29T19:30",
      thumb: "/share/concerts/March 2020_thumb.jpeg",
      poster: "/share/concerts/March 2020.jpeg",
      facebook: "https://www.facebook.com/events/634668877299718/",
    },
    {
      id: 23,
      title: "Serenade to Springtime",
      when: "2023-03-26T19:30",
      thumb: "/share/concerts/March 2023_thumb.PNG",
      poster: "/share/concerts/March 2023.PNG",
      facebook: "https://www.facebook.com/events/565159338915094/",
    },
    {
      id: 24,
      title: "Bach Beethoven Rossini",
      when: "2019-05-12T19:30",
      thumb: "/share/concerts/May 2019_thumb.jpeg",
      poster: "/share/concerts/May 2019.jpeg",
      facebook: "https://www.facebook.com/events/313855729290379/",
    },
    {
      id: 25,
      title: "A St Cecilia Concert",
      when: "2014-11-23T19:30",
      thumb: "/share/concerts/Nov 2014_thumb.jpeg",
      poster: "/share/concerts/Nov 2014.jpeg",
    },
    {
      id: 26,
      title: "St Cecilia Concert",
      when: "2015-11-22T19:30",
      thumb: "/share/concerts/Nov 2015_thumb.jpeg",
      poster: "/share/concerts/Nov 2015.jpeg",
      facebook: "https://www.facebook.com/events/597328333738505/",
    },
    {
      id: 27,
      title: "German Fürsten",
      when: "2018-11-25T19:30",
      thumb: "/share/concerts/Nov 2018_thumb.jpg",
      poster: "/share/concerts/Nov 2018.jpg",
      facebook: "https://www.facebook.com/events/632878467114063/",
    },
    {
      id: 28,
      title: "Before Beethoven",
      when: "2019-11-17T19:30",
      thumb: "/share/concerts/Nov 2019_thumb.jpg",
      poster: "/share/concerts/Nov 2019.jpg",
      facebook: "https://www.facebook.com/events/385593555716964/",
    },
    {
      id: 29,
      title: "Brahms Dvorak",
      when: "2021-11-17T19:30",
      thumb: "/share/concerts/Nov 2021_thumb.PNG",
      poster: "/share/concerts/Nov 2021.PNG",
    },
    {
      id: 30,
      title: "Beethoven & Weber",
      when: "2022-11-27T19:00",
      thumb: "/share/concerts/Nov 2022_thumb.JPG",
      poster: "/share/concerts/Nov 2022.JPG",
      facebook: "https://www.facebook.com/events/428135782788892/",
    },
    {
      id: 31,
      title: "Roath Chamber Orchestra Revisited",
      when: "2023-11-26T19:00",
      thumb: "/share/concerts/Nov 2023_thumb.PNG",
      poster: "/share/concerts/Nov 2023.PNG",
      facebook: "https://www.facebook.com/events/637520735235668/",
    },
    {
      id: 32,
      title: "St Cecilia Concert",
      when: "2016-11-20T19:30",
      thumb: "/share/concerts/November 2016_thumb.jpeg",
      poster: "/share/concerts/November 2016.jpeg",
      facebook: "https://www.facebook.com/events/179852505753174/",
    },
    {
      id: 33,
      title: "An Afternoon of Chamber Music",
      when: "2015-09-19T14:00",
      thumb: "/share/concerts/Sept 2015_thumb.jpeg",
      poster: "/share/concerts/Sept 2015.jpeg",
      facebook: "https://www.facebook.com/events/1666181833604660/",
    },
  ] as Concert[],
};

const CACHE_KEY = "amberDb.concerts";

export async function getConcerts(cached = true): Promise<Concert[]> {
  console.debug(`getConcerts(cached=${cached})`);

  if (!cached || sessionStorage.getItem(CACHE_KEY) === null) {
    console.debug("getConcerts: fetching data");
    let data;
    if (isDevMode()) {
      console.log("getConcerts: (dev mode) auto resolve");
      data = mockDb.concerts;
    } else {
      data = await fetch("/php/concerts.php").then((response) =>
        response.json()
      );
    }
    sessionStorage.setItem(CACHE_KEY, JSON.stringify(data));
  }

  return JSON.parse(sessionStorage.getItem(CACHE_KEY)!) as Concert[];
}

const CONCERT_API_URL = "/php/concertEdit.php";

/** a combination of update or insert. */
export function saveConcert(concert: Concert): Promise<ID> {
  console.debug(`saveConcert(${JSON.stringify(concert)})`);

  const formData = objectToFormData({
    ...concert,
    // Set the operation explicitly.
    op: concert.id == -1 ? "insert" : "update",
  });

  // After the form data so we can validate that function works
  if (isDevMode()) {
    return new Promise((resolve, reject) => {
      console.log("saveConcert: (dev mode) auto resolve");
      setTimeout(() => resolve(1), 1000);
    });
  }

  return new Promise((resolve, reject) => {
    fetch(CONCERT_API_URL, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("saveConcert: resolved", data);
        // Get the inserted ID if it was an insert, otherwise just
        // return the same ID to simplify app logic.
        resolve(concert.id == -1 ? data.id : concert.id);
      })
      // Reject so we can show an error message to the user.
      .catch(reject);
  });
}

export async function deleteConcert(id: ID) {
  console.debug(`deleteConcert(id=${id})`);
  const formData = objectToFormData({ id, op: "delete" });

  if (isDevMode()) {
    console.log("deleteConcert: (dev mode) auto resolve");
    return true;
  }

  try {
    await fetch(CONCERT_API_URL, { method: "POST", body: formData });
  } catch (e) {
    console.error("Failed to delete concert", e);
    return false;
  }

  return true;
}

export type Catalogue = {
  composers: CatalogueComposer[];
};

type CatalogueComposer = {
  name: string;
  works: CatalogueWork[];
};

type CatalogueWork = {
  title: string;
  performances: CataloguePerformance[];
};

type CataloguePerformance = {
  notes: string;
  concert: Concert;
};

export async function getCatalogue() {
  console.debug("getCatalogue()");

  const retVal: Catalogue = { composers: [] };
  const concerts = await getConcerts();
  for (const concert of concerts) {
    if (!concert.programme) continue;
    for (const programmeItem of concert.programme) {
      const composerName = programmeItem.composer;
      const workTitle = programmeItem.title;
      const performanceNotes = programmeItem.performanceNotes || "";

      const composer = retVal.composers.find((c) => c.name == composerName) || {
        //
        name: composerName,
        works: [],
      };

      let work = composer.works.find((w) => w.title == workTitle);
      if (!work) {
        work = { title: workTitle, performances: [] };
        composer.works.push(work);
      }

      work.performances.push({ notes: performanceNotes, concert });

      if (!retVal.composers.includes(composer)) {
        retVal.composers.push(composer);
      }
    }
  }

  // Sort all the levels of the catalogue
  retVal.composers.sort((a, b) => a.name.localeCompare(b.name));
  retVal.composers.forEach((composer) => {
    composer.works.sort((a, b) => a.title.localeCompare(b.title));
    composer.works.forEach((work) => {
      work.performances.sort((a, b) => a.concert.when.localeCompare(b.concert.when));
    });
  });

  return retVal;
}

function objectToFormData(
  obj: Record<string, Object | { toString(): string }>
) {
  const formData = new FormData();
  for (const [key, value] of Object.entries(obj)) {
    if (value === undefined) continue;
    const strValue =
      typeof value == "object"
        ? JSON.stringify(value)
        : (value as any).toString();

    formData.append(key, strValue);
  }
  return formData;
}
