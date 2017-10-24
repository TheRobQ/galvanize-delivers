$(document).ready(function() {
  var total = [];
  var order = [];

  $('.cost').click(function(event) {
    var accumulator = 0;
    var myTotal = 0;
    var price = $(this).closest('.portfolio-item').find('.price').text().slice(1);
    //price = (price.replace(/\$/g, ''));
    //OR JUST USE SLICE HERE.
    //REFACTOR THIS OFR 1
    total.push(parseFloat(price))
    var addItem = $(this).closest('.portfolio-item').find('.card-title').text();
    order.push(addItem);
    //console.log(order);
    //console.log(total);

    $('#foodOrder').after('<tr><td class="orderItem">' + addItem + '</td> <td>$' + price +'</td></tr>');
    //$('#price').after('<p class="orderItem">' + '$' + price + '</p>');


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

  $('#submit').click(function(event){
    if(order.length < 1){
      alert("I have a bad feeling about this. You should check your order")
    }else if($('#firstName')[0].value.length == 0){
alert("We\'ll need to see some ID")
    }else if($('#firstLine')[0].value.length == 0){
alert("We need your hyperspace coordinates")
    }
    else {
    alert("Success, your order is on it's way")}
  })

})
// <div class="alert alert-success alert-dismissible fade show" role="alert">
// <button type="button" class="close" data-dismiss="alert" aria-label="Close">
//   <span aria-hidden="true">&times;</span>
// </button>
// <strong>In under 12 parsecs!!</strong> Your food is on its way at the speed of light.
// </div>
