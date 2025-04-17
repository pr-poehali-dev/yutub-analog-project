import React from 'react';
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";

interface VideoCardProps {
  title: string;
  channelName: string;
  views: string;
  publishedAt: string;
  thumbnailUrl: string;
  channelAvatarUrl: string;
  duration: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
  title,
  channelName,
  views,
  publishedAt,
  thumbnailUrl,
  channelAvatarUrl,
  duration
}) => {
  return (
    <Card className="video-card border-0">
      {/* Миниатюра видео */}
      <div className="relative">
        <img 
          src={thumbnailUrl} 
          alt={title} 
          className="w-full aspect-video object-cover"
        />
        {/* Продолжительность видео */}
        <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 py-0.5 rounded">
          {duration}
        </div>
      </div>
      
      {/* Информация о видео */}
      <div className="p-2 flex">
        <Avatar className="h-9 w-9 mr-3 flex-shrink-0">
          <img src={channelAvatarUrl} alt={channelName} />
        </Avatar>
        
        <div>
          <h3 className="font-medium text-sm line-clamp-2 mb-1">{title}</h3>
          <p className="text-xs text-gray-600">{channelName}</p>
          <p className="text-xs text-gray-600">
            {views} просмотров • {publishedAt}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default VideoCard;