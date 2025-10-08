import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const reviewsData = [
  { id: 1, name: 'Екатерина Скорикова', badge: 'Знаток города 6 уровня', date: '1 октября', avatar: 'Е', color: '#1FD6A4', opacity: 0.6, text: 'Ребятам даже не 5 звёзд, а 10. Почистили диван, которому уже лет 11, он как новый. Хотя, предупредили, что какие то пятна могут не вывести, но случилось чудо, и диван новый) Рекомендую...', top: '219px' },
  { id: 2, name: 'Екатерина Скорикова', badge: 'Знаток города 6 уровня', date: '1 октября', avatar: 'Е', color: '#FF4800', opacity: 1, text: 'Ребятам даже не 5 звёзд, а 10. Почистили диван, которому уже лет 11, он как новый. Хотя, предупредили, что какие то пятна могут не вывести, но случилось чудо, и диван новый) Рекомендую...', top: '414px' },
  { id: 3, name: 'Екатерина Скорикова', badge: 'Знаток города 6 уровня', date: '1 октября', avatar: 'Е', color: '#72C3FF', opacity: 0.6, text: 'Ребятам даже не 5 звёзд, а 10. Почистили диван, которому уже лет 11, он как новый. Хотя, предупредили, что какие то пятна могут не вывести, но случилось чудо, и диван новый) Рекомендую...', top: '623px' }
];

const roomOptions = [
  { rooms: '1 комн', area: '45м²' },
  { rooms: '2 комн', area: '60м²' },
  { rooms: '3 комн', area: '80м²' },
  { rooms: '4 комн', area: '110м²' },
  { rooms: '5 комн', area: '150м²' },
  { rooms: '6 комн', area: '200м²' }
];

const cleaningTypes = [
  { name: 'Экспресс' },
  { name: 'Генеральная' },
  { name: 'После ремонта' },
  { name: 'После потопа' },
  { name: 'После пожара' }
];

