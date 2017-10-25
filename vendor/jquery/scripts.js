$(document).ready(function() {
  var total = [];
  var order = [];

  $('.cost').click(function(event) {
    var accumulator = 0;
    var myTotal = 0;
    var price = $(this).closest('.portfolio-item').find('.price').text().slice(1);
    //price = (price.replace(/\$/g, ''));
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
    event.preventDefault()
    if(order.length < 1){
      $('#snackbar1').addClass('show')  
      setTimeout(function(){$('#snackbar1').removeClass('show'); }, 3500);
    } else if($('#firstName')[0].value.length == 0){
    $('#snackbar2').addClass('show')
    setTimeout(function(){$('#snackbar2').removeClass('show'); }, 3500);
    } else if($('#firstLine')[0].value.length == 0){
$('#snackbar3').addClass('show')
setTimeout(function(){$('#snackbar3').removeClass('show'); }, 3500);
    } else {
    $('#snackbar4').addClass('show')
  setTimeout(function(){$('#snackbar4').removeClass('show'); }, 3500);}

  })

})
