//See Periodic Table Render for non-interactive portions

//************************************** Hover Functions *******************************************
//Highlights various sections depending on its id name
$(".columnlabel, .rowlabel, .legenditem").on("mouseenter mouseleave", function() {
  $("." + this.id).button("toggle");
});

//************************************** Navbar Stuff *******************************************
$(".view").click(function() {
  $("#" + currentTable.category).removeClass("active");
  currentTable.category = this.id;
  currentTable.colors = colorLibrary[currentTable.category];
  $("#" + currentTable.category).addClass("active");
  displayTable(currentTable.category);
});

  // ---------------------------------turns standard to wide -------------------------
$(".wide").click(function() {
  $("#widecss").html(
    '<link rel="stylesheet" type="text/css" href="css/PeriodicTableCustomWide.css">'
  );
  $("#wide").html(
    '<button class="nav-link btn btn-link standard active">Standard</button>'
  );
  currentTable.wide = true;
  currentTable.matrix = tableMatrix.wide;
  displayTable(currentTable.category);
});

// ---------------------------------turns wide to standard-------------------------
$(".standard").click(function() {
  $("#widecss").html(
    '<link rel="stylesheet" type="text/css" href="css/PeriodicTableCustom.css">'
  );
  $("#wide").html(
    '<button class="nav-link btn btn-link wide active">Wide</button>'
  );
  currentTable.wide = false;
  currentTable.matrix = tableMatrix.standard;
  displayTable(currentTable.category);
});

// -----------------------------------Displays credits -------------------------
$("#credits").click(function() {
  $(".modal-title").html("Credits");
  $(".modal-body").html(
    `<ul>
    <li>Creator: Stephen Teng</li>
    <li>Sources: https://github.com/Bowserinator/Periodic-Table-JSON<br>https://github.com/andrejewski/periodic-table</li>
    <li>Project for Coding Dojo Dallas</li>
    </ul>`
  );
});

// ----------------------------- Displays Modals --------------------------
$(".element").click(function() {
  let elementId = this.id;
  if (elementId != "lanth" && elementId != "actin") {
    let {name, symbol} = currentElement = PeriodicTable[elementId - 1];
    $(".modal-title").html(`${name} (${symbol}) `);
    $(".modal-body").html(elementInformation(currentElement));
  }
});
