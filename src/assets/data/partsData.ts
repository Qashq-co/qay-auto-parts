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
    image: 'https://m.media-amazon.com/images/I/61zdqGCTBML._AC_SX679_.jpg'
  },
  {
    id: 'head-bolts',
    name: 'Head Bolts',
    description: 'High-strength head bolt sets',
    count: 42,
    image: 'http://kingcomponents.co.uk/wp-content/uploads/2017/01/head-bolts.png'
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
    image: 'http://kingcomponents.co.uk/wp-content/uploads/2017/01/timing-belts.png'
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
    image: 'http://kingcomponents.co.uk/wp-content/uploads/2017/01/cam-kits.png'
  },
  {
    id: 'piston-rings',
    name: 'Piston Rings',
    description: 'Sealing piston ring sets',
    count: 68,
    image: 'http://kingcomponents.co.uk/wp-content/uploads/2016/11/rings.png'
  },
  {
    id: 'cylinder-heads',
    name: 'Cylinder Heads',
    description: 'Complete cylinder head assemblies',
    count: 57,
    image: 'http://kingcomponents.co.uk/wp-content/uploads/2016/11/cylinder-head.png'
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
    name: 'High-Performance Engine Pistons Set',
    category: 'pistons',
    sku: 'QAY-10001',
    fitment: 'High-Performance Spec',
    image: 'https://i.pinimg.com/1200x/81/63/0e/81630ee1cb868f777a03127c00d309ee.jpg'
  },
  {
    id: 'p2',
    name: 'Premium Compression Piston Ring Set',
    category: 'piston-rings',
    sku: 'QAY-10012',
    fitment: 'Standard Multi-Valve',
    image: 'https://i.pinimg.com/1200x/67/ea/a9/67eaa93c747b875e81813d2563d977e7.jpg'
  },
  {
    id: 'p3',
    name: 'Precision Balanced Engine Crankshaft',
    category: 'crankshafts',
    sku: 'QAY-10023',
    fitment: 'Multi-Cylinder Diesel/Petrol',
    image: 'https://i.pinimg.com/236x/b3/4f/ba/b34fba77b0ce5b0b68bf0408345ed8f3.jpg'
  },
  {
    id: 'p4',
    name: 'Aluminum Alloy Bare Cylinder Head',
    category: 'cylinder-heads',
    sku: 'QAY-10034',
    fitment: 'Dual Overhead Cam (DOHC)',
    image: 'https://i.pinimg.com/736x/2e/08/9c/2e089cf5f28cb1dab19b89e31bd7d462.jpg'
  },
  {
    id: 'p5',
    name: 'High-Tensile Cylinder Head Bolt Kit',
    category: 'head-bolts',
    sku: 'QAY-10045',
    fitment: 'Heavy-Duty Fasteners',
    image: 'http://kingcomponents.co.uk/wp-content/uploads/2017/01/head-bolts.png'
  },
  {
    id: 'p6',
    name: 'Complete Timing Belt & Tensioner Kit',
    category: 'timing-belt-kits',
    sku: 'QAY-10056',
    fitment: 'Overhead Cam Engines',
    image: 'http://kingcomponents.co.uk/wp-content/uploads/2017/01/timing-belts.png'
  },
  {
    id: 'p7',
    name: 'Engine Intake & Exhaust Valve Set',
    category: 'valves',
    sku: 'QAY-10067',
    fitment: 'Multi-Valve Cylinder Heads',
    image: 'http://kingcomponents.co.uk/wp-content/uploads/2016/11/cylinder-head.png'
  },
  {
    id: 'p8',
    name: 'High-Flow Mechanical Water Pump',
    category: 'water-pumps',
    sku: 'QAY-10078',
    fitment: 'Standard Block Cooling',
    image: 'https://i.pinimg.com/1200x/49/41/e8/4941e84ee077b92493ca797891350f24.jpg'
  },
  {
    id: 'p9',
    name: 'Performance Camshaft & Lifter Kit',
    category: 'cam-kits',
    sku: 'QAY-10089',
    fitment: 'Sports & Street Profile',
    image: 'http://kingcomponents.co.uk/wp-content/uploads/2017/01/cam-kits.png'
  },
  {
    id: 'p10',
    name: 'Low-Friction Engine Piston Rings',
    category: 'piston-rings',
    sku: 'QAY-10100',
    fitment: 'Eco-Efficiency Engines',
    image: 'http://kingcomponents.co.uk/wp-content/uploads/2016/11/rings.png'
  },
  {
    id: 'p11',
    name: 'High-Pressure Internal Oil Pump',
    category: 'oil-pumps',
    sku: 'QAY-10111',
    fitment: 'Wet-Sump Lubrication',
    image: 'https://i.pinimg.com/1200x/f0/8f/9e/f08f9e759de9441c0555d9b8ce37eda9.jpg'
  },
  {
    id: 'p12',
    name: 'Complete Engine Overhaul Gasket Kit',
    category: 'gasket-kits',
    sku: 'QAY-10122',
    fitment: 'Full Top & Bottom Set',
    image: 'https://i.pinimg.com/736x/ad/34/fa/ad34fa8f132ac87bc0dd0d41bf8da43a.jpg'
  },
  {
    id: 'p13',
    name: 'Precision Brass Valve Guides Pack',
    category: 'valve-guides',
    sku: 'QAY-10133',
    fitment: 'Standard Core Valvetrain',
    image: 'https://i.pinimg.com/1200x/60/f8/d4/60f8d48377fbf56752d0774d0a818e7a.jpg'
  },
  {
    id: 'p14',
    name: 'Heavy-Duty Main & Rod Bearings Set',
    category: 'bearings',
    sku: 'QAY-10144',
    fitment: 'Journal Clearances Restored',
    image: 'https://m.media-amazon.com/images/I/61zdqGCTBML._AC_SX679_.jpg'
  },
  {
    id: 'p15',
    name: 'Forged H-Beam Connecting Rods',
    category: 'conrods',
    sku: 'QAY-10155',
    fitment: 'High-Torque Construction',
    image: 'https://i.ebayimg.com/images/g/MWwAAOSw6Dlizmon/s-l1600.webp'
  },
  {
    id: 'p16',
    name: 'Engine Timing Chain Roller Assembly',
    category: 'timing-chain-kits',
    sku: 'QAY-10166',
    fitment: 'Dual-Chain OHC Setup',
    image: 'https://i.pinimg.com/736x/a7/16/a5/a716a54433f7ee5ef4dbfb43b5cd7a2c.jpg'
  },
  {
    id: 'p17',
    name: 'Billet Aluminium Cylinder Head Unit',
    category: 'cylinder-heads',
    sku: 'QAY-10177',
    fitment: 'Premium Airflow Design',
    image: 'https://i.pinimg.com/736x/2e/08/9c/2e089cf5f28cb1dab19b89e31bd7d462.jpg'
  },
  {
    id: 'p18',
    name: 'Large-Journal Cast Iron Crankshaft',
    category: 'crankshafts',
    sku: 'QAY-10188',
    fitment: 'V-Engine Configuration',
    image: 'https://i.pinimg.com/236x/b3/4f/ba/b34fba77b0ce5b0b68bf0408345ed8f3.jpg'
  },
  {
    id: 'p19',
    name: 'Auxiliary Drive Engine Water Pump',
    category: 'water-pumps',
    sku: 'QAY-10199',
    fitment: 'High-Volume Fluid Flow',
    image: 'https://i.pinimg.com/1200x/49/41/e8/4941e84ee077b92493ca797891350f24.jpg'
  },
  {
    id: 'p20',
    name: 'Overhead Camshaft Intake Lobes Kit',
    category: 'cam-kits',
    sku: 'QAY-10210',
    fitment: 'Variable Valve Lift Spec',
    image: 'https://i.pinimg.com/1200x/4c/20/d1/4c20d182388800666864058c3de4c223.jpg'
  },
  {
    id: 'p21',
    name: 'Engine Block Bolt & Fasteners Kit',
    category: 'head-bolts',
    sku: 'QAY-10221',
    fitment: 'Grade 12.9 Structural Tech',
    image: 'https://i.pinimg.com/1200x/47/69/e0/4769e0d25801b89641c99c9b005ee4d8.jpg'
  },
  {
    id: 'p22',
    name: 'Molded Multi-Layer Gasket Pack',
    category: 'gaskets',
    sku: 'QAY-10232',
    fitment: 'High-Heat Resilience Pack',
    image: 'https://i.pinimg.com/736x/ad/34/fa/ad34fa8f132ac87bc0dd0d41bf8da43a.jpg'
  }
];