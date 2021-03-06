function generateChart() {
  var targetId = "hchart-container";
  var rowLength = document.getElementById("config-rowLength").value;
  var needAtLeast = 100;
  var startFrom = 1;
  var cellCounter = startFrom;
  var rowCounter = 1;
  var lastRow = false;
  var countBy = document.getElementById("config-countBy").value;
  var startCountAt = 0;

  var cellClass = "";
  var chartHTML = '<table class="hchart">';

  while (!lastRow) {
    chartHTML += '<tr class="hchart-row">';
    rowCounter = 1;
    while (rowCounter <= rowLength) {
      if ((cellCounter - startCountAt) % countBy === 0) {
        cellClass = " highlight";
      } else {
        cellClass = "";
      }
      chartHTML += '<td class="hchart-cell' + cellClass + '">' + cellCounter + '</td>';
      if (cellCounter === needAtLeast) {
        lastRow = true;
      }
      cellCounter++;
      rowCounter++;
    }
    chartHTML += '</tr>';
  }

  chartHTML += '</table>';

  document.getElementById(targetId).innerHTML = chartHTML;
}

//document.getElementById("generate").addEventListener("click", generateChart, false);
document.getElementById("config-countBy").addEventListener("change", generateChart, false);
document.getElementById("config-rowLength").addEventListener("change", generateChart, false);

generateChart();
