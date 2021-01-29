let kotak1 = document.getElementById("kotak1")
let kotak2 = document.getElementById("kotak2")
let kotak3 = document.getElementById("kotak3")
let kotak4 = document.getElementById("kotak4")
let kotak5 = document.getElementById("kotak5")
let kotak6 = document.getElementById("kotak6")
let kotak7 = document.getElementById("kotak7")
let kotak8 = document.getElementById("kotak8")
let kotak9 = document.getElementById("kotak9")
let kotak10 = document.getElementById("kotak10")
let kotak11 = document.getElementById("kotak11")
let kotak12 = document.getElementById("kotak12")
let kotak13 = document.getElementById("kotak13")
let kotak14 = document.getElementById("kotak14")
let kotak15 = document.getElementById("kotak15")
let kotak16 = document.getElementById("kotak16")
let kotak17 = document.getElementById("kotak17")
let kotak18 = document.getElementById("kotak18")
let kotak19 = document.getElementById("kotak19")
let kotak20 = document.getElementById("kotak20")
let kotak21 = document.getElementById("kotak21")
let kotak22 = document.getElementById("kotak22")
let kotak23 = document.getElementById("kotak23")
let kotak24 = document.getElementById("kotak24")
let kotak25 = document.getElementById("kotak25")
let tiket = 3
let kotak = 25
let hadiah = Math.floor(Math.random() * 25) + 1
let userName = ""
let jumlahTiket = ""
function getFormData() {
    let elements = document.getElementById("myForm").elements;
    let obj = {};
    for (let i = 0; i < elements.length; i++){
        let item = elements.item(i);
        obj[item.name] = item.value;
    }
    console.log(obj)
}

function pilih1() {
    if (hadiah === 1) {
        kotak1.innerHTML = `<p>SELAMAT YA!!!</p>`
        alert("Selamat kamu menang. Permainan sudah berakhir!")
        
        location.reload()
    }   else {
        kotak1.innerHTML = '<p>ZONK</p>'
       kotak1.style.backgroundColor = "red";
    }
}

function pilih2() {
    if (hadiah === 2) {
        kotak2.innerHTML = `<p>SELAMAT YA!!!</p>`
        alert("Selamat kamu menang. Permainan sudah berakhir!")
        location.reload()
    }   else {
        kotak2.innerHTML = '<p>ZONK</p>'
        kotak2.style.backgroundColor = "red"
    }
}

function pilih3() {
    if (hadiah === 3) {
        kotak3.innerHTML = `<p>SELAMAT YA!!!</p>`
        alert("Selamat kamu menang. Permainan sudah berakhir!")
        location.reload()
    }   else {
        kotak3.innerHTML = '<p>ZONK</p>'
        kotak3.style.backgroundColor = "red"
    }
}

function pilih4() {
    if (hadiah === 4) {
        kotak4.innerHTML = `<p>SELAMAT YA!!!</p>`
        alert("Selamat kamu menang. Permainan sudah berakhir!")
        location.reload()
    }   else {
        kotak4.innerHTML = '<p>ZONK</p>'
        kotak4.style.backgroundColor = "red"
    }
}

function pilih5() {
    if (hadiah === 5) {
        kotak5.innerHTML = `<p>SELAMAT YA!!!</p>`
        alert("Selamat kamu menang. Permainan sudah berakhir!")
        location.reload()
    }   else {
        kotak5.innerHTML = '<p>ZONK</p>'
        kotak5.style.backgroundColor = "red"
    }
}

function pilih6() {
    if (hadiah === 6) {
        kotak6.innerHTML = `<p>SELAMAT YA!!!</p>`
        alert("Selamat kamu menang. Permainan sudah berakhir!")
        location.reload()
    }   else {
        kotak6.innerHTML = '<p>ZONK</p>'
        kotak6.style.backgroundColor = "red"
    }
}

function pilih7() {
    if (hadiah === 7) {
        kotak7.innerHTML = `<p>SELAMAT YA!!!</p>`
        alert("Selamat kamu menang. Permainan sudah berakhir!")
        location.reload()
    }   else {
        kotak7.innerHTML = '<p>ZONK</p>'
        kotak7.style.backgroundColor = "red"
    }
}

function pilih8() {
    if (hadiah === 8) {
        kotak8.innerHTML = `<p>SELAMAT YA!!!</p>`
        alert("Selamat kamu menang. Permainan sudah berakhir!")
        location.reload()
    }   else {
        kotak8.innerHTML = '<p>ZONK</p>'
        kotak8.style.backgroundColor = "red"
    }
}

function pilih9() {
    if (hadiah === 9) {
        kotak9.innerHTML = `<p>SELAMAT YA!!!</p>`
        alert("Selamat kamu menang. Permainan sudah berakhir!")
        location.reload()
    }   else {
        kotak9.innerHTML = '<p>ZONK</p>'
        kotak9.style.backgroundColor = "red"
    }
}

function pilih10() {
    if (hadiah === 10) {
        kotak10.innerHTML = `<p>SELAMAT YA!!!</p>`
        alert("Selamat kamu menang. Permainan sudah berakhir!")
        location.reload()
    }   else {
        kotak10.innerHTML = '<p>ZONK</p>'
        kotak10.style.backgroundColor = "red"
    }
}

