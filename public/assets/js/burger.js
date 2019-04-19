// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $('.create-form').on('submit', function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $('#newburger')
        .val()
        .trim(),
      devoured: 0
    };

    // Send the POST request.
    $.ajax('/', {
      type: 'POST',
      data: newBurger
    }).then(function() {
      console.log('New burger in the menu');
      // Reload the page to get the updated list
      window.location.reload();
    });
  });

  $('#eatbutton').on('click', function(event) {
    event.preventDefault();

    var id = $(this).data('id');
    var burgerDevoured = {
      devoured: 1
    };
    console.log('hello');

    // Send the PUT request.
    $.ajax('/' + id, {
      type: 'PUT',
      data: burgerDevoured
    }).then(function() {
      console.log('burger Devoured');
      // Reload the page to get the updated list
      window.location.reload();
    });
  });

  $('.deleteBurger').on('click', function(event) {
    event.preventDefault();
    var id = $(this).data('id');

    // Send the DELETE request.
    $.ajax('/' + id, {
      type: 'DELETE'
    }).then(function() {
      //console.log("deleted cat", id);
      // Reload the page to get the updated list
      window.location.reload();
    });
  });
});
