import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { 
  ThumbsUp, 
  ThumbsDown, 
  Share2, 
  Download, 
  MoreHorizontal, 
  MessageSquare, 
  Bell
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import VideoCard from '@/components/video/VideoCard';

// Временные данные видео
const videoData = {
  id: '1',
  title: 'Космическая одиссея: как исследуют Марс в 2024 году',
  views: '1 245 678',
  publishedAt: '10 апр. 2024 г.',
  likes: '75 тыс.',
  description: `Исследование Марса достигло новых высот в 2024 году. В этом видео мы рассмотрим:
    
    • Новейшие технологии исследования Красной планеты
    • Результаты последних миссий и открытия
    • Планы по колонизации и будущие экспедиции
    • Значение марсианских исследований для науки
    
    Подписывайтесь на наш канал, чтобы не пропустить новые видео о космосе и технологиях!`,
  channel: {
    name: 'Космо ТВ',
    subscribers: '1,2 млн',
    avatar: '/placeholder.svg'
  },
  comments: [
    {
      id: '1',
      author: 'Александр Петров',
      avatar: '/placeholder.svg',
      content: 'Потрясающее видео! Всегда мечтал узнать больше о Марсе и возможности его исследования. Жду продолжения серии!',
      publishedAt: '2 дня назад',
      likes: '243'
    },
    {
      id: '2',
      author: 'Екатерина Иванова',
      avatar: '/placeholder.svg',
      content: 'Очень информативно и доступно объяснили сложные вещи. Теперь я лучше понимаю, как происходит исследование Марса.',
      publishedAt: '5 дней назад',
      likes: '128'
    },
    {
      id: '3',
      author: 'Дмитрий Соколов',
      avatar: '/placeholder.svg',
      content: 'А когда будет видео про исследование Венеры? Было бы интересно сравнить подходы к изучению разных планет.',
      publishedAt: '1 неделю назад',
      likes: '56'
    }
  ]
};

// Временные данные для рекомендованных видео
const recommendedVideos = [
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
  }
];

const VideoPage: React.FC = () => {
  const { videoId } = useParams<{ videoId: string }>();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleSubscribe = () => {
    setIsSubscribed(!isSubscribed);
  };

  return (
    <div className="min-h-screen bg-yutub-background">
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} />
      
      <main 
        className={`
          pt-4 pb-10 px-4 transition-all duration-300
          ${isSidebarOpen ? 'ml-64' : 'ml-0'}
        `}
      >
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Секция с видео и информацией */}
          <div className="lg:col-span-2">
            {/* Плеер */}
            <div className="aspect-video bg-black mb-4 rounded-md flex items-center justify-center">
              <div className="text-white">
                <p className="text-center">Видео: {videoId || videoData.id}</p>
                <p className="text-xl text-center mt-2">{videoData.title}</p>
              </div>
            </div>
            
            {/* Информация о видео */}
            <div>
              <h1 className="text-xl font-bold mb-2">{videoData.title}</h1>
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <img src={videoData.channel.avatar} alt={videoData.channel.name} />
                  </Avatar>
                  <div>
                    <h3 className="font-medium">{videoData.channel.name}</h3>
                    <p className="text-sm text-gray-600">{videoData.channel.subscribers} подписчиков</p>
                  </div>
                  <Button 
                    className={`ml-4 rounded-full ${isSubscribed ? 'bg-gray-200 text-gray-800' : 'bg-yutub-secondary text-white'}`}
                    onClick={toggleSubscribe}
                  >
                    {isSubscribed ? (
                      <><Bell className="h-4 w-4 mr-1" /> Подписка оформлена</>
                    ) : (
                      'Подписаться'
                    )}
                  </Button>
                </div>
                
                <div className="flex flex-wrap items-center gap-2">
                  <div className="flex rounded-full bg-gray-100 overflow-hidden">
                    <Button variant="ghost" className="rounded-r-none border-r border-gray-300">
                      <ThumbsUp className="h-4 w-4 mr-1" /> {videoData.likes}
                    </Button>
                    <Button variant="ghost" className="rounded-l-none">
                      <ThumbsDown className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <Button variant="ghost" className="rounded-full">
                    <Share2 className="h-4 w-4 mr-1" /> Поделиться
                  </Button>
                  
                  <Button variant="ghost" className="rounded-full">
                    <Download className="h-4 w-4 mr-1" /> Скачать
                  </Button>
                  
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <MoreHorizontal className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              
              {/* Информация о просмотрах */}
              <div className="bg-gray-100 rounded-lg p-3 mb-6">
                <p className="font-medium">{videoData.views} просмотров • {videoData.publishedAt}</p>
                <p className="whitespace-pre-line mt-2">{videoData.description}</p>
              </div>
              
              {/* Комментарии */}
              <div>
                <Tabs defaultValue="comments">
                  <TabsList className="mb-4">
                    <TabsTrigger value="comments">
                      Комментарии ({videoData.comments.length})
                    </TabsTrigger>
                    <TabsTrigger value="info">
                      Дополнительная информация
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="comments">
                    <div className="flex gap-3 mb-6">
                      <Avatar className="h-10 w-10">
                        <img src="/placeholder.svg" alt="Ваш аватар" />
                      </Avatar>
                      <div className="flex-1">
                        <input 
                          type="text" 
                          placeholder="Добавить комментарий..." 
                          className="w-full p-2 border-b border-gray-300 focus:border-yutub-primary focus:outline-none"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      {videoData.comments.map(comment => (
                        <div key={comment.id} className="flex gap-3">
                          <Avatar className="h-10 w-10 flex-shrink-0">
                            <img src={comment.avatar} alt={comment.author} />
                          </Avatar>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{comment.author}</span>
                              <span className="text-sm text-gray-600">{comment.publishedAt}</span>
                            </div>
                            <p className="mt-1">{comment.content}</p>
                            <div className="flex items-center mt-2 text-sm">
                              <Button variant="ghost" size="sm" className="h-8 px-2">
                                <ThumbsUp className="h-4 w-4 mr-1" /> {comment.likes}
                              </Button>
                              <Button variant="ghost" size="sm" className="h-8 px-2">
                                <ThumbsDown className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm" className="h-8 px-2">
                                Ответить
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="info">
                    <div className="bg-gray-100 rounded-lg p-3">
                      <h3 className="font-medium mb-2">Подробная информация</h3>
                      <p className="text-sm mb-2">
                        <span className="font-medium">Категория:</span> Наука и технологии
                      </p>
                      <p className="text-sm mb-2">
                        <span className="font-medium">Лицензия:</span> Стандартная лицензия Ютуб
                      </p>
                      <p className="text-sm mb-2">
                        <span className="font-medium">Дата загрузки:</span> {videoData.publishedAt}
                      </p>
                      <p className="text-sm">
                        <span className="font-medium">Теги:</span> космос, марс, исследования, наука, технологии
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
          
          {/* Рекомендации */}
          <div className="space-y-4">
            <h3 className="font-medium">Рекомендуемые видео</h3>
            <div className="space-y-4">
              {recommendedVideos.map(video => (
                <VideoCard
                  key={video.id}
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
          </div>
        </div>
      </main>
    </div>
  );
};

export default VideoPage;