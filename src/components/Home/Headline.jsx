import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function Headline() {
  const images = [
    {
      id: "102",
      author: "Ben Moore",
      title:
        "Pedagang Buket hingga Fotografer Ramaikan Wisuda Gelombang IV Unsika",
      date: "2024-07-13",
      category: "Berita",
      caption:
        "suscipit tellus mauris a diam maecenas sed enim ut sem viverra aliquet eget sit amet tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt dui ut ornare lectus sit amet est placerat in egestas erat imperdiet",
      width: 1440,
      height: 800,
      url: "https://unsplash.com/photos/pJILiyPdrXI",
      download_url: "https://picsum.photos/id/102/1440/800",
    },
    {
      id: "103",
      author: "Ilham Rahmansyah",
      title:
        "USI Faperta Gelar Atomic Research dan Semnas: Dukung Publikasi Jurnal Ilmiah",
      date: "2024-07-13",
      category: "Berita",
      caption:
        "cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis",
      width: 1440,
      height: 800,
      url: "https://unsplash.com/photos/DwTZwZYi9Ww",
      download_url: "https://picsum.photos/id/103/1440/800",
    },
    {
      id: "104",
      author: "Dyaa Eldin",
      title:
        "Overthinking Tentang Masa Depan? yuk Siapkan Soft Skill Ini sebelum Masuk ke Dunia Kerja!",
      date: "2024-07-13",
      category: "Gaya Mahasiswa",
      caption:
        "ut diam quam nulla porttitor massa id neque aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel risus commodo viverra maecenas accumsan",
      width: 1440,
      height: 800,
      url: "https://unsplash.com/photos/2fl-ocJ5MOA",
      download_url: "https://picsum.photos/id/104/1440/800",
    },
  ];

  function truncateText(text, maxLength) {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  }

  return (
    <div className="App">
      <Carousel
        className="w-full"
        autoPlay
        infiniteLoop
        centerMode
        interval={3000}
        thumbWidth={300}
      >
        {images.map((image) => (
          <div key={image.id} className="relative">
            <div className="text-start absolute bottom-0 left-0 w-full bg-black bg-opacity-20 hover:bg-opacity-50 text-white p-4">
              <p>
                {image.category} • {image.date}
              </p>
              <h2 className="text-lg font-bold">
                {truncateText(image.title, 75)}
              </h2>
              <p className="">{truncateText(image.caption, 180)}</p>
              <a
                href={image.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold"
              >
                Baca Selengkapnya...
              </a>
            </div>
            <img
              src={image.download_url}
              alt={image.author}
              className="rounded-lg"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
