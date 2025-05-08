
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Ticket } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/components/ui/use-toast';

const PremiumPage: React.FC = () => {
  const { authState } = useAuth();
  const { toast } = useToast();
  
  const handleSubscribe = () => {
    if (!authState.isAuthenticated) {
      toast({
        title: "Требуется авторизация",
        description: "Для оформления премиум-пропуска необходимо войти в систему",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Премиум активирован!",
      description: "Вы успешно активировали премиум-пропуск",
    });
  };
  
  const benefits = [
    "Скидка 20% на все поездки",
    "Приоритет при бронировании мест",
    "Доступ к премиум-автомобилям",
    "Отсутствие комиссии при отмене",
    "Персональная поддержка 24/7"
  ];
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex bg-primary-light p-3 rounded-full mb-4">
          <Ticket className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Премиум-пропуск HopIn</h1>
        <p className="text-xl text-gray-600">
          Получите максимум от поездок с нашим премиум-пропуском и экономьте еще больше
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6 justify-center max-w-5xl mx-auto">
        <Card className="w-full md:w-1/2 border-2 border-primary shadow-lg">
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-2xl md:text-3xl font-bold">Месячный пропуск</CardTitle>
            <CardDescription>Популярный выбор среди студентов</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="text-center mb-6">
              <span className="text-4xl font-bold">299 ₽</span>
              <span className="text-gray-500 ml-2">/ месяц</span>
            </div>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button onClick={handleSubscribe} className="w-full">
              {authState.user?.isPremium ? 'Уже активирован' : 'Оформить пропуск'}
            </Button>
          </CardFooter>
        </Card>
        
        <Card className="w-full md:w-1/2">
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-2xl md:text-3xl font-bold">Семестровый пропуск</CardTitle>
            <CardDescription>Выгодно для регулярных поездок</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="text-center mb-6">
              <span className="text-4xl font-bold">1499 ₽</span>
              <span className="text-gray-500 ml-2">/ 6 месяцев</span>
              <div className="mt-2">
                <span className="bg-primary-light text-primary text-sm px-2 py-1 rounded-full">
                  Экономия 16%
                </span>
              </div>
            </div>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
              <li className="flex items-center">
                <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Доступ к эксклюзивным акциям</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button onClick={handleSubscribe} variant="outline" className="w-full">
              {authState.user?.isPremium ? 'Уже активирован' : 'Оформить пропуск'}
            </Button>
          </CardFooter>
        </Card>
      </div>
      
      <div className="max-w-3xl mx-auto mt-12 p-6 bg-gray-50 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Часто задаваемые вопросы</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">Можно ли отменить подписку?</h4>
            <p className="text-gray-600">Да, вы можете отменить премиум-пропуск в любое время в вашем личном кабинете.</p>
          </div>
          <div>
            <h4 className="font-medium mb-2">Как работает скидка 20%?</h4>
            <p className="text-gray-600">Скидка автоматически применяется ко всем поездкам, которые вы бронируете через приложение.</p>
          </div>
          <div>
            <h4 className="font-medium mb-2">Что такое приоритет при бронировании?</h4>
            <p className="text-gray-600">Если на поездку осталось только одно место, пользователь с премиум-пропуском получит его в первую очередь.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumPage;
