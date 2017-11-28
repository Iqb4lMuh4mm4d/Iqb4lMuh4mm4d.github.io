var orderCount = 0;
var toppingPizza = ['bacon', 'cheese', 'pepperoni', 'pesto'];
var typeCrust = ['regular', 'thin', 'large'];


function takeOrder(topping, crustType) {
   for(var i = 1; i <=100; i++){
     console.log('Pembeli ke ' + i + ' Order: ' + crustType + ' crust topped with ' + topping);
    if(i%10 ===0){
    console.log('Pembeli ke ' + i + ' Order: ' + crustType + ' crust topped with ' + topping + ' you get free medium pepsi');
    }
  }
}
      orderCount = orderCount + 1;


function getSubTotal(itemCount) {
  return itemCount * 7.5;
}

function getTax() {
  return getSubTotal(orderCount) * 0.06;
}

function getTotal() {
  return getSubTotal(orderCount) + getTax();
}

takeOrder(toppingPizza[1], typeCrust[0]);
takeOrder(toppingPizza[2], typeCrust[1]);
takeOrder(toppingPizza[3], typeCrust[2]);

console.log(getSubTotal(orderCount));
console.log(getTotal());