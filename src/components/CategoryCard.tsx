import React from 'react';

interface Category {
  id: string;
  name: string;
  description: string;
  count: number;
  image: string;
}

interface CategoryCardProps {
  cat: Category;
  onClick: () => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ cat, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white border border-gray-200 p-4 text-center flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:shadow-md"
    >
      {/* Category Image Wrapper - Set to a clean, crisp white background layout matching image_7c4b46.png */}
      <div className="w-full aspect-square max-h-[140px] bg-white overflow-hidden mb-3 flex items-center justify-center">
        <img 
          src={cat.image} 
          alt={cat.name}
          loading="lazy"
          className="max-w-full max-h-full object-contain transition-transform duration-300 hover:scale-102"
        />
      </div>
      
      {/* Category Title Placement */}
      <div className="w-full">
        <h3 className="text-sm font-semibold text-gray-700 font-sans tracking-wide">
          {cat.name}
        </h3>
      </div>
    </div>
  );
};