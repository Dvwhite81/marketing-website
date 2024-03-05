export interface Product {
  name: string;
  price: number;
  features: string[];
  image: string;
}

export const HEADPHONES: Product[] = [
  {
    name: 'Crusher® ANC 2 Sensory Bass Headphones with Active Noise Canceling',
    price: 229.99,
    features: [
      '50 Hours Battery + Rapid Charge',
      'Crusher Adjustable Sensory Bass',
      'Adjustable 4-Mic Active Noise Canceling',
      'Skull-iQ Smart Feature Technology',
      'Multipoint Pairing',
    ],
    image:
      'https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/437/153669/fc0078efc5dd4e2b579dd153ea420bc4865818c9cfeab31652d4e20abdd9a3ee__47830.1707030105.png?c=2',
  },
  {
    name: 'Crusher Evo Sensory Bass Headphones with Personal Sound',
    price: 139.99,
    features: [
      'Personal Sound with Skullcandy App',
      'Crusher Adjustable Sensory Bass',
      '40 Hours of Battery + Rapid Charge',
      'Call, Track and Volume Control',
      'Flat-Folding and Collapsible',
    ],
    image:
      'https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/326/157116/6da27e13daa524c069cee84418277a4b1bb3801d2af8c01a9974ade89eed43d3__23067.1709449410.png?c=2',
  },
  {
    name: 'Burton Crusher Evo Sensory Bass Headphones',
    price: 209.99,
    features: [
      '40 Hours of Battery + Rapid Charge',
      'Crusher Adjustable Sensory Bass',
      'Personal Sound with Skullcandy App',
      'Call, Track and Volume Control',
      'Built-in Tile Finding Technology',
    ],
    image:
      'https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/421/149715/2d92d21d2475281865881904f42ae3a9c8b58f40817b2652d704df8e624cce5f__29411.1703487752.png?c=2',
  },
  {
    name: 'Grom Headphones for Kids',
    price: 24.99,
    features: [
      'Volume Limited to 85dB + Override Function',
      'Adjustable Headband Strap & Collapsible Design',
      'Comfortable Over-Ear Fit for Kids',
      'Simplified Call & Media Controls on Earcup',
      'Built-in Microphone',
    ],
    image:
      'https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/450/156440/109075dea81ef0bc8c780f7d27d0d1f2b632a94bd3c385e9cd702c56f453955b__89998.1708715009.png?c=2',
  },
];

export const EARBUDS: Product[] = [
  {
    name: 'EcoBuds Sustainable True Wireless Earbuds',
    price: 39.99,
    features: [
      '8 Hours Total Battery',
      'Battery-Free Charging Dock',
      'Rapid Charge (10 min = 2 hrs)',
      'Reverse Charge from Phone (USB-C)',
      'IPX4 Sweat & Water Resistant',
    ],
    image:
      'https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/453/157935/9b522efb0d8fb5e1e115afd0afbe154f6f25cc5bd268ca1c24176bfbd3f5d1ba__84838.1709598476.jpg?c=2',
  },
  {
    name: 'Rail ANC True Wireless Earbuds',
    price: 99.99,
    features: [
      '38 Hours Total Battery + Rapid Charge',
      'Wireless Charging Case',
      'Skull-iQ Smart Feature Technology',
      'Adjustable 4-Mic Active Noise Canceling',
      'IPX4 Sweat & Water Resistant',
    ],
    image:
      'https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/434/156645/d9c74fedd1abe4982aec95c59ebdc29a3a62423b2c0067fcec26c310d807d077__60225.1708844587.png?c=2',
  },
  {
    name: 'TMNT Push Active True Wireless Earbuds',
    price: 99.99,
    features: [
      '44 Hours Total Battery + Rapid Charge',
      'IP55 Sweat & Water Resistant',
      'Hands-Free Voice Control + Built-In Alexa',
      'Advanced Features via Skull-iQ App',
      'Find Your Earbuds with Tile',
    ],
    image:
      'https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/452/156969/ccab5cccefb8ddb6e3dab7781b7039f523513ec6f45fa119628acc52c7db956c__40862.1709322148.png?c=2',
  },
  {
    name: 'Burton Push Active True Wireless Earbuds',
    price: 99.99,
    features: [
      '44 Hours Total Battery',
      'IP55 Sweat & Water Resistant',
      'Hands-Free Voice Control',
      'Secure, Comfortable Fit',
      'Find Your Earbuds with Tile',
    ],
    image:
      'https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/420/151547/3cdb14430b2f74593087bcf0afad421acab766e5cd10640c98ea17b3cdbba7c8__60654.1705351914.png?c=2',
  },
];

export const SPEAKERS: Product[] = [
  {
    name: 'Barrel Wireless Bluetooth Speaker',
    price: 179.99,
    features: [
      '12 Hours Battery',
      'IPX5 Water Resistant',
      'LED Light Show',
      'Skullcandy Multi-Link',
      'True Wireless Stereo',
    ],
    image:
      'https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/435/145114/298317ac74db423a5df24a37b92e5a01c1af6e22f49a4018865d323c3d1bfdd4__76537.1701155067.png?c=2',
  },
  {
    name: 'Stomp Wireless Bluetooth Speaker',
    price: 139.99,
    features: [
      '12 Hours Battery',
      'IPX7 Waterproof',
      'Skullcandy Multi-Link',
      'True Wireless Stereo',
      'LED Light Show',
    ],
    image:
      'https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/446/150779/2269187274d27a66bf78aa769e77a7c26e68adfdffc4ab6ce816bcd247d5304c__94088.1704752917.png?c=2',
  },
  {
    name: 'Ounce Wireless Bluetooth Speaker',
    price: 29.99,
    features: [
      '16 Hours Battery',
      'IPX7 Waterproof',
      'Built-In Carry Strap',
      'USB-C Charging Port',
      'Bluetooth v5.3',
    ],
    image:
      'https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/428/146276/dc9ec53febc4a5f63ba2460c0ab8f4e11248f47c7d25069598254e6ec30e693d__65873.1701156096.png?c=2',
  },
  {
    name: 'Terrain XL Wireless Bluetooth Speaker',
    price: 29.99,
    features: [
      '18 Hours Battery',
      'IPX7 Waterproof',
      'Skullcandy Multi-Link',
      'USB-C Charging Port',
      'True Wireless Stereo',
    ],
    image:
      'https://cdn11.bigcommerce.com/s-k11cg5mzh9/images/stencil/500x659/products/426/145574/2f244ee1b0d4e24ec5fff7fa41f3af837209d34b95540b662c6d345d7b8fd931__51142.1701155467.png?c=2',
  },
];

export const CATEGORIES = [
  {
    name: 'Headphones',
    products: HEADPHONES,
  },
  {
    name: 'Earbuds',
    products: EARBUDS,
  },
  {
    name: 'Speakers',
    products: SPEAKERS,
  },
];

export const PRODUCTS: Product[] = [
  ...HEADPHONES,
  ...EARBUDS,
  ...SPEAKERS,
];

interface Index {
  previousIndex: number;
  currentIndex: number;
  nextIndex: number;
}

export const determineClasses = (indexes: Index, cardIndex: number) => {
  if (indexes.currentIndex === cardIndex) {
    return 'active';
  } else if (indexes.nextIndex === cardIndex) {
    return 'next';
  } else if (indexes.previousIndex === cardIndex) {
    return 'prev';
  }
  return 'inactive';
}