export default function Index() {
  const [selectedRoom, setSelectedRoom] = useState(0);
  const [selectedCleaning, setSelectedCleaning] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#F8FAFB]">
      {/* Header */}
      <div className="max-w-[1400px] mx-auto px-8 pt-5">
        <header className="bg-white rounded-[30px] h-[126px] flex items-center justify-between px-10">
          <div className="flex items-center gap-2">
            <div className="relative w-[26px] h-[26px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                  <path d="M10.6 7.3C10.6 7.3 11.5 9.2 13.2 9.2C14.9 9.2 15.8 7.3 15.8 7.3" stroke="#0294FE" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M3.2 15.2C3.2 15.2 4.5 17.8 7.8 17.8C11.1 17.8 12.4 15.2 12.4 15.2" stroke="#0294FE" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M14.3 19.5C14.3 19.5 15.2 21.4 16.9 21.4C18.6 21.4 19.5 19.5 19.5 19.5" stroke="#0294FE" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-[32px] font-bold tracking-[-0.05em] text-[#324755] leading-none" style={{ fontFamily: 'Montserrat, sans-serif' }}>Cleaner</span>
              <span className="text-[14px] tracking-[-0.03em] text-[#324755]/84" style={{ fontFamily: 'Manrope, sans-serif' }}>Для клинеров и заказчиков</span>
            </div>
          </div>

          <nav className="flex items-center gap-[55px]">
            <Button className="bg-[#1FD6A4] hover:bg-[#1FD6A4]/90 text-white rounded-[15px] h-[60px] px-10 font-medium text-[16px] tracking-[-0.02em]">
              <Icon name="Calculator" size={20} className="mr-2" />
              Калькулятор
            </Button>
            <button className="text-[18px] text-[#324755]/60 tracking-[-0.02em]">О платформе</button>
            <button className="text-[18px] text-[#324755]/60 tracking-[-0.02em]">FAQ</button>
            <button className="text-[18px] text-[#324755]/60 tracking-[-0.02em]">Отзывы</button>
          </nav>

          <div className="flex items-center gap-[38px]">
            <button className="text-[18px] text-[#324755] tracking-[-0.02em]">Войти</button>
            <Button className="bg-[#324755] hover:bg-[#324755]/90 text-white rounded-[15px] h-[71px] px-10 font-medium text-[18px] tracking-[-0.02em]">
              Регистрация
            </Button>
          </div>
        </header>
      </div>

      {/* Hero Section */}
      <div className="max-w-[1400px] mx-auto px-8 mt-8 relative">
        <div className="flex items-center gap-3.5 mb-6">
          <div className="w-3 h-3 rounded-full bg-[#1FD6A4] shadow-[0px_4px_19px_rgba(31,214,164,0.36)]" />
          <span className="text-[16px] tracking-[-0.03em] text-[#324755]">Метчер для клинеров и заказчиков</span>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <h1 className="text-[44px] font-medium leading-[135.61%] tracking-[-0.03em] text-[#324755] mb-6 max-w-[761px]">
              Чистота, которая приходит по клику, просто выбирай услугу, и клинер уже едет к тебе
            </h1>
            
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full border-[1.3px] border-[#1FD6A4]" />
              <div className="w-3 h-3 rounded-full border-[1.3px] border-[#1FD6A4] opacity-40" />
              <div className="w-3 h-3 rounded-full border-[1.3px] border-[#1FD6A4] opacity-20" />
            </div>

            <p className="text-[20px] leading-[24px] tracking-[-0.01em] text-[#324755]/84 mb-8 max-w-[654px] ml-[67px]">
              Cleaner — это агрегатор клининговых услуг. Мы соединяем заказчиков и проверенных исполнителей, чтобы уборка проходила просто, быстро и безопасно
            </p>

            <div className="flex gap-5 mb-12">
              <Button className="bg-[#0294FE] hover:bg-[#0294FE]/90 text-white rounded-[20px] h-[100px] px-[75px] font-medium text-[20px] tracking-[-0.03em]">
                Найти клинера
              </Button>
              <Button variant="outline" className="border-[#1FD6A4]/71 text-[#324755] rounded-[20px] h-[100px] px-[75px] font-medium text-[20px] tracking-[-0.03em] hover:bg-transparent">
                Стать клинером
              </Button>
            </div>

            <div className="flex items-center gap-[69px]">
              <div>
                <div className="text-[32px] font-medium leading-[40px] text-[#324755]">10K+</div>
                <div className="text-[16px] leading-[40px] text-[#324755]">Довольных клиентов</div>
              </div>
              <div>
                <div className="text-[32px] font-medium leading-[40px] text-[#324755]">500+</div>
                <div className="text-[16px] leading-[40px] text-[#324755]">Проверенных клинеров</div>
              </div>
              <div>
                <div className="text-[32px] font-medium leading-[40px] text-[#324755]">4.9</div>
                <div className="text-[16px] leading-[40px] text-[#324755]">Средний рейтинг</div>
              </div>
            </div>
          </div>

          <div className="relative h-[600px]">
            {reviewsData.map((review, idx) => (
              <Card
                key={review.id}
                className="absolute right-0 rounded-[27px] shadow-[0px_4px_49.8px_rgba(0,0,0,0.04)] transition-all hover:scale-105"
                style={{
                  top: review.top,
                  width: idx === 1 ? '565px' : '503.5px',
                  opacity: review.opacity,
                  zIndex: idx === 1 ? 10 : 5
                }}
              >
                <CardContent className="p-7">
                  <div className="flex items-center gap-5 mb-5">
                    <div className="w-[63px] h-[63px] rounded-full flex items-center justify-center text-white text-[31px]" style={{ background: review.color }}>
                      {review.avatar}
                    </div>
                    <div>
                      <div className="text-[22px] text-[#324755] mb-2">{review.name}</div>
                      <div className="text-[16px] text-[#324755]">{review.badge}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-[18px] mb-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-[26px] h-[26px] rounded-sm bg-[#FFCC00]" />
                      ))}
                    </div>
                    <span className="text-[16px] text-[#324755]">{review.date}</span>
                  </div>

                  <p className="text-[18px] leading-[22px] text-[#324755] mb-1">{review.text}</p>
                  <button className="text-[18px] leading-[22px] text-[#324755]/60">ещё</button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="bg-white mt-20 py-20">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex items-center gap-3.5 mb-6">
            <div className="w-3 h-3 rounded-full bg-[#1FD6A4] shadow-[0px_4px_19px_rgba(31,214,164,0.36)]" />
            <span className="text-[16px] tracking-[-0.03em] text-[#324755]">Удобно и безопасно</span>
          </div>

          <h2 className="text-[44px] font-medium leading-[135.61%] tracking-[-0.03em] text-[#324755] mb-16">
            Почему тысячи клиентов выбирают Cleaner?
          </h2>

          <div className="grid grid-cols-3 gap-5">
            {[
              { icon: 'CreditCard', title: 'Безопасная оплата', desc: 'Всё через защищённую систему' },
              { icon: 'Sparkles', title: 'Быстрое бронирование', desc: 'Выбери время — и клинер уже в пути!' },
              { icon: 'Crown', title: 'Высокий рейтинг', desc: 'Оценка 4.9 по отзывам клиентов' }
            ].map((item, idx) => (
              <Card key={idx} className="bg-[#F8FAFB] border-0 rounded-[30px] p-10">
                <CardContent className="p-0">
                  <div className="w-20 h-20 bg-white rounded-[15px] flex items-center justify-center shadow-[0px_4px_40.3px_rgba(0,0,0,0.06)] mb-36">
                    <Icon name={item.icon as any} size={30} className="text-[#0294FE]" style={{ filter: 'drop-shadow(0px 4px 42.7px rgba(2, 148, 254, 0.2))' }} />
                  </div>
                  <h3 className="text-[26px] font-medium tracking-[-0.03em] text-[#324755] mb-5">{item.title}</h3>
                  <p className="text-[18px] leading-[22px] tracking-[-0.01em] text-[#324755]">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* About Platform */}
      <div className="max-w-[1400px] mx-auto px-8 py-20">
        <div className="grid grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3.5 mb-6">
              <div className="w-3 h-3 rounded-full bg-[#1FD6A4] shadow-[0px_4px_19px_rgba(31,214,164,0.36)]" />
              <span className="text-[16px] tracking-[-0.03em] text-[#324755]">О нашей платформе</span>
            </div>

            <h2 className="text-[44px] font-medium leading-[135.61%] tracking-[-0.03em] text-[#324755] mb-6">
              Мы — команда, которая делает уборку простой и удобной
            </h2>

            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full border-[1.3px] border-[#1FD6A4]" />
              <div className="w-3 h-3 rounded-full border-[1.3px] border-[#1FD6A4] opacity-40" />
              <div className="w-3 h-3 rounded-full border-[1.3px] border-[#1FD6A4] opacity-20" />
            </div>

            <p className="text-[20px] leading-[24px] tracking-[-0.01em] text-[#324755]/84 mb-6 ml-[67px]">
              Cleaner — это платформа, где клиенты и клинеры находят друг друга за пару кликов
            </p>

            <p className="text-[20px] leading-[24px] tracking-[-0.01em] text-[#324755] mb-12">
              Мы верим, что чистота дома должна быть доступной каждому, а работа клинеров честной, безопасной и с достойной оплатой
            </p>

            <div className="space-y-12">
              <div>
                <h3 className="text-[26px] font-medium leading-[40px] tracking-[-0.03em] text-[#324755] mb-4">Мы за честность</h3>
                <p className="text-[16px] leading-[19px] text-[#324755]">Все исполнители проходят проверку личности и рейтинга</p>
              </div>
              <div>
                <h3 className="text-[26px] font-medium leading-[40px] tracking-[-0.03em] text-[#324755] mb-4">Ускоряем процесс</h3>
                <p className="text-[16px] leading-[19px] text-[#324755]">Подбор и заказ клинера занимают меньше минуты</p>
              </div>
            </div>
          </div>

          <div className="h-[416px] rounded-[30px] bg-[#E1E4EB] border-[5px] border-white shadow-[0px_4px_49.8px_rgba(0,0,0,0.04)] overflow-hidden">
            <img src="https://cdn.poehali.dev/files/88b113b9-6e51-4696-95ba-29b0f7b4d2b6.png" alt="Cleaning" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Calculator Section */}
      <div className="bg-white py-20">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex items-center gap-3.5 mb-6">
            <div className="w-3 h-3 rounded-full bg-[#1FD6A4] shadow-[0px_4px_19px_rgba(31,214,164,0.36)]" />
            <span className="text-[16px] tracking-[-0.03em] text-[#324755]">Рассчитайте стоимость</span>
          </div>

          <h2 className="text-[44px] font-medium leading-[135.61%] tracking-[-0.03em] text-[#324755] mb-6">
            Узнайте точную стоимость клининга в пару кликов
          </h2>

          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full border-[1.3px] border-[#1FD6A4]" />
            <div className="w-3 h-3 rounded-full border-[1.3px] border-[#1FD6A4] opacity-40" />
            <div className="w-3 h-3 rounded-full border-[1.3px] border-[#1FD6A4] opacity-20" />
          </div>

          <p className="text-[20px] leading-[24px] tracking-[-0.01em] text-[#324755]/84 mb-12 ml-[67px]">
            Введи параметры квартиры и выбери услугу — система автоматически рассчитает цену
          </p>

          <div className="grid grid-cols-[652px,1fr] gap-8">
            <div className="space-y-12">
              <div>
                <div className="text-[16px] tracking-[-0.02em] text-[#324755] mb-4">Количество комнат:</div>
                <div className="grid grid-cols-3 gap-5 mb-5">
                  {roomOptions.slice(0, 3).map((room, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedRoom(idx)}
                      className={`h-[73px] rounded-[15px] shadow-[0px_4px_49.8px_rgba(0,0,0,0.04)] flex items-center justify-center transition-all ${
                        selectedRoom === idx ? 'bg-[#324755] text-white' : 'bg-white text-black'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-[18px] h-[18px] rounded-full border-[1.5px] ${selectedRoom === idx ? 'border-[#0294FE]' : 'border-[#324755]/46'}`} />
                        <div className="flex items-center gap-2">
                          <span className={`text-[16px] tracking-[-0.02em] ${selectedRoom === idx ? 'font-medium' : ''}`}>{room.rooms}</span>
                          <span className="text-[14px] tracking-[-0.02em]">{room.area}</span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-5">
                  {roomOptions.slice(3).map((room, idx) => (
                    <button
                      key={idx + 3}
                      onClick={() => setSelectedRoom(idx + 3)}
                      className={`h-[73px] rounded-[15px] shadow-[0px_4px_49.8px_rgba(0,0,0,0.04)] flex items-center justify-center transition-all ${
                        selectedRoom === idx + 3 ? 'bg-[#324755] text-white' : 'bg-white text-black'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-[18px] h-[18px] rounded-full border-[1.5px] ${selectedRoom === idx + 3 ? 'border-[#0294FE]' : 'border-[#324755]/46'}`} />
                        <div className="flex items-center gap-2">
                          <span className={`text-[16px] tracking-[-0.02em] ${selectedRoom === idx + 3 ? 'font-medium' : ''}`}>{room.rooms}</span>
                          <span className="text-[14px] tracking-[-0.02em]">{room.area}</span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-[16px] tracking-[-0.02em] text-[#324755] mb-4">Тип уборки:</div>
                <div className="grid grid-cols-3 gap-5 mb-5">
                  {cleaningTypes.slice(0, 3).map((type, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedCleaning(idx)}
                      className={`h-[73px] rounded-[15px] shadow-[0px_4px_49.8px_rgba(0,0,0,0.04)] flex items-center justify-center transition-all ${
                        selectedCleaning === idx ? 'bg-[#324755] text-white' : 'bg-white text-black'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-[18px] h-[18px] rounded-full border-[1.5px] ${selectedCleaning === idx ? 'border-[#0294FE]' : 'border-[#324755]/46'}`} />
                        <span className={`text-[14px] tracking-[-0.02em] ${selectedCleaning === idx ? 'font-medium' : ''}`}>{type.name}</span>
                      </div>
                    </button>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-5">
                  {cleaningTypes.slice(3).map((type, idx) => (
                    <button
                      key={idx + 3}
                      onClick={() => setSelectedCleaning(idx + 3)}
                      className={`h-[73px] rounded-[15px] shadow-[0px_4px_49.8px_rgba(0,0,0,0.04)] flex items-center justify-center transition-all ${
                        selectedCleaning === idx + 3 ? 'bg-[#324755] text-white' : 'bg-white text-black'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-[18px] h-[18px] rounded-full border-[1.5px] ${selectedCleaning === idx + 3 ? 'border-[#0294FE]' : 'border-[#324755]/46'}`} />
                        <span className={`text-[14px] tracking-[-0.02em] ${selectedCleaning === idx + 3 ? 'font-medium' : ''}`}>{type.name}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-[#1FD6A4] rounded-[30px] p-10 relative overflow-hidden">
                <div className="absolute top-10 right-10 w-[160px] h-[160px] rounded-full bg-white/17" style={{ transform: 'rotate(-145.29deg)' }} />
                <div className="absolute top-0 right-0 w-[73px] h-[73px] rounded-full bg-white/17" style={{ transform: 'rotate(-145.29deg)' }} />
                
                <h3 className="text-[24px] font-medium tracking-[-0.02em] text-white mb-12 relative z-10">
                  Уборка квартиры {roomOptions[selectedRoom].rooms} ({roomOptions[selectedRoom].area})
                </h3>

                <div className="grid grid-cols-2 gap-6 mb-6 relative z-10">
                  <div className="flex items-center gap-6">
                    <span className="text-[18px] tracking-[-0.02em] text-white">Стоимость:</span>
                    <span className="text-[18px] font-medium tracking-[-0.02em] text-white">от 6.000 ₽</span>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="text-[18px] tracking-[-0.02em] text-white">Время уборки:</span>
                    <span className="text-[18px] font-medium tracking-[-0.02em] text-white">2ч 45мин</span>
                  </div>
                </div>

                <Input placeholder="Введите имя" className="h-[70px] rounded-[20px] mb-4 relative z-10" />
                <Input placeholder="+7 (999) 999-99-99" className="h-[70px] rounded-[20px] mb-4 relative z-10" />
                
                <Button className="w-full h-[75px] bg-[#0294FE] hover:bg-[#0294FE]/90 text-white rounded-[20px] font-medium text-[16px] tracking-[-0.03em] mb-4 relative z-10">
                  Заказать уборку
                </Button>

                <p className="text-[13px] leading-[135.61%] tracking-[-0.03em] text-white/68 text-center relative z-10">
                  Отправляя запрос вы соглашаетесь с политикой конфиденциальности
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Carousel */}
      <div className="max-w-[1400px] mx-auto px-8 py-20">
        <div className="flex items-center gap-3.5 mb-6">
          <div className="w-3 h-3 rounded-full bg-[#1FD6A4] shadow-[0px_4px_19px_rgba(31,214,164,0.36)]" />
          <span className="text-[16px] tracking-[-0.03em] text-[#324755]">Отзывы о нас</span>
        </div>

        <div className="flex items-start justify-between mb-12">
          <h2 className="text-[44px] font-medium leading-[135.61%] tracking-[-0.03em] text-[#324755] max-w-[799px]">
            Тысячи пользователей уже нашли клинеров через Cleaner
          </h2>

          <div className="flex gap-5">
            <button className="w-[47px] h-[47px] rounded-full bg-[#1FD6A4]/40 flex items-center justify-center">
              <Icon name="ChevronLeft" size={24} className="text-white" />
            </button>
            <button className="w-[47px] h-[47px] rounded-full bg-[#1FD6A4] flex items-center justify-center">
              <Icon name="ChevronRight" size={24} className="text-white" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-8">
          {[0, 1].map((idx) => (
            <Card key={idx} className="rounded-[30px] shadow-none">
              <CardContent className="p-9">
                <div className="flex items-center gap-5 mb-5">
                  <div className="w-[63px] h-[63px] rounded-full bg-[#0294FE] flex items-center justify-center text-white text-[31px]">
                    Е
                  </div>
                  <div>
                    <div className="text-[22px] text-[#324755] mb-2">Екатерина Скорикова</div>
                    <div className="text-[16px] text-[#324755]">Знаток города 6 уровня</div>
                  </div>
                </div>

                <div className="flex items-center gap-[18px] mb-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-[26px] h-[26px] rounded-sm bg-[#FFCC00]" />
                    ))}
                  </div>
                  <span className="text-[16px] text-[#324755]">1 октября</span>
                </div>

                <p className="text-[18px] leading-[22px] text-[#324755] mb-1">
                  Ребятам даже не 5 звёзд, а 10. Почистили диван, которому уже лет 11, он как новый. Хотя, предупредили, что какие то пятна могут не вывести, но случилось чудо, и диван новый) Рекомендую...
                </p>
                <button className="text-[18px] leading-[22px] text-[#324755]/60">ещё</button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center gap-5">
          {[0, 1, 2, 3, 4].map((idx) => (
            <div
              key={idx}
              className={`w-3 h-3 rounded-full ${idx === 1 ? 'bg-[#0294FE]' : 'bg-[#0294FE]/14'}`}
            />
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-[1400px] mx-auto px-8 py-20">
        <h2 className="text-[44px] font-medium leading-[135.61%] tracking-[-0.03em] text-[#324755] mb-12">
          Ответы на популярные вопросы
        </h2>

        <div className="space-y-6">
          {[
            'Как выбрать клинера через Cleaner?',
            'Можно ли доверять исполнителям?',
            'Что делать, если клинер не пришёл?',
            'Как оставить отзыв о клинере?',
            'Как стать исполнителем на платформе?'
          ].map((question, idx) => (
            <button
              key={idx}
              onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              className="w-full bg-white rounded-[20px] p-10 flex items-center justify-between hover:shadow-lg transition-shadow"
            >
              <span className="text-[20px] tracking-[-0.01em] text-[#324755]">{question}</span>
              <div className="w-[47px] h-[47px] rounded-full bg-[#1FD6A4] flex items-center justify-center transform -rotate-90">
                <Icon name="ChevronDown" size={24} className="text-white" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* CTA Banner */}
      <div className="max-w-[1400px] mx-auto px-8 py-20">
        <div className="relative rounded-[30px] p-16 text-center overflow-hidden" style={{ background: 'linear-gradient(107.77deg, #1FD6A4 37.86%, #33EBB9 86.4%)' }}>
          <div className="absolute top-20 left-16 w-[178px] h-[178px] rounded-full bg-white/21" style={{ transform: 'rotate(-124.51deg)' }} />
          <div className="absolute top-32 left-0 w-[81px] h-[81px] rounded-full bg-white/21" style={{ transform: 'rotate(-124.51deg)' }} />
          <div className="absolute bottom-16 right-16 w-[172px] h-[172px] rounded-full bg-white/21" style={{ transform: 'rotate(-5.42deg)' }} />
          <div className="absolute bottom-24 right-0 w-[78px] h-[78px] rounded-full bg-white/21" style={{ transform: 'rotate(-5.42deg)' }} />

          <h2 className="text-[44px] font-medium leading-[135.61%] tracking-[-0.03em] text-white mb-6 max-w-[830px] mx-auto relative z-10">
            Закажи уборку в пару кликов, а всё остальное сделает Cleaner
          </h2>
          
          <p className="text-[20px] leading-[24px] tracking-[-0.01em] text-white mb-12 relative z-10">
            Cleaner — агрегатор, который соединяет клиентов и клинеров
          </p>

          <Button className="bg-[#324755] hover:bg-[#324755]/90 text-white rounded-[20px] h-[100px] px-[75px] font-medium text-[20px] tracking-[-0.03em] relative z-10">
            Заказать клининг
          </Button>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white rounded-t-[30px] py-12 mt-20">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-2">
              <div className="relative w-[30px] h-[30px]">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <path d="M12.2 8.4C12.2 8.4 13.3 10.6 15.2 10.6C17.1 10.6 18.2 8.4 18.2 8.4" stroke="#0294FE" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M3.7 17.5C3.7 17.5 5.2 20.5 9 20.5C12.8 20.5 14.3 17.5 14.3 17.5" stroke="#0294FE" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M16.5 22.5C16.5 22.5 17.5 24.7 19.5 24.7C21.5 24.7 22.5 22.5 22.5 22.5" stroke="#0294FE" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="text-[37px] font-bold tracking-[-0.05em] text-[#324755]" style={{ fontFamily: 'Montserrat, sans-serif' }}>Cleaner</span>
            </div>

            <div className="flex items-center gap-[55px]">
              <button className="flex items-center gap-2 text-[18px] tracking-[-0.02em] text-[#324755] font-medium">
                <Icon name="Calculator" size={20} />
                Калькулятор
              </button>
              <button className="text-[18px] text-[#324755]/60 tracking-[-0.02em]">О платформе</button>
              <button className="text-[18px] text-[#324755]/60 tracking-[-0.02em]">FAQ</button>
              <button className="text-[18px] text-[#324755]/60 tracking-[-0.02em]">Отзывы</button>
            </div>

            <div className="flex items-center gap-5">
              <Button variant="outline" className="border-[#0294FE] text-[#324755] rounded-[15px] h-[71px] px-10 text-[18px] tracking-[-0.02em] hover:bg-transparent">
                Войти
              </Button>
              <Button className="bg-[#0294FE] hover:bg-[#0294FE]/90 text-white rounded-[15px] h-[71px] px-10 font-medium text-[18px] tracking-[-0.02em]">
                Регистрация
              </Button>
            </div>
          </div>

          <div className="border-t border-[#324755]/11 pt-6">
            <div className="flex items-center justify-between">
              <span className="text-[16px] tracking-[-0.02em] text-[#324755]">© 2025 Cleaner. Все права защищены</span>
              <div className="flex items-center gap-[70px] opacity-70">
                <button className="text-[16px] tracking-[-0.02em] text-[#324755] underline">Политика конфиденциальности</button>
                <button className="text-[16px] tracking-[-0.02em] text-[#324755] underline">Пользовательское соглашение</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
