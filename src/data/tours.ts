import { Tour } from "@/types/tour";

const TOURS: Tour[] = [
  {
    id: 1,
    video: "/tours/el jam amphitheatre.mp4",
    title: "El Jam amphitheatre",
    briefIntro:
      "Step back in time and experience the grandeur of the Roman Empire at the El Jem Amphitheatre, also known as the African Colosseum.",
    description: [
      "Built around 238 AD in the city of Thysdrus (present-day El Djem, Tunisia), the El Jem Amphitheatre is the second-largest amphitheatre ever constructed by the Romans, surpassed only by the Colosseum in Rome itself",

      "Imagine the roar of the crowd as gladiatorial battles, chariot races, and wild animal hunts unfolded within its massive oval arena.  This colossal structure boasts three tiers of seating, capable of accommodating a staggering 35,000 spectators",

      "Remarkably well-preserved, the El Jem Amphitheatre is a UNESCO World Heritage Site.  It's a captivating glimpse into the heart of Roman entertainment and a must-see for any visitor to Tunisia.",
    ],
    callToAction:
      "Learn more about the history and architecture of this incredible Roman marvel!",
    vr: true,
  },
  {
    id: 4,
    video: "/tours/mosque djerba.mp4",
    title: "mosque djerba",
    briefIntro:
      "  Immerse yourself in the rich tapestry of Islamic culture at the Djerba's captivating mosques. These architectural gems offer a glimpse into Djerba's vibrant past and enduring faith.",
    description: [
      " Dating back to the 14th century, this historic mosque is renowned for its simple, austere beauty.  Step inside the serene prayer hall and admire the traditional architecture, a testament to Djerba's early Islamic heritage.",
    ],
    callToAction:
      "Embark on a cultural adventure and discover the captivating mosque of Djerba!",
  },
  {
    id: 2,
    video: "/tours/mosque el zaitouna.mp4",
    title: "Mosqué el Zaitouna",
    description: [
      "Founded at the end of the 7th or early 8th century, Ez-Zitouna Mosque boasts a captivating blend of architectural styles reflecting its long and fascinating history.  Wander through its expansive courtyards, marvel at the intricate mosaics and calligraphy, and immerse yourself in the serene atmosphere that has inspired generations of scholars and worshippers.",
      "Ez-Zitouna Mosque housed a renowned university, attracting scholars from across the Islamic world. Its legacy continues to inspire Tunisia's educational landscape",
    ],
    briefIntro:
      "Journey to the heart of Tunis and discover the Ez-Zitouna Mosque, a majestic landmark that has witnessed centuries of Tunisia's rich history.",
    callToAction:
      "Step back in time and explore the architectural wonders of Ez-Zitouna Mosque!",
    vr: true,
  },
  {
    id: 3,
    video: "/tours/musée archéologique de tunisie.mp4",
    title: "musée archéologique de Tunis",
    briefIntro:
      "Embark on a captivating journey through time at the Musée Archéologique de Tunis, a treasure trove of Tunisia's rich and multifaceted history.",
    description: [
      "Step inside the museum's grand halls and prepare to be dazzled by an array of archaeological wonders. Explore magnificent mosaics depicting scenes of everyday life and mythology.  Marvel at imposing statues that once adorned ancient temples and public spaces.  Unearth the stories whispered by exquisite jewelry, pottery, and everyday objects used by civilizations of the past.",
      "Explore breathtaking mosaics, sculptures, and everyday items that offer a glimpse into the vibrant cultures of Carthage and the Roman Empire in North Africa.",
      "Immerse yourself in the artistry and craftsmanship of Tunisia's Islamic heritage. Admire intricate Qur'anic calligraphy, ceramics, and decorative objects that showcase the region's artistic legacy.",
    ],
    callToAction:
      "Plan your visit to the Musée Archéologique de Tunis and embark on a journey through time!",
    vr: true,
  },
  {
    id: 5,
    video: "/tours/sidi bousaid.mp4",
    title: "sidi Bousaid",
    briefIntro:
      "With her rich history and overlooking the sparkling Mediterranean Sea, Sidi Bou Said is a Tunisian village that seems to have stepped out of a fairytale.",
    description: [
      "Sidi Bou Said's beauty lies in its simplicity.  Wander through its labyrinthine alleyways adorned with vibrant blue doors and intricate wrought-iron balconies.  Admire the whitewashed houses adorned with colorful tiles and intricate floral motifs, reflecting a unique blend of Arabic and European influences.",
      " Sidi Bou Said has long been a magnet for artists and writers, drawn to its tranquil beauty and inspiring setting.  Explore charming art galleries showcasing local talent, and lose yourself in the creative spirit that permeates the town.",
      " Delve into the town's rich past at the Dar El Annabi Museum, a traditional 18th-century house showcasing Tunisian architecture and artifacts.",
      "Ascend to the lighthouse perched on the cliff's edge and be rewarded with breathtaking panoramic views of the Mediterranean Sea, the bustling city of Tunis in the distance, and the charming rooftops of Sidi Bou Said itself.",
    ],
    callToAction:
      "Explore the artistic soul and rich history of this captivating Tunisian village!",
  },
  {
    id: 6,
    video: "/tours/tataouine berber village.mp4",
    title: "tataouine berber village",
    briefIntro:
      "Venture beyond the beaten path and discover the captivating world of Tataouine's Berber villages.",
    description: [
      "Time seems to stand still in Tataouine's Berber villages.  Houses carved directly into the mountainside, known as ksars, create a mesmerizing landscape. Explore these ancient dwellings, some dating back thousands of years, and gain a window into Berber ingenuity and adaptation to the harsh desert environment.",
      " Discover the vibrant Berber culture, characterized by its rich traditions, music, and folklore.  Interact with the welcoming locals, witness the art of carpet weaving, and savor authentic Berber cuisine.",
    ],
    callToAction:
      "Immerse yourself in Berber culture, explore the unique ksar dwellings, and experience unparalleled hospitality!",
  },
];

export function getTourById(id: number): Tour {
  return TOURS.filter((t) => t.id === id)[0];
}
export const getTours = (): Tour[] => TOURS;
