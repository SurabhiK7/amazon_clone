import SmartphoneImg from '../assets/Smartphone.png';
import HeadPhonesImg from '../assets/HeadPhones.png';
import SmartWatchImg from '../assets/Samrtwatch.png';
import TVImg from '../assets/TV.png';
import SpeakerImg from '../assets/Speaker.png';
import SunglassImg from '../assets/Sunglass.png';
import ShoeImg from '../assets/Shoe.png';
import HandbagImg from '../assets/Handbag.png';
import TableImg from '../assets/Table.png';
import LightsImg from '../assets/Lights.png';
import FlowerPotsImg from '../assets/FlowerPots.png';
import CushionCoverImg from '../assets/CushionCover.png';
import BookImg from '../assets/Book.png';
import HelmetImg from '../assets/Helmet.png';
import CleanerImg from '../assets/Cleaner.png';
import CarCoverImg from '../assets/CarCover.png';

const products = [
  {
    id: 1,
    name: 'Smartphone X Pro',
    title: 'Latest Smartphone X Pro with AI Camera',
    description: 'High-performance smartphone with 108MP AI camera, 5G connectivity, and 5000mAh battery.',
    price: 26999,
    category:'Electronics',
    image: SmartphoneImg,
    rating: 4.5
  },
  {
    id: 2,
    name: 'Wireless Headphones',
    title: 'Noise Cancelling Wireless Headphones',
    description: 'Experience immersive sound with noise cancellation and 40hr battery life.',
    price: 1799,
    category:'Electronics',
    image: HeadPhonesImg,
    rating: 4.2
  },
  {
    id: 3,
    name: 'Smartwatch Series 5',
    title: 'Waterproof Smartwatch Series 5',
    description: 'Track your health and fitness with heart rate, GPS, and sleep tracking.',
    price: 1999,
    category:'Fashion',
    image: SmartWatchImg,
    rating: 4.0
  },
  {
    id: 4,
    name: '4K Ultra HD TV',
    title: '55" 4K Ultra HD Smart TV',
    description: 'Cinematic viewing experience with Dolby Vision and smart features.',
    price: 38999,
    category:'Electronics',
    image: TVImg,
    rating: 4.7
  },
  {
    id: 5,
    name: 'Bluetooth Speaker',
    title: 'Portable Bluetooth Speaker with Bass',
    description: 'Compact and powerful speaker with 12hr battery and waterproof design.',
    price: 799,
    category:'Electronics',
    image: SpeakerImg,
    rating: 3.9
  },
  {
    id: 6,
    name: 'Sunglasses',
    title: 'Ray-Ban Square Sunglasses - 0RB2140',
    description: 'To Protect Your Eyes From Harmful UV Rays, These Sunglasses Include Lenses That Are Coated With 100% UV Protection',
    price: 499,
    category:'Fashion',
    image: SunglassImg,
    rating: 3.8
  },
  {
    id: 7,
    name: 'Leather Formal Shoes',
    title: 'Louis Philippe Men Leather Formal Shoes',
    description: 'Premium Leather Light Weight Breathable Lining Slip Resistant Flexible Toe',
    price: 1799,
    category:'Fashion',
    image: ShoeImg,
    rating: 4
  },
  {
    id: 8,
    name: 'Leather Hand Bag',
    title: 'EXOTIC Premium® embossed design PU Leather hand bag for women',
    description: 'Product Dimensions (inch)-11,8,4 Perfect Size: Ideal for carrying your phone, cosmetics, keys, and other small essentials.',
    price: 1279,
    category:'Fashion',
    image: HandbagImg,
    rating: 5
  },
  {
    id: 9,
    name: 'Foldable Laptop Table',
    title: 'Cubiker Engineered Wood Multipurpose Foldable Laptop Table with Cup Holder ',
    description: 'Cubiker Engineered Wood Multipurpose Foldable Laptop Table with Cup Holder | Table Home Study Writing Table, Foldable and Portable/Ergonomic Edges (Black - 60[L] X 40[W] X 24[H] Cm)',
    price: 448,
    category:'Home',
    image: TableImg,
    rating: 4
  },
  {
    id: 10,
    name: 'Led Curtain String Lights',
    title: 'Desidiya 12 Stars 138 Led Curtain String Lights Window Curtain Lights with 8 Flashing Modes',
    description: 'Desidiya 12 Stars 138 Led Curtain String Lights Window Curtain Lights with 8 Flashing Modes Decoration for Christmas, Wedding, Party, Home, Patio Lawn Warm White (138 Led-Star, Copper, Pack of 1)',
    price: 458,
    category:'Home',
    image: LightsImg,
    rating: 4.2
  },
  {
    id: 11,
    name: 'Flower Pots',
    title: 'TrustBasket Marvel Matka Small Clay Flower Pots',
    description: 'TrustBasket Marvel Matka Small Clay Flower Pots Set of 3 – Pink Terracotta Clay Flower Pot with Saucer Plate | Handmade Pots | Mud Plant Container | Gamla for Plants | Indoor Outdoor Use',
    price: 1399,
    category:'Home',
    image: FlowerPotsImg,
    rating: 4.8
  },
  {
    id: 12,
    name: 'Cushion Covers',
    title: 'CIDIZY Jute Floral Print Cushion Covers, 16 X 16 Inch, Set Of 7, Multicolor, 200 tc',
    description: 'Size: 16 x 16 Inch / 40x40 cm and Fabric: Premium Jute (Front) & Dupion Silk (Back) Traditional Designer Decorative Flower Floral Tree Digital Printed Sofa Cushion Cover 16x16 Set of 7',
    price: 471,
    category:'Home',
    image: CushionCoverImg,
    rating: 4.2
  },
  {
    id: 13,
    name: 'The Secret Book',
    title: 'The Secret Book By Rhonda Byrne in english new edition ',
    description: 'Publisher : GBDOOKS (17 November 2024), Paperback : 198 pages Item Weight : 200 g, Dimensions : 15 x 12 x 1.2 cm, Country of Origin : India, Packer : the secret book, Generic Name : the secret book',
    price: 249,
    category:'Books',
    image: BookImg,
    rating: 4.4
  },
  {
    id: 14,
    name: 'Full Face Dual Visor Helmet',
    title: 'Axor Apex Marvel Deadpool ISI ECE DOT Certified Full Face Dual Visor Helmet',
    description: 'Axor Apex Marvel Deadpool ISI ECE DOT Certified Full Face Dual Visor Helmet for Men and Women Dual EPS Protection with Pinlock Fitted Outer Clear Visor and Inner Smoke Sun Visor Red Black-L',
    price: 5729,
    category:'Car and Motorbike',
    image: HelmetImg,
    rating: 3.6
  },
  {
    id: 15,
    name: 'Car Vacuum Cleaner',
    title: 'WOSCHER 2003 High Power Auto Car Vacuum Cleaner for Deep Cleaning',
    description: 'WOSCHER 2003 High Power Auto Car Vacuum Cleaner for Deep Cleaning, Hand Held Portable Cars Vacuum for car Cleaning with DC 12V, 140W Vacuum Motor & 5000 PA Powerful Suction, Black',
    price: 1299,
    category:'Car and Motorbike',
    image: CleanerImg,
    rating: 4
  },
  {
    id: 16,
    name: 'Car Body Cover',
    title: 'Autofact 100% Waterproof Car Body Cover Compatible with Fiat Punto (2011 to 2017)',
    description: 'Autofact 100% Waterproof Car Body Cover Compatible with Fiat Punto (2011 to 2017), with Mirror Pockets, 4 x 4 American Matty, Long Lasting Strong Durable Material, Camouflage Army Look',
    price: 2399,
    category:'Car and Motorbike',
    image: CarCoverImg,
    rating: 4
  }
];

export default products;
