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
  image: string; // Changed from icon to image url
}

export const CATEGORIES: Category[] = [
  { 
    id: 'cooling-system', 
    name: 'Cooling System', 
    count: 11, 
    image: 'https://images.unsplash.com/photo-1527383418406-f85a3b146499?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyJTIwY29vbGluZ3xlbnwwfHwwfHx8MA%3D%3D' 
  },
  { 
    id: 'crankshaft-drive', 
    name: 'Crankshaft Drive', 
    count: 420, 
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=300&q=80' 
  },
  { 
    id: 'cylinder-head', 
    name: 'Cylinder Head & Attachment', 
    count: 515, 
    image: 'https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&w=300&q=80' 
  },
  { 
    id: 'electronics', 
    name: 'Electronics', 
    count: 24, 
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=300&q=80' 
  },
  { 
    id: 'engine-timing', 
    name: 'Engine Timing', 
    count: 61, 
    image: 'https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&w=300&q=80' 
  },
  { 
    id: 'fueling-systems', 
    name: 'Fueling Systems', 
    count: 88, 
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=300&q=80' 
  },
  { 
    id: 'gasket-seals', 
    name: 'Gasket & Seals', 
    count: 403, 
    image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=300&q=80' 
  },
  { 
    id: 'lubrication', 
    name: 'Lubrication', 
    count: 54, 
    image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyJTIwbHVicmljYXRpb258ZW58MHx8MHx8fDA%3D' 
  },
  { 
    id: 'service-parts', 
    name: 'Service Parts', 
    count: 120, 
    image: 'https://images.unsplash.com/photo-1599256872237-5dcc0fbe9668?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhciUyMHNlcnZpY2UlMjBwYXJ0c3xlbnwwfHwwfHx8MA%3D%3D' 
  },
  { 
    id: 'turbo', 
    name: 'Turbo', 
    count: 3, 
    image: 'https://images.unsplash.com/photo-1686993477125-50221ad8e947?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHVyYm98ZW58MHx8MHx8fDA%3D' 
  }
];

export const PARTS_ITEMS: PartItem[] = [
  {
    id: 'p1',
    name: 'Audi 1.4TFSI CZEA Petrol Water Pump',
    category: 'cooling-system',
    price: '88.00',
    sku: 'QAY-77291',
    fitment: 'Audi/VW Group',
    image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'p2',
    name: 'BMW 3.0T B58 Petrol Water Pump',
    category: 'cooling-system',
    price: '40.00',
    sku: 'QAY-11028',
    fitment: 'BMW F30/G20',
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'p3',
    name: 'Citroen 1.6 HDI Diesel Water Pump',
    category: 'cooling-system',
    price: '38.00',
    sku: 'QAY-99231',
    fitment: 'PSA Engine Group',
    image: 'https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'p4',
    name: 'Ford 1.0 EcoBoost Petrol Water Pump',
    category: 'cooling-system',
    price: '38.00',
    sku: 'QAY-44102',
    fitment: 'Ford Fiesta/Focus',
    image: 'https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&w=600&q=80'
  }
];