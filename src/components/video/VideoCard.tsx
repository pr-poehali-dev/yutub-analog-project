import React from 'react';
import { Link } from 'react-router-dom';
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
  videoId?: number | string;
}

const VideoCard: React.FC<VideoCardProps> = ({
  title,
  channelName,
  views,
  publishedAt,
  thumbnailUrl,
  channelAvatarUrl,
  duration,
  videoId = 1
}) => {
  return (
    <Card className="video-card border-0">
      {/* Миниатюра видео */}
      <Link to={`/video/${videoId}`}>
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
      </Link>
      
      {/* Информация о видео */}
      <div className="p-2 flex">
        <Avatar className="h-9 w-9 mr-3 flex-shrink-0">
          <img src={channelAvatarUrl} alt={channelName} />
        </Avatar>
        
        <div>
          <Link to={`/video/${videoId}`}>
            <h3 className="font-medium text-sm line-clamp-2 mb-1 hover:text-yutub-primary">{title}</h3>
          </Link>
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