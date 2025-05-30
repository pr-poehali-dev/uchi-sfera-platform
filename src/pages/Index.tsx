import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const categories = [
    {
      name: "IT & Программирование",
      count: 245,
      color: "bg-blue-100 text-blue-800",
      icon: "Code",
    },
    {
      name: "Дизайн",
      count: 89,
      color: "bg-purple-100 text-purple-800",
      icon: "Palette",
    },
    {
      name: "Маркетинг",
      count: 156,
      color: "bg-orange-100 text-orange-800",
      icon: "TrendingUp",
    },
    {
      name: "Языки",
      count: 78,
      color: "bg-green-100 text-green-800",
      icon: "MessageCircle",
    },
    {
      name: "Личное развитие",
      count: 134,
      color: "bg-emerald-100 text-emerald-800",
      icon: "Brain",
    },
    {
      name: "Бизнес",
      count: 67,
      color: "bg-indigo-100 text-indigo-800",
      icon: "Briefcase",
    },
  ];

  const featuredCourses = [
    {
      title: "Python для начинающих",
      provider: "Skillbox",
      duration: "8 недель",
      level: "Начальный",
      rating: 4.8,
      students: 12450,
      price: "от 3 990 ₽",
      image:
        "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=240&fit=crop",
      category: "it",
    },
    {
      title: "UI/UX дизайн с нуля",
      provider: "Coursera",
      duration: "12 недель",
      level: "Средний",
      rating: 4.9,
      students: 8760,
      price: "от 5 490 ₽",
      image:
        "https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=400&h=240&fit=crop",
      category: "design",
    },
    {
      title: "Digital-маркетинг 2024",
      provider: "Нетология",
      duration: "6 недель",
      level: "Продвинутый",
      rating: 4.7,
      students: 5340,
      price: "от 4 290 ₽",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=240&fit=crop",
      category: "marketing",
    },
    {
      title: "Английский для IT",
      provider: "Skyeng",
      duration: "16 недель",
      level: "Средний",
      rating: 4.6,
      students: 9870,
      price: "от 2 890 ₽",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=240&fit=crop",
      category: "languages",
    },
    {
      title: "Тайм-менеджмент и продуктивность",
      provider: "Stepik",
      duration: "4 недели",
      level: "Начальный",
      rating: 4.5,
      students: 15670,
      price: "Бесплатно",
      image:
        "https://images.unsplash.com/photo-1506784693919-ef06d93c28d2?w=400&h=240&fit=crop",
      category: "development",
    },
    {
      title: "Создание стартапа",
      provider: "Coursera",
      duration: "10 недель",
      level: "Продвинутый",
      rating: 4.8,
      students: 6540,
      price: "от 6 990 ₽",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=240&fit=crop",
      category: "business",
    },
  ];

  const stats = [
    { label: "Активных курсов", value: "2,450+", icon: "BookOpen" },
    { label: "Студентов", value: "150K+", icon: "Users" },
    { label: "Провайдеров", value: "45+", icon: "Building" },
    { label: "Завершенных курсов", value: "89K+", icon: "Award" },
  ];

  return (
    <div className="min-h-screen cosmic-bg">
      {/* Header */}
      <header className="bg-cosmic-dark/80 backdrop-blur-md shadow-sm border-b border-cosmic-teal/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold cosmic-gradient font-orbitron">
                УчиСфер
              </h1>
              <nav className="hidden md:flex space-x-6">
                <a
                  href="#"
                  className="text-slate-300 hover:text-cosmic-teal transition-colors"
                >
                  Галактика курсов
                </a>
                <a
                  href="#"
                  className="text-slate-300 hover:text-cosmic-teal transition-colors"
                >
                  Планеты знаний
                </a>
                <a
                  href="#"
                  className="text-slate-300 hover:text-cosmic-teal transition-colors"
                >
                  ИИ-наставник
                </a>
                <a
                  href="#"
                  className="text-slate-300 hover:text-cosmic-teal transition-colors"
                >
                  Космопорт
                </a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                className="text-slate-300 hover:text-cosmic-teal"
              >
                Войти
              </Button>
              <Button className="cosmic-button">Начать путешествие</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="floating-element absolute top-20 left-1/4 w-2 h-2 bg-cosmic-teal rounded-full pulse-glow"></div>
          <div className="floating-element absolute top-40 right-1/3 w-1 h-1 bg-cosmic-purple rounded-full animate-star-twinkle"></div>
          <div
            className="floating-element absolute bottom-32 left-1/2 w-3 h-3 bg-cosmic-orange rounded-full pulse-glow"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="floating-element absolute top-60 right-1/4 w-1 h-1 bg-cosmic-teal rounded-full animate-star-twinkle"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 font-orbitron">
              Галактика
              <br />
              <span className="cosmic-gradient">Знаний</span>
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              🚀 Исследуйте бесконечные миры обучения с ИИ-навигатором.
              Персонализированные орбиты курсов, умные созвездия рекомендаций и
              квантовое отслеживание прогресса в космосе знаний.
            </p>

            {/* Cosmic Search Bar */}
            <div className="max-w-3xl mx-auto mb-12">
              <div className="relative cosmic-card rounded-2xl p-2">
                <Icon
                  name="Search"
                  className="absolute left-6 top-1/2 transform -translate-y-1/2 text-cosmic-teal"
                  size={24}
                />
                <Input
                  className="pl-16 pr-40 h-16 text-lg bg-transparent border-none text-white placeholder-slate-400 focus:ring-2 focus:ring-cosmic-teal"
                  placeholder="Найти свою звезду: Python, дизайн, маркетинг..."
                />
                <Button className="absolute right-2 top-2 h-12 cosmic-button">
                  🔍 Исследовать
                </Button>
              </div>
            </div>

            {/* Popular Cosmic Searches */}
            <div className="flex flex-wrap justify-center gap-3">
              <span className="text-slate-400">🌟 Популярные созвездия:</span>
              {["Python", "React", "UI/UX", "ИИ", "Blockchain"].map((term) => (
                <button
                  key={term}
                  className="px-4 py-2 cosmic-card rounded-full text-sm text-cosmic-teal hover:bg-cosmic-teal/20 transition-all duration-300 hover:scale-105"
                >
                  {term}
                </button>
              ))}
            </div>

            {/* ИИ-ментор кнопка */}
            <div className="mt-16">
              <Button className="cosmic-button text-lg px-8 py-4 rounded-2xl">
                🤖 Запустить ИИ-навигатор
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-cosmic-dark/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center cosmic-card p-6 rounded-2xl"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-cosmic-teal/20 rounded-full mb-4 pulse-glow">
                  <Icon
                    name={stat.icon}
                    className="text-cosmic-teal"
                    size={28}
                  />
                </div>
                <div className="text-4xl font-bold cosmic-gradient mb-2 font-orbitron">
                  {stat.value}
                </div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Категории курсов
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className={`p-2 rounded-lg ${category.color}`}>
                      <Icon name={category.icon} size={24} />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-slate-900">
                        {category.count}
                      </div>
                      <div className="text-sm text-slate-500">курсов</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900">
              Рекомендуемые курсы
            </h3>
            <Button variant="outline">Все курсы</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-2 py-1 bg-white rounded-full text-xs font-medium text-slate-600">
                      {course.level}
                    </span>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-blue-600 font-medium">
                      {course.provider}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-sm text-slate-500">
                      {course.duration}
                    </span>
                  </div>

                  <h4 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {course.title}
                  </h4>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <Icon
                        name="Star"
                        className="text-yellow-400 fill-current"
                        size={16}
                      />
                      <span className="text-sm font-medium">
                        {course.rating}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Users" className="text-slate-400" size={16} />
                      <span className="text-sm text-slate-600">
                        {course.students.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-slate-900">
                      {course.price}
                    </span>
                    <Button size="sm">Подробнее</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Готовы начать обучение?
          </h3>
          <p className="text-xl text-blue-100 mb-8">
            Присоединитесь к 150,000+ студентов и начните свой путь к новой
            профессии уже сегодня
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Зарегистрироваться бесплатно
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-600"
            >
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-white font-bold text-lg mb-4">УчиСфер</h4>
              <p className="text-sm">
                Платформа онлайн-обучения нового поколения с ИИ-помощником
              </p>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Курсы</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Программирование
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Дизайн
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Маркетинг
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Языки
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Поддержка</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Помощь
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Контакты
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Компания</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Карьера
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Блог
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2024 УчиСфер. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
