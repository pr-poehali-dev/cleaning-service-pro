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

const cleaners = [
  {
    id: 1,
    name: 'Иван Иванов',
    role: 'Клинер Cleaner',
    rating: 5.0,
    reviews: 4,
    experience: '4 года',
    description: 'Работаю в сфере клининга 4 года. Специализируюсь на генеральных уборках и мытье после ремонта...',
    tags: ['#Уборка', '#Окна', '#Клининг(ы)', '#Стирка', '#Глажка'],
    avatar: 'И',
    color: '#324755'
  },
  {
    id: 2,
    name: 'Иван Иванов',
    role: 'Клинер Cleaner',
    rating: 5.0,
    reviews: 4,
    experience: '4 года',
    description: 'Работаю в сфере клининга 4 года. Специализируюсь на генеральных уборках и мытье после ремонта...',
    tags: ['#Уборка', '#Окна', '#Клининг(ы)', '#Стирка', '#Глажка'],
    avatar: 'И',
    color: '#324755'
  },
  {
    id: 3,
    name: 'Иван Иванов',
    role: 'Клинер Cleaner',
    rating: 5.0,
    reviews: 4,
    experience: '4 года',
    description: 'Работаю в сфере клининга 4 года. Специализируюсь на генеральных уборках и мытье после ремонта...',
    tags: ['#Уборка', '#Окна', '#Клининг(ы)', '#Стирка', '#Глажка'],
    avatar: 'И',
    color: '#324755'
  },
  {
    id: 4,
    name: 'Иван Иванов',
    role: 'Клинер Cleaner',
    rating: 5.0,
    reviews: 4,
    experience: '4 года',
    description: 'Работаю в сфере клининга 4 года. Специализируюсь на генеральных уборках и мытье после ремонта...',
    tags: ['#Уборка', '#Окна', '#Клининг(ы)', '#Стирка', '#Глажка'],
    avatar: 'И',
    color: '#324755'
  },
  {
    id: 5,
    name: 'Иван Иванов',
    role: 'Клинер Cleaner',
    rating: 5.0,
    reviews: 4,
    experience: '4 года',
    description: 'Работаю в сфере клининга 4 года. Специализируюсь на генеральных уборках и мытье после ремонта...',
    tags: ['#Уборка', '#Окна', '#Клининг(ы)', '#Стирка', '#Глажка'],
    avatar: 'И',
    color: '#324755'
  },
  {
    id: 6,
    name: 'Иван Иванов',
    role: 'Клинер Cleaner',
    rating: 5.0,
    reviews: 4,
    experience: '4 года',
    description: 'Работаю в сфере клининга 4 года. Специализируюсь на генеральных уборках и мытье после ремонта...',
    tags: ['#Уборка', '#Окна', '#Клининг(ы)', '#Стирка', '#Глажка'],
    avatar: 'И',
    color: '#324755'
  },
  {
    id: 7,
    name: 'Иван Иванов',
    role: 'Клинер Cleaner',
    rating: 5.0,
    reviews: 4,
    experience: '4 года',
    description: 'Работаю в сфере клининга 4 года. Специализируюсь на генеральных уборках и мытье после ремонта...',
    tags: ['#Уборка', '#Окна', '#Клининг(ы)', '#Стирка', '#Глажка'],
    avatar: 'И',
    color: '#324755'
  },
  {
    id: 8,
    name: 'Иван Иванов',
    role: 'Клинер Cleaner',
    rating: 5.0,
    reviews: 4,
    experience: '4 года',
    description: 'Работаю в сфере клининга 4 года. Специализируюсь на генеральных уборках и мытье после ремонта...',
    tags: ['#Уборка', '#Окна', '#Клининг(ы)', '#Стирка', '#Глажка'],
    avatar: 'И',
    color: '#324755'
  }
];

export default function FindCleaner() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

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
              <span className="text-[#324755] font-medium">Каталог услуг</span>
            </div>
            <h1 className="text-[32px] font-semibold text-[#324755]">Найти исполнителя</h1>
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Button className="bg-white border border-[#32475521] text-[#324755] hover:bg-[#F8FAFB] rounded-[12px] h-[44px] px-6">
                Поиск услуги
              </Button>
              <Button className="bg-[#0294FE] hover:bg-[#0294FE]/90 text-white rounded-[12px] h-[44px] px-6">
                <Icon name="Search" size={18} className="mr-2" />
                Найти клинера
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

          <div className="grid grid-cols-2 gap-6 mb-8">
            {cleaners.map((cleaner) => (
              <Card key={cleaner.id} className="border-[#32475521] hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-[56px] h-[56px] rounded-full flex items-center justify-center text-white font-semibold text-[24px]`} style={{ backgroundColor: cleaner.color }}>
                      {cleaner.avatar}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[18px] font-semibold text-[#324755] mb-1">{cleaner.name}</h3>
                      <p className="text-[14px] text-[#324755]/60 mb-2">{cleaner.role}</p>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Icon key={i} name="Star" size={14} className="text-[#FFCC00] fill-[#FFCC00]" />
                          ))}
                        </div>
                        <span className="text-[14px] font-semibold text-[#324755]">{cleaner.rating}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-[14px] text-[#324755]/80 mb-4 line-clamp-2">{cleaner.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {cleaner.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-[#F8FAFB] text-[#324755] text-[13px] rounded-[8px]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button className="w-full bg-[#1FD6A4] hover:bg-[#1FD6A4]/90 text-white rounded-[12px] h-[48px] font-medium">
                    Быстрое бронирование
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <button className="w-[36px] h-[36px] flex items-center justify-center rounded-[8px] hover:bg-[#F8FAFB] transition-colors">
              <Icon name="ChevronLeft" size={18} className="text-[#324755]/60" />
            </button>
            {[1, 2, 3, 4].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-[36px] h-[36px] flex items-center justify-center rounded-[8px] text-[14px] font-medium transition-colors ${
                  currentPage === page
                    ? 'bg-[#0294FE] text-white'
                    : 'text-[#324755]/60 hover:bg-[#F8FAFB]'
                }`}
              >
                {page}
              </button>
            ))}
            <button className="w-[36px] h-[36px] flex items-center justify-center rounded-[8px] hover:bg-[#F8FAFB] transition-colors">
              <Icon name="ChevronRight" size={18} className="text-[#324755]/60" />
            </button>
          </div>

          {/* Not Found Block */}
          <div className="bg-gradient-to-br from-[#0294FE] to-[#0294FE]/80 rounded-[24px] p-12 text-center relative overflow-hidden">
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
