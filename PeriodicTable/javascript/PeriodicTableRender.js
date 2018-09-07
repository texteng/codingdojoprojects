//See jqueryfunctions for interactive portions
const Tablematrix = [
    ["thin", "CL", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "CL"],
    ["RL", 1, "CL", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "CL", "CL", "CL", "CL", "CL", 2],
    ["RL", 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 6, 7, 8, 9, 10],
    ["RL", 11, 12, "CL", "CL", "CL", "CL", "CL", "CL", "CL", "CL", "CL", "CL", 13, 14, 15, 16, 17, 18],
    ["RL", 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
    ["RL", 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54],
    ["RL", 55, 56, "Lanthanide", 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86],
    ["RL", 87, 88, "Actinoid", 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118],
    ["SB", "SB", "SB", "SB", "SB", "SB", "SB", "SB", "SB", "SB", "SB", "SB", "SB", "SB", "SB", "SB", "SB", "SB", "SB"],
    ["thin", 0, 0, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 0],
    ["thin", 0, 0, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 0]
]   

const Tablematrixwide = [
    ["thin", "CL", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "CL"],
    ["RL", 1, "CL", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "CL", "CL", "CL", "CL", "CL", 2],
    ["RL", 3, 4, 0 , 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 6, 7, 8, 9, 10],
    ["RL", 11, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "CL", "CL", "CL", "CL", "CL", "CL", "CL", "CL", "CL", "CL", 13, 14, 15, 16, 17, 18],
    ["RL", 19, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
    ["RL", 37, 38, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54],
    ["RL", 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86],
    ["RL", 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118],
]

var wide = false;
var matrix = Tablematrix; //Table by default is normal sized.
var currentcategory = "category";

//*************Starts Rendering Process*******************
displayTable(currentcategory);

//*********************************Renders Table************************
function displayTable() {
  // console.time(original);
  var columnlength = matrix.length;
  let rowlength = matrix[0].length;
  let table_output = "";

  for (var row = 0; row < columnlength; row++) {
    table_output += `<div class = "row">\n`;
    for (var column = 0; column < rowlength; column++) {
      let tableposition = matrix[row][column];
      switch (true) {
        case tableposition > 0: //Displays Elements
          table_output += displayElement(tableposition, row, column) + "\n";
          break;

        case tableposition == 0: // Blank
          table_output += '<div class="blank boxsize"></div>\n';
          break;

        case tableposition == "SB": //Small Blank
          table_output += '<div class="smallblank"></div>\n';
          break;

        case tableposition == "RL": //Row Label
          table_output += `<div id ="R${row}" class= "rowlabel thin h2">${row}</div>\n`;
          break;

        case tableposition == "CL": //Column Label
          if (wide && column > 2) {
            table_output += displayColumnLabel(column - 14) + "\n";
            break;
          }
          table_output += displayColumnLabel(column) + "\n";
          break;

        case tableposition == "thin": //Column Label
          table_output += '<div class="blank thin"></div>\n';
          break;

        case tableposition == "Lanthanide":
          table_output += '<button id = "lanth" class="element boxsize btn';
          if (
            currentcategory == "category" ||
            currentcategory == "groupBlock"
          ) {
            table_output += "-danger";
          }
          table_output += ' R6 LanthAct">57-71</button>' + "\n";
          break;

        case tableposition == "Actinoid":
          table_output += '<button id = "actin" class="element boxsize btn';
          if (
            currentcategory == "category" ||
            currentcategory == "groupBlock"
          ) {
            table_output += "-warning";
          }
          table_output += ' R7 LanthAct">89-103</button>' + "\n";
          break;
      }
    }
    table_output += "</div>\n";
    // console.log("Length of total string: " + table_output.length);
  }
  // console.log("Length of total string: " + table_output.length);
  $("#table").html(table_output);
  $("#legend").html(displayLegend());
  // console.timeEnd(original);
}

//***************************Renders Each Element*******************************
function displayElement(atomicNumber, row, column) {
  var currentelement = PeriodicTable[atomicNumber - 1];
  let element_output = "";
  element_output = `<button id="${atomicNumber}" `; //Determines button ID
  element_output += 'class= "element boxsize '; //Below are the classes added to elements

  //Creates Row Class
  let actualrow = row;
  if (row > 8) {
    actualrow -= 3;
  }
  element_output += `R${actualrow} `;

  //Creates Column Class
  if (
    (atomicNumber < 57 || atomicNumber > 70) &&
    (atomicNumber < 89 || atomicNumber > 102)
  ) {
    if (wide && column > 2) {
      column -= 14;
      element_output += `C${column} `;
    } else if (atomicNumber == 71 || atomicNumber == 103) {
      element_output += "C3 ";
    } else {
      element_output += `C${column} `;
    }
  }

  //Determines color of element square
  let color = determineColor(currentelement);
  element_output += `btn-${color}" `;

  //Needed to make modal display
  element_output += 'data-toggle="modal" data-target="#ElementDisplayModal">\n'; //Allows information to be displayed in modal

  //Information found inside element
  element_output += `<h6 class = "atomicnumber">${
    currentelement["number"]
  }</h6>\n`;
  element_output += `<h3 class = "elementsymbol">${
    currentelement["symbol"]
  }</h3>\n`;

  if (currentcategory == "groupBlock" || currentcategory == "category") {
    element_output += `<h6>${displayAtomicMass(
      currentelement["atomic_mass"]
    )}</h6>\n`;
    element_output += `<h6 class = "elementname">${
      currentelement["name"]
    }</h6>\n`;
  } else {
    element_output += `<h6 class = "characterisitc">${
      currentelement[currentcategory]
    }</h6>\n`;
  }
  element_output += "</button>";

  return element_output;
}

function displayAtomicMass(MassNumber) {
  if ((MassNumber * 1000) % 1 != 0) {
    return MassNumber.toFixed(3);
  } else if (MassNumber % 1 == 0) {
    return `(${MassNumber})`;
  }

  return MassNumber;
}

function determineColor(currentelement) {
  let currentDict = colorLibrary(); //Function found in color libraries
  for (let index in currentDict) {
    if (typeof currentelement[currentcategory] == "string") {
      if (
        currentelement[currentcategory].includes("unknown") ||
        currentelement[currentcategory] == ""
      ) {
        return "light";
      }
      return currentDict[currentelement[currentcategory]];
    } else if (currentelement[currentcategory] == null) {
      return "light";
    } else if (currentelement[currentcategory] <= index) {
      return currentDict[index];
    }
  }
}

function displayColumnLabel(column) {
  var columnlabel_output = "";
  columnlabel_output += `<div id = "C${column}" class= "columnlabel boxsize">`;
  //Actual Labels
  columnlabel_output += `<h3 class ="d-block">${column}</h3>`;
  columnlabel_output += `<h5 class ="d-block"`;
  if (column != 8 && column != 10) {
    columnlabel_output += ` style="font-family: 'Times New Roman', 'Times', 'serif'"`;
  }
  const CASindex = [
    "IA",
    "IIA",
    "IIIB",
    "IVB",
    "VB",
    "VIB",
    "VIIB",
    "&#9486;&#8212;&#8212;",
    "VIIIB",
    "&#8212;&#8212;&#9490;",
    "IB",
    "IIB",
    "IIIA",
    "IVA",
    "VA",
    "VIA",
    "VIIA",
    "VIIIA"
  ];
  columnlabel_output += `>${CASindex[column - 1]}</h5>`;
  columnlabel_output += "</div>";
  return columnlabel_output;
}

//*********************************Renders Legend************************
function displayLegend() {
  var dict = colorLibrary(currentcategory); //Function found in color libraries
  let legend_output = "";
  legend_output += `<h4>${dict["title"]}</h4>`;
  legend_output += '<table class = "legend">';
  legend_output += '<tr>\n<td class= "align-top">\n<ul>\n';
  var count = 0;
  for (key in dict) {
    if (key == "title") {
      continue;
    }
    if (count > 1 && count % 6 == 0) {
      legend_output += "</ul>\n</td>\n<td>\n<ul>\n";
    }
    legend_output += `<li class="legenditem" id ="btn-${dict[key]}">\n`;
    legend_output += `<div class ="colorBox btn-${dict[key]}"></div>`;
    legend_output += key;
    legend_output += "</li>\n";
    count++;
  }
  return legend_output;
}

//************************************** Modal Functions *******************************************
$(document).on("click", ".element", function() {
  elementId = this.id;
  if (elementId != "lanth" && elementId != "actin") {
    $(".modal-title").html(elementInformationTitle(elementId));
    $(".modal-body").html(elementInformation(elementId));
  }
});

function elementInformationTitle(ElementNumber) {
  var currentelement = PeriodicTable[ElementNumber - 1];
  let elementinfomrationtitle_output = "";
  elementinfomrationtitle_output += `${currentelement["name"]} (${
    currentelement["symbol"]
  }) `;
  return elementinfomrationtitle_output;
}

function elementInformation(ElementNumber) {
  function elementFact(title, elementInformation, units = "") {
    if (elementInformation != null && elementInformation != "") {
      elementinformation_output += `<li><span class= 'font-weight-bold'>${title}</span> ${elementInformation} ${units}</li>`;
    }
    return;
  }
  let currentelement = PeriodicTable[ElementNumber - 1];
  let elementinformation_output = "<ul>";
  elementFact("Atomic Number", currentelement["number"]);
  elementinformation_output += `<li><span class= 'font-weight-bold'>Category: </span>`;
  elementinformation_output += currentelement["category"];
  if (
    !currentelement["category"].includes(currentelement["groupBlock"]) &&
    currentelement["groupBlock"] != "lanthanoid" &&
    currentelement["groupBlock"] != "actinoid"
  ) {
    elementinformation_output += ", " + currentelement["groupBlock"];
  }
  elementinformation_output += `</li>`;
  elementFact("Atomic Mass (amu)", currentelement["atomic_mass"]);
  elementFact("Appearance", currentelement["appearance"]);
  elementFact("Phase (Room Tempurature)", currentelement["phase"]);
  elementFact("Boiling Point", currentelement["boil"], " K");
  elementFact("Melting Point", currentelement["melt"], " K");
  elementFact("Density", currentelement["density"], "g/L</li>");
  elementFact("Electronegativity", currentelement["electronegativity"]);
  elementFact("Atomic Radius", currentelement["atomicRadius"], "&#197;");
  elementFact("Ionization Energy", currentelement["ionizationEnergy"], "eV");
  elementFact(
    "Electron Affinity",
    currentelement["electronAffinity"],
    "E<sub>A</sub>"
  );
  elementFact("Bonding Type", currentelement["bondingType"]);
  // elementFact("Electron Configuration", electronConfiguration(currentelement['number'])); //There seems to be a lot of exceptions to this rule
  // elementFact("Nobel Gas Configuration", nobelGasConfiguration(currentelement['number'])); //There seems to be a lot of exceptions to this rule
  elementFact(
    "Discovered by",
    currentelement["discovered_by"],
    "(" + currentelement["yearDiscovered"] + ")"
  );
  elementinformation_output += "</ul>";
  elementinformation_output += currentelement["summary"];
  elementinformation_output += `<br><span class= 'font-weight-bold'>For More information see </span><a href="${
    currentelement["source"]
  }">${currentelement["source"]}</a>`;
  return elementinformation_output;
}
