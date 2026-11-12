// ShiroTenma V3 Creative Commission & Services Data
import { img } from './projects'

export const packages = [
  {
    id: 'custom',
    name: 'Custom Edits',
    badge: 'HIGHLIGHT / MV / CLIPS',
    price: 'Mulai dari Rp. 30.000',
    image: img('works/editing-amv.webp'),
    points: [
      'Editing satuan untuk kebutuhan pribadi maupun branding.',
      'Cocok buat sekali pakai / event kecil.',
      'Revisi ringan disesuaikan dengan kebutuhan.',
    ],
  },
  {
    id: 'graphics',
    name: 'Graphics Design',
    badge: 'POSTER / BANNER / BRANDING',
    price: 'Mulai dari Rp. 40.000',
    image: img('works/graphics-more-samples.webp'),
    points: [
      'Semua Desain untuk kebutuhan Sosial Media maupun Promosi.',
      'Style desain yang menarik dan eye-cathing, sesuai dengan permintaan klien.',
      'Kegunaan desain bisa hanya digital maupun Fisik (tetapi saya tidak bisa buat fisik langsung).',
    ],
  },
  {
    id: 'video',
    name: 'Photography',
    badge: 'POTRAIT / EVENT / COSPLAY',
    price: 'Mulai dari Rp. 60.000',
    image: img('works/photo-graduation.webp'),
    points: [
      'Fotografi dengan Hasil terbaik.',
      'Hasil foto diedit dengan color grading dan editing menyesuaikan pilihan.',
      'Foto bisa langsung dipakai ke manapun kamu mau!',
    ],
  },
]

