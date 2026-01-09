import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: 'Route',
      title: 'Проектирование дорог',
      description: 'Разработка проектной документации для строительства автомобильных дорог любой категории'
    },
    {
      icon: 'Construction',
      title: 'Строительство автомагистралей',
      description: 'Полный цикл строительства от подготовки основания до укладки асфальтобетонного покрытия'
    },
    {
      icon: 'Wrench',
      title: 'Ремонт дорожного полотна',
      description: 'Капитальный и текущий ремонт автомобильных дорог с использованием современных технологий'
    }
  ];

  const projects = [
    {
      image: 'https://cdn.poehali.dev/projects/15465534-bdab-42c3-a311-91573862e703/files/86138978-dbc3-4c9a-9a9a-a2e170aa5426.jpg',
      title: 'Строительство федеральной трассы М-10',
      description: 'Участок 45 км, 2023 год'
    },
    {
      image: 'https://cdn.poehali.dev/projects/15465534-bdab-42c3-a311-91573862e703/files/11ae2164-3b8a-4d25-b8e9-fca020c4fe28.jpg',
      title: 'Реконструкция областной дороги',
      description: 'Тверская область, 28 км, 2022 год'
    },
    {
      image: 'https://cdn.poehali.dev/projects/15465534-bdab-42c3-a311-91573862e703/files/e9723803-908d-49f3-9ab2-a4d809de1d07.jpg',
      title: 'Строительство подъездных путей',
      description: 'Промышленная зона, 12 км, 2024 год'
    }
  ];

  const advantages = [
    { icon: 'Award', title: '12+ лет опыта', description: 'На рынке дорожного строительства с 2012 года' },
    { icon: 'Shield', title: 'Полная надёжность', description: 'Отсутствие налоговых рисков и признаков однодневки' },
    { icon: 'TrendingUp', title: 'Стабильный рост', description: 'Демонстрируем рост выручки год от года' },
    { icon: 'Users', title: 'Профессиональная команда', description: 'Квалифицированные специалисты с большим опытом' }
  ];

  const testimonials = [
    {
      name: 'Иван Петров',
      position: 'Директор ООО "СтройИнвест"',
      text: 'Сотрудничаем с Мега-Строй уже 5 лет. Всегда качественно и в срок выполняют все работы.'
    },
    {
      name: 'Мария Соколова',
      position: 'Главный инженер ГК "Дороги России"',
      text: 'Профессиональный подход к проектированию. Рекомендуем как надежного подрядчика.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="https://cdn.poehali.dev/files/WFUwU5Y4LJNjuF03D-kb-0qYFojEiOky3Cclam4q2SK2xLpQQYJxA8nEHufX8fTh_8cKOg0XlGZc-1Uo166z0DDj.jpg" 
                alt="Мега-Строй" 
                className="h-12 w-12 object-contain"
              />
              <div>
                <h1 className="text-2xl font-bold font-heading">Мега-Строй</h1>
                <p className="text-xs opacity-90">Строительство дорог с 2012 года</p>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-6">
              {['home', 'about', 'services', 'portfolio', 'advantages', 'testimonials', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm hover:text-accent transition-colors ${
                    activeSection === section ? 'text-accent font-semibold' : ''
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'about' && 'О компании'}
                  {section === 'services' && 'Услуги'}
                  {section === 'portfolio' && 'Портфолио'}
                  {section === 'advantages' && 'Преимущества'}
                  {section === 'testimonials' && 'Отзывы'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="pt-20">
        <section id="home" className="relative bg-primary text-primary-foreground py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold font-heading mb-6">
                Строительство автомобильных дорог и автомагистралей
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Надежный партнер в дорожном строительстве с 2012 года. 
                Профессиональное проектирование и строительство дорог любой сложности.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-white"
                  onClick={() => scrollToSection('contacts')}
                >
                  Связаться с нами
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-accent text-accent hover:bg-accent hover:text-white"
                  onClick={() => scrollToSection('portfolio')}
                >
                  Наши проекты
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold font-heading text-center mb-12">О компании</h2>
            <div className="max-w-4xl mx-auto">
              <Card className="animate-fade-in">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-semibold font-heading mb-4 flex items-center">
                        <Icon name="Building" size={24} className="mr-2 text-accent" />
                        ООО "Мега-Строй"
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Основана 25 января 2012 года и зарегистрирована в Твери. 
                        Специализируемся на строительстве автомобильных дорог и автомагистралей.
                      </p>
                      <p className="text-muted-foreground">
                        Генеральный директор: <strong>Костанян Армен Араратович</strong>
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <Icon name="CheckCircle2" size={20} className="mr-3 mt-1 text-accent flex-shrink-0" />
                        <div>
                          <p className="font-semibold">Надежность</p>
                          <p className="text-sm text-muted-foreground">Отсутствие рисков неисполнения обязательств</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Icon name="CheckCircle2" size={20} className="mr-3 mt-1 text-accent flex-shrink-0" />
                        <div>
                          <p className="font-semibold">Чистая репутация</p>
                          <p className="text-sm text-muted-foreground">Отсутствие признаков однодневки и налоговых рисков</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Icon name="CheckCircle2" size={20} className="mr-3 mt-1 text-accent flex-shrink-0" />
                        <div>
                          <p className="font-semibold">Финансовая стабильность</p>
                          <p className="text-sm text-muted-foreground">Нормальное финансовое положение компании</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="services" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold font-heading text-center mb-12">Наши услуги</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon name={service.icon as any} size={32} className="text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold font-heading mb-3">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold font-heading text-center mb-12">Наши проекты</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold font-heading mb-2">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="advantages" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold font-heading text-center mb-12">Наши преимущества</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {advantages.map((advantage, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name={advantage.icon as any} size={32} className="text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold font-heading mb-2">{advantage.title}</h3>
                    <p className="text-sm text-muted-foreground">{advantage.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold font-heading text-center mb-12">Отзывы клиентов</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6">
                    <Icon name="Quote" size={32} className="text-accent mb-4" />
                    <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                    <Separator className="my-4" />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contacts" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold font-heading text-center mb-12">Контакты и реквизиты</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold font-heading mb-6 flex items-center">
                    <Icon name="Phone" size={24} className="mr-2 text-accent" />
                    Контактная информация
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Icon name="MapPin" size={20} className="mr-3 mt-1 text-accent flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Адрес</p>
                        <p className="text-muted-foreground">г. Тверь, Россия</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Icon name="Mail" size={20} className="mr-3 mt-1 text-accent flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-muted-foreground">info@mega-stroy.ru</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Icon name="Phone" size={20} className="mr-3 mt-1 text-accent flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Телефон</p>
                        <p className="text-muted-foreground">+7 (4822) XX-XX-XX</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold font-heading mb-6 flex items-center">
                    <Icon name="FileText" size={24} className="mr-2 text-accent" />
                    Реквизиты
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold">Полное наименование</p>
                      <p className="text-muted-foreground">Общество с ограниченной ответственностью "Мега-Строй"</p>
                    </div>
                    <div>
                      <p className="font-semibold">Дата регистрации</p>
                      <p className="text-muted-foreground">25 января 2012 года</p>
                    </div>
                    <div>
                      <p className="font-semibold">Генеральный директор</p>
                      <p className="text-muted-foreground">Костанян Армен Араратович</p>
                    </div>
                    <div>
                      <p className="font-semibold">Основной вид деятельности</p>
                      <p className="text-muted-foreground">Строительство автомобильных дорог и автомагистралей</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <img 
                src="https://cdn.poehali.dev/files/WFUwU5Y4LJNjuF03D-kb-0qYFojEiOky3Cclam4q2SK2xLpQQYJxA8nEHufX8fTh_8cKOg0XlGZc-1Uo166z0DDj.jpg" 
                alt="Мега-Строй" 
                className="h-8 w-8 object-contain"
              />
              <p className="font-semibold">ООО "Мега-Строй"</p>
            </div>
            <p className="text-sm opacity-75">© 2012-2024 Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;