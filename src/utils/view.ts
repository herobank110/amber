import $ from "jquery";

export const footer = () =>
  $(`
  <footer>
    <div class="footerInner">
      <a href="https://davidkanekanian.co.uk">Website By David Kanekanian</a><br>
      &copy; Copyright 2023 Roath Chamber Orchestra<br>
      <!-- <a href="">Switch to admin mode</a> -->
    </div>
  </footer>`);
