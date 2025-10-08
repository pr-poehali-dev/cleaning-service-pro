import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { Card, CardContent } from '@/components/ui/card';

const menuItems = [
  { icon: 'Home', label: 'Главная', active: false },
  { icon: 'ShoppingBag', label: 'Каталог услуг', active: true },
  { icon: 'Package', label: 'Мои заказы', active: false },
  { icon: 'Star', label: 'Отзывы', active: false }
];

const myDataItems = [
  { icon: 'CreditCard', label: 'Мои платежи', active: false },
  { icon: 'MapPin', label: 'Мои адреса', active: false },
  { icon: 'Settings', label: 'Настройки', active: false }
];

const reviews = [
  {
    id: 1,
    author: 'Екатерина Скорикова',
    avatar: 'Е',
    color: '#FF4800',
    rating: 5,
    date: '1 октября',
    text: 'Ребятам даже не 5 звёзд, а 10. Почистили диван, которому уже лет 11, он как новый. Хотя, предупредили, что какие то пятна могут не вывести, но случилось чудо, и диван новый) Рекомендую...'
  },
  {
    id: 2,
    author: 'Екатерина Скорикова',
    avatar: 'Е',
    color: '#1FD6A4',
    rating: 5,
    date: '1 октября',
    text: 'Ребятам даже не 5 звёзд, а 10. Почистили диван, которому уже лет 11, он как новый. Хотя, предупредили, что какие то пятна могут не вывести, но случилось чудо, и диван новый) Рекомендую...'
  }
];

