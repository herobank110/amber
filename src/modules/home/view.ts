import $ from "jquery";
// @ts-ignore
import logo from "data-url:../../rsrc/rco_logo4.png";
// @ts-ignore
// import sampleVideo from "data-url:../../rsrc/tenYearsSampleVideo.mp4";
const sampleVideo =
  "https://roathchamber.org/share/10%20Years%20of%20Roath%20Chamber%20Orchestra.webm";

// @ts-ignore
import IMG_0392 from "../../rsrc/IMG_0392.jpeg";
// @ts-ignore
import IMG_1592 from "../../rsrc/IMG_1592.jpg";
// @ts-ignore
import IMG_3432 from "../../rsrc/IMG_3432.jpg";
// @ts-ignore
import IMG_5986 from "../../rsrc/IMG_5986.jpeg";
// @ts-ignore
import IMG_5997 from "../../rsrc/IMG_5997.jpeg";
// @ts-ignore
import IMG_9111 from "../../rsrc/IMG_9111.jpg";
// @ts-ignore
import IMG_9908 from "../../rsrc/IMG_9908.jpg";
import { Concert } from "../amberDb/amberDb";
import { longDate, resizeImage } from "../../utils/utils";
import { facebookButton, icon } from "../../utils/view";

export const mainHome = () =>
  `
  <div class="t t1" style="height: 30lvh">
    <section>
      <div class="upcomingCover"></div>
      <div class="logoWrap">
        <svg id="logo" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <image x="0" y="0" width="100" height="100" xlink:href="${logo}" />
          <g fill="#ffffff" fill-opacity="0" stroke="#ea230c">
            <path class="mask1"
              d="m38.65,20.61c8.05,-1.53 13.34,-5.87 12.75,-8.41c-0.59,-2.53 -5.47,-2.36 -7.47,5.56c-2,7.92 -4,27.64 -4.81,33.69c-0.82,6.04 -1.07,10.54 -3.58,27.41"
              stroke-width="1.19" />
            <path class="mask2" d="m42.69,16.28l4.34,10.76" />
            <path class="mask3" d="m49.45,35.24c-9.17,-9.17 -20.62,-3.52 -22.14,6.76c-1.52,10.28 13.31,18.97 22.48,6.34"
              stroke-width="1.5" />
            <path class="mask4"
              d="m16.34,73.66c1.24,-8.41 8.55,-18.48 20.48,-17.52c11.93,0.97 18.07,10.62 17.66,18.07c-0.41,7.45 -8.83,17.79 -18.62,17.72c-9.79,-0.07 -16.97,-4.21 -19.45,-17.72"
              stroke-width="3" />
          </g>
          <g fill="#ea230c">
            <rect class="mask5" height="4.55" rx="2" ry="2" width="17.03" x="46.07" y="19.52" />
            <rect class="mask6" height="4.48" width="23.66" x="50.14" y="49.31" />
            <rect class="mask7" height="4.83" width="29.59" x="54.48" y="78.69" />
          </g>
        </svg>
        <div>
        </div>
        <!-- <p class="tagline">
          Community Orchestra based in Roath, Cardiff.<br>
          Rehearsals are every Wednesday 7-9pm at Urban Crofters.
        </p> -->
      </div>
    </section>
  </div>
  <div class="t t2" style="height: 25lvh">
    <div></div>
  </div>
  <div class="t t3">
    <section>
      <a id="upcoming" class="megaScrollAnchor"></a>
      <div class="upcoming">
        <h2>Upcoming Concert</h2>
        <div class="row">
          <div class="poster"></div>
          <div class="info">
            <!-- <p>Join Roath Chamber Orchestra for the first of many concerts to celebrate our 10th anniversary year.</p> -->
            <p>Sunday, 17 December at 5 PM</p>
            <a href="https://www.facebook.com/events/177429568773354" class="primary">View Event on Facebook</a>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div class="t t3_5">
    <section class="tenYears">
      <a id="tenYears" class="megaScrollAnchor"></a>
      <h2>Ten Year Anniversary</h2>
      <video controls>
        <source type="video/webm" src="/share/10%20Years%20of%20Roath%20Chamber%20Orchestra.webm">
        <source type="video/mp4" src="/share/10%20Years%20of%20Roath%20Chamber%20Orchestra.mp4">
        <source type="video/webm" src="${sampleVideo}">
      </video>
    </section>
  </div>
  <div class="t t3_8">
    <div class="musicsNote">
      <div class="musicsNoteRoot">
        <div class="musicNote1"></div>
        <div class="musicNote2"></div>
        <div class="musicNote3"></div>
        <div class="musicNote4"></div>
      </div>
    </div>
  </div>
  <div class="t t4">
    <section class="about">
      <a id="about" class="megaScrollAnchor"></a>
      <h2>About Us</h2>
      <p>Roath Chamber Orchestra (formerly St Anne's Orchestra) was founded in September 2013 by a group of musical young professionals who regularly met on a Wednesday evening for few drinks. On realising there was at least 1/8 of an orchestra in the room the ensemble was formed and the first mission was to find additional keen music makers in the beautiful city of Cardiff!
      <p>Since then the orchestra has grown in strength and ambition performing at least four public concerts a year including a Family Concert in the Summer Term. Our repertoire is mainly chamber orchestral works (symphonies and overtures) with members of the orchestra regularly volunteering to perform a concerto with the rest of the ensemble. We have performed works by composers such as Bach, Mozart, Beethoven, Schubert and Tchaikovsky.
      <div class="gallery"> </div>
    </section>
  </div>
  <div class="t t5">
    <section class="past">
      <div class="postersScroll">
        <div class="posters">
          <i></i><i></i><i></i><i></i><i></i>
          <i></i><i></i><i></i><i></i><i></i>
          <i></i><i></i><i></i><i></i><i></i>
          <i></i><i></i><i></i><i></i><i></i>
        </div>
        <div class="postersOverlay"></div>
        <div class="details">
          <h2>Past Events</h2>
          <a href="/concerts" class="primary">Go To Concerts Archive</a>
        </div>
      </div>
    </section>
  </div>
  <div class="t t7">
    <section class="contact">
      <a id="contact" class="megaScrollAnchor"></a>
      ${
        /* 
      <h2>History</h2>
      <!-- <svg class="warped1" viewBox="0 0 72 100" xmlns="http://www.w3.org/2000/svg">
        <image x="0" y="0" width="72" height="100" xlink:href="data-url:./rsrc/warped1.png" />
        <path class="mask1"d="m9.25,103.13c2.88,-11.42 28.37,-30.17 36.18,-34.74c7.81,-4.57 23.2,-15.63 22.6,-27.76c-0.6,-12.14 -23.32,-26.2 -32.21,-28.49c-8.89,-2.28 -27.64,-3.85 -35.22,-5.41" fill="#000000" fill-opacity="0" id="svg_4" stroke="#ffffff" stroke-width="6"/>
      </svg> -->
      <ul>
        <li>September 2013 - Formation Of St Anne's Orchestra<br>
          A small group of people sharing a love of music came together to
          form an orchestra, with Simon Hendry as the conductor.
        </li>
        <li>July 2015 - Concert For Children<br>
          The beginning of an annual tradition of family friendly concerts, featuring
          engaging pieces and a raffle to conduct the orchestra.
        </li>
        <li>March 2016 - New Venue<br>
          St Anne's Church, the orchestra's rehearsal and performance venue, is
          shut down. The orchestra continues in St Margaret's Church.
        </li>
        <li>November 2019 - Change of Conductor<br>
          The promising first concert of many under the baton of James Grindle.
        </li>
        <li>January 2020 - New Name, New Venue<br>
          The orchestra moves again, now in Urban Crofters, and becomes known as Roath
          Chamber Orchestra!
        </li>
        <li>March 2020 - Coronovirus Cancels Concert<br>
          The pandemic ruins the much anticipated Spring concert, but the members' spirit
          is kept alive with online sessions.
        </li>
        <li>April 2022 - Return Of Live Concerts<br>
          The orchestra delighted the audience with an in-person concert in the new home
          of Urban Crofters.
        </li>
        <li>September 2023 - Ten Year Anniversary<br>
          Celebrating a decade of music making, made possible thanks to dedicated members
          and generous audience donations.
        </li>
      </ul>
      */ ""
      }
      <h2>Contact Us</h2>
      <p>
        We are particularly looking for regular Viola and Brass players. However,
        if you would like to be added to our list of deps, please get in touch
        via email or drop us a Facebook message.
      <p class="fb wide">
        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FRoathChamber&tabs&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId" width="340" height="130" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
      <p class="fb narrow">
        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FRoathChamber&tabs&width=300&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId" width="300" height="130" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
      <p>
        Email:
        <a href="mailto:roathchamber@gmail.com">roathchamber@gmail.com</a>
    </section>
  </div>`;

