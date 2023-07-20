// fungsi tombol submit
function submit() {
  let usia = document.getElementById("inputUsia").value;
  let beratBadan = document.getElementById("inputBeratBadan").value;
  let tinggiBadan = document.getElementById("inputTinggiBadan").value;
  let hasil = (beratBadan / (tinggiBadan * tinggiBadan)) * 10000;

  document.getElementById("nilaiBMI").innerHTML = hasil;

  let kategori = document.getElementById("kategori");
  let saran = document.getElementById("saran");

  // kondisi sesuai nilai
  if (hasil < 0) {
    kategori.innerHTML = "ngawur";
    saran.innerHTML = "yang bener dong ngisi data nya";
  } else if (usia <= 0) {
    kategori.innerHTML = "ngawur";
    saran.innerHTML = "yang bener dong ngisi data nya, masa usia nya segitu";
  } else if (hasil <= 18.5) {
    kategori.innerHTML = "Kurus";
    saran.innerHTML = "banyakin makan ya";
  } else if (hasil <= 24.9) {
    kategori.innerHTML = "Ideal";
    saran.innerHTML = "mantap jaga terus badannya";
  } else if (hasil <= 29.9) {
    kategori.innerHTML = "Gemuk";
    saran.innerHTML = "olahraga bro biar kurusan dikit";
  } else if (hasil > 25) {
    kategori.innerHTML = "Obesitas";
    saran.innerHTML = "udah termasuk obesitas nih harus diet sama olahraga";
  } else {
    kategori.innerHTML = "data tidak boleh kosong";
    document.getElementById("nilaiBMI").innerHTML = "";
  }
}

// fungsi tombol reset
function reset() {
  let usia = (document.getElementById("inputUsia").value = "");
  let beratBadan = (document.getElementById("inputBeratBadan").value = "");
  let tinggiBadan = (document.getElementById("inputTinggiBadan").value = "");
  let kategori = (document.getElementById("kategori").innerHTML = "");
  let saran = (document.getElementById("saran").innerHTML = "");
  let hasil = (document.getElementById("nilaiBMI").innerHTML = "");
}
