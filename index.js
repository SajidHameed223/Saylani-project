function logInPage() {
    event.preventDefault()
    var email = document.getElementById("email").value
    var password = document.getElementById("Password").value
    console.log(email)
    console.log(password)
    if (email == "admin@user.com" && password == "123456") {
        window.location.href = "home.html"
    }
    else {
        Toastify({
            text: "Some Thing Went Wrong",
            duration: 900,
            newWindow : true,
            close: true,
                gravity: "top", // `top` or `bottom`
                position: "center", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                   background: "linear-gradient(to right, #305e80, #097976)",
                 },
              onClick: function(){}
            }).showToast();
    }
}
// Home Page
let outpuBox = function outputBox(output) {
    return document.getElementById("d3").innerHTML = output;
    event.preventDefault()
}
let input_value = function inputValue(){
    return document.getElementById("cityName").value
}
var cities = ['Burewala', 'Gaggoo Mandi', 'Karachi', 'Lahore', 'Fasialabad'];
function addCity() {
    let search = document.getElementById("cityName").value;
    console.log( search )
    if(search === " "){
        Toastify({
            text: "Please Enter Any City",
            duration: 900,
            newWindow : true,
            close: true,
                gravity: "top", // `top` or `bottom`
                position: "center", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                   background: "linear-gradient(to right, #305e80, #097976)",
                 },
              onClick: function(){}
            }).showToast();
    }
    let firstLetter = search.slice(0, 1).toUpperCase();
    console.log(firstLetter)
    let endLetter = search.slice(1).toLowerCase();
    console.log(endLetter)
    let fullName = firstLetter + endLetter;
    let cityFond = false;
    for (i = 0; i < cities.length; i++) {
        if (cities[i] === fullName) {
            cityFond = true;
            let html = '<span style="color:red;">' + fullName + '</span>';
            document.getElementById("d3").innerHTML = html + "<p>is already added.</p>";
            document.getElementById("d3").style.height = "auto"
        }
    }
    if (cityFond === false) {
        cities.push(fullName)
        let html = '<span style="color:green;">' + fullName + '</span>';
        document.getElementById("d3").innerHTML = html + " " + "is successfully added.";
    }
}
function checkCity() {
    // var cities = ['Burewala', 'Gaggoo Mandi', 'Karachi', 'Lahore', 'Fasialabad'];
    let search = document.getElementById("cityName").value;
    console.log(search)
    let firstLetter = search.charAt(0).toUpperCase();
    let endLetter = search.slice(1).toLowerCase();
    let fullName = firstLetter + endLetter;
    console.log(fullName)
    let cityFond = false;
    for (i = 0; i < cities.length; i++) {
        if (cities[i] === fullName) {
            cityFond = true;
            let html = '<span style="color:red;">' + fullName + '</span>';
            document.getElementById("d3").innerHTML = html + "<p>is in list.</p>";
        }
    }
    if (cityFond === false) {
        let html = '<span style="color:green;">' + fullName + '</span>';
        document.getElementById("d3").innerHTML = html + " " + "is not in list.";

    }
}

function showCities(){
    for(let i=0; i<cities.length; i++){
        let num = i + 1+ ")"
        let printName = cities[i]
        document.getElementById("d3").innerHTML += num + printName + '</br>'
    }
}
function empty(){
    document.getElementById("d3").innerHTML = " "
}