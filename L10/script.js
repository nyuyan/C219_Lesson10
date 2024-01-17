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
    $.get("courses.html", function (data) {
      var tbody = $(data).find("tbody");
      $("#coursesTable tbody").append(tbody.html());

      $("#coursesTable").DataTable();
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
          data: [1134, 1056, 986, 771, 756, 721, 654, 742, 689, 512, 455, 376, 244, 103],
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
</script>
<script>
  $(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });