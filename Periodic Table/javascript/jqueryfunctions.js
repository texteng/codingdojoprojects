//Activates Modal
$(document).on('click', '.element', function(){
    elementId = this.id
    // console.log(elementId)
    $(".modal-title").html(elementInformationTitle(elementId))
    $(".modal-body").html(elementInformation(elementId))
});

//Highlights whole rows 
$(document).on('mouseenter', '.rowlabel', function(){
    rowId = this.id;
    $("."+ rowId).button('toggle');
});
$(document).on('mouseleave ', '.rowlabel', function(){
    rowId = this.id;
    $("."+ rowId).button('toggle');
});

//Highlights whole columns 
$(document).on('mouseenter', '.columnlabel', function(){
    columnId = this.id;
    $("."+ columnId).button('toggle');
});
$(document).on('mouseleave', '.columnlabel', function(){
    columnId = this.id;
    $("."+ columnId).button('toggle');
});

//Highlights whole section on legend
$(document).on('mouseenter', '.legenditem', function(){
    var colorBoxId = this.id;
    $("."+ colorBoxId).button('toggle');
});
$(document).on('mouseleave ', '.legenditem', function(){
    var colorBoxId = this.id;
    $("."+ colorBoxId).button('toggle');
});

//Navbar Stuff
$(document).on('click', '.view', function(){
    $( "#"+currentcategory ).removeClass( "active" )
    currentcategory = this.id;
    $( "#"+currentcategory ).addClass( "active" );
    console.log(this.id);
    displayTable(currentcategory);
});
$(document).on('click', '.wide', function(){
    $("#widecss").html('<link rel="stylesheet" type="text/css" href="css/PeriodicTableCustomWide.css">')
    $("#wide").html('<button class="nav-link btn btn-link standard active">Standard</button>')
    wide = true;
    matrix = Tablematrixwide;
    displayTable(currentcategory);
});
$(document).on('click', '.standard', function(){
    $("#widecss").html('<link rel="stylesheet" type="text/css" href="css/PeriodicTableCustom.css">')
    $("#wide").html('<button class="nav-link btn btn-link wide active">Wide</button>')
    wide = false;
    matrix = Tablematrix;
    displayTable(currentcategory);
});

