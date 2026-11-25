export type ProjectStatus = 'live' | 'in-progress' | 'archived' | 'concept';

// Real, active destinations. Swap the `live`/`demo` URLs below for per-project
// deployment URLs once each project is published.
const GITHUB_PROFILE = 'https://github.com/lumakara';
const PORTFOLIO_REPO = 'https://github.com/Lumakara/Porto-Fakhul';

export interface ProjectLink {
  label: string;
  href: string;
  type: 'live' | 'repo' | 'case-study' | 'demo';
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'creative' | 'systems' | 'lab';
  categoryLabel: string;
  tagline: string;
  description: string;
  tech: string[];
  challenge: string;
  solution: string;
  /** Bullet-point highlights of what the project delivers. */
  features: string[];
  /** Quantified outcomes shown as stat chips. */
  metrics: ProjectMetric[];
  /** External / internal links rendered as action buttons. */
  links: ProjectLink[];
  status: ProjectStatus;
  /** Year the project was built / shipped. */
  year: string;
  /** Role held on the project. */
  role: string;
  /** Short list of "screenshot" captions used to label preview frames. */
  screens: string[];
  /**
   * Optional dedicated cover image for the project card + detail banner.
   * Drop a file at /public/projects/{id}/cover.webp and set this to
   * "/projects/{id}/cover.webp". When omitted it falls back to the first
   * gallery screenshot, so cards work immediately with the screens you upload.
   */
  cover?: string;
  color: string;
  gradient: string;
  /** Accent color (hex) used for badges, glows and tilt highlights. */
  accent: string;
  cyberId: string;
}

