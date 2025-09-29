import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const services = [
  {
    id: 1,
    title: 'Бытовой клининг',
    icon: 'Home',
    items: ['Регулярная уборка', 'Генеральная уборка', 'После ремонта', 'Химчистка'],
    color: 'bg-blue-50 text-blue-600'
  },
  {
    id: 2,
    title: 'Коммерческий клининг',
    icon: 'Building2',
    items: ['Офисы', 'Мойка окон', 'Уход за полами', 'Дезинфекция'],
    color: 'bg-cyan-50 text-cyan-600'
  },
  {
    id: 3,
    title: 'Промышленный клининг',
    icon: 'Factory',
    items: ['Производства', 'Дезинсекция', 'Вентиляция', 'После аварий'],
    color: 'bg-teal-50 text-teal-600'
  },
  {
    id: 4,
    title: 'Территориальный',
    icon: 'Trees',
    items: ['Уборка территории', 'Вывоз ТКО', 'Ассенизаторские работы', 'Зеленые насаждения'],
    color: 'bg-emerald-50 text-emerald-600'
  }
];

const cleaners = [
  { id: 1, name: 'Мария С.', rating: 4.9, jobs: 156, lat: 55.755, lng: 37.617 },
  { id: 2, name: 'Анна К.', rating: 4.8, jobs: 203, lat: 55.760, lng: 37.625 },
  { id: 3, name: 'Елена В.', rating: 5.0, jobs: 89, lat: 55.750, lng: 37.610 },
  { id: 4, name: 'Ольга П.', rating: 4.7, jobs: 142, lat: 55.758, lng: 37.620 },
];

const stats = [
  { value: '5000+', label: 'выполненных заказов' },
  { value: '98%', label: 'клиентов рекомендуют' },
  { value: '4.9/5', label: 'средний рейтинг' },
];

export default function Index() {
  const [selectedService, setSelectedService] = useState('');

  return (
    <div className="min-h-screen bg-surface">
      {/* Header */}
      <header className="bg-white border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-white/90">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                <Icon name="Sparkles" size={20} className="text-white" />
              </div>
              <span className="text-2xl font-heading font-bold text-foreground">CleanPro</span>
            </div>
            
            <button className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Icon name="MapPin" size={16} />
              <span>Москва</span>
              <Icon name="ChevronDown" size={16} />
            </button>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <Icon name="MessageCircle" size={20} />
            </Button>
            <Button variant="outline" size="sm">
              Войти
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="gradient-primary py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-heading font-bold">
                Профессиональный клининг
              </h1>
              <p className="text-lg md:text-xl text-white/90">
                Надежные исполнители для вашего пространства
              </p>
            </div>

            {/* Search Form */}
            <Card className="bg-white text-foreground shadow-xl">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-[2fr,3fr,auto] gap-3">
                  <Select value={selectedService} onValueChange={setSelectedService}>
                    <SelectTrigger>
                      <SelectValue placeholder="Вид услуги" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="home">Бытовой клининг</SelectItem>
                      <SelectItem value="commercial">Коммерческий</SelectItem>
                      <SelectItem value="industrial">Промышленный</SelectItem>
                      <SelectItem value="territory">Территориальный</SelectItem>
                    </SelectContent>
                  </Select>

                  <div className="relative">
                    <Icon name="MapPin" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <Input 
                      placeholder="Адрес выполнения работ" 
                      className="pl-10"
                    />
                  </div>

                  <Button className="gradient-primary text-white hover:opacity-90 transition-opacity">
                    <Icon name="Search" size={20} className="mr-2" />
                    Найти
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Catalog */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-heading font-bold mb-3">Каталог услуг</h2>
            <p className="text-muted-foreground">Выберите подходящую категорию</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={service.id} 
                className="hover-scale cursor-pointer group border-border hover:border-primary transition-all duration-200"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <Icon name={service.icon as any} size={24} />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-3">Исполнители в вашем районе</h2>
            <p className="text-muted-foreground">Проверенные специалисты рядом с вами</p>
          </div>

          <div className="grid lg:grid-cols-[1fr,400px] gap-6">
            {/* Map Placeholder */}
            <Card className="overflow-hidden">
              <div className="relative h-[500px] bg-surface">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full bg-gradient-to-br from-blue-50 to-cyan-50 opacity-50">
                    {cleaners.map((cleaner) => (
                      <div
                        key={cleaner.id}
                        className="absolute w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer hover:scale-110 transition-transform"
                        style={{
                          left: `${(cleaner.id * 23) % 80}%`,
                          top: `${(cleaner.id * 31) % 70}%`,
                        }}
                      >
                        <Icon name="MapPin" size={20} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-lg shadow-lg">
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <Icon name="Map" size={18} className="text-primary" />
                      Интерактивная карта исполнителей
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Cleaners List */}
            <div className="space-y-4">
              {cleaners.map((cleaner) => (
                <Card key={cleaner.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-semibold">
                        {cleaner.name.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-semibold">{cleaner.name}</h3>
                          <Badge variant="secondary" className="text-xs">
                            <Icon name="Star" size={12} className="mr-1 fill-yellow-400 text-yellow-400" />
                            {cleaner.rating}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {cleaner.jobs} выполненных заказов
                        </p>
                      </div>
                    </div>
                    <Button className="w-full mt-3" variant="outline" size="sm">
                      Выбрать
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center space-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl font-heading font-bold gradient-primary bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded gradient-primary flex items-center justify-center">
                <Icon name="Sparkles" size={14} className="text-white" />
              </div>
              <span className="font-heading font-semibold">CleanPro</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 CleanPro. Профессиональный клининг
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}