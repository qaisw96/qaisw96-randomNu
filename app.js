
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

$("#form").css("margin", "35px 0 0 20px")


$("#submit").click(function(event) {
  event.preventDefault()
  var value = $("#num").val()
  for(let i=0; i<value; i++) {
    index1 = randomNumber(1, 30)
    index2 = randomNumber(1, 12)
    index3 = randomNumber(1970, 2001)
    $('#div').append($('<ul>').append($('<li>').text(`${index1}-${index2}-${index3}`)));
    $("ul").css("line-height", ".4")

  }

      
})

