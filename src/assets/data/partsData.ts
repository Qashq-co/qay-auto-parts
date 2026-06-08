export interface PartItem {
  id: string;
  name: string;
  category: string;
  price: string;
  sku: string;
  fitment: string;
  image: string;
}

export interface Category {
  id: string;
  name: string;
  count: number;
  icon: string;
}

export const CATEGORIES: Category[] = [
  { id: 'cooling-system', name: 'Cooling System', count: 11, icon: '❄️' },
  { id: 'crankshaft-drive', name: 'Crankshaft Drive', count: 420, icon: '⚙️' },
  { id: 'cylinder-head', name: 'Cylinder Head & Attachment', count: 515, icon: '🔧' },
  { id: 'electronics', name: 'Electronics', count: 24, icon: '⚡' },
  { id: 'engine-timing', name: 'Engine Timing', count: 61, icon: '⏱️' },
  { id: 'fueling-systems', name: 'Fueling Systems', count: 88, icon: '⛽' },
  { id: 'gasket-seals', name: 'Gasket & Seals', count: 403, icon: '🫓' },
  { id: 'lubrication', name: 'Lubrication', count: 54, icon: '🛢️' },
  { id: 'service-parts', name: 'Service Parts', count: 120, icon: '🛠️' },
  { id: 'turbo', name: 'Turbo', count: 3, icon: '🌀' }
];

export const PARTS_ITEMS: PartItem[] = [
  {
    id: 'p1',
    name: 'Audi 1.4TFSI CZEA Petrol Water Pump',
    category: 'cooling-system',
    price: '88.00',
    sku: 'QAY-77291',
    fitment: 'Audi/VW Group',
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'p2',
    name: 'BMW 3.0T B58 Petrol Water Pump',
    category: 'cooling-system',
    price: '40.00',
    sku: 'QAY-11028',
    fitment: 'BMW F30/G20',
    image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'p3',
    name: 'Citroen 1.6 HDI Diesel Water Pump',
    category: 'cooling-system',
    price: '38.00',
    sku: 'QAY-99231',
    fitment: 'PSA Engine Group',
    image: 'https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'p4',
    name: 'Ford 1.0 EcoBoost Petrol Water Pump',
    category: 'cooling-system',
    price: '38.00',
    sku: 'QAY-44102',
    fitment: 'Ford Fiesta/Focus',
    image: 'https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&w=300&q=80'
  }
];