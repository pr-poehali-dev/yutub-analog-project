import React from 'react';
import { Button } from "@/components/ui/button";

const categories = [
  "Все", "Музыка", "Новости", "Игры", "Кино", "Спорт", 
  "Образование", "Наука", "Технологии", "Путешествия", "Кулинария"
];

const CategoryChips: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("Все");

  return (
    <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-hide">
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          className={`
            rounded-full text-sm px-4 py-1 h-auto whitespace-nowrap
            ${selectedCategory === category 
              ? "bg-yutub-primary text-white" 
              : "bg-gray-100 hover:bg-gray-200 text-gray-700"}
          `}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryChips;