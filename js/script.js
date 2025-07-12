// Pop-up Detail Produk
document.addEventListener("DOMContentLoaded", function () {
  // Data produk
  const products = {
    1: {
      title: "Perahu Jukung Nelayan",
      image: "Assets/Img/perahu-nelayan.jpeg",
      description:
        "Perahu fiberglass untuk kebutuhan nelayan dengan desain kokoh dan tahan lama. Kapasitas 2-6 orang dengan berbagai ukuran.",
      specs: [
        { icon: "fas fa-ruler-combined", text: "Dimensi: 7m - 11m" },
        { icon: "fas fa-layer-group", text: "Material: Fiberglass" },
        { icon: "fas fa-palette", text: "Warna: Custom" },
        { icon: "fas fa-users", text: "Kapasitas: 2-6 Orang" },
        { icon: "fas fa-weight", text: "Berat: 150-300 kg" },
        { icon: "fas fa-anchor", text: "Garansi: 6 Bulan" },
      ],
      whatsapp:
        "https://wa.me/6281358844797?text=Halo,%20saya%20tertarik%20dengan%20produk%20Perahu%20Jukung%20Nelayan.",
    },

    2: {
      title: "Speedboat 10 GT",
      image: "Assets/Img/IMG_4214.JPG",
      description:
        "Speed boat 10 GT dilengkapi dengan mesin outboard, sistem kemudi hidrolik, dan berbagai perlengkapan navigasi serta keselamatan.",
      specs: [
        { icon: "fas fa-ruler-combined", text: "Dimensi: 13m - 15m" },
        { icon: "fas fa-layer-group", text: "Material: Fiberglass" },
        { icon: "fas fa-palette", text: "Warna: Custom" },
        { icon: "fas fa-users", text: "Kapasitas: 6-15 Orang" },
        { icon: "fas fa-weight", text: "Berat: 10 - 20 ton" },
        { icon: "fas fa-anchor", text: "Garansi: 6 Bulan" },
      ],
      whatsapp:
        "https://wa.me/6281358844797?text=Halo,%20saya%20tertarik%20dengan%20produk%20Speedboat%2010%20GT.",
    },

    3: {
      title: "Speedboat 4.5 - 5.5 Meter",
      image: "Assets/Img/16.jpg",
      description:
        "Speedboat fiberglass yang umumnya digunakan untuk berbagai keperluan, seperti rekreasi, patroli, memancing, atau transportasi cepat.",
      specs: [
        { icon: "fas fa-ruler-combined", text: "Dimensi: 4.5m - 5.5m" },
        { icon: "fas fa-layer-group", text: "Material: Fiberglass" },
        { icon: "fas fa-palette", text: "Warna: Custom" },
        { icon: "fas fa-users", text: "Kapasitas: 4-6 Orang" },
        { icon: "fas fa-weight", text: "Berat: 400 - 725 kg" },
        { icon: "fas fa-anchor", text: "Garansi: 6 Bulan" },
      ],
      whatsapp:
        "https://wa.me/6281358844797?text=Halo,%20saya%20tertarik%20dengan%20produk%20Speedboat%204.5-5.5%20Meter.",
    },

    4: {
      title: "Perahu Sampan",
      image: "Assets/Img/perahu-sampan.jpeg",
      description:
        "Perahu kecil yang didesain untuk digunakan di perairan tenang seperti waduk. Populer untuk berbagai aktivitas seperti memancing, rekreasi, atau transportasi ringan.",
      specs: [
        { icon: "fas fa-ruler-combined", text: "Dimensi: 5m - 9m" },
        { icon: "fas fa-layer-group", text: "Material: Fiberglass" },
        { icon: "fas fa-palette", text: "Warna: Custom" },
        { icon: "fas fa-users", text: "Kapasitas: 1-4 Orang" },
        { icon: "fas fa-weight", text: "Berat: 80-200 kg" },
        { icon: "fas fa-anchor", text: "Garansi: 6 Bulan" },
      ],
      whatsapp:
        "https://wa.me/6281358844797?text=Halo,%20saya%20tertarik%20dengan%20produk%20Perahu%20Sampan.",
    },

    5: {
      title: "Ambulance Laut",
      image: "Assets/Img/ambulance-laut.jpeg",
      description:
        "Ambulans laut fiberglass dilengkapi dengan peralatan medis yang memadai untuk memberikan perawatan darurat, serta memiliki ruang untuk menampung pasien dan petugas medis.",
      specs: [
        { icon: "fas fa-ruler-combined", text: "Dimensi: 6.5m - 14m" },
        {
          icon: "fas fa-layer-group",
          text: "Material: Fiberglass berkualitas",
        },
        { icon: "fas fa-palette", text: "Warna: Custom" },
        { icon: "fas fa-users", text: "Kapasitas: 6-15 Orang" },
        { icon: "fas fa-weight", text: "Berat: 10-20 Ton" },
        { icon: "fas fa-anchor", text: "Garansi: 6 Bulan" },
      ],
      whatsapp:
        "https://wa.me/6281358844797?text=Halo,%20saya%20tertarik%20dengan%20produk%20Ambulance%20Laut.",
    },

    6: {
      title: "Speedboat Cap. 50 Orang",
      image: "Assets/Img/speedboat-cap.50-person.JPG",
      description:
        "Speedboat yang dirancang untuk mengangkut hingga 50 penumpang. Transportasi antar pulau, wisata bahari, atau keperluan mobilitas cepat di air.",
      specs: [
        { icon: "fas fa-ruler-combined", text: "Dimensi: 15-20 Meter" },
        {
          icon: "fas fa-layer-group",
          text: "Material: Fiberglass berkualitas",
        },
        { icon: "fas fa-palette", text: "Warna: Custom" },
        { icon: "fas fa-users", text: "Kapasitas: 50 orang" },
        { icon: "fas fa-weight", text: "Berat: Puluhan Ton" },
        { icon: "fas fa-anchor", text: "Garansi: 6 Bulan" },
      ],
      whatsapp:
        "https://wa.me/6281358844797?text=Halo,%20saya%20tertarik%20dengan%20produk%20Speedboat%20Cap.%2050%20Orang.",
    },

    7: {
      title: "Speedboat 4.5 Meter",
      image: "Assets/Img/speedboat-4.5m.JPG",
      description:
        "Speedboat yang dirancang untuk bergerak dengan kecepatan tinggi di air. Kapal ini sering menggunakan mesin tempel (outboard) dengan tenaga sekitar 40 PK.",
      specs: [
        { icon: "fas fa-ruler-combined", text: "Dimensi: 4.5 Meter" },
        {
          icon: "fas fa-layer-group",
          text: "Material: Fiberglass berkualitas",
        },
        { icon: "fas fa-palette", text: "Warna: Custom" },
        { icon: "fas fa-users", text: "Kapasitas: 4 orang" },
        { icon: "fas fa-weight", text: "Berat: 200-500 kg" },
        { icon: "fas fa-anchor", text: "Garansi: 6 Bulan" },
      ],
      whatsapp:
        "https://wa.me/6281358844797?text=Halo,%20saya%20tertarik%20dengan%20produk%20Speedboat%204.5%20Meter.",
    },

    8: {
      title: "Speedboat Kanopi",
      image: "Assets/Img/speed-dishub-mdn.jpeg",
      description:
        "Speedboat yang dilengkapi dengan kanopi, yaitu atap pelindung yang biasanya terbuat dari bahan tahan air seperti kain atau material ringan lainnya.",
      specs: [
        { icon: "fas fa-ruler-combined", text: "Dimensi: 5-7 Mater" },
        {
          icon: "fas fa-layer-group",
          text: "Material: Fiberglass berkualitas",
        },
        { icon: "fas fa-palette", text: "Warna: Custom" },
        { icon: "fas fa-users", text: "Kapasitas: 6-8 orang" },
        { icon: "fas fa-weight", text: "Berat: 200-600 kg" },
        { icon: "fas fa-anchor", text: "Garansi: 6 Bulan" },
      ],
      whatsapp:
        "https://wa.me/6281358844797?text=Halo,%20saya%20tertarik%20dengan%20produk%20Speedboat%20Kanopi.",
    },

    9: {
      title: "Speedboat Papua",
      image: "Assets/Img/speedboat-papua.JPG",
      description:
        "Speedboat yang dirancang untuk kecepatan tinggi dan digunakan sebagai transportasi antar pulau serta untuk rekreasi seperti tur wisata laut.",
      specs: [
        { icon: "fas fa-ruler-combined", text: "Dimensi: 5-7 Meter" },
        {
          icon: "fas fa-layer-group",
          text: "Material: Fiberglass berkualitas",
        },
        { icon: "fas fa-palette", text: "Warna: Custom" },
        { icon: "fas fa-users", text: "Kapasitas: 4-6 orang" },
        { icon: "fas fa-weight", text: "Berat: 200-600 kg" },
        { icon: "fas fa-anchor", text: "Garansi: 6 Bulan" },
      ],
      whatsapp:
        "https://wa.me/6281358844797?text=Halo,%20saya%20tertarik%20dengan%20produk%20Speedboat%20Papua.",
    },

    10: {
      title: "Speedboat 7 Meter",
      image: "Assets/Img/speedboat-7m.JPG",
      description:
        "Speedboat 7 meter digunakan untuk transportasi cepat di perairan, seperti perjalanan antar pulau atau kegiatan rekreasi.",
      specs: [
        { icon: "fas fa-ruler-combined", text: "Dimensi: 7 Meter" },
        {
          icon: "fas fa-layer-group",
          text: "Material: Fiberglass berkualitas",
        },
        { icon: "fas fa-palette", text: "Warna: Custom" },
        { icon: "fas fa-users", text: "Kapasitas: 7-8 orang" },
        { icon: "fas fa-weight", text: "Berat: 1750 kg atau lebih" },
        { icon: "fas fa-anchor", text: "Garansi: 6 Bulan" },
      ],
      whatsapp:
        "https://wa.me/6281358844797?text=Halo,%20saya%20tertarik%20dengan%20produk%20Speedboat%207%20Meter.",
    },

    11: {
      title: "Speedboat Wonogiri",
      image: "Assets/Img/speedboat-wonogiri.JPG",
      description:
        "Speedboat untuk mengangkut penumpang, baik untuk tujuan komersial maupun pribadi, populer untuk kegiatan rekreasi seperti tur dan memancing. ",
      specs: [
        { icon: "fas fa-ruler-combined", text: "Dimensi: 4-5 Meter" },
        {
          icon: "fas fa-layer-group",
          text: "Material: Fiberglass berkualitas",
        },
        { icon: "fas fa-palette", text: "Warna: Custom" },
        { icon: "fas fa-users", text: "Kapasitas: 4-6 orang" },
        { icon: "fas fa-weight", text: "Berat: 200-500 kg" },
        { icon: "fas fa-anchor", text: "Garansi: 6 Bulan" },
      ],
      whatsapp:
        "https://wa.me/6281358844797?text=Halo,%20saya%20tertarik%20dengan%20produk%20Speedboat%20Wonogiri.",
    },

    12: {
      title: "Kapal Penangkap Ikan 10 GT",
      image: "Assets/Img/kapal-10GT.JPG",
      description:
        "Kapal ini umumnya digunakan untuk menangkap ikan dengan berbagai metode, seperti menggunakan jaring, pancing, atau pukat.",
      specs: [
        { icon: "fas fa-ruler-combined", text: "Dimensi: 10-15 Meter" },
        {
          icon: "fas fa-layer-group",
          text: "Material: Fiberglass berkualitas",
        },
        { icon: "fas fa-palette", text: "Warna: Custom" },
        { icon: "fas fa-users", text: "Kapasitas: Bervariasi" },
        { icon: "fas fa-weight", text: "Volume: 10 GT" },
        { icon: "fas fa-anchor", text: "Garansi: 6 Bulan" },
      ],
      whatsapp:
        "https://wa.me/6281358844797?text=Halo,%20saya%20tertarik%20dengan%20produk%20Kapal%20Penangkap%20Ikan%2010%20GT.",
    },

    13: {
      title: "Kapal Penangkap Ikan 15 GT",
      image: "Assets/Img/kapal-15GT.JPG",
      description:
        "Kapal perikanan yang memiliki ukuran yang lebih kecil dibandingkan kapal perikanan komersial besar, namun lebih besar dari perahu nelayan kecil.",
      specs: [
        { icon: "fas fa-ruler-combined", text: "Dimensi: 10-15 Meter" },
        {
          icon: "fas fa-layer-group",
          text: "Material: Fiberglass berkualitas",
        },
        { icon: "fas fa-palette", text: "Warna: Custom" },
        { icon: "fas fa-users", text: "Kapasitas: Bervariasi" },
        { icon: "fas fa-weight", text: "Volume: 15 GT" },
        { icon: "fas fa-anchor", text: "Garansi: 6 Bulan" },
      ],
      whatsapp:
        "https://wa.me/6281358844797?text=Halo,%20saya%20tertarik%20dengan%20produk%20Kapal%20Penangkap%20Ikan%2015%20GT.",
    },

    14: {
      title: "Kapal Penangkap Ikan 5 GT",
      image: "Assets/Img/kapal-5GT.jpeg",
      description:
        "Kapal perikanan dengan ukuran di bawah 5 Gross Tonnage (GT). Kapal ini dirancang untuk kegiatan penangkapan ikan di perairan pantai dan dekat pulau.",
      specs: [
        { icon: "fas fa-ruler-combined", text: "Dimensi: 9-11 Meter" },
        {
          icon: "fas fa-layer-group",
          text: "Material: Fiberglass berkualitas",
        },
        { icon: "fas fa-palette", text: "Warna: Custom" },
        { icon: "fas fa-users", text: "Kapasitas: Bervariasi" },
        { icon: "fas fa-weight", text: "Volume: 5 GT" },
        { icon: "fas fa-anchor", text: "Garansi: 6 Bulan" },
      ],
      whatsapp:
        "https://wa.me/6281358844797?text=Halo,%20saya%20tertarik%20dengan%20produk%20Kapal%20Penangkap%20Ikan%205%20GT.",
    },

    15: {
      title: "Kapal 5 GT Sumbawa",
      image: "Assets/Img/kapal-5GT-sumbawa.JPG",
      description:
        "Kapal ini dirancang untuk kegiatan penangkapan ikan di perairan pantai dan dekat pulau. Dinas Perikanan Sumbawa juga memberikan bantuan kapal 5 GT kepada nelayan.",
      specs: [
        { icon: "fas fa-ruler-combined", text: "Dimensi: 8-10 Meter" },
        {
          icon: "fas fa-layer-group",
          text: "Material: Fiberglass berkualitas",
        },
        { icon: "fas fa-palette", text: "Warna: Custom" },
        { icon: "fas fa-users", text: "Kapasitas: " },
        { icon: "fas fa-weight", text: "Volume: Kurang dari 5 GT" },
        { icon: "fas fa-anchor", text: "Garansi: 6 Bulan" },
      ],
      whatsapp:
        "https://wa.me/6281358844797?text=Halo,%20saya%20tertarik%20dengan%20produk%20Kapal%205%20GT%20Sumbawa.",
    },

    16: {
      title: "Kapal 3 GT Sumbawa",
      image: "Assets/Img/kapal-3GT-sumbawa.JPG",
      description:
        "Kapal perikanan dengan ukuran kecil, umumnya digunakan oleh nelayan lokal untuk mencari ikan di perairan sekitar Sumbawa.",
      specs: [
        { icon: "fas fa-ruler-combined", text: "Dimensi: 7-10 Meter" },
        {
          icon: "fas fa-layer-group",
          text: "Material: Fiberglass berkualitas",
        },
        { icon: "fas fa-palette", text: "Warna: Custom" },
        { icon: "fas fa-users", text: "Kapasitas: Bervariasi" },
        { icon: "fas fa-weight", text: "Volume: Kurang dari 3 GT" },
        { icon: "fas fa-anchor", text: "Garansi: 6 Bulan" },
      ],
      whatsapp:
        "https://wa.me/6281358844797?text=Halo,%20saya%20tertarik%20dengan%20produk%20Kapal%203%20GT%20Sumbawa.",
    },

    17: {
      title: "Perahu Katir 10 Meter",
      image: "Assets/Img/perahu-katir-10m.JPG",
      description:
        "Perahu katir memiliki lambung ramping dan panjang, dengan dua cadik yang dipasang sejajar di sisi kiri dan kanan perahu untuk menjaga keseimbangan.",
      specs: [
        { icon: "fas fa-ruler-combined", text: "Dimensi: 10 Meter" },
        {
          icon: "fas fa-layer-group",
          text: "Material: Fiberglass berkualitas",
        },
        { icon: "fas fa-palette", text: "Warna: Custom" },
        { icon: "fas fa-users", text: "Kapasitas: 2-4 orang" },
        { icon: "fas fa-weight", text: "Berat: 500-800 kg" },
        { icon: "fas fa-anchor", text: "Garansi: 6 Bulan" },
      ],
      whatsapp:
        "https://wa.me/6281358844797?text=Halo,%20saya%20tertarik%20dengan%20produk%20Perahu%20Katir%2010%20Meter.",
    },

    18: {
      title: "Perahu Katir 11 Meter",
      image: "Assets/Img/perahu-katir-11m.JPG",
      description:
        "Perahu katir memiliki lambung ramping dan panjang, dengan dua cadik yang dipasang sejajar di sisi kiri dan kanan perahu untuk menjaga keseimbangan.",
      specs: [
        { icon: "fas fa-ruler-combined", text: "Dimensi: 11 Meter" },
        {
          icon: "fas fa-layer-group",
          text: "Material: Fiberglass berkualitas",
        },
        { icon: "fas fa-palette", text: "Warna: Custom" },
        { icon: "fas fa-users", text: "Kapasitas: 4-6" },
        { icon: "fas fa-weight", text: "Berat: 500-800 kg" },
        { icon: "fas fa-anchor", text: "Garansi: 6 Bulan" },
      ],
      whatsapp:
        "https://wa.me/6281358844797?text=Halo,%20saya%20tertarik%20dengan%20produk%20Perahu%20Katir%2011%20Meter.",
    },

    19: {
      title: "Perahu Katir 9.5 Meter",
      image: "Assets/Img/perahu-katir-9.5m.jpeg",
      description:
        "Perahu katir memiliki lambung ramping dan panjang, dengan dua cadik yang dipasang sejajar di sisi kiri dan kanan perahu untuk menjaga keseimbangan.",
      specs: [
        { icon: "fas fa-ruler-combined", text: "Dimensi: 9.5 Meter" },
        {
          icon: "fas fa-layer-group",
          text: "Material: Fiberglass berkualitas",
        },
        { icon: "fas fa-palette", text: "Warna: Custom" },
        { icon: "fas fa-users", text: "Kapasitas: 4-5 orang" },
        { icon: "fas fa-weight", text: "Berat: 400-700 kg" },
        { icon: "fas fa-anchor", text: "Garansi: 6 Bulan" },
      ],
      whatsapp:
        "https://wa.me/6281358844797?text=Halo,%20saya%20tertarik%20dengan%20produk%20Perahu%20Katir%209.5%20Meter.",
    },

    20: {
      title: "Perahu Katir 9.2 Meter",
      image: "Assets/Img/perahu-katir-9.2m.JPG",
      description:
        "Perahu katir memiliki lambung ramping dan panjang, dengan dua cadik yang dipasang sejajar di sisi kiri dan kanan perahu untuk menjaga keseimbangan.",
      specs: [
        { icon: "fas fa-ruler-combined", text: "Dimensi: 9.2 Meter" },
        {
          icon: "fas fa-layer-group",
          text: "Material: Fiberglass berkualitas",
        },
        { icon: "fas fa-palette", text: "Warna: Custom" },
        { icon: "fas fa-users", text: "Kapasitas: 2-4 orang" },
        { icon: "fas fa-weight", text: "Berat: 400-700 kg" },
        { icon: "fas fa-anchor", text: "Garansi: 6 Bulan" },
      ],
      whatsapp:
        "https://wa.me/6281358844797?text=Halo,%20saya%20tertarik%20dengan%20produk%20Perahu%20Katir%209.2%20Meter.",
    },

    21: {
      title: "Perahu Nelayan WGM",
      image: "Assets/Img/perahu-nelayan-WGM.jpeg",
      description:
        "Perahu yang digunakan oleh nelayan di Waduk Gajah Mungkur (WGM) merupakan alat transportasi penting bagi nelayan untuk mencari ikan di waduk tersebut.",
      specs: [
        { icon: "fas fa-ruler-combined", text: "Dimensi: 4-5 Meter" },
        {
          icon: "fas fa-layer-group",
          text: "Material: Fiberglass berkualitas",
        },
        { icon: "fas fa-palette", text: "Warna: Custom" },
        { icon: "fas fa-users", text: "Kapasitas: 1-2 orang" },
        { icon: "fas fa-weight", text: "Berat: 100-200 kg" },
        { icon: "fas fa-anchor", text: "Garansi: 6 Bulan" },
      ],
      whatsapp:
        "https://wa.me/6281358844797?text=Halo,%20saya%20tertarik%20dengan%20produk%20Perahu%20Nelayan%20WGM.",
    },

    22: {
      title: "Perahu Sungai",
      image: "Assets/Img/perahu-sungai.JPG",
      description:
        "Perahu yang dirancang khusus dengan fokus pada stabilitas dan kemampuan bermanuver di perairan yang lebih tenang dan dangkal.",
      specs: [
        { icon: "fas fa-ruler-combined", text: "Dimensi: 5-7 Meter" },
        {
          icon: "fas fa-layer-group",
          text: "Material: Fiberglass berkualitas",
        },
        { icon: "fas fa-palette", text: "Warna: Custom" },
        { icon: "fas fa-users", text: "Kapasitas: 6-8 orang" },
        { icon: "fas fa-weight", text: "Berat: 100-400 kg" },
        { icon: "fas fa-anchor", text: "Garansi: 6 Bulan" },
      ],
      whatsapp:
        "https://wa.me/6281358844797?text=Halo,%20saya%20tertarik%20dengan%20produk%20Perahu%20Sungai.",
    },

    23: {
      title: "Fishing Boat Maluku",
      image: "Assets/Img/fishing-boat-maluku.JPG",
      description:
        "Speedboat yang dirancang untuk kecepatan tinggi.umumnya digunakan sebagai sarana transportasi cepat antar pulau atau memancing.",
      specs: [
        { icon: "fas fa-ruler-combined", text: "Dimensi: 5-7 Meter" },
        {
          icon: "fas fa-layer-group",
          text: "Material: Fiberglass berkualitas",
        },
        { icon: "fas fa-palette", text: "Warna: Custom" },
        { icon: "fas fa-users", text: "Kapasitas: 6-8 orang" },
        { icon: "fas fa-weight", text: "Berat: 500-800 kg" },
        { icon: "fas fa-anchor", text: "Garansi: 6 Bulan" },
      ],
      whatsapp:
        "https://wa.me/6281358844797?text=Halo,%20saya%20tertarik%20dengan%20produk%20Fishing%20Boat%20Maluku.",
    },

    24: {
      title: "Boat Wisata",
      image: "Assets/Img/boat-wisata.jpeg",
      description:
        "Perahu yang dirancang untuk mengakomodasi kegiatan pariwisata dan rekreasi di air. Digunakan untuk bersantai menikmati pemandangan. ",
      specs: [
        { icon: "fas fa-ruler-combined", text: "Dimensi: 5-7 Meter" },
        {
          icon: "fas fa-layer-group",
          text: "Material: Fiberglass berkualitas",
        },
        { icon: "fas fa-palette", text: "Warna: Custom" },
        { icon: "fas fa-users", text: "Kapasitas: 6-8 orang" },
        { icon: "fas fa-weight", text: "Berat: 400-600 kg" },
        { icon: "fas fa-anchor", text: "Garansi: 6 Bulan" },
      ],
      whatsapp:
        "https://wa.me/6281358844797?text=Halo,%20saya%20tertarik%20dengan%20produk%20Boat%20Wisata.",
    },

    25: {
      title: "Kolam Budidaya Fiberglass",
      image: "Assets/Img/kolam-budidaya.jpeg",
      description:
        "Kolam ini banyak digunakan untuk berbagai keperluan terutama dalam budidaya ikan dan penampungan air sementara.",
      specs: [
        { icon: "fas fa-ruler-combined", text: "Dimensi: Custom" },
        {
          icon: "fas fa-layer-group",
          text: "Material: Fiberglass berkualitas",
        },
        { icon: "fas fa-palette", text: "Warna: Biru, Custom" },
        { icon: "fas fa-users", text: "Kapasitas: 1000-3000 Liter" },
        { icon: "fas fa-weight", text: "Berat: Bervariasi" },
        { icon: "fas fa-anchor", text: "Garansi: 6 Bulan" },
      ],
      whatsapp:
        "https://wa.me/6281358844797?text=Halo,%20saya%20tertarik%20dengan%20produk%20Kolam%20Budidaya%20Fiberglass.",
    },

    26: {
      title: "Kolam Fiber D2",
      image: "Assets/Img/kolam-fiber-d2.jpeg",
      description:
        "Kolam fiber diameter 2 digunakan untuk keperluan budidaya ikan. Keunggulan meliputi kekuatan, ringan, tahan lama, dan mudah dibentuk sesuai kebutuhan.",
      specs: [
        { icon: "fas fa-ruler-combined", text: "Dimensi: Diameter 2" },
        {
          icon: "fas fa-layer-group",
          text: "Material: Fiberglass berkualitas",
        },
        { icon: "fas fa-palette", text: "Warna: Biru, Custom" },
        { icon: "fas fa-users", text: "Kapasitas: 2500-3500 Liter" },
        { icon: "fas fa-weight", text: "Berat: 200-400 kg" },
        { icon: "fas fa-anchor", text: "Garansi: 6 Bulan" },
      ],
      whatsapp:
        "https://wa.me/6281358844797?text=Halo,%20saya%20tertarik%20dengan%20produk%20Kolam%20Fiber%20D2.",
    },

    27: {
      title: "Kolam Fiber D3",
      image: "Assets/Img/kolam-fiber-d3.jpeg",
      description:
        "Kolam fiber diameter 3 digunakan untuk keperluan budidaya ikan. Keunggulan meliputi kekuatan, ringan, tahan lama, dan mudah dibentuk sesuai kebutuhan.",
      specs: [
        { icon: "fas fa-ruler-combined", text: "Dimensi: Diameter 3" },
        {
          icon: "fas fa-layer-group",
          text: "Material: Fiberglass berkualitas",
        },
        { icon: "fas fa-palette", text: "Warna: Biru, Custom" },
        { icon: "fas fa-users", text: "Kapasitas: 5000-7000 Liter" },
        { icon: "fas fa-weight", text: "Berat: 500 kg - 1 ton" },
        { icon: "fas fa-anchor", text: "Garansi: 6 Bulan" },
      ],
      whatsapp:
        "https://wa.me/6281358844797?text=Halo,%20saya%20tertarik%20dengan%20produk%20Kolam%20Fiber%20D3.",
    },

    28: {
      title: "Kolam Fiber Kotak",
      image: "Assets/Img/kolam-fiber-kotak.jpeg",
      description:
        "Kolam yang terbuat dari bahan fiberglass dengan bentuk kotak. Ketahanan yang baik terhadap cuaca ekstrem dan kemudahan dalam perawatan.",
      specs: [
        { icon: "fas fa-ruler-combined", text: "Dimensi: Custom" },
        {
          icon: "fas fa-layer-group",
          text: "Material: Fiberglass berkualitas",
        },
        { icon: "fas fa-palette", text: "Warna: Biru, Custom" },
        { icon: "fas fa-users", text: "Kapasitas: Bervariasi" },
        { icon: "fas fa-weight", text: "Berat: Bervariasi" },
        { icon: "fas fa-anchor", text: "Garansi: 6 Bulan" },
      ],
      whatsapp:
        "https://wa.me/6281358844797?text=Halo,%20saya%20tertarik%20dengan%20produk%20Kolam%20Fiber%20Kotak.",
    },

    29: {
      title: "Kolam Fiber Karantina",
      image: "Assets/Img/kolam-karantina.JPG",
      description:
        "Wadah atau kolam yang terbuat dari bahan fiberglass yang dirancang khusus untuk mengarantina ikan atau organisme air lainnya.",
      specs: [
        { icon: "fas fa-ruler-combined", text: "Dimensi: Custom" },
        {
          icon: "fas fa-layer-group",
          text: "Material: Fiberglass berkualitas",
        },
        { icon: "fas fa-palette", text: "Warna: Biru, Custom" },
        { icon: "fas fa-users", text: "Kapasitas: Bervariasi" },
        { icon: "fas fa-weight", text: "Berat: Bervariasi" },
        { icon: "fas fa-anchor", text: "Garansi: 6 Bulan" },
      ],
      whatsapp:
        "https://wa.me/6281358844797?text=Halo,%20saya%20tertarik%20dengan%20produk%20Kolam%20Fiber%20Karantina.",
    },

    30: {
      title: "Torn Air 3000 Liter",
      image: "Assets/Img/torn-air-3rb-liter.JPG",
      description:
        "Tangki penampung air yang terbuat dari bahan fiberglass, dirancang untuk menampung air bersih dengan kapasitas 3000 liter.",
      specs: [
        { icon: "fas fa-ruler-combined", text: "Dimensi: Custom" },
        {
          icon: "fas fa-layer-group",
          text: "Material: Fiberglass berkualitas",
        },
        { icon: "fas fa-palette", text: "Warna: Biru, Custom" },
        { icon: "fas fa-users", text: "Kapasitas: 3000 Liter" },
        { icon: "fas fa-weight", text: "Berat: 56-117 kg" },
        { icon: "fas fa-anchor", text: "Garansi: 6 Bulan" },
      ],
      whatsapp:
        "https://wa.me/6281358844797?text=Halo,%20saya%20tertarik%20dengan%20produk%20Torn%20Air%203000%20Liter.",
    },

    31: {
      title: "Torn Air 4rb Liter",
      image: "Assets/Img/torn-air-4rb-liter.JPG",
      description:
        "Tangki penampung air yang terbuat dari bahan fiberglass, dirancang untuk menampung air bersih dengan kapasitas 4000 liter.",
      specs: [
        { icon: "fas fa-ruler-combined", text: "Dimensi: Custom" },
        {
          icon: "fas fa-layer-group",
          text: "Material: Fiberglass berkualitas",
        },
        { icon: "fas fa-palette", text: "Warna: Biru, Custom" },
        { icon: "fas fa-users", text: "Kapasitas: 4000 Liter" },
        { icon: "fas fa-weight", text: "Berat: 90-150 kg" },
        { icon: "fas fa-anchor", text: "Garansi: 6 Bulan" },
      ],
      whatsapp:
        "https://wa.me/6281358844797?text=Halo,%20saya%20tertarik%20dengan%20produk%20Torn%20Air%204000%20Liter.",
    },

    32: {
      title: "Tangki Panel 24rb Liter",
      image: "Assets/Img/tangki-panel-24rb-liter.JPG",
      description:
        "Tangki air yang terbuat dari panel-panel fiberglass yang dirakit menjadi satu kesatuan. Hemat biaya pemeliharaan dan fleksibel dalam kapasitas.",
      specs: [
        { icon: "fas fa-ruler-combined", text: "Dimensi: Custom" },
        {
          icon: "fas fa-layer-group",
          text: "Material: Fiberglass berkualitas",
        },
        { icon: "fas fa-palette", text: "Warna: Biru, Custom" },
        { icon: "fas fa-users", text: "Kapasitas: 24000 Liter" },
        { icon: "fas fa-weight", text: "Berat: Bervariasi" },
        { icon: "fas fa-anchor", text: "Garansi: 6 Bulan" },
      ],
      whatsapp:
        "https://wa.me/6281358844797?text=Halo,%20saya%20tertarik%20dengan%20produk%20Tangki%20Panel%2024rb%20Liter.",
    },

    33: {
      title: "Tangki Panel 99rb Liter",
      image: "Assets/Img/tanki-panel-99rb-liter.JPG",
      description:
        "Tangki air yang terbuat dari panel-panel fiberglass yang dirakit menjadi satu kesatuan. Hemat biaya pemeliharaan dan fleksibel dalam kapasitas.",
      specs: [
        { icon: "fas fa-ruler-combined", text: "Dimensi: Custom" },
        {
          icon: "fas fa-layer-group",
          text: "Material: Fiberglass berkualitas",
        },
        { icon: "fas fa-palette", text: "Warna: Biru, Custom" },
        { icon: "fas fa-users", text: "Kapasitas: 99000 Liter" },
        { icon: "fas fa-weight", text: "Berat: Bervariasi" },
        { icon: "fas fa-anchor", text: "Garansi: 6 Bulan" },
      ],
      whatsapp:
        "https://wa.me/6281358844797?text=Halo,%20saya%20tertarik%20dengan%20produk%20Tangki%20Panel%2099rb%20Liter.",
    },

    34: {
      title: "Box Ikan Fiberglass",
      image: "Assets/Img/box-ikan.jpeg",
      description:
        "Wadah yang terbuat dari fiberglass, digunakan untuk menyimpan ikan agar tetap segar, baik dalam proses penangkapan maupun penyimpanan sementara.",
      specs: [
        { icon: "fas fa-ruler-combined", text: "Dimensi: Custom" },
        {
          icon: "fas fa-layer-group",
          text: "Material: Fiberglass berkualitas",
        },
        { icon: "fas fa-palette", text: "Warna: Biru, Custom" },
        { icon: "fas fa-users", text: "Kapasitas: Bervariasi" },
        { icon: "fas fa-weight", text: "Berat: Bervariasi" },
        { icon: "fas fa-anchor", text: "Garansi: 6 Bulan" },
      ],
      whatsapp:
        "https://wa.me/6281358844797?text=Halo,%20saya%20tertarik%20dengan%20produk%20Box%20Ikan%20Fiberglass.",
    },

    35: {
      title: "Tangki Air 5000 Liter",
      image: "Assets/Img/24.jpg",
      description:
        "Tangki air yang terbuat dari fiberglass, tahan lama, mudah dipasang, anti korosi, hemat biaya pemeliharaan, dan fleksibel dalam kapasitas.",
      specs: [
        { icon: "fas fa-ruler-combined", text: "Dimensi: Custom" },
        {
          icon: "fas fa-layer-group",
          text: "Material: Fiberglass berkualitas",
        },
        { icon: "fas fa-palette", text: "Warna: Biru, Custom" },
        { icon: "fas fa-users", text: "Kapasitas: 5000 Liter" },
        { icon: "fas fa-weight", text: "Berat: Bervariasi" },
        { icon: "fas fa-anchor", text: "Garansi: 6 Bulan" },
      ],
      whatsapp:
        "https://wa.me/6281358844797?text=Halo,%20saya%20tertarik%20dengan%20produk%20Tangki%20Air%205000%20Liter.",
    },

    36: {
      title: "Kolam Fiber Bulat",
      image: "Assets/Img/kolam-fiber-bulat.JPG",
      description:
        "Kolam yang terbuat dari bahan fiberglass berbentuk bulat. Cocok untuk budidaya ikan, kolam karantina, atau bahkan sebagai dekorasi.",
      specs: [
        { icon: "fas fa-ruler-combined", text: "Dimensi: Custom" },
        {
          icon: "fas fa-layer-group",
          text: "Material: Fiberglass berkualitas",
        },
        { icon: "fas fa-palette", text: "Warna: Biru, Custom" },
        { icon: "fas fa-users", text: "Kapasitas: Bervariasi" },
        { icon: "fas fa-weight", text: "Berat: Bervariasi" },
        { icon: "fas fa-anchor", text: "Garansi: 6 Bulan" },
      ],
      whatsapp:
        "https://wa.me/6281358844797?text=Halo,%20saya%20tertarik%20dengan%20produk%20Kolam%20Fiber%20Bulat.",
    },

    37: {
      title: "Palokan Sumbawa Barat",
      image: "Assets/Img/palokan-sumbawa-barat.JPG",
      description:
        "Kapal palokan fiber di Sumbawa Barat, seperti halnya kapal fiber pada umumnya. Ringan, tahan terhadap korosi, dan perawatannya relatif mudah.",
      specs: [
        { icon: "fas fa-ruler-combined", text: "Dimensi: 5-7 Meter" },
        {
          icon: "fas fa-layer-group",
          text: "Material: Fiberglass berkualitas",
        },
        { icon: "fas fa-palette", text: "Warna: Custom" },
        { icon: "fas fa-users", text: "Kapasitas: 2-3 orang" },
        { icon: "fas fa-weight", text: "Berat: 200-400 kg" },
        { icon: "fas fa-anchor", text: "Garansi: 6 Bulan" },
      ],
      whatsapp:
        "https://wa.me/6281358844797?text=Halo,%20saya%20tertarik%20dengan%20produk%20Palokan%20Sumbawa%20Barat.",
    },

    38: {
      title: "Palokan Malang",
      image: "Assets/Img/palokan-malang.jpeg",
      description:
        "Kapal palokan fiber di Malang, seperti halnya kapal fiber pada umumnya. Ringan, mudah dibentuk, tahan terhadap korosi, dan perawatannya relatif mudah.",
      specs: [
        { icon: "fas fa-ruler-combined", text: "Dimensi: 5-8 Meter" },
        {
          icon: "fas fa-layer-group",
          text: "Material: Fiberglass berkualitas",
        },
        { icon: "fas fa-palette", text: "Warna: Custom" },
        { icon: "fas fa-users", text: "Kapasitas: 2-6 orang" },
        { icon: "fas fa-weight", text: "Berat: 200-500 kg" },
        { icon: "fas fa-anchor", text: "Garansi: 6 Bulan" },
      ],
      whatsapp:
        "https://wa.me/6281358844797?text=Halo,%20saya%20tertarik%20dengan%20produk%20Palokan%20Malang.",
    },

    39: {
      title: "Perahu Jukung 5.5 Meter Sikka",
      image: "Assets/Img/jukung-5.5m-sikka.jpeg",
      description:
        "Perahu dengan panjang 5.5 meter yang terbuat dari bahan fiberglass. Digunakan untuk transportasi, memancing, atau kegiatan rekreasi di perairan.",
      specs: [
        { icon: "fas fa-ruler-combined", text: "Dimensi: 5.5 Meter" },
        {
          icon: "fas fa-layer-group",
          text: "Material: Fiberglass berkualitas",
        },
        { icon: "fas fa-palette", text: "Warna: Custom" },
        { icon: "fas fa-users", text: "Kapasitas: 2-3 orang" },
        { icon: "fas fa-weight", text: "Berat: 150-300 kg" },
        { icon: "fas fa-anchor", text: "Garansi: 6 Bulan" },
      ],
      whatsapp:
        "https://wa.me/6281358844797?text=Halo,%20saya%20tertarik%20dengan%20produk%20Perahu%20Jukung%205.5%20Meter.",
    },

    40: {
      title: "Perahu Jukung 9.5 Meter Maluku",
      image: "Assets/Img/jukung-9.5m-maluku.jpeg",
      description:
        "Perahu dengan panjang 9.5 meter yang terbuat dari bahan fiberglass. Digunakan untuk transportasi, memancing, atau kegiatan rekreasi di perairan.",
      specs: [
        { icon: "fas fa-ruler-combined", text: "Dimensi: 9.5 Meter" },
        {
          icon: "fas fa-layer-group",
          text: "Material: Fiberglass berkualitas",
        },
        { icon: "fas fa-palette", text: "Warna: Custom" },
        { icon: "fas fa-users", text: "Kapasitas: 2-4 orang" },
        { icon: "fas fa-weight", text: "Berat: 250-600 kg" },
        { icon: "fas fa-anchor", text: "Garansi: 6 Bulan" },
      ],
      whatsapp:
        "https://wa.me/6281358844797?text=Halo,%20saya%20tertarik%20dengan%20produk%20Perahu%20Jukung%209.5%20Meter.",
    },

    41: {
      title: "Perahu Sampan Danau Toba",
      image: "Assets/Img/sampan-danau-toba.JPG",
      description:
        "Perahu sampan berukuran kecil hingga sedang, biasanya menggunakan mesin katinting. Cocok untuk berbagai aktivitas di danau. ",
      specs: [
        { icon: "fas fa-ruler-combined", text: "Dimensi: 3-5 Meter" },
        {
          icon: "fas fa-layer-group",
          text: "Material: Fiberglass berkualitas",
        },
        { icon: "fas fa-palette", text: "Warna: Custom" },
        { icon: "fas fa-users", text: "Kapasitas: 1-2 orang" },
        { icon: "fas fa-weight", text: "Berat: 100-400 kg" },
        { icon: "fas fa-anchor", text: "Garansi: 6 Bulan" },
      ],
      whatsapp:
        "https://wa.me/6281358844797?text=Halo,%20saya%20tertarik%20dengan%20produk%20Perahu%20Sampan%20Danau%20Toba.",
    },

    42: {
      title: "Rescue Boat 4.5 MeterS",
      image: "Assets/Img/4.jpg",
      description:
        "Perahu penyelamat yang dirancang untuk operasi pencarian dan pertolongan di perairan. Terbuat dari fiberglass reinforced plastic (FRP).",
      specs: [
        { icon: "fas fa-ruler-combined", text: "Dimensi: 4.5 Meter" },
        {
          icon: "fas fa-layer-group",
          text: "Material: Fiberglass berkualitas",
        },
        { icon: "fas fa-palette", text: "Warna: Orange, Custom" },
        { icon: "fas fa-users", text: "Kapasitas: 4-6 orang" },
        { icon: "fas fa-weight", text: "Berat: 250-600 kg" },
        { icon: "fas fa-anchor", text: "Garansi: 6 Bulan" },
      ],
      whatsapp:
        "https://wa.me/6281358844797?text=Halo,%20saya%20tertarik%20dengan%20produk%20Rescue%20Boat%204.5%20Meter.",
    },

    43: {
      title: "Kapal Penisi Wisata",
      image: "Assets/Img/kapal-penisi.jpeg",
      description:
        "Kapal tradisional jenis Pinisi yang menggabungkan keindahan desain klasik dengan kekuatan dan kemudahan perawatan material modern.",
      specs: [
        { icon: "fas fa-ruler-combined", text: "Dimensi: Bervariasi" },
        {
          icon: "fas fa-layer-group",
          text: "Material: Fiberglass berkualitas",
        },
        { icon: "fas fa-palette", text: "Warna: Custom" },
        { icon: "fas fa-users", text: "Kapasitas: 4-8 orang" },
        { icon: "fas fa-weight", text: "Berat: Bervariasi" },
        { icon: "fas fa-anchor", text: "Garansi: 6 Bulan" },
      ],
      whatsapp:
        "https://wa.me/6281358844797?text=Halo,%20saya%20tertarik%20dengan%20produk%20Kapal%20Penisi%20Wisata.",
    },

    44: {
      title: "Mini Jetski Fiberglass",
      image: "Assets/Img/mini-jetski.jpeg",
      description:
        "Perahu motor bertenaga mesin yang didesain untuk rekreasi air. Umumnya, jetski ini cocok untuk satu atau dua orang pengendara.",
      specs: [
        { icon: "fas fa-ruler-combined", text: "Dimensi: 2-3 Meter" },
        {
          icon: "fas fa-layer-group",
          text: "Material: Fiberglass berkualitas",
        },
        { icon: "fas fa-palette", text: "Warna: Custom" },
        { icon: "fas fa-users", text: "Kapasitas: 2 orang" },
        { icon: "fas fa-weight", text: "Berat: 200-500 kg" },
        { icon: "fas fa-anchor", text: "Garansi: 6 Bulan" },
      ],
      whatsapp:
        "https://wa.me/6281358844797?text=Halo,%20saya%20tertarik%20dengan%20produk%20Mini%20Jetski%20Fiberglass.",
    },
  };

  // Inisialisasi modal Bootstrap
  const productModal = new bootstrap.Modal(
    document.getElementById("productModal")
  );
  // Fungsi untuk menampilkan modal
  function showProductModal(productId) {
    const product = products[productId];
    if (!product) return;
    document.getElementById("modalTitle").textContent = product.title;
    document.getElementById("modalImage").src = product.image;
    document.getElementById("modalImage").alt =
      product.title + " - tampilan detail";
    document.getElementById("modalDescription").textContent =
      product.description;

    const specsContainer = document.getElementById("modalSpecs");
    specsContainer.innerHTML = "";

    product.specs.forEach((spec) => {
      const specItem = document.createElement("div");
      specItem.className = "spec-item";
      specItem.innerHTML = `
        <i class="${spec.icon} spec-icon"></i>
        <span>${spec.text}</span>
      `;
      specsContainer.appendChild(specItem);
    });

    // Set the WhatsApp link
    document.getElementById("whatsappLink").href = product.whatsapp;
    productModal.show();
  }

  // Event listener untuk tombol detail
  document.querySelectorAll(".detail-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const productId = this.getAttribute("data-product");
      showProductModal(productId);
    });
  });

  // Close the modal
  productModal.hide();
});

// Handle page load with hash
window.addEventListener("load", function () {
  const hash = window.location.hash.substring(1);
  if (hash) {
    showSection(hash);
  }
});

// Pagination
let currentPage = 1;
const totalPages = 3;

function showPage(page) {
  if (page < 1 || page > totalPages) return;

  // Sembunyikan semua halaman
  for (let i = 1; i <= totalPages; i++) {
    document.getElementById(`page-${i}`).style.display = "none";
  }

  // Tampilkan halaman yang diinginkan
  document.getElementById(`page-${page}`).style.display = "block";
  currentPage = page;
  updatePaginationUI();
}

function updatePaginationUI() {
  document.querySelectorAll(".pagination .page-item").forEach((item, index) => {
    const link = item.querySelector("a");
    if (!link) return;

    const pageNum = parseInt(link.textContent);
    if (pageNum === currentPage) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }

    // Nonaktifkan Previous dan Next jika di batas
    if (link.textContent === "Previous") {
      item.classList.toggle("disabled", currentPage === 1);
    }
    if (link.textContent === "Next") {
      item.classList.toggle("disabled", currentPage === totalPages);
    }
  });
}

// Inisialisasi halaman pertama
showPage(1);
