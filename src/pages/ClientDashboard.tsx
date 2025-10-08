import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { Card, CardContent } from '@/components/ui/card';

const menuItems = [
  { icon: 'Home', label: 'Главная', active: true },
  { icon: 'ShoppingBag', label: 'Каталог услуг', active: false },
  { icon: 'Package', label: 'Мои заказы', active: false },
  { icon: 'Star', label: 'Отзывы', active: false }
];

const myDataItems = [
  { icon: 'CreditCard', label: 'Мои платежи', active: false },
  { icon: 'MapPin', label: 'Мои адреса', active: false },
  { icon: 'Settings', label: 'Настройки', active: false }
];

const dashboardCards = [
  { icon: 'Package', title: 'Мои заказы', subtitle: 'История активных заказов', color: '#0294FE' },
  { icon: 'ShoppingBag', title: 'Каталог услуг', subtitle: 'Выберите подходящую услугу', color: '#0294FE' },
  { icon: 'CreditCard', title: 'Мои платежи', subtitle: 'История и способы оплаты', color: '#0294FE' },
  { icon: 'MapPin', title: 'Мои адреса', subtitle: 'Сохраненные адреса услуг', color: '#0294FE' },
  { icon: 'Star', title: 'Отзывы', subtitle: 'Оставьте и прочитайте отзывы', color: '#0294FE' },
  { icon: 'MessageCircle', title: 'Уведомления', subtitle: 'Все ваши уведомления', color: '#0294FE' },
  { icon: 'Settings', title: 'Настройки', subtitle: 'Параметры и личные данные', color: '#0294FE' }
];

export default function ClientDashboard() {
  const [searchQuery, setSearchQuery] = useState('');

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

        {/* Dashboard Content */}
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-[32px] font-semibold text-[#324755] mb-2">Привет, Иван Иванов!</h1>
            <p className="text-[16px] text-[#324755]/60">Управляйте своими заказами и сервисами в одном окне</p>
          </div>

          <div className="grid grid-cols-4 gap-6 mb-8">
            {dashboardCards.slice(0, 4).map((card, idx) => (
              <Card key={idx} className="border-[#32475521] hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-6">
                  <div className="w-[48px] h-[48px] rounded-[12px] bg-[#0294FE]/10 flex items-center justify-center mb-4 group-hover:bg-[#0294FE]/20 transition-colors">
                    <Icon name={card.icon as any} size={24} className="text-[#0294FE]" />
                  </div>
                  <h3 className="text-[18px] font-semibold text-[#324755] mb-1">{card.title}</h3>
                  <p className="text-[14px] text-[#324755]/60">{card.subtitle}</p>
                  <Icon name="ArrowRight" size={20} className="text-[#324755]/40 mt-4 group-hover:translate-x-1 transition-transform" />
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-4 gap-6">
            {dashboardCards.slice(4).map((card, idx) => (
              <Card key={idx} className="border-[#32475521] hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-6">
                  <div className="w-[48px] h-[48px] rounded-[12px] bg-[#0294FE]/10 flex items-center justify-center mb-4 group-hover:bg-[#0294FE]/20 transition-colors">
                    <Icon name={card.icon as any} size={24} className="text-[#0294FE]" />
                  </div>
                  <h3 className="text-[18px] font-semibold text-[#324755] mb-1">{card.title}</h3>
                  <p className="text-[14px] text-[#324755]/60">{card.subtitle}</p>
                  <Icon name="ArrowRight" size={20} className="text-[#324755]/40 mt-4 group-hover:translate-x-1 transition-transform" />
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Action Button */}
          <div className="fixed bottom-8 right-8">
            <Button className="bg-[#1FD6A4] hover:bg-[#1FD6A4]/90 text-white rounded-full h-[64px] px-8 shadow-2xl text-[16px] font-semibold">
              <Icon name="Plus" size={24} className="mr-2" />
              Заказать уборку в пару кликов
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
