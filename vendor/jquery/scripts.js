$(document).ready(function(){
  var total = [];
  var order = [];


$('button').click(function(event){
  var myTotal = 0;
  var price = $(event.target).closest('.portfolio-item').find('.price').text();
  price = (price.replace(/\$/g, ''));
  total.push(parseFloat(price))
  var addItem = $(event.target).closest('.portfolio-item').find('.card-title').text();
  order.push(addItem);
  console.log(order);
  console.log(total);

  $('#yourOrder').after('<p class="orderItem">' + addItem + ': $' + price + '</p>');
})

$('#total').click(function(event){
  event.preventDefault();
  accumulator = 0;
  for(let i = 0; i < total.length; i++){
    accumulator += total[i];
  }
  var yourTotal = accumulator.toFixed(2)
  console.log(yourTotal);
  return yourTotal;
})




})
// for (var i = 0; i < colors.length; i++) {
//   var div = document.createElement('div');
//   div.style.float = 'left';
//   div.style.paddingBottom = '6%';
//   div.style.width = '6%';
//   div.style.borderColor = 'LightGray';
//   //div.style.borderRadius = '50px;'
//   div.style.borderStyle = 'solid';
//   div.style.borderWidth = '.5px';
//   div.style.marginLeft = '4px';
//   div.style.backgroundColor = colors[i];
//   div.className = "circle"
//   paints.appendChild(div)
// }
