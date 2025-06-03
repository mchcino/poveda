/* Fungsi zoom gambar saat submit-btn diklik (ada di bagian License to Live). */
const submitBtn = document.querySelectorAll('.ltl.submit-btn'); // menangkap elemen dengan class submit-btn yang mengandung class ltl.
const imgContainer = document.querySelectorAll('.image-container img'); // menangkap elemen img di dalam class image-container.


submitBtn.forEach(function(e, index) { // melakukan fungsi berikut di tiap item submitBtn.
  e.addEventListener('mouseenter', function() { // saat mouse diarahkan ke tombol, gambar dengan index yang sama akan diperbesar menggunakan transform: scale(1.08);.
    imgContainer[index].style.transform = 'scale(1.08)'; 
  })

  e.addEventListener('mouseleave', function() { // saat mouse keluar dari tombol, gambar dikembalikan ke ukuran normal menggunakan transform: scale(1);.
    imgContainer[index].style.transform = 'scale(1)'; 
  })
})







/* Fungsi pada tombol hamburger menu saat di klik, membuat menu navbar ke bawah (berlaku di ukuran mobile). */
const hambMenu = document.querySelector('.hamburger-menu'); // menangkap elemen dengan class hamburger-menu.
const hambMenuIcon = document.querySelector('.hamburger-menu i');
const navMenu = document.querySelector('.nav-menu'); // menangkap elemen dengan class nav-menu.
navMenu.style.height = '0px'; // mengatur tinggi navMenu menjadi 0px terlebih dahulu.
const navBg = document.querySelector('.nav-bg');
let resizeTimer; // variabel yang akan digunakan untuk setTimeout.


hambMenu.addEventListener('click', function() { // jika tombol hambMenu di klik, maka jalankan fungsi berikut.
  hambMenuIcon.classList.toggle('fa-xmark'); // jika saat di klik, mengubah tampilan ikon hambMenu secara dinamis.
  if(navMenu.style.height == '0px') { // jika saat di klik, tinggi navMenu sedang dalam kondisi tinggi 0px, maka ubah tinggi navMenu menjadi setara dengan tinggi kontennya secara penuh dan ubah tinggi navBg menjadi setara dengan tinggi konten navMenu.
    navMenu.style.height = navMenu.scrollHeight + 'px';
    navBg.style.height = navMenu.scrollHeight + 'px';
  } else { // jika saat di klik, tinggi navMenu sedang dalam kondisi tinggi konten secara penuh, maka ubah tinggi navMenu menjadi 0px dan ubah tinggi navBg menjadi 0px.
    navMenu.style.height = '0px';
    navBg.style.height = '0px';
  }
})


function cekUkuranLayar() { // mengubah tinggi navMenu sesuai kebutuhan.
  if (window.matchMedia("(min-width: 811px)").matches) { // jika lebar layar lebih dari sama dengan 811px, maka ubah tinggi navMenu menjadi 60px dan ubah tinggi navBg menjadi 0px.
    navMenu.style.height = '60px';
    navBg.style.height = '0px';
  } else if (window.matchMedia("(max-width: 810px)").matches && navMenu.style.height == navMenu.scrollHeight + 'px') { // jika lebar layar kurang dari atau sama dengan 810px dan tinggi navMenu sesuai dengan tinggi aslinya, maka pertahankan tinggi navMenu menjadi tetap sesuai dengan tinggi aslinya dan pertahankan tinggi navBg menjadi tetap setara dengan navMenu.
    navMenu.style.height = navMenu.scrollHeight + 'px';
    navBg.style.height = navMenu.scrollHeight + 'px';
  } else { // jika tinggi navMenu 0px, maka pertahankan tinggi navMenu menjadi tetap 0px dan pertahankan tinggi navBg menjadi tetap 0px.
    navMenu.style.height = '0px';
    navBg.style.height = '0px';
  }
}
cekUkuranLayar(); // memanggil fungsi cekUkuranLayar untuk menerapkan perintah pertama kali terlebih dahulu.
window.addEventListener("resize", cekUkuranLayar); // jika layar di resize, maka jalankan fungsi cekUkuranLayar().


window.addEventListener('resize', function() { // jika layar di resize, maka jalankan fungsi berikut.
  navMenu.style.transition = 'none'; // saat layar sedang di resize, maka transisi dari navMenu akan menjadi none atau tidak ada.
  navBg.style.transition = 'none'; // saat layar sedang di resize, maka transisi dari navBg akan menjadi none atau tidak ada.

  clearTimeout(resizeTimer); // saat mengubah ukuran layar, event resize bisa terpicu berkali-kali dalam satu proses drag dan setiap kali event resize dipanggil, baris kode setTimeout akan dijalankan. Fungsi clearTimeout(resizeTimer) disini adalah untuk membatalkan timer-timer sebelumnya sebelum membuat timer baru.
  resizeTimer = setTimeout(function() { // setelah 200ms kemudian, maka transisi dari navMenu akan dikembalikan menjadi 300ms ease dan transisi dari navBg akan dikembalikan menjadi 300ms ease.
    navMenu.style.transition = '300ms ease';
    navBg.style.transition = '300ms ease';
  }, 200)
})







/* Fungsi untuk menempatkan posisi nav-bg tepat pada posisinya. */
const navbar = document.querySelector('nav'); // menangkap elemen dengan tag HTML nav.
const navbarHeight = navbar.offsetHeight - 2; // menangkap tinggi elemen navbar dan menyimpannya ke variabel navbarHeight.

navBg.style.top = navbarHeight + 'px'; // mengubah nilai posisi top elemen navBg menggunakan navbarHeight.







/* Fungsi untuk mengatur tampilan underline list pada navbar. */
const navMenuList = document.querySelectorAll('nav .nav-menu li'); // menangkap semua elemen dengan selector nav .nav-menu li.
const navMenuAnchor = document.querySelectorAll('nav .nav-menu li a'); // menangkap semua elemen dengan selector nav .nav-menu li a.


function cekUkuranLayar2() {
  navMenuList.forEach(function(e) { // pada setiap elemen navMenuList (nav .nav-menu li), jalankan fungsi berikut.
    if(window.matchMedia("(max-width: 810px)").matches) { // jika lebar layar kurang dari atau sama dengan 810px, maka ubah position pada navMenuList menjadi static.
        e.style.position = 'static';
      } else { // jika lebar layar lebih dari 810px, maka ubah position pada navMenuList menjadi relative.
        e.style.position = 'relative';
    }
  })
  navMenuAnchor.forEach(function(e) { // pada setiap elemen navMenuAnchor (nav .nav-menu li a), jalankan fungsi berikut.
    if(window.matchMedia("(max-width: 810px)").matches) { // jika lebar layar kurang dari atau sama dengan 810px, maka ubah position pada navMenuAnchor menjadi relative.
      e.style.position = 'relative';
    } else { // jika lebar layar lebih dari 810px, maka ubah position pada navMenuAnchor menjadi static.
      e.style.position = 'static';
    }
  })
}
cekUkuranLayar2(); // memanggil fungsi cekUkuranLayar2 untuk menerapkan perintah pertama kali terlebih dahulu.
window.addEventListener('resize', cekUkuranLayar2); // jika layar di resize, maka jalankan fungsi cekUkuranLayar2().