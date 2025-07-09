import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const blogPosts = [
    {
      id: 1,
      title: "Добро пожаловать в наш блог",
      excerpt:
        "Здесь мы делимся полезными материалами и обсуждаем актуальные темы",
      date: "2025-01-09",
      readTime: "3 мин",
    },
    {
      id: 2,
      title: "Полезные функции нашего канала",
      excerpt: "Узнайте о всех возможностях, которые мы предлагаем подписчикам",
      date: "2025-01-08",
      readTime: "5 мин",
    },
    {
      id: 3,
      title: "Как получить максимум от контента",
      excerpt: "Советы по эффективному использованию материалов канала",
      date: "2025-01-07",
      readTime: "4 мин",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 py-6">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-black">ЛБ</h1>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Input
                  placeholder="Поиск..."
                  className="w-64 pl-10 border-gray-200"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Icon
                  name="Search"
                  size={18}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
              </div>
              <Button variant="outline" size="sm">
                <Icon name="Menu" size={18} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-black mb-6">
            Kazuscara's lover's
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            ссылки на тгк и предложку
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              size="lg"
              className="bg-black text-white hover:bg-gray-800"
              onClick={() =>
                window.open("https://t.me/kazuscaralover", "_blank")
              }
            >
              <Icon name="Send" size={18} className="mr-2" />
              Наш ТГК
            </Button>
            <Button variant="outline" size="lg">
              Наша предложка
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-black mb-8">
            Последние посты
          </h3>
          <div className="grid gap-8">
            {blogPosts.map((post) => (
              <Card
                key={post.id}
                className="border border-gray-200 hover:shadow-md transition-shadow"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xl font-semibold text-black mb-2">
                        {post.title}
                      </h4>
                      <p className="text-gray-600">{post.excerpt}</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Читать
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Icon name="MessageCircle" size={14} />
                      <span>Комментарии</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Telegram Channel Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <Icon name="Send" size={48} className="mx-auto mb-6 text-black" />
          <h3 className="text-3xl font-bold text-black mb-4">
            Наш Telegram канал
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к нашему сообществу в Telegram. Получайте
            уведомления о новых постах и эксклюзивный контент.
          </p>
          <Button
            size="lg"
            className="bg-black text-white hover:bg-gray-800"
            onClick={() => window.open("https://t.me/kazuscaralover", "_blank")}
          >
            <Icon name="ExternalLink" size={18} className="mr-2" />
            Подписаться на канал
          </Button>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-black mb-4">Наша предложка</h3>
          <p className="text-gray-600 mb-8">
            Подпишитесь на рассылку, чтобы получать дайджест лучших материалов
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <Input
              placeholder="Ваш email"
              className="flex-1 border-gray-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              className="bg-black text-white hover:bg-gray-800"
              onClick={handleSubscribe}
              disabled={isSubscribed}
            >
              {isSubscribed ? "Подписан!" : "Подписаться"}
            </Button>
          </div>
          {isSubscribed && (
            <p className="text-green-600 mt-4 text-center">
              Спасибо за подписку! Проверьте почту.
            </p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <h4 className="font-bold text-black">ЛБ</h4>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span>Блог</span>
                <span>•</span>
                <span>Канал</span>
                <span>•</span>
                <span>Подписка</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Icon name="Send" size={20} className="text-gray-400" />
              <Icon name="Search" size={20} className="text-gray-400" />
              <Icon name="Rss" size={20} className="text-gray-400" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
