$(document).ready(function() {

  // Call function once form is submitted
  $("form").submit(greetUser);

  // Define function to run on form submit
  function greetUser(event) {

    // Prevent page refresh on submit
    event.preventDefault();

    // Set "firstName" to input value
    let firstName = $("input#firstName").val();

    // Set "lastName" to input value
    let lastName = $("input#lastName").val();

    // Set "ranking" to value of checked radiobox
    let ranking = $("input[type=radio]:checked").val();

    // Set "color" to value of data-color attr on checked radiobox
    let color = $("input[type=radio]:checked").data("color");

    // Change text color to "data-color" value
    $("#greeting").css("color", color);

    // Insert greeting text into greeting area
    $("#greeting").text(`Hello, ${ranking} ${firstName} ${lastName}`);


  }

});