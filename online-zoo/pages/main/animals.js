import pics from '../../assets/images/pictures_for_slider';

const animals = [
  {
    id: '01',
    alt: 'panda',
    srcPic: pics.pandas,
    fotoText: 'GIANT PANDAS<br>Native to Southwest China<br><br>Giant pandas are bears and are members of the Order Carnivora. They are unique because, although they evolved among the mostly carnivorous bear species of the world, their diet is vegetarian. Despite the availability of other plants, they feed almost exclusively on bamboo.',
    animalName: 'GIANT PANDAS',
    nativeToText: 'Native to Southwest China',
    feedSrc: 'icons/banana-bamboo_icon.svg',
    altFeed: 'banana'
  },
  {
    id: '02',
    alt: 'eagles',
    srcPic: pics.eagles,
    fotoText: 'EAGLES<br>Native to South America<br><br>Eagles choose a mate for life. They build large and strong nests, using branches. They lay two eggseach. While the female incubates them, the male takes care of her feeding. The hatched offspring can be seen immediately, and are covered with down.',
    animalName: 'EAGLES',
    nativeToText: 'Native to South America',
    feedSrc: 'icons/meet-fish_icon.svg',
    altFeed: 'meat'
  },
  {
    id: '03',
    alt: 'gorillas',
    srcPic: pics.gorillas,
    fotoText: 'GORILLAS<br>Native to Congo<br><br>There are two species of gorilla, each containing two subspecies. The two species are eastern and western, and the four sub-species are Cross River and Western Lowland (are sub-species of the Westernspecies) and Grauer’s and Mountain (are sub-species of the Eastern species).',
    animalName: 'GORILLAS',
    nativeToText: 'Native to Congo',
    feedSrc: 'icons/banana-bamboo_icon.svg',
    altFeed: 'banana'
  },
  {
    id: '04',
    alt: 'gorillas',
    srcPic: pics.gorillas2,
    fotoText: 'GORILLAS<br>Native to Congo<br><br>There are two species of gorilla, each containing two subspecies. The two species are eastern and western, and the four sub-species are Cross River and Western Lowland (are sub-species of the Westernspecies) and Grauer’s and Mountain (are sub-species of the Eastern species).',
    animalName: 'GORILLAS',
    nativeToText: 'Native to Congo',
    feedSrc: 'icons/banana-bamboo_icon.svg',
    altFeed: 'banana'
  },
  {
    id: '05',
    alt: 'alligator',
    srcPic: pics.alligator,
    fotoText: 'ALLIGATORS<br>Native to Southeastern U. S.<br><br>Penguins are a group of aquatic flightless birds. They live almost exclusively in the Southern Hemisphere: only one species, the Galápagos penguin, is found north of the Equator. Highly adapted for life in the water, penguins have countershaded dark and white plumage and flippers for swimming.',
    animalName: 'ALLIGATORS',
    nativeToText: 'Native to Southeastern U. S.',
    feedSrc: 'icons/meet-fish_icon.svg',
    altFeed: 'meat'
  },
  {
    id: '06',
    alt: 'twotoessloth',
    srcPic: pics.twotoessloth,
    fotoText: 'TWO-TOED SLOTH<br>Mesoamerica, South America<br><br>Both types of sloth tend to occupy the same forests; in most areas, a particular species of the somewhat smaller and generally slower-moving three-toed sloth (Bradypus) and a single species of the two-toed type will jointly predominate. Although similar in overall appearance, the relationship between the two genera is not close.',
    animalName: 'TWO-TOED SLOTH',
    nativeToText: 'Native to Southeastern U. S.',
    feedSrc: 'icons/banana-bamboo_icon.svg',
    altFeed: 'banana'
  },
  {
    id: '07',
    alt: 'cheetahs',
    srcPic: pics.cheetahs,
    fotoText: 'CHEETAHS<br>Native to Africa<br><br>The cheetah (Acinonyx jubatus) is a large cat native to Africa and central Iran. It is the fastest land animal, estimated to be capable of running at 80 to 128 km/h (50 to 80 mph) with the fastest reliably recorded speeds being 93 and 98 km/h (58 and 61 mph).',
    animalName: 'CHEETAHS',
    nativeToText: 'Native to Africa',
    feedSrc: 'icons/meet-fish_icon.svg',
    altFeed: 'meat'
  },
  {
    id: '08',
    alt: 'penguins',
    srcPic: pics.penguins,
    fotoText: 'PENGUINS<br>Native to Antarctica<br><br>Penguins are a group of aquatic flightless birds. They live almost exclusively in the Southern Hemisphere: only one species, the Galápagos penguin, is found north of the Equator. Highly adapted for life in the water, penguins have countershaded dark and white plumage and flippers for swimming.',
    animalName: 'PENGUINS',
    nativeToText: 'Native to Antarctica',
    feedSrc: 'icons/meet-fish_icon.svg',
    altFeed: 'meat'
  },
  {
    id: '09',
    alt: 'red panda',
    srcPic: pics.red_panda,
    fotoText: 'PENGUINS<br>Native to Antarctica<br><br>Penguins are a group of aquatic flightless birds. They live almost exclusively in the Southern Hemisphere: only one species, the Galápagos penguin, is found north of the Equator. Highly adapted for life in the water, penguins have countershaded dark and white plumage and flippers for swimming.',
    animalName: 'RED PANDA',
    nativeToText: 'Eastern Himalayas',
    feedSrc: 'icons/banana-bamboo_icon.svg',
    altFeed: 'banana'
  },
  {
    id: '10',
    alt: 'piranha',
    srcPic: pics.piranha,
    fotoText: 'PENGUINS<br>Native to Antarctica<br><br>Penguins are a group of aquatic flightless birds. They live almost exclusively in the Southern Hemisphere: only one species, the Galápagos penguin, is found north of the Equator. Highly adapted for life in the water, penguins have countershaded dark and white plumage and flippers for swimming.',
    animalName: 'PIRANHA',
    nativeToText: 'Native to South America',
    feedSrc: 'icons/meet-fish_icon.svg',
    altFeed: 'meat'
  },
  {
    id: '11',
    alt: 'iguana',
    srcPic: pics.iguana,
    fotoText: 'PENGUINS<br>Native to Antarctica<br><br>Penguins are a group of aquatic flightless birds. They live almost exclusively in the Southern Hemisphere: only one species, the Galápagos penguin, is found north of the Equator. Highly adapted for life in the water, penguins have countershaded dark and white plumage and flippers for swimming.',
    animalName: 'IGUANA',
    nativeToText: 'Native to Mexico',
    feedSrc: 'icons/banana-bamboo_icon.svg',
    altFeed: 'banana'
  },
  {
    id: '12',
    alt: 'tamarin',
    srcPic: pics.tamarin,
    fotoText: 'PENGUINS<br>Native to Antarctica<br><br>Penguins are a group of aquatic flightless birds. They live almost exclusively in the Southern Hemisphere: only one species, the Galápagos penguin, is found north of the Equator. Highly adapted for life in the water, penguins have countershaded dark and white plumage and flippers for swimming.',
    animalName: 'COTTON-TOP TAMARIN',
    nativeToText: 'Native to South America',
    feedSrc: 'icons/banana-bamboo_icon.svg',
    altFeed: 'banana'
  },
  {
    id: '13',
    alt: 'toad',
    srcPic: pics.toad,
    fotoText: 'PENGUINS<br>Native to Antarctica<br><br>Penguins are a group of aquatic flightless birds. They live almost exclusively in the Southern Hemisphere: only one species, the Galápagos penguin, is found north of the Equator. Highly adapted for life in the water, penguins have countershaded dark and white plumage and flippers for swimming.',
    animalName: 'TOADS',
    nativeToText: 'Native to Europe',
    feedSrc: 'icons/banana-bamboo_icon.svg',
    altFeed: 'banana'
  },
  {
    id: '14',
    alt: 'jaguar',
    srcPic: pics.jaguar,
    fotoText: 'PENGUINS<br>Native to Antarctica<br><br>Penguins are a group of aquatic flightless birds. They live almost exclusively in the Southern Hemisphere: only one species, the Galápagos penguin, is found north of the Equator. Highly adapted for life in the water, penguins have countershaded dark and white plumage and flippers for swimming.',
    animalName: 'JAGUAR',
    nativeToText: 'Native to USA',
    feedSrc: 'icons/meet-fish_icon.svg',
    altFeed: 'meat'
  },
  {
    id: '15',
    alt: 'peacock',
    srcPic: pics.peacock,
    fotoText: 'PENGUINS<br>Native to Antarctica<br><br>Penguins are a group of aquatic flightless birds. They live almost exclusively in the Southern Hemisphere: only one species, the Galápagos penguin, is found north of the Equator. Highly adapted for life in the water, penguins have countershaded dark and white plumage and flippers for swimming.',
    animalName: 'PEACOCK',
    nativeToText: 'Native to India',
    feedSrc: 'icons/banana-bamboo_icon.svg',
    altFeed: 'banana'
  },
  {
    id: '16',
    alt: 'pallas cat',
    srcPic: pics.pallas_cat,
    fotoText: 'PENGUINS<br>Native to Antarctica<br><br>Penguins are a group of aquatic flightless birds. They live almost exclusively in the Southern Hemisphere: only one species, the Galápagos penguin, is found north of the Equator. Highly adapted for life in the water, penguins have countershaded dark and white plumage and flippers for swimming.',
    animalName: 'PALLAS\'S CAT',
    nativeToText: 'Native to Asia',
    feedSrc: 'icons/meet-fish_icon.svg',
    altFeed: 'meat'
  },
  {
    id: '17',
    alt: 'hamster',
    srcPic: pics.hamster,
    fotoText: 'PENGUINS<br>Native to Antarctica<br><br>Penguins are a group of aquatic flightless birds. They live almost exclusively in the Southern Hemisphere: only one species, the Galápagos penguin, is found north of the Equator. Highly adapted for life in the water, penguins have countershaded dark and white plumage and flippers for swimming.',
    animalName: 'HAMSTER',
    nativeToText: 'Native to Europe',
    feedSrc: 'icons/banana-bamboo_icon.svg',
    altFeed: 'banana'
  },
  {
    id: '18',
    alt: 'toucan',
    srcPic: pics.toucan,
    fotoText: 'PENGUINS<br>Native to Antarctica<br><br>Penguins are a group of aquatic flightless birds. They live almost exclusively in the Southern Hemisphere: only one species, the Galápagos penguin, is found north of the Equator. Highly adapted for life in the water, penguins have countershaded dark and white plumage and flippers for swimming.',
    animalName: 'TOUCAN',
    nativeToText: 'Native to America',
    feedSrc: 'icons/banana-bamboo_icon.svg',
    altFeed: 'banana'
  },
]

export default animals