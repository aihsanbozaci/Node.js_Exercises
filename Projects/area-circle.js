const params = process.argv.slice(2);

function circlearea (r){
    let area = Math.floor(Math.PI)*(r*r)
    console.log(`Yarıçapı ${r} olan dairenin alanı: ${area}`)
}
circlearea(params[0]*1);

//For this project to work, a directive must be given with the console. After reaching the directory of the project in the console: 
//Give a number for x.
//console code : node area-circle x 
