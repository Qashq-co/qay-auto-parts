export interface PartItem {
  id: string;
  name: string;
  category: string;
  sku: string;
  fitment: string;
  image: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  count: number;
  image: string;
}

export const CATEGORIES: Category[] = [
  {
    id: 'gaskets',
    name: 'Gaskets',
    description: 'Multi-layer engine gasket packs',
    count: 64,
    image: 'https://i.pinimg.com/736x/26/9b/8f/269b8f09d9da6e786d3d8719a0336429.jpg'
  },
  {
    id: 'bearings',
    name: 'Bearings',
    description: 'Precision crank and rod bearings',
    count: 58,
    image: 'https://i.pinimg.com/1200x/66/da/87/66da87b3113d351f84af7e605772d953.jpg'
  },
  {
    id: 'head-bolts',
    name: 'Head Bolts',
    description: 'High-strength head bolt sets',
    count: 42,
    image: 'https://i.pinimg.com/1200x/47/69/e0/4769e0d25801b89641c99c9b005ee4d8.jpg'
  },
  {
    id: 'pistons',
    name: 'Pistons',
    description: 'OEM and forged pistons',
    count: 79,
    image: 'https://i.pinimg.com/1200x/81/63/0e/81630ee1cb868f777a03127c00d309ee.jpg'
  },
  {
    id: 'timing-belt-kits',
    name: 'Timing Belt Kits',
    description: 'Complete timing belt replacement kits',
    count: 51,
    image: 'https://i.pinimg.com/736x/20/fa/7e/20fa7e4b0b4fcb44be5153493fa70b15.jpg'
  },
  {
    id: 'valves',
    name: 'Valves',
    description: 'Intake and exhaust valve assemblies',
    count: 47,
    image: 'https://i.pinimg.com/1200x/6d/cc/07/6dcc075eec2ae946d2a0494b3b709606.jpg',
  },
  {
    id: 'water-pumps',
    name: 'Water Pumps',
    description: 'High-flow engine water pumps',
    count: 53,
    image: 'https://i.pinimg.com/1200x/49/41/e8/4941e84ee077b92493ca797891350f24.jpg'
  },
  {
    id: 'cam-kits',
    name: 'Cam Kits',
    description: 'Camshaft and tensioner kit assemblies',
    count: 38,
    image: 'https://i.pinimg.com/1200x/4c/20/d1/4c20d182388800666864058c3de4c223.jpg'
  },
  {
    id: 'piston-rings',
    name: 'Piston Rings',
    description: 'Sealing piston ring sets',
    count: 68,
    image: 'https://i.pinimg.com/1200x/67/ea/a9/67eaa93c747b875e81813d2563d977e7.jpg'
  },
  {
    id: 'cylinder-heads',
    name: 'Cylinder Heads',
    description: 'Complete cylinder head assemblies',
    count: 57,
    image: 'https://i.pinimg.com/736x/2e/08/9c/2e089cf5f28cb1dab19b89e31bd7d462.jpg'
  },
  {
    id: 'crankshafts',
    name: 'Crankshafts',
    description: 'OEM-spec crankshafts and balancing',
    count: 66,
    image: 'https://i.pinimg.com/236x/b3/4f/ba/b34fba77b0ce5b0b68bf0408345ed8f3.jpg'
  },
  {
    id: 'conrods',
    name: 'Conrods',
    description: 'Heavy-duty connecting rods',
    count: 50,
    image: 'https://i.ebayimg.com/images/g/MWwAAOSw6Dlizmon/s-l1600.webp'
  },
  {
    id: 'timing-chain-kits',
    name: 'Timing Chain Kits',
    description: 'Full engine timing chain kits',
    count: 44,
    image: 'https://i.pinimg.com/736x/a7/16/a5/a716a54433f7ee5ef4dbfb43b5cd7a2c.jpg'
  },
  {
    id: 'oil-pumps',
    name: 'Oil Pumps',
    description: 'High-flow oil pump assemblies',
    count: 39,
    image: 'https://i.pinimg.com/1200x/f0/8f/9e/f08f9e759de9441c0555d9b8ce37eda9.jpg'
  },
  {
    id: 'gasket-kits',
    name: 'Gasket Kits',
    description: 'Comprehensive gasket kit solutions',
    count: 62,
    image: 'https://i.pinimg.com/736x/ad/34/fa/ad34fa8f132ac87bc0dd0d41bf8da43a.jpg'
  },
];

