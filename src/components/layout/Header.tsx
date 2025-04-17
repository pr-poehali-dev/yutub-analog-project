import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { 
  Search, 
  Menu, 
  Mic, 
  Video, 
  Bell, 
  User
} from "lucide-react";

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="main-header">
      <div className="h-16 flex items-center justify-between px-4">
        {/* Левая часть с логотипом и кнопкой меню */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={toggleSidebar}>
            <Menu className="h-5 w-5" />
          </Button>
          <Link to="/" className="flex items-center">
            <div className="flex items-center">
              <img 
                src="https://cdn.poehali.dev/files/e3ff7589-c248-44c8-ba78-5b145de7bc81.png" 
                alt="Ютуб" 
                className="h-8"
              />
            </div>
          </Link>
        </div>

        {/* Центральная часть с поиском */}
        <div className="hidden md:flex items-center flex-1 max-w-2xl mx-4">
          <div className="relative flex w-full">
            <Input 
              className="rounded-r-none pr-10 border-r-0" 
              placeholder="Поиск" 
            />
            <Button 
              className="rounded-l-none bg-gray-100 hover:bg-gray-200 text-gray-700" 
              variant="outline"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
          <Button className="ml-2" size="icon" variant="ghost">
            <Mic className="h-5 w-5" />
          </Button>
        </div>

        {/* Правая часть с кнопками действий */}
        <div className="flex items-center gap-1 sm:gap-2">
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <Video className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;