export const upcomingSection = (props: { concert: Concert }) =>
  $("<div>", { class: "upcoming" }).append(
    $("<h2>", { text: "Upcoming Concert" }),
    $("<div>", { class: "row" }).append(
      $("<div>", {
        class: "poster",
        css: {
          backgroundImage: `url('${resizeImage(
            props.concert.poster,
            600,
            400
          )}')`,
        },
      }),
      $("<div>", { class: "info" }).append(
        $("<h3>", { text: props.concert.title }),
        $("<span>", { text: longDate(props.concert.when) }),
        props.concert.facebook ? facebookButton(props.concert.facebook) : []
      )
    )
  );

export const notYetScheduled = () =>
  $("<div>", { class: "upcoming" }).append(
    $("<h2>", { text: "Upcoming Concert" }),
    $("<p>", { text: "Check back soon for details of our next concert." })
  );

const galleryImages = [
  IMG_0392,
  IMG_1592,
  IMG_3432,
  IMG_5986,
  IMG_5997,
  IMG_9111,
  IMG_9908,
];

// HAHAHA no structure for me!
let galleryIndex = 0;
const galleryLeft = () => galleryMove(-1);
const galleryRight = () => galleryMove(1);
function galleryMove(delta: number) {
  console.debug(`galleryMove(delta=${delta})`);
  galleryIndex =
    (galleryIndex + delta + galleryImages.length) % galleryImages.length;
  const el = $(".gallery");  // global!
  el.find("img").attr("src", galleryImages[galleryIndex]);
  el.find(".dot").removeClass("big").eq(galleryIndex).addClass("big");
}

export const gallery = () => {
  const el = $("<div>", { class: "gallery" }).append(
    $("<div>", { class: "leftRight" }).append(
      $("<div>")
        .append(icon({ icon: "chevron_left" }))
        .on("click", galleryLeft),
      $("<div>")
        .append(icon({ icon: "chevron_right" }))
        .on("click", galleryRight)
    ),
    $("<img>"),
    $("<div>", { class: "dots" }).append(
      galleryImages.map(() => $("<span>", { class: "dot" }))
    )
  );

  // initialize after adding to the DOM
  // stupid global state HAHAHA
  setTimeout(() => galleryMove(0), 0);
  return el;
};