export const PARTS_ITEMS: PartItem[] = [
  {
    id: 'p1',
    name: 'Honda K20A Pistons Set',
    category: 'pistons',
    sku: 'QAY-10001',
    fitment: 'Honda Civic K20A',
    image: 'https://i.pinimg.com/1200x/81/63/0e/81630ee1cb868f777a03127c00d309ee.jpg'
  },
  {
    id: 'p2',
    name: 'Toyota 3S-GTE Piston Ring Set',
    category: 'piston-rings',
    sku: 'QAY-10012',
    fitment: 'Toyota Celica ST205',
    image: 'https://i.pinimg.com/1200x/67/ea/a9/67eaa93c747b875e81813d2563d977e7.jpg'
  },
  {
    id: 'p3',
    name: 'BMW N47 Crankshaft',
    category: 'crankshafts',
    sku: 'QAY-10023',
    fitment: 'BMW 3 Series E90',
    image: 'https://i.pinimg.com/236x/b3/4f/ba/b34fba77b0ce5b0b68bf0408345ed8f3.jpg'
  },
  {
    id: 'p4',
    name: 'Ford Duratec Cylinder Head',
    category: 'cylinder-heads',
    sku: 'QAY-10034',
    fitment: 'Ford Focus MK2',
    image: 'https://i.pinimg.com/736x/2e/08/9c/2e089cf5f28cb1dab19b89e31bd7d462.jpg'
  },
  {
    id: 'p5',
    name: 'Nissan SR20DET Head Bolt Kit',
    category: 'head-bolts',
    sku: 'QAY-10045',
    fitment: 'Nissan Silvia S14',
    image: 'https://i.pinimg.com/1200x/47/69/e0/4769e0d25801b89641c99c9b005ee4d8.jpg'
  },
  {
    id: 'p6',
    name: 'VW Passat Timing Belt Kit',
    category: 'timing-belt-kits',
    sku: 'QAY-10056',
    fitment: 'VW Passat B6',
    image: 'https://i.pinimg.com/736x/20/fa/7e/20fa7e4b0b4fcb44be5153493fa70b15.jpg'
  },
  {
    id: 'p7',
    name: 'Land Rover Valve Set',
    category: 'valves',
    sku: 'QAY-10067',
    fitment: 'Land Rover Defender 2.2',
    image: 'https://i.pinimg.com/1200x/6d/cc/07/6dcc075eec2ae946d2a0494b3b709606.jpg'
  },
  {
    id: 'p8',
    name: 'Renault Clio Water Pump',
    category: 'water-pumps',
    sku: 'QAY-10078',
    fitment: 'Renault Clio 1.2',
    image: 'https://i.pinimg.com/1200x/49/41/e8/4941e84ee077b92493ca797891350f24.jpg'
  },
  {
    id: 'p9',
    name: 'Hyundai Cam Kit',
    category: 'cam-kits',
    sku: 'QAY-10089',
    fitment: 'Hyundai i30 1.6',
    image: 'https://i.pinimg.com/1200x/4c/20/d1/4c20d182388800666864058c3de4c223.jpg'
  },
  {
    id: 'p10',
    name: 'Mazda Skyactiv Piston Rings',
    category: 'piston-rings',
    sku: 'QAY-10100',
    fitment: 'Mazda 3 Skyactiv',
    image: 'https://images.unsplash.com/photo-1629473967398-c89954f24266?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'p11',
    name: 'Audi A4 Oil Pump',
    category: 'oil-pumps',
    sku: 'QAY-10111',
    fitment: 'Audi A4 B8',
    image: 'https://i.pinimg.com/1200x/f0/8f/9e/f08f9e759de9441c0555d9b8ce37eda9.jpg'
  },
  {
    id: 'p12',
    name: 'Mercedes OM646 Gasket Kit',
    category: 'gasket-kits',
    sku: 'QAY-10122',
    fitment: 'Mercedes C-Class',
    image: 'https://i.pinimg.com/736x/ad/34/fa/ad34fa8f132ac87bc0dd0d41bf8da43a.jpg'
  },
  {
    id: 'p13',
    name: 'Skoda Fabia Valve Guides',
    category: 'valve-guides',
    sku: 'QAY-10133',
    fitment: 'Skoda Fabia 1.2',
    image: 'https://i.pinimg.com/1200x/60/f8/d4/60f8d48377fbf56752d0774d0a818e7a.jpg'
  },
  {
    id: 'p14',
    name: 'Honda K24 Engine Bearings',
    category: 'bearings',
    sku: 'QAY-10144',
    fitment: 'Honda Accord K24',
    image: 'https://i.pinimg.com/1200x/66/da/87/66da87b3113d351f84af7e605772d953.jpg'
  },
  {
    id: 'p15',
    name: 'Toyota 1ZZ-FE Connecting Rods',
    category: 'conrods',
    sku: 'QAY-10155',
    fitment: 'Toyota Corolla 1.8',
    image: 'https://i.ebayimg.com/images/g/MWwAAOSw6Dlizmon/s-l1600.webp'
  },
  {
    id: 'p16',
    name: 'Subaru EJ25 Timing Chain Kit',
    category: 'timing-chain-kits',
    sku: 'QAY-10166',
    fitment: 'Subaru Impreza WRX',
    image: 'https://i.pinimg.com/736x/a7/16/a5/a716a54433f7ee5ef4dbfb43b5cd7a2c.jpg'
  },
  {
    id: 'p17',
    name: 'Porsche 911 Cylinder Head',
    category: 'cylinder-heads',
    sku: 'QAY-10177',
    fitment: 'Porsche 911 Carrera',
    image: 'https://i.pinimg.com/736x/2e/08/9c/2e089cf5f28cb1dab19b89e31bd7d462.jpg'
  },
  {
    id: 'p18',
    name: 'Ford Mustang Crankshaft',
    category: 'crankshafts',
    sku: 'QAY-10188',
    fitment: 'Ford Mustang GT',
    image: 'https://i.pinimg.com/236x/b3/4f/ba/b34fba77b0ce5b0b68bf0408345ed8f3.jpg'
  },
  {
    id: 'p19',
    name: 'Nissan RB26 Water Pump',
    category: 'water-pumps',
    sku: 'QAY-10199',
    fitment: 'Nissan Skyline R34',
    image: 'https://i.pinimg.com/1200x/49/41/e8/4941e84ee077b92493ca797891350f24.jpg'
  },
  {
    id: 'p20',
    name: 'VW Golf Cam Kit',
    category: 'cam-kits',
    sku: 'QAY-10210',
    fitment: 'VW Golf MK7',
    image: 'https://i.pinimg.com/1200x/4c/20/d1/4c20d182388800666864058c3de4c223.jpg'
  },
  {
    id: 'p21',
    name: 'GM Head Bolt Kit',
    category: 'head-bolts',
    sku: 'QAY-10221',
    fitment: 'Chevrolet Cruze',
    image: 'https://i.pinimg.com/1200x/47/69/e0/4769e0d25801b89641c99c9b005ee4d8.jpg'
  },
  {
    id: 'p22',
    name: 'Seat Ibiza Gasket Pack',
    category: 'gaskets',
    sku: 'QAY-10232',
    fitment: 'Seat Ibiza 1.6',
    image: 'https://i.pinimg.com/736x/ad/34/fa/ad34fa8f132ac87bc0dd0d41bf8da43a.jpg'
  }
];