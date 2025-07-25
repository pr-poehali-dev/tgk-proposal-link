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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border py-6">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-foreground">ЛБ</h1>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Input
                  placeholder="Поиск..."
                  className="w-64 pl-10 border-border"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Icon
                  name="Search"
                  size={18}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
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
          <h2 className="text-5xl font-bold text-foreground mb-6">
            Kazuscara's lover's
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            ссылки на тгк и предложку
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() =>
                window.open("https://t.me/kazuscaralover", "_blank")
              }
            >
              <Icon name="Send" size={18} className="mr-2" />
              Наш ТГК
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() =>
                window.open("https://t.me/Kazuscaraquestions_bot", "_blank")
              }
            >
              Наша предложка
            </Button>
          </div>
        </div>
      </section>

      {/* Telegram Channel Section */}
      <section className="py-16 px-6 bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <Icon
            name="Send"
            size={48}
            className="mx-auto mb-6 text-foreground"
          />
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Наш Telegram канал
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к нашему сообществу в Telegram. Получайте
            уведомления о новых постах и эксклюзивный контент.
          </p>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
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
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Наша предложка
          </h3>
          <p className="text-muted-foreground mb-8">
            Подпишитесь на рассылку, чтобы получать дайджест лучших материалов
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <Input
              placeholder="Ваш email"
              className="flex-1 border-border"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              className="bg-primary text-primary-foreground hover:bg-primary/90"
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
      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <h4 className="font-bold text-foreground">ЛБ</h4>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>Блог</span>
                <span>•</span>
                <span>Канал</span>
                <span>•</span>
                <span>Подписка</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Icon name="Send" size={20} className="text-muted-foreground" />
              <Icon name="Search" size={20} className="text-muted-foreground" />
              <Icon name="Rss" size={20} className="text-muted-foreground" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