export const projectsData: Project[] = [
  {
    id: 'bot-whatsapp-multifungsi',
    title: 'Sejarah Napoleon Bonaparte',
    category: 'systems',
    categoryLabel: 'Leadership/courage',
    tagline:
      'Seorang pemimpin sejati bukan hanya dikenang karena kemenangan yang diraihnya, melainkan juga karena bagaimana ia menghadapi kekalahan.',
    description:
      ' 1. Masa Kecil dan Keluarga (1769–1785) Napoleon Bonaparte lahir pada 15 Agustus 1769 di Ajaccio, Pulau Corsica, yang saat itu berada di bawah kekuasaan Prancis. Ia merupakan anak kedua dari pasangan Carlo Buonaparte dan Maria Letizia Ramolino. Keluarganya berasal dari kalangan bangsawan kecil Italia yang memiliki kehidupan cukup sederhana. Sejak kecil, Napoleon dikenal sebagai anak yang cerdas, memiliki rasa ingin tahu tinggi, dan menyukai pelajaran sejarah serta matematika. Ketika berusia sekitar sembilan tahun, ia meninggalkan kampung halamannya untuk melanjutkan pendidikan di Prancis. Ia bersekolah di Brienne, sebuah sekolah militer, kemudian melanjutkan pendidikan di akademi militer Paris. Meskipun sering mengalami kesulitan bergaul karena aksen Corsica yang berbeda, ia tetap tekun belajar dan memiliki cita-cita menjadi seorang perwira militer. 2. Awal Karier Militer (1785–1796) Setelah menyelesaikan pendidikan militernya pada tahun 1785, Napoleon memulai karier sebagai perwira artileri dalam Angkatan Darat Prancis. Ketika Revolusi Prancis terjadi pada tahun 1789, keadaan politik dan pemerintahan Prancis mengalami perubahan besar. Napoleon memanfaatkan situasi tersebut untuk mengembangkan karier militernya. Namanya mulai dikenal setelah berhasil membantu merebut kembali Kota Toulon dari pasukan pemberontak dan sekutunya pada tahun 1793. Keberhasilan tersebut membuatnya mendapatkan promosi menjadi jenderal. Pada tahun 1796, ia dipercaya memimpin pasukan Prancis dalam kampanye militer di Italia. Melalui berbagai kemenangan, Napoleon semakin dikenal sebagai komandan yang cerdas, berani, dan memiliki kemampuan strategi perang yang luar biasa. 3. Menjadi Pemimpin Prancis (1799–1804) Pada tahun 1799, Napoleon kembali ke Prancis setelah melakukan ekspedisi militer ke Mesir. Ia kemudian melakukan kudeta pada 9 November 1799 yang dikenal sebagai Kudeta 18 Brumaire. Peristiwa tersebut berhasil menggulingkan pemerintahan Direktori dan mengantarkannya menjadi Konsul Pertama Prancis. Sebagai pemimpin, Napoleon melakukan berbagai perubahan dalam pemerintahan, ekonomi, pendidikan, dan hukum. Salah satu peninggalannya yang terkenal adalah Napoleonic Code, yaitu kumpulan hukum yang menjadi dasar penting bagi perkembangan sistem hukum di berbagai negara. Pada tanggal 2 Desember 1804, Napoleon secara resmi menobatkan dirinya sebagai Kaisar Prancis dengan gelar Napoleon I. 4. Masa Kejayaan sebagai Kaisar (1804–1812) Setelah menjadi kaisar, Napoleon mulai memperluas kekuasaan Prancis ke berbagai wilayah Eropa. Ia memimpin banyak peperangan dan berhasil mengalahkan sejumlah negara besar, termasuk Austria, Prusia, dan Rusia dalam beberapa pertempuran. Salah satu kemenangan terbesarnya adalah Pertempuran Austerlitz pada tahun 1805. Pada masa kejayaannya, wilayah kekuasaan dan pengaruh Prancis meluas ke sebagian besar daratan Eropa. Napoleon juga memperkuat sistem pemerintahan, membangun infrastruktur, memperbaiki administrasi negara, dan memperkenalkan berbagai kebijakan baru. Dalam kehidupan pribadinya, ia menikahi Joséphine de Beauharnais pada tahun 1796. Namun, pernikahan tersebut berakhir dengan perceraian pada tahun 1810 karena Napoleon menginginkan pewaris takhta. Setelah itu, ia menikahi Marie Louise dari Austria dan memiliki seorang putra bernama Napoleon II pada tahun 1811. 5. Awal Kejatuhan Napoleon (1812–1814) Kejatuhan Napoleon mulai terlihat ketika ia memutuskan untuk menyerang Rusia pada tahun 1812. Awalnya, pasukan Prancis berhasil memasuki wilayah Rusia dan bahkan menduduki Moskow. Namun, strategi Rusia yang menggunakan taktik bumi hangus, ditambah cuaca musim dingin yang sangat ekstrem, membuat pasukan Napoleon mengalami kekurangan makanan, penyakit, dan kehilangan banyak tentara. Akhirnya, Napoleon terpaksa menarik mundur pasukannya dengan kerugian yang sangat besar. Kekalahan tersebut melemahkan kekuatan militernya. Negara-negara Eropa seperti Inggris, Rusia, Prusia, dan Austria kemudian membentuk koalisi untuk melawan Prancis. Pada tahun 1813, Napoleon mengalami kekalahan besar dalam Pertempuran Leipzig. Pada tahun 1814, pasukan koalisi berhasil memasuki Paris sehingga Napoleon terpaksa turun takhta. Ia kemudian diasingkan ke Pulau Elba, sebuah pulau kecil di dekat Italia. 6. Kembalinya Napoleon dan Pertempuran Waterloo (1815) Meskipun telah diasingkan, Napoleon belum menyerah. Pada Februari 1815, ia berhasil melarikan diri dari Pulau Elba dan kembali ke Prancis. Kedatangannya disambut oleh sebagian besar pasukan yang kemudian kembali mendukungnya. Ia berhasil mengambil alih pemerintahan dan kembali menjadi pemimpin Prancis. Periode kekuasaannya yang kedua ini dikenal dengan sebutan Hundred Days atau Seratus Hari. Namun, kekuasaannya tidak berlangsung lama. Pada tanggal 18 Juni 1815, Napoleon menghadapi pasukan koalisi yang dipimpin oleh Inggris dan Prusia dalam Pertempuran Waterloo di wilayah Belgia. Dalam pertempuran tersebut, Napoleon mengalami kekalahan telak. Kekalahan ini mengakhiri ambisinya untuk kembali menguasai Eropa. Ia kemudian kembali turun takhta dan menyerahkan diri kepada Inggris. 7. Masa Pengasingan dan Akhir Hayat (1815–1821) Setelah kekalahannya di Waterloo, Napoleon diasingkan oleh Inggris ke Pulau Saint Helena, sebuah pulau terpencil di Samudra Atlantik bagian selatan. Di sana, ia hidup dalam pengawasan ketat pemerintah Inggris. Kehidupannya sangat berbeda dibandingkan ketika masih menjadi kaisar yang memiliki kekuasaan besar. Selama berada di pengasingan, Napoleon menghabiskan waktunya dengan membaca, berdiskusi, mengenang masa lalunya, dan menceritakan pengalaman peperangannya. Kondisi kesehatannya semakin memburuk hingga akhirnya ia meninggal dunia pada 5 Mei 1821, dalam usia 51 tahun. Napoleon dimakamkan di Pulau Saint Helena sebelum jasadnya dipindahkan ke Prancis pada tahun 1840 dan dimakamkan di Les Invalides, Paris. 8. Warisan dan Pengaruh Napoleon Bonaparte Meskipun Napoleon telah meninggal dunia, pengaruhnya masih terasa hingga sekarang. Ia meninggalkan banyak perubahan dalam bidang hukum, pemerintahan, pendidikan, dan militer. Napoleonic Code menjadi salah satu warisan terbesarnya karena memengaruhi perkembangan sistem hukum di berbagai negara. Napoleon juga dikenang sebagai salah satu ahli strategi militer paling berpengaruh dalam sejarah. Namun, sejarahnya tidak hanya berisi kemenangan, tetapi juga peperangan besar yang menyebabkan banyak korban jiwa dan penderitaan. Kehidupannya menjadi gambaran tentang ambisi, kekuasaan, keberhasilan, serta kejatuhan seorang pemimpin besar. ',
    challenge:
      'Saat masih kecil, Napoleon harus meninggalkan kampung halamannya di Pulau Corsica untuk menempuh pendidikan di Prancis. Ia mengalami kesulitan beradaptasi karena perbedaan bahasa, budaya, dan lingkungan sosial.',
    solution:
      'Napoleon berusaha menyesuaikan diri dengan lingkungan barunya, tekun belajar, serta mengembangkan kemampuan dalam bidang matematika dan strategi militer..',
    tech: ['Kepemimpinan', 'Strategi Militer', 'Sejarah Prancis'],
    features: [
      'Pendidikan militer di Brienne dan akademi militer Paris',
      'Kenaikan pangkat setelah merebut kembali Toulon (1793)',
      'Kudeta 18 Brumaire dan menjadi Konsul Prancis',
    ],
    metrics: [
      { label: 'Years', value: '51' },
      { label: 'HomeLand', value: 'Corsica' },
      { label: 'Conquer', value: '8' },
    ],
    links: [
      { label: 'Repository', href: GITHUB_PROFILE, type: 'repo' },
      { label: 'Demo', href: PORTFOLIO_REPO, type: 'demo' },
    ],
    status: 'live',
    year: '1769',
    role: 'LeaderShip',
    screens: [
      '/projects/bot-whatsapp-multifungsi/screen-1.webp',
      '/projects/bot-whatsapp-multifungsi/screen-2.webp',
      '/projects/bot-whatsapp-multifungsi/screen-3.webp',
    ],
    color: 'from-[#A3B19B] to-[#C68A7C]',
    gradient: 'linear-gradient(135deg, #E5E2DA 0%, #A3B19B 100%)',
    accent: '#C68A7C',
    cyberId: 'BOT_WA_MULTI',
  },
];

const STATUS_META: Record<ProjectStatus, { label: string; color: string }> = {
  live: { label: 'Live', color: '#A3B19B' },
  'in-progress': { label: 'In Progress', color: '#D4AF37' },
  archived: { label: 'Archived', color: '#4A4A4A' },
  concept: { label: 'Concept', color: '#C68A7C' },
};

export function getStatusMeta(status: ProjectStatus) {
  return STATUS_META[status];
}

/**
 * Resolve the image used for a project's card thumbnail and detail banner.
 * Prefers an explicit `cover`, otherwise reuses the first gallery screenshot.
 */
export function getProjectCover(project: Project): string {
  return project.cover || project.screens[0] || '';
}
