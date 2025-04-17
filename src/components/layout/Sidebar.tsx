import React from "react";
import { Link } from "react-router-dom";
import { 
  Home, 
  Clock, 
  History, 
  PlaySquare, 
  ThumbsUp, 
  Film, 
  Flame, 
  Music2, 
  Gamepad2, 
  Newspaper, 
  Trophy, 
  Shirt, 
  Lightbulb
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const menuItems = [
    { icon: <Home size={20} />, label: "Главная", link: "/" },
    { icon: <Flame size={20} />, label: "Тренды", link: "#" },
    { icon: <Music2 size={20} />, label: "Музыка", link: "#" },
    { icon: <Film size={20} />, label: "Фильмы", link: "#" },
    { icon: <Gamepad2 size={20} />, label: "Игры", link: "#" },
    { icon: <Newspaper size={20} />, label: "Новости", link: "#" },
    { icon: <Trophy size={20} />, label: "Спорт", link: "#" },
    { icon: <Lightbulb size={20} />, label: "Обучение", link: "#" },
    { icon: <Shirt size={20} />, label: "Мода", link: "#" },
  ];

  const myLibrary = [
    { icon: <History size={20} />, label: "История", link: "#" },
    { icon: <PlaySquare size={20} />, label: "Мои видео", link: "#" },
    { icon: <Clock size={20} />, label: "Смотреть позже", link: "#" },
    { icon: <ThumbsUp size={20} />, label: "Понравившиеся", link: "#" },
  ];

  return (
    <aside 
      className={`
        fixed top-16 bottom-0 left-0 w-64 bg-white border-r border-gray-200 
        overflow-y-auto transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        z-50
      `}
    >
      <div className="p-2">
        {/* Логотип в свернутом состоянии */}
        <div className="pl-2 mb-4 flex items-center">
          <Link to="/" className="flex items-center py-2">
            <img 
              src="https://cdn.poehali.dev/files/e3ff7589-c248-44c8-ba78-5b145de7bc81.png" 
              alt="Ютуб" 
              className="h-6 mr-2"
            />
            <span className="font-medium">Мой Ютуб</span>
          </Link>
        </div>
        
        {/* Основное меню */}
        <div className="space-y-1">
          {menuItems.map((item, index) => (
            <Link to={item.link} key={index}>
              <Button 
                variant="ghost" 
                className="w-full justify-start"
              >
                {item.icon}
                <span className="ml-2">{item.label}</span>
              </Button>
            </Link>
          ))}
        </div>
        
        {/* Разделитель */}
        <Separator className="my-2" />
        
        {/* Моя медиатека */}
        <div className="mb-2">
          <h3 className="px-4 py-2 text-sm font-medium">Моя медиатека</h3>
          <div className="space-y-1">
            {myLibrary.map((item, index) => (
              <Link to={item.link} key={index}>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start"
                >
                  {item.icon}
                  <span className="ml-2">{item.label}</span>
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;