function pilih11() {
    if (hadiah === 11) {
        kotak11.innerHTML = `<p>SELAMAT YA!!!</p>`
        alert("Selamat kamu menang. Permainan sudah berakhir!")
        location.reload()
    }   else {
        kotak11.innerHTML = '<p>ZONK</p>'
        kotak11.style.backgroundColor = "red"
    }
}

function pilih12() {
    if (hadiah === 12) {
        kotak12.innerHTML = `<p>SELAMAT YA!!!</p>`
        alert("Selamat kamu menang. Permainan sudah berakhir!")
        location.reload()
    }   else {
        kotak12.innerHTML = '<p>ZONK</p>'
        kotak12.style.backgroundColor = "red"
    }
}

function pilih13() {
    if (hadiah === 13) {
        kotak13.innerHTML = `<p>SELAMAT YA!!!</p>`
        alert("Selamat kamu menang. Permainan sudah berakhir!")
        location.reload()
    }   else {
        kotak13.innerHTML = '<p>ZONK</p>'
        kotak13.style.backgroundColor = "red"
    }
}

function pilih14() {
    if (hadiah === 14) {
        kotak14.innerHTML = `<p>SELAMAT YA!!!</p>`
        alert("Selamat kamu menang. Permainan sudah berakhir!")
        location.reload()
    }   else {
        kotak14.innerHTML = '<p>ZONK</p>'
        kotak14.style.backgroundColor = "red"
    }
}

function pilih15() {
    if (hadiah === 15) {
        kotak15.innerHTML = `<p>SELAMAT YA!!!</p>`
        alert("Selamat kamu menang. Permainan sudah berakhir!")
        location.reload()
    }   else {
        kotak15.innerHTML = '<p>ZONK</p>'
        kotak15.style.backgroundColor = "red"
    }
}

function pilih16() {
    if (hadiah === 16) {
        kotak16.innerHTML = `<p>SELAMAT YA!!!</p>`
        alert("Selamat kamu menang. Permainan sudah berakhir!")
        location.reload()
    }   else {
        kotak16.innerHTML = '<p>ZONK</p>'
        kotak16.style.backgroundColor = "red"
    }
}

function pilih17() {
    if (hadiah === 17) {
        kotak17.innerHTML = `<p>SELAMAT YA!!!</p>`
        alert("Selamat kamu menang. Permainan sudah berakhir!")
        location.reload()
    }   else {
        kotak17.innerHTML = '<p>ZONK</p>'
        kotak17.style.backgroundColor = "red"
    }
}

function pilih18() {
    if (hadiah === 18) {
        kotak18.innerHTML = `<p>SELAMAT YA!!!</p>`
        alert("Selamat kamu menang. Permainan sudah berakhir!")
        location.reload()
    }   else {
        kotak18.innerHTML = '<p>ZONK</p>'
        kotak18.style.backgroundColor = "red"
    }
}

function pilih19() {
    if (hadiah === 19) {
        kotak19.innerHTML = `<p>SELAMAT YA!!!</p>`
        alert("Selamat kamu menang. Permainan sudah berakhir!")
        location.reload()
    }   else {
        kotak19.innerHTML = '<p>ZONK</p>'
        kotak19.style.backgroundColor = "red"
    }
}

function pilih20() {
    if (hadiah === 20) {
        kotak20.innerHTML = `<p>SELAMAT YA!!!</p>`
        alert("Selamat kamu menang. Permainan sudah berakhir!")
        location.reload()
    }   else {
        kotak20.innerHTML = '<p>ZONK</p>'
        kotak20.style.backgroundColor = "red"
    }
}

function pilih21() {
    if (hadiah === 21) {
        kotak21.innerHTML = `<p>SELAMAT YA!!!</p>`
        alert("Selamat kamu menang. Permainan sudah berakhir!")
        location.reload()
    }   else {
        kotak21.innerHTML = '<p>ZONK</p>'
        kotak21.style.backgroundColor = "red"
    }
}

function pilih22() {
    if (hadiah === 22) {
        kotak22.innerHTML = `<p>SELAMAT YA!!!</p>`
        alert("Selamat kamu menang. Permainan sudah berakhir!")
        location.reload()
    }   else {
        kotak22.innerHTML = '<p>ZONK</p>'
        kotak22.style.backgroundColor = "red"
    }
}

function pilih23() {
    if (hadiah === 23) {
        kotak23.innerHTML = `<p>SELAMAT YA!!!</p>`
        alert("Selamat kamu menang. Permainan sudah berakhir!")
        location.reload()
    }   else {
        kotak23.innerHTML = '<p>ZONK</p>'
        kotak23.style.backgroundColor = "red"
    }
}

function pilih24() {
    if (hadiah === 24) {
        kotak24.innerHTML = `<p>SELAMAT YA!!!</p>`
        alert("Selamat kamu menang. Permainan sudah berakhir!")
        location.reload()
    }   else {
        kotak24.innerHTML = '<p>ZONK</p>'
        kotak24.style.backgroundColor = "red"
    }
}

function pilih25() {
    if (hadiah === 25) {
        kotak25.innerHTML = `<p>SELAMAT YA!!!</p>`
        alert("Selamat kamu menang. Permainan sudah berakhir!")
        location.reload()
    }   else {
        kotak25.innerHTML = '<p>ZONK</p>'
        kotak25.style.backgroundColor = "red"
    }
}