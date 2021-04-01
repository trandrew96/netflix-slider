const slider = document.querySelector(".slider");
const btnLeft = document.getElementById("moveLeft");
const btnRight = document.getElementById("moveRight");

let imgs = [
  "https://occ-0-2706-2705.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdoQerpY3uXBUFRN-OFZrx75fE0plbeShc-EDS1lzvluhSZFd6NP_5ejooyopmvH4MizQ41WVIJeb1GX6h-BNrF0BWk.webp?r=0da",
  "https://occ-0-2706-2705.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZ9wtw2T7b4Lifg9PJqhUDF-MlHhRzhewj3Fn6F9CDKrvIzsWh2Dk4_ILCmWAR6ws9uMNhaGujq704H8x3DZHcZM5L4.webp?r=258",
  "https://occ-0-2706-2705.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQemYufprEmAtNhy1TH-sk9_SFblrcGrIHaFUzTjT7Znkapkp6pSFXW5x9KPhX8AlEszeAlrTTPgUlCuhreE4gZ9Z_E.webp?r=0ba",
  "https://occ-0-2706-2705.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUYJPbm-cXbr0iNo5QGDp7KhYXLCGfzFJL7_3qtAfaU-NkiPtoTGvMCcc7Oa-06Ymg_3s3OEwrv9U93zwVCDRqlcO3c.webp?r=549",
  "https://occ-0-2706-2705.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaadys9r9lL8EEHkGIkk9tIfeE1aFfFlxLEzeEiNRUKvjRFhyFcw1S42aVASdc2VrkT8ox0GdtGd6q2K5eAbgvCZffg.webp?r=a4b",

  "https://occ-0-2706-2705.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbm33kiGW3C_11VxssxKFjcT-zEz5GAaWQuaoSBcz5X3WW1JpIK5RWZj54NxiIkHo9x5OjUzGcZo0Wynix2rQi-0H14.webp?r=488",
  "https://occ-0-2706-2705.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUYQKN5djWaag8OHjuDmqKVXU3XhUim9j5t9uBpuey1wXiwqKP1oEWD6BqVkOGjshrnq32hSMEtNqhw-bqmDgjrKKI8.webp?r=a62",
  "https://occ-0-2706-2705.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeVABduCR8GmBlBxJ5sz04xuEUa5DdyC41F563vm-jYTOoWkT7R9wB0Bc4-ZMG1CVi3lyl4ibxTkGnyxHiXZ8s1ol90.webp?r=bf9",
  "https://occ-0-2706-2705.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQIUswywZ36iqJ8r3YsgUpYJlO5UbZtUxtI7UGqSet-1A3AhCP9iK8-MExU0JeS-tCo4_jJC8EQ_AZlWY8ImQIVLZLQ.webp?r=16b",
  "https://occ-0-2706-2705.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRMC1YYOELE9p4-aK8-cKadxHXTs9TYIJUQkKScV7GxzLcqaGdg_F0bXR36P-CRs1NmpeWL6EUYrd7ulOU9kjzIguQ8.webp?r=339",

  "https://occ-0-2706-2705.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABci-djwlZ2StYI_27v1dWEWRsuOZvJ3hWnOngQcDXlhfIYFd_uOJgjiWTY7LtpPK2FDYJ3qJpHJfi9HGonF-BjG-y7I.webp?r=fb0",
  "https://occ-0-2706-2705.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQmYO94F1bxeZNApDCgMr8Np7XN7l1B8sEIcduIVWDWRYFcuzMSBYeaSJan6TKnpGv8o5gjTzFvGKjytJMz0ATYJXTM.webp?r=92a",
  "https://occ-0-2706-2705.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS_dRSlFU_u0tNY5yVJ_1djEC0sKk1bkMerdJkC7qbycU2puAK__BeKQu_-ZdhcTnr_lw8q8wEHs8nOlMGOH67N71qA.webp?r=342",
  "https://occ-0-2706-2705.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXUG5OjcwHhsnNLVug5HH5ZJf7zhhOjOYMHLUnjquqG3sZm9DRnHQrz5-TQuVR9qXSKg2vhHeKrlO0dc9z0kgxfPtDQ.webp?r=a5a",
  "https://occ-0-2706-2705.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTK-4T4k6ntqfi35Jm4FSZIIhQLJkvOa-0ULw6tnJbPVZgpDR9sLgPvbOMwqnqPLSdgkt7VjEGRQ7wdab3C8W8AIrcU.webp?r=4d7",
];

imgs.forEach((src) => {
  var newItem = document.createElement("li");
  var newMovie = document.createElement("div");
  var newImage = document.createElement("img");
  newImage.src = src;
  newMovie.appendChild(newImage);
  newMovie.className = "item";
  newItem.appendChild(newMovie);
  var list = document.getElementById("myList");
  list.insertBefore(newItem, list.childNodes[list.childNodes.length - 1]);
});

slider.addEventListener("scroll", (e) => {
  let x = slider.scrollLeft;
});

// Scroll Left button
btnLeft.addEventListener("click", (e) => {
  console.log("going left");
  let width = slider.offsetWidth;
  slider.scrollBy({
    top: 0,
    left: -width,
    behavior: "smooth",
  });
});

// Sroll Right button
btnRight.addEventListener("click", (e) => {
  console.log("going right");

  let x = slider.scrollLeft;
  let width = slider.offsetWidth;
  width -= width * 0.04;

  console.log(`x = ${x}`);
  console.log(`width = ${width}`);

  // Scroll back to beginning if we're currently at the end
  if (x >= width * 1.5) {
    slider.scrollBy({
      top: 0,
      left: -9999,
      behavior: "smooth",
    });
  } else {
    slider.scrollBy({
      top: 0,
      left: +width,
      behavior: "smooth",
    });
  }
});
