import React from "react";
import { 
  Home, 
  Flame, 
  PlaySquare, 
  History, 
  Clock, 
  ThumbsUp, 
  Clapperboard, 
  Music2, 
  Radio, 
  Gamepad2, 
  Newspaper, 
  Trophy, 
  Lightbulb, 
  Shirt,
  Settings,
  HelpCircle,
  Flag
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <aside 
      className={`
        fixed left-0 top-16 h-[calc(100vh-64px)] bg-white transition-all duration-300 overflow-y-auto
        ${isOpen ? "w-64" : "w-[72px]"}
      `}
    >
      <nav className="p-1">
        <div>
          <SidebarItem icon={<Home />} text="Главная" isOpen={isOpen} />
          <SidebarItem icon={<Flame />} text="В тренде" isOpen={isOpen} />
          <SidebarItem icon={<PlaySquare />} text="Подписки" isOpen={isOpen} />
        </div>

        <Separator className="my-2" />

        <div>
          <SidebarItem icon={<PlaySquare />} text="Библиотека" isOpen={isOpen} />
          <SidebarItem icon={<History />} text="История" isOpen={isOpen} />
          <SidebarItem icon={<Clock />} text="Смотреть позже" isOpen={isOpen} />
          <SidebarItem icon={<ThumbsUp />} text="Понравившиеся" isOpen={isOpen} />
        </div>

        {isOpen && (
          <>
            <Separator className="my-2" />
            
            <div className="px-3 py-2">
              <h3 className="font-medium text-sm mb-2">Рекомендации</h3>
              <SidebarItem icon={<Clapperboard />} text="Фильмы" isOpen={isOpen} />
              <SidebarItem icon={<Music2 />} text="Музыка" isOpen={isOpen} />
              <SidebarItem icon={<Radio />} text="Трансляции" isOpen={isOpen} />
              <SidebarItem icon={<Gamepad2 />} text="Игры" isOpen={isOpen} />
              <SidebarItem icon={<Newspaper />} text="Новости" isOpen={isOpen} />
              <SidebarItem icon={<Trophy />} text="Спорт" isOpen={isOpen} />
              <SidebarItem icon={<Lightbulb />} text="Обучение" isOpen={isOpen} />
              <SidebarItem icon={<Shirt />} text="Мода" isOpen={isOpen} />
            </div>

            <Separator className="my-2" />

            <div>
              <SidebarItem icon={<Settings />} text="Настройки" isOpen={isOpen} />
              <SidebarItem icon={<Flag />} text="Жалобы" isOpen={isOpen} />
              <SidebarItem icon={<HelpCircle />} text="Справка" isOpen={isOpen} />
            </div>
          </>
        )}
      </nav>
    </aside>
  );
};

interface SidebarItemProps {
  icon: React.ReactNode;
  text: string;
  isOpen: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text, isOpen }) => {
  return (
    <Button
      variant="ghost"
      className={`
        w-full justify-start font-normal my-1
        ${isOpen ? "px-3" : "px-2 justify-center"}
      `}
    >
      <span className="mr-2">{icon}</span>
      {isOpen && <span>{text}</span>}
    </Button>
  );
};

export default Sidebar;