export const packageOptions = {
  custom: [
    {
      id: 'c-1',
      title: 'Custom Edit',
      image: img('works/editing-amv.webp'),
      points: [
        'Hasil Custom Edit sesuai dengan keinginan klien!',
        'Resolusi file Full HD/1080p dengan Rasio menyesuaikan klien, dan Durasi maksimal 1 menit',
        'Effects, transisi dan teks sesuai permintaan klien',
      ],
      price: 'Mulai dari Rp. 40.000',
      rules: [
        'Berikan brief, referensi visual, footage/media, dan audio sebelum deal.',
        'DP minimal 20% sesudah deal; Pelunasan dilakukan saat produksi telah selesai.',
        'Revisi fokus pada effects dan isi konten (maks 5x) di versi preview.',
      ],
    },
    {
      id: 'c-2',
      title: 'Motion Graphics or Typography',
      image: img('works/editing-highlight.webp'),
      points: [
        'Hasil video yang sesuai dengan keinginan klien!',
        'Resolusi file Full HD/1080p dengan Rasio menyesuaikan klien',
        'Durasi video sesuai kebutuhan klien (maks 5 menit)',
      ],
      price: '(harga diskusi lebih lanjut)',
      rules: [
        'Sertakan contoh referensi style, audio, dan isi konten yang ingin ditonjolkan.',
        'DP 25% sebelum produksi; revisi animasi maks 3x pada preview, revisi ringan hingga 5x (hanya teks atau isi konten ringan).',
        'Asset (font/audio/gambar) yang diberikan klien harus bebas lisensi.',
      ],
    },
  ],
  graphics: [
    {
      id: 'g-1',
      title: 'osu! or Social Media Banner',
      image: img('works/graphics-youtube-banner.webp'),
      points: [
        'Banner set untuk osu! atau sosial media (Facebook / X / YouTube).',
        'Rasio dan ukuran menyesuaikan platform yang kamu pakai.',
        'Siap pakai dalam format PNG dengan warna sesuai moodboard.',
      ],
      price: 'Mulai dari Rp. 40.000',
      rules: [
        'Berikan ukuran dan platform (osu!/YouTube/Twitter, dll) + referensi style.',
        'DP 50% sebelum produksi; file akhir dikirim setelah pelunasan.',
        'Revisi ringan layout/warna maks 2x; perubahan besar dikenakan biaya tambahan.',
      ],
    },
    {
      id: 'g-2',
      title: 'osu!banner and Profile Picture set',
      image: img('works/osu-banner-profile.webp'),
      points: [
        'Header + profile panel untuk osu! lengkap dengan accent visual.',
        'Konsisten secara warna, font, dan komposisi antar set.',
        'File akhir siap upload, termasuk versi web dan mobile.',
      ],
      price: 'Mulai dari Rp. 80.000',
      rules: [
        'Sertakan karakter/referensi visual + kebutuhan rasio web/mobile.',
        'DP 50% sebelum produksi; revisi kecil maks 2x untuk matching set.',
        'File final PNG; source file opsional mengikuti kesepakatan.',
      ],
    },
    {
      id: 'g-3',
      title: 'osu!profile lite set',
      image: img('works/osu-lite.webp'),
      points: [
        'Lite set berisi Banner, Header, dan profile Custom untuk osu!profile kamu!',
        'Elemen minimal tapi tetap matching dengan karakter pilihan kamu.',
        'Pilihan warna bisa menyesuaikan referensi yang kamu berikan.',
      ],
      price: 'Mulai dari Rp. 125.000',
      rules: [
        'Berikan referensi warna/karakter; maksimal 1 moodboard revisi.',
        'DP 50% sebelum produksi; revisi minor layout/warna maks 2x.',
        'Output PNG siap upload; source file opsional.',
      ],
    },
    {
      id: 'g-4',
      title: 'General Design Small Size',
      image: img('works/graphics-small-media.webp'),
      points: [
        'Desain promo kecil: ID Card, banner, Flyer, dll.',
        'Ukuran menyesuaikan dengan permintaan klien.',
        'File siap cetak (CMYK) dan file Digital (RGB) untuk kebutuhan Promosi digital.',
        'Revisi ringan supaya cepat siap publish.',
      ],
      price: 'Mulai dari Rp. 40.000',
      rules: [
        'Cantumkan ukuran akhir (mm/cm) dan konten teks/logo lengkap.',
        'DP 50% sebelum produksi; revisi teks/warna ringan maks 2x.',
        'File cetak CMYK + digital RGB disertakan; cek ulang ejaan sebelum approve.',
      ],
    },
    {
      id: 'g-5',
      title: 'General Design Large Size',
      image: img('works/graphics-large-media.webp'),
      points: [
        'Desain ukuran besar: Mousepad, roll-up / banner panjang, Backdrop, Venue 2D Desain, dll.',
        'File siap cetak (CMYK) dengan PPI tinggi agar HD.',
        'Layout fokus keterbacaan dan hierarki teks yang kuat serta hiearki desain yang apik.',
      ],
      price: 'Mulai dari Rp. 70.000',
      rules: [
        'Berikan dimensi final + jarak aman untuk cetak, dan konten teks fix.',
        'DP 50% sebelum produksi; revisi minor tata letak maks 2x.',
        'File final CMYK hi-res (print) + RGB (preview); cek ejaan sebelum approve.',
      ],
    },
    {
      id: 'g-6',
      title: 'Digital Media Set',
      image: img('works/graphics-digital-media.webp'),
      points: [
        'Satu paket visual untuk beberapa platform sekaligus.',
        'Template warna/font diseragamkan supaya brand konsisten.',
        'Termasuk versi square, vertical, dan horizontal jika dibutuhkan.',
      ],
      price: 'Mulai dari Rp. 40.000',
      rules: [
        'Sertakan daftar platform + ukuran (IG, X, TikTok, dsb) dan guideline brand jika ada.',
        'DP 50% sebelum produksi; revisi minor warna/teks maks 2x per set.',
        'Template seragam; request di luar scope dihitung add-on.',
      ],
    },
  ],
  video: [
    {
      id: 'v-1',
      title: 'Cosplay Photoshoot Session',
      image: img('works/cosplay-potrait-8.webp'),
      points: [
        'Sesi foto cosplay dengan durasi maksimal 1 jam dengan foto 15-30.',
        'Semua hasil foto di edit ringan (tone, exposure, blemish) serta color grading lewat Lightroom.',
        'Full Editing untuk beberapa foto terpilih.',
      ],
      price: 'Mulai dari Rp. 60.000 (Kontak via KOGASHAPRPOJECT.ID)',
      rules: [
        'Jadwalkan minimal H-3, sertakan lokasi dan izin venue.',
        'DP 50% untuk booking slot; sisa pelunasan di hari H sebelum serah foto.',
        'Pilih foto yang akan full edit setelah sesi; tambahan edit di luar paket dikenakan biaya.',
      ],
    },
    {
      id: 'v-2',
      title: 'Graduation Photoshoot Session',
      image: img('works/photos-graduation-2.webp'),
      points: [
        'Foto wisuda professional.',
        'Semua Hasil di edit ringan tapi professional.',
        'untuk Foto wisuda akan di manage oleh Studio Raise Productions.',
      ],
      price: '(Harga mengikuti Studio Raise Production)',
      rules: [
        'Atur jadwal dan lokasi wisuda lebih awal; sertakan daftar keluarga/teman yang difoto.',
        'DP 50% untuk booking; pelunasan sebelum final hasil dikirim.',
        'Hasil edit ringan; permintaan edit tambahan dapat dikenakan biaya.',
      ],
    },
    {
      id: 'v-3',
      title: 'Events Photo + Video Package',
      image: img('works/photo-events-rewarding.webp'),
      points: [
        '- Foto dan Video dokumentasi acara hingga berakhir.',
        '- Semua hasil foto di edit ringan serta color grading pada video.',
        '- Video highlight berdurasi 3-5 menit.',
      ],
      price: '(Harga mengikuti Studio Raise Production)',
      rules: [
        'Berikan rundown, akses area, dan PIC acara sebelum hari H.',
        'DP 50% untuk booking; pelunasan sebelum serah video highlight.',
        'Revisi highlight maksimal 2x (durasi 3-5 menit); permintaan extra shoot dikenakan biaya.',
      ],
    },
  ],
}