export default function CleanerDetails() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAllReviews, setShowAllReviews] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFB] flex">
      {/* Sidebar */}
      <div className="w-[280px] bg-white h-screen sticky top-0 flex flex-col">
        <div className="p-6 border-b border-[#32475521]">
          <div className="flex items-center gap-2 mb-8">
            <img src="https://cdn.poehali.dev/files/2ba51ccf-bab3-45e8-b09d-908e57367562.png" alt="Cleaner Logo" className="w-[24px] h-[24px]" />
            <div className="flex flex-col">
              <span className="text-[24px] font-bold tracking-[-0.05em] text-[#324755] leading-none" style={{ fontFamily: 'Montserrat, sans-serif' }}>Cleaner</span>
              <span className="text-[12px] tracking-[-0.03em] text-[#324755]/70" style={{ fontFamily: 'Manrope, sans-serif' }}>Личный кабинет</span>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="p-4">
            <div className="mb-6">
              <p className="text-[11px] font-medium text-[#324755]/50 uppercase tracking-wider mb-3 px-3">ГЛАВНОЕ МЕНЮ</p>
              <div className="space-y-1">
                {menuItems.map((item, idx) => (
                  <button
                    key={idx}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-[12px] transition-all ${
                      item.active 
                        ? 'bg-[#1FD6A4]/10 text-[#324755]' 
                        : 'text-[#324755]/60 hover:bg-[#F8FAFB]'
                    }`}
                  >
                    <Icon name={item.icon as any} size={20} className={item.active ? 'text-[#1FD6A4]' : ''} />
                    <span className="text-[15px] font-medium">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[11px] font-medium text-[#324755]/50 uppercase tracking-wider mb-3 px-3">МОИ ДАННЫЕ</p>
              <div className="space-y-1">
                {myDataItems.map((item, idx) => (
                  <button
                    key={idx}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-[12px] text-[#324755]/60 hover:bg-[#F8FAFB] transition-all"
                  >
                    <Icon name={item.icon as any} size={20} />
                    <span className="text-[15px] font-medium">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-[#32475521]">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-[12px] text-[#C91E1E] hover:bg-[#C91E1E]/5 transition-all">
            <Icon name="LogOut" size={20} />
            <span className="text-[15px] font-medium">Выйти</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <div className="bg-white border-b border-[#32475521] sticky top-0 z-10">
          <div className="px-8 py-4 flex items-center justify-between">
            <div className="relative flex-1 max-w-[500px]">
              <Icon name="Search" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#324755]/40" />
              <Input
                placeholder="Поиск по сайту"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-[48px] rounded-[12px] border-[#32475521] bg-[#F8FAFB]"
              />
            </div>

            <div className="flex items-center gap-4">
              <button className="w-[48px] h-[48px] rounded-full bg-[#1FD6A4] flex items-center justify-center text-white font-semibold text-[18px]">
                С
              </button>
              <button className="w-[48px] h-[48px] rounded-full bg-[#F8FAFB] flex items-center justify-center hover:bg-[#32475521] transition-colors">
                <Icon name="Bell" size={20} className="text-[#324755]" />
              </button>
              <div className="flex items-center gap-3">
                <div className="w-[48px] h-[48px] rounded-full bg-[#324755] flex items-center justify-center text-white font-semibold text-[18px]">
                  И
                </div>
                <div>
                  <p className="text-[15px] font-semibold text-[#324755]">Иван Иванов</p>
                  <p className="text-[13px] text-[#324755]/60">Клиент Cleaner</p>
                </div>
                <Icon name="ChevronDown" size={20} className="text-[#324755]/60" />
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="mb-6">
            <div className="flex items-center gap-2 text-[14px] text-[#324755]/60 mb-4">
              <span>Главная</span>
              <Icon name="ChevronRight" size={16} />
              <span>Каталог услуг</span>
              <Icon name="ChevronRight" size={16} />
              <span className="text-[#324755] font-medium">Найти исполнителя</span>
            </div>
            <h1 className="text-[32px] font-semibold text-[#324755]">Найти исполнителя</h1>
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Button className="bg-white border border-[#32475521] text-[#324755] hover:bg-[#F8FAFB] rounded-[12px] h-[44px] px-6">
                Поиск услуги
              </Button>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="outline" className="border-[#32475521] text-[#324755] hover:bg-[#F8FAFB] rounded-[12px] h-[44px] px-5">
                <Icon name="Filter" size={18} className="mr-2" />
                Фильтры
              </Button>
              <Button variant="outline" className="border-[#32475521] text-[#324755] hover:bg-[#F8FAFB] rounded-[12px] h-[44px] px-5">
                <Icon name="SlidersHorizontal" size={18} className="mr-2" />
                Сортировать
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-[1fr_400px] gap-6">
            {/* Main Card */}
            <div>
              <Card className="border-[#32475521] mb-6">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-[80px] h-[80px] rounded-full bg-[#324755] flex items-center justify-center text-white font-semibold text-[36px]">
                      И
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h2 className="text-[24px] font-semibold text-[#324755] mb-1">Иван Иванов</h2>
                          <p className="text-[16px] text-[#324755]/60">Клинер Cleaner</p>
                        </div>
                        <button className="w-[40px] h-[40px] rounded-full bg-[#1FD6A4] flex items-center justify-center">
                          <Icon name="Check" size={20} className="text-white" />
                        </button>
                      </div>
                      <div className="flex items-center gap-3 mt-3">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Icon key={i} name="Star" size={16} className="text-[#FFCC00] fill-[#FFCC00]" />
                          ))}
                        </div>
                        <span className="text-[16px] font-semibold text-[#324755]">5.0</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-[16px] text-[#324755]/80 mb-6">
                    Работаю в сфере клининга 4 года. Специализируюсь на генеральных уборках и мытье после ремонта. Убираю и мытье после ремонта. Убираю в мытье после ремонта. 
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-[#F8FAFB] rounded-[12px] p-4 text-center">
                      <p className="text-[14px] text-[#324755]/60 mb-1">Опыт</p>
                      <p className="text-[18px] font-semibold text-[#324755]">4 года</p>
                    </div>
                    <div className="bg-[#F8FAFB] rounded-[12px] p-4 text-center">
                      <p className="text-[14px] text-[#324755]/60 mb-1">Заказов</p>
                      <p className="text-[18px] font-semibold text-[#324755]">127</p>
                    </div>
                    <div className="bg-[#F8FAFB] rounded-[12px] p-4 text-center">
                      <p className="text-[14px] text-[#324755]/60 mb-1">Рейтинг</p>
                      <p className="text-[18px] font-semibold text-[#324755]">5.0</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-[18px] font-semibold text-[#324755] mb-3">Услуги</h3>
                    <div className="flex flex-wrap gap-2">
                      {['#Уборка', '#Окна', '#Клининг(ы)', '#Стирка', '#Глажка'].map((tag, idx) => (
                        <span key={idx} className="px-4 py-2 bg-[#F8FAFB] text-[#324755] text-[14px] rounded-[10px]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Reviews */}
              <Card className="border-[#32475521]">
                <CardContent className="p-8">
                  <h3 className="text-[20px] font-semibold text-[#324755] mb-6">Отзывы клиентов</h3>
                  
                  <div className="space-y-6">
                    {reviews.map((review) => (
                      <div key={review.id} className="pb-6 border-b border-[#32475521] last:border-0">
                        <div className="flex items-start gap-4">
                          <div 
                            className="w-[48px] h-[48px] rounded-full flex items-center justify-center text-white font-semibold text-[18px] flex-shrink-0"
                            style={{ backgroundColor: review.color }}
                          >
                            {review.avatar}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="text-[16px] font-semibold text-[#324755]">{review.author}</h4>
                              <span className="text-[14px] text-[#324755]/60">{review.date}</span>
                            </div>
                            <div className="flex items-center gap-1 mb-3">
                              {[...Array(5)].map((_, i) => (
                                <Icon key={i} name="Star" size={14} className="text-[#FFCC00] fill-[#FFCC00]" />
                              ))}
                            </div>
                            <p className="text-[15px] text-[#324755]/80">{review.text}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Booking Card */}
            <div className="sticky top-24">
              <Card className="border-[#32475521]">
                <CardContent className="p-6">
                  <div className="bg-[#1FD6A4] rounded-[16px] p-6 mb-6">
                    <h3 className="text-[20px] font-semibold text-white mb-4">Иван Иванов</h3>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Icon key={i} name="Star" size={14} className="text-[#FFCC00] fill-[#FFCC00]" />
                        ))}
                      </div>
                      <span className="text-[16px] font-semibold text-white">5.0</span>
                    </div>
                    <p className="text-[14px] text-white/90">Клинер Cleaner</p>
                  </div>

                  <Button className="w-full bg-[#1FD6A4] hover:bg-[#1FD6A4]/90 text-white rounded-[12px] h-[52px] font-semibold mb-4">
                    Быстрое бронирование
                  </Button>

                  <div className="space-y-3">
                    <button className="w-full flex items-center justify-center gap-2 py-3 text-[#324755] hover:bg-[#F8FAFB] rounded-[12px] transition-colors">
                      <Icon name="MessageCircle" size={18} />
                      <span className="text-[15px] font-medium">Написать сообщение</span>
                    </button>
                    <button className="w-full flex items-center justify-center gap-2 py-3 text-[#324755] hover:bg-[#F8FAFB] rounded-[12px] transition-colors">
                      <Icon name="Phone" size={18} />
                      <span className="text-[15px] font-medium">Позвонить</span>
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Not Found Block */}
          <div className="bg-gradient-to-br from-[#0294FE] to-[#0294FE]/80 rounded-[24px] p-12 text-center relative overflow-hidden mt-8">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl" />
              <div className="absolute top-20 right-20 w-24 h-24 bg-white rounded-full blur-2xl" />
            </div>
            <div className="relative z-10">
              <h2 className="text-[28px] font-semibold text-white mb-3">Не нашли исполнителя?</h2>
              <p className="text-[16px] text-white/90 mb-6">Оформите персонализированный заказ</p>
              <Button className="bg-[#324755] hover:bg-[#324755]/90 text-white rounded-[12px] h-[52px] px-8 font-medium">
                Создать персональный заказ
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
