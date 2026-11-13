const tempatWisata = [
  {
    nama: "Candi Muaro Jambi",
    info: "Kompleks candi Buddha terluas di Asia Tenggara, berada di tepi Sungai Batanghari."
  },
  {
    nama: "Bukit Tempurung",
    info: "Wisata alam di Sarolangun dengan pemandangan perbukitan yang asri."
  },
  {
    nama: "Danau Kerinci",
    info: "Danau luas di kaki Gunung Kerinci dengan udara sejuk dan pemandangan indah."
  },
  {
    nama: "Taman Rimba Jambi",
    info: "Taman hijau di tengah kota, cocok untuk bersantai bersama keluarga."
  }
];

const tombol = document.getElementById("btn");
tombol.textContent = "Jelajahi Wisata Jambi";

tombol.onclick = function () {
  const pilihan = tempatWisata[Math.floor(Math.random() * tempatWisata.length)];

  const kartuLama = document.querySelector(".info-card");
  if (kartuLama) {
    kartuLama.remove();
  }

  const kartu = document.createElement("div");
  kartu.className = "info-card";
  kartu.innerHTML = "<h2>" + pilihan.nama + "</h2><p style=\"color:#0f5132;background:none;padding:0;margin:0;\">" + pilihan.info + "</p>";

  document.body.appendChild(kartu);
};