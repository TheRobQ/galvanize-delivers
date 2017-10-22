$(document).ready(function() {
  var total = [];
  var order = [];

  $('button').click(function(event) {
    var accumulator = 0;
    var myTotal = 0;
    var price = $(event.target).closest('.portfolio-item').find('.price').text();
    price = (price.replace(/\$/g, ''));
    total.push(parseFloat(price))
    var addItem = $(event.target).closest('.portfolio-item').find('.card-title').text();
    order.push(addItem);
    //console.log(order);
    //console.log(total);

    $('#yourOrder').after('<p class="orderItem">' + addItem + ': $' + price + '</p>');

    total.forEach(function(price) {
      accumulator += price
    })
    var yourSubTotal = accumulator.toFixed(2);
    //console.log(yourTotal);
    $('#yourSubTotal').replaceWith('<h5 id="yourSubTotal">Subtotal: $' + yourSubTotal + '</h5>');
    var tax = (yourSubTotal * .087).toFixed(2);
    $('#yourTax').replaceWith('<h5 id="yourTax">Tax: $' + tax + '</h5>');
    var final = (parseFloat(yourSubTotal) + parseFloat(tax));
    $('#yourTotal').replaceWith('<h3 id="yourTotal">Total: $' + final.toFixed(2) + '</h3>');

  })
})
