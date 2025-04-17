import React from 'react';
import VideoCard from './VideoCard';

// Временные данные для видео
const sampleVideos = [
  {
    id: 1,
    title: 'Космическая одиссея: как исследуют Марс в 2024 году',
    channelName: 'Космо ТВ',
    views: '1,2 млн',
    publishedAt: '2 дня назад',
    thumbnailUrl: '/placeholder.svg',
    channelAvatarUrl: '/placeholder.svg',
    duration: '10:28'
  },
  {
    id: 2,
    title: 'Топ-10 самых красивых мест России, которые стоит посетить',
    channelName: 'РусТур',
    views: '845 тыс.',
    publishedAt: '5 дней назад',
    thumbnailUrl: '/placeholder.svg',
    channelAvatarUrl: '/placeholder.svg',
    duration: '15:47'
  },
  {
    id: 3,
    title: 'Учим программирование с нуля: TypeScript для начинающих',
    channelName: 'КодМастер',
    views: '326 тыс.',
    publishedAt: '1 неделю назад',
    thumbnailUrl: '/placeholder.svg',
    channelAvatarUrl: '/placeholder.svg',
    duration: '25:12'
  },
  {
    id: 4,
    title: 'Рецепт идеального борща: секреты от шеф-повара',
    channelName: 'Вкусно и Точка',
    views: '1,5 млн',
    publishedAt: '3 дня назад',
    thumbnailUrl: '/placeholder.svg',
    channelAvatarUrl: '/placeholder.svg',
    duration: '12:33'
  },
  {
    id: 5,
    title: 'История России: от Рюрика до наших дней за 20 минут',
    channelName: 'История.РФ',
    views: '2,1 млн',
    publishedAt: '2 недели назад',
    thumbnailUrl: '/placeholder.svg',
    channelAvatarUrl: '/placeholder.svg',
    duration: '20:05'
  },
  {
    id: 6,
    title: 'Искусственный интеллект: угроза или благо для человечества?',
    channelName: 'Технологии Будущего',
    views: '678 тыс.',
    publishedAt: '4 дня назад',
    thumbnailUrl: '/placeholder.svg',
    channelAvatarUrl: '/placeholder.svg',
    duration: '18:47'
  },
  {
    id: 7,
    title: 'Как правильно ухаживать за комнатными растениями',
    channelName: 'Зеленый Дом',
    views: '423 тыс.',
    publishedAt: '1 день назад',
    thumbnailUrl: '/placeholder.svg',
    channelAvatarUrl: '/placeholder.svg',
    duration: '8:15'
  },
  {
    id: 8,
    title: 'Обзор новейших смартфонов 2024 года',
    channelName: 'ТехноГид',
    views: '1,8 млн',
    publishedAt: '6 дней назад',
    thumbnailUrl: '/placeholder.svg',
    channelAvatarUrl: '/placeholder.svg',
    duration: '14:22'
  }
];

const VideoGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {sampleVideos.map((video) => (
        <VideoCard
          key={video.id}
          videoId={video.id}
          title={video.title}
          channelName={video.channelName}
          views={video.views}
          publishedAt={video.publishedAt}
          thumbnailUrl={video.thumbnailUrl}
          channelAvatarUrl={video.channelAvatarUrl}
          duration={video.duration}
        />
      ))}
    </div>
  );
};

export default VideoGrid;