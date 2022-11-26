let jawabansatu = document.querySelector('.jawabansatu');
let jawabandua = document.querySelector('.jawabandua');
let jawabantiga = document.querySelector('.jawabantiga');
let jawabanempat = document.querySelector('.jawabanempat');
let jawabanlima = document.querySelector('.jawabanlima');
let jawabanenam = document.querySelector('.jawabanenam');
let jawabantujuh = document.querySelector('.jawabantujuh');
let jawabandelapan = document.querySelector('.jawabandelapan');
let jawabansembilan = document.querySelector('.jawabansembilan');
let jawabansepuluh= document.querySelector('.jawabansepuluh');



const proses = document.querySelector('input[type="button"]');
proses.addEventListener('click',function() {
    if(jawabansatu.checked === false && jawabandua.checked === false && jawabantiga.checked === false && jawabanempat.checked === false && jawabanlima.checked === false  && jawabanenam.checked === false && jawabantujuh.checked === false && jawabandelapan.checked === false && jawabansembilan.checked === false && jawabansepuluh.checked === false){
        alert('anda belum mengisi apapun')
        location.reload();
    }

    let poinsatu = 0
    if(jawabansatu.checked === true) {
        poinsatu += 10;
    }

    let poindua = 0
    if(jawabandua.checked === true) {
        poindua += 10;
    }

    let pointiga = 0
    if(jawabantiga.checked === true) {
        pointiga += 10;
    }

    let poinempat = 0
    if(jawabanempat.checked === true) {
        poinempat += 10;
    }

    let poinlima = 0
    if(jawabanlima.checked === true) {
        poinlima += 10;
    }

    let poinenam = 0
    if(jawabanenam.checked === true) {
        poinenam += 10;
    }

    let pointujuh = 0
    if(jawabantujuh.checked === true) {
        pointujuh += 10;
    }

    let poindelapan = 0
    if(jawabandelapan.checked === true) {
        poindelapan += 10;
    }

    let poinsembilan = 0
    if(jawabansembilan.checked === true) {
        poinsembilan += 10;
    }

    let poinsepuluh = 0
    if(jawabansepuluh.checked === true) {
        poinsepuluh += 10;
    }


    let hasil  = poinsatu + poindua + pointiga + poinempat + poinlima + poinenam + pointujuh + poindelapan + poinsembilan + poinsepuluh
    let cetaknilai = document.getElementById('cetaknilai');
    localStorage.setItem('hasil', hasil)
    cetaknilai.innerHTML = localStorage.getItem('hasil')

    if(hasil > 90) {
        alert('niali anda sempurna')
    }
    else if (hasil > 70 ){
        alert('nilai anda baik')
    }
    else if(hasil < 70){
        alert('belajar lagi ya')
    }
    else {
        console.log('info')
    }
    
})

let cetaknama = document.getElementById('cetaknama')
if(localStorage.getItem('nama')){
    cetaknama.innerHTML = localStorage.getItem('nama')
}

let cetakmapel = document.getElementById('cetakmapel')
if(localStorage.getItem('kode')){
    if(localStorage.getItem('kodesatu')){
        cetakmapel.innerHTML = "MATEMATIKA"
    }
    else if(localStorage.getItem('kodedua')){
        cetakmapel.innerHTML = "IPAS"
    }
    else if(localStorage.getItem('kodetiga')){
        cetakmapel.innerHTML = "BHS INDONESIA"
    }
}

if(localStorage.getItem('hasil')){
    cetaknilai.innerHTML = localStorage.getItem('hasil')
}


// this function for timer


let buttonreset = document.getElementById('buttonreset')

function reset() {
    localStorage.setItem('hasil', "");
    location.reload();
}



