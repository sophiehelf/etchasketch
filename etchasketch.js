///// functions

function createGrid(x) {
  $("container").empty();
  var boxSize = (650 - 2*x)/x;
  for (var i = 0; i < x; i++) {
    for (var j = 0; j < x; j++) {
      $("#container").append($("<div><div></div>").addClass("brick").height(boxSize).width(boxSize));
    }
  }
  $(".brick").width(650/x);
    $(".brick").height(650/x);
};

function clearOut() {
  $("#container").empty();
}

function draw() {
  $(".brick").hover(function(){
    $(this).addClass("hover");
  })
}

function itsColorTime() {
  $(".brick").removeClass("hover");
  $(".brick").on(mouseenter, function(){
    var randomColor = Math.floor(Math.random() * 256);
    $(this).css('background', 'rgb(' + (randomColor*3)%255 + ',' + (randomColor*7)%255 +',' + randomColor +')');
  })
}

/////

$(document).ready(function(){
  createGrid(16);
  draw();
  
  $("#clear").click(function(){
    clearOut();
    var size= prompt("How many squares in the grid?");
    createGrid(size);
    draw();
  })
  
  $("#colorTime").click(function(){
    itsColorTime();
  })
})