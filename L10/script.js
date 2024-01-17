new fullpage("#fullpage", {
  sectionsColor: ["#B19CD9", "#FFDAB9", "#98FF98"],
  navigation: true,
      });

var circles = document.querySelectorAll("circle");

circles.forEach(function (circle) {
  circle.addEventListener("mouseover", function (event) {
    showTooltip(circle.id.replace("-circle", ""), event);
  });

  circle.addEventListener("mouseout", function () {
    hideTooltip();
  });
});

function showTooltip(title, event) {
  var tooltip = document.getElementById("tooltip");
  tooltip.innerHTML = title;
  tooltip.style.left = event.pageX + "px";
  tooltip.style.top = event.pageY + "px";
  tooltip.style.display = "block";
}

function hideTooltip() {
  var tooltip = document.getElementById("tooltip");
  tooltip.style.display = "none";
}

anime({
  targets: ".demo6",
  innerHTML: [0, 257510],
  easing: "linear",
  round: 1,
  duration: 2000,
});
anime({
  targets: ".demo7",
  innerHTML: [0, 1365],
  easing: "linear",
  round: 1,
  duration: 2000,
});
anime({
  targets: ".demo8",
  innerHTML: [0, 678],
  easing: "linear",
  round: 1,
  duration: 2000,
});
anime({
  targets: ".long-text-container p",
  opacity: [0, 1],
  easing: "easeInOutQuad",
  delay: anime.stagger(300),
});
$(document).ready(function () {
  // Initialize DataTable
  var table = $("#coursesTable").DataTable({
    paging: true,
    searching: true,
    ordering: true,
    info: true,
    lengthMenu: [5, 10, 25, 50],
    pageLength: 5,
  });

  const labels = [
    "1 Dec 2021",
    "2 Dec 2021",
    "3 Dec 2021",
    "4 Dec 2021",
    "5 Dec 2021",
    "6 Dec 2021",
    "7 Dec 2021",
    "8 Dec 2021",
    "9 Dec 2021",
    "10 Dec 2021",
    "11 Dec 2021",
    "12 Dec 2021",
    "13 Dec 2021",
    "14 Dec 2021",
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Daily Cases (past 2 weeks)",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [
          1134, 1056, 986, 771, 756, 721, 654, 742, 689, 512, 455, 376,
          244, 103,
        ],
      },
    ],
  };

  const config = {
    type: "bar",
    data: data,
    options: {
      responsive: true,
    },
  };

  const myChart = new Chart(document.getElementById("myChart"), config);
});

document.addEventListener("DOMContentLoaded", function () {
  var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  var container = document.getElementById("svg-container");

  var timeline = anime.timeline({
    easing: "easeOutExpo",
    duration: 500,
    delay: anime.stagger(100),
  });

  data.forEach(function (_, i) {
    var figure = document.createElement("div");
    figure.className = "human-figure";

    var svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" fill="currentColor" class="bi bi-person-standing" viewBox="0 0 16 16">
    <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M6 6.75v8.5a.75.75 0 0 0 1.5 0V10.5a.5.5 0 0 1 1 0v4.75a.75.75 0 0 0 1.5 0v-8.5a.25.25 0 1 1 .5 0v2.5a.75.75 0 0 0 1.5 0V6.5a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v2.75a.75.75 0 0 0 1.5 0v-2.5a.25.25 0 0 1 .5 0"/>
</svg>`;

    var fillColor = i === 9 ? "red" : "blue";
    svgContent = svgContent.replace(
      'fill="currentColor"',
      'fill="' + fillColor + '"'
    );

    figure.innerHTML = svgContent;
    container.appendChild(figure);

    timeline.add({
      targets: figure,
      opacity: [0, 1],
      translateY: [30, 0],
    });
  });
});