
// this is first container
let inputkode = document.getElementById('inputkode');
let inputnama = document.getElementById('inputnama')
let buttonsubmit = document.getElementById('buttonsubmit');
let containerfirst = document.getElementById('containerfirst');

// this function for container

// code
const matematika = 1902;
const ipas = 1903;
const indonesia = 1904;

// this for function


// this for new container mapel
let containermtk = document.getElementById('containermtk')
let containeripas = document.getElementById('containeripas')
let containerindo = document.getElementById('containerindo')
let formcontainer = document.getElementById('formcontainer')


containermtk.style.display = "none";
containeripas.style.display = "none";
containerindo.style.display = "none";
formcontainer.style.display = "block";


// this for cetak-cetak
let cetaknama = document.getElementById('cetaknama');
let cetaknamadua = document.getElementById('cetaknamadua');
let cetaknamatiga = document.getElementById('cetaknamatiga');

const login = () => {
    localStorage.setItem("kode", inputkode.value)
    localStorage.setItem("nama", inputnama.value)
  if(inputkode.value === ""){
    alert('anda belum memasukan kode apapun')
    location.reload();
  }

  if(inputkode.value == matematika){
    alert('matematika')
    localStorage.setItem("kodesatu", matematika)
    containerfirst.style.display = "none"
    location.reload();
    containermtk.style.display = "block"
    containeripas.style.display = "none";
    containerindo.style.display = "none";
    formcontainer.style.display = "none";
  }
  else if(inputkode.value == ipas ){
    alert('ipas')
    localStorage.setItem("kodedua", ipas)
    containerfirst.style.display = "none"
    location.reload();
    containermtk.style.display = "none"
    containeripas.style.display = "block";
    containerindo.style.display = "none";
    formcontainer.style.display = "none";
  }
  else if(inputkode.value == indonesia){
    alert('B.Indonesia')
    localStorage.setItem("kodetiga", indonesia)
    containerfirst.style.display = "none"
    location.reload();
    containermtk.style.display = "none"
    containeripas.style.display = "none";
    containerindo.style.display = "block";
    formcontainer.style.display = "none";
  }
  else {
    console.error('not found Data')
  }

  cetaknama.innerHTML = localStorage.getItem("nama")
  cetaknamadua.innerHTML = localStorage.getItem("nama")
  cetaknamatiga.innerHTML = localStorage.getItem("nama")
}

if(localStorage.getItem('kode')){
    if(localStorage.getItem("kodesatu")){
        containermtk.style.display = "block"
        containeripas.style.display = "none";
        containerindo.style.display = "none";
        formcontainer.style.display = "none";
    }
    else if(localStorage.getItem("kodedua")){
        containermtk.style.display = "none"
        containeripas.style.display = "block";
        containerindo.style.display = "none";
        formcontainer.style.display = "none";
    }
    else if(localStorage.getItem("kodetiga")){
     containermtk.style.display = "none"
    containeripas.style.display = "none";
    containerindo.style.display = "block";
    formcontainer.style.display = "none";
    }
    else {
        console.error("not found data")
    }
    cetaknama.innerHTML = localStorage.getItem("nama")
    cetaknamadua.innerHTML = localStorage.getItem("nama")
     cetaknamatiga.innerHTML = localStorage.getItem("nama")
}


// reset

let buttonhapussatu = document.getElementById('buttonhapussatu')
let buttonhapusdua = document.getElementById('buttonhapussatu')
let buttonhapustiga = document.getElementById('buttonhapustiga')


const hapus = () => {
  localStorage.setItem("nama","");
  localStorage.setItem("kode","");
  localStorage.setItem("kodesatu","");
  location.reload();
}

const hapusdua = () => {
  localStorage.setItem("nama","");
  localStorage.setItem("kode","");
  localStorage.setItem("kodesatu","");
  location.reload();
}

const hapustiga = () => {
  localStorage.setItem("nama","");
  localStorage.setItem("kode","");
  localStorage.setItem("kodesatu","");
  location.reload();
}