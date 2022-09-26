
module.exports = {circleArea,circleCircumference};

function circleArea(radius = 5) {
    const circlearea= Math.PI * radius ** 2;
    console.log("Yarıçapı 5 olan dairenin alanı:",circlearea.toFixed(2));
}

function circleCircumference(radius = 5) {
    const circleCircumference = Math.PI * radius * 2;
    console.log("Yarıçapı 5 olan dairenin çevresi:",circleCircumference.toFixed(2));
}

