/** Logic frm http://gnomes22.tripod.com/pointspluscalc.html **/
function calculate() {
	var doc = document.pointCalc;
	var points = 0;
	var protein = doc.protein.value;
	var carbohydrates = doc.carbohydrates.value;
	var fat = doc.fat.value;
	var fiber = doc.fiber.value;
	
	points = (protein / 10.9375) + (carbohydrates / 9.2105) + (fat / 3.8889) - (fiber / 12.5) ;
	doc.result.value = Math.round(points * 10) / 10;
}
