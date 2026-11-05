const form = document.getElementById("registrationForm");
const message = document.getElementById("message");
const fileInput = document.getElementById("bukti");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  message.textContent = "";
  message.className = "message";

  // Validasi tambahan: pengguna harus memilih minimal satu topik.
  const topics = document.querySelectorAll('input[name="minat[]"]:checked');
  if (topics.length === 0) {
    message.textContent = "Pilih minimal satu topik yang diminati.";
    message.classList.add("error");
    return;
  }

  // Validasi tambahan: file yang dipilih harus benar-benar PDF.
  const file = fileInput.files[0];
  if (!file || !file.name.toLowerCase().endsWith(".pdf")) {
    message.textContent = "Silakan unggah file dengan format PDF.";
    message.classList.add("error");
    return;
  }

  message.textContent = "Pemeriksaan browser berhasil. Data siap dikirim ke server.";
  message.classList.add("success");
});
