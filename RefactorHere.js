const PI = 3.141592;


function CalculatePaintNeeded(paintPerUnit, radius) {
  // rename symbol
  // extract constant
  // extract method



  var area;
  area = calculateArea(radius);

  return area / paintPerUnit;

}

function calculateArea(radius) {
  return PI * radius * radius;
}

function ReDrawChangedElements() {
  // similar code here
  var radius = 50;
  var area;
  area = calculateArea(radius);

}