export const termCategories = [
  { id: 'graphics', label: 'Graphics Design' },
  { id: 'custom', label: 'Video Edit' },
  { id: 'video', label: 'Photography' },
]

export const termsContent = {
  graphics: {
    tos: [
      'Pembayaran DP minimal 50% sebelum produksi.',
      'Revisi ringan maksimal 2x untuk tiap proyek.',
      'File akhir dikirim dalam format PNG/JPG + source (opsional).',
    ],
    tou: [
      'Tidak untuk AI training atau resale tanpa izin.',
      'Penggunaan komersial harus sesuai kesepakatan lisensi.',
      'Wajib mencantumkan kredit jika diminta.',
    ],
  },
  custom: {
    tos: [
      'Pembayaran DP 50% dan pelunasan sebelum final render 1080p.',
      'Durasi video mengikuti paket; revisi timing maksimum 2x.',
      'Referensi visual dan musik disediakan klien.',
    ],
    tou: [
      'Audio/asset yang diberikan klien harus bebas lisensi.',
      'Dilarang reupload versi preview.',
      'Penggunaan ulang proyek harus izin terlebih dahulu.',
    ],
  },
  video: {
    tos: [
      'Jadwal sesi foto/video disepakati di awal, include 1x reschedule.',
      'Raw file & edited file dikirim via drive dalam 5-7 hari kerja.',
      'Biaya transport/venue ditanggung klien.',
    ],
    tou: [
      'Hasil dapat dipakai di media sosial/portofolio fotografer.',
      'Dilarang memodifikasi color grading secara ekstrem tanpa izin.',
      'Komersial usage di luar kesepakatan dikenakan biaya tambahan.',
    ],
  },
}

export const addOns = [
  {
    id: 'ao-1',
    category: 'graphics',
    title: 'Extra revision (design)',
    price: 'Rp 20.000 / round',
  },
  { id: 'ao-2', category: 'graphics', title: 'Source file (PSD/AI)', price: 'Rp 50.000' },
  { id: 'ao-3', category: 'custom', title: 'Extra revision (video)', price: 'Rp 30.000 / round' },
  { id: 'ao-4', category: 'custom', title: 'Extra duration (per 10s)', price: 'Rp 25.000' },
  { id: 'ao-5', category: 'video', title: 'Extra edited photo', price: 'Rp 10.000 / foto' },
  { id: 'ao-6', category: 'video', title: 'Raw file delivery drive slot', price: 'Rp 15.000' },
]

