const form = document.getElementById("myform");
const judulInput = document.getElementById("judul");
const lokasiInput = document.getElementById("lokasi");
const tanggalInput = document.getElementById("tanggal");
const isiInput = document.getElementById("isi");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (judulInput.value.trim() === "") {
    alert("Judul field is required!");
    return;
  }

  if (lokasiInput.value.trim() === "") {
    alert("Lokasi field is required!");
    return;
  }

  if (tanggalInput.value.trim() === "") {
    alert("Tanggal field is required!");
    return;
  }

  if (isiInput.value.trim() === "") {
    alert("Isi field is required!");
    return;
  }
  // Jika semua field sudah diisi, tampilkan data yang diisi
  alert(
    `Judul: ${judulInput.value}\nLokasi: ${lokasiInput.value}\nTanggal: ${tanggalInput.value}\nIsi: ${isiInput.value}`
  );
});
