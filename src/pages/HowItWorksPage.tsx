
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Car, Users, Clock, CreditCard } from 'lucide-react';

const HowItWorksPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">Как работает HopIn</h1>
      
      <div className="grid grid-cols-1 gap-12 md:gap-16">
        {/* Step 1 */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="bg-primary-light p-6 rounded-full">
            <Car className="h-12 w-12 text-primary" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-semibold mb-4">1. Зарегистрируйтесь и создайте профиль</h2>
            <p className="text-gray-700 text-lg">
              Создайте аккаунт, указав свой университет и предпочтения для поездок. 
              Подтвердите свою студенческую почту для дополнительной безопасности.
            </p>
          </div>
        </div>
        
        {/* Step 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-6">
          <div className="bg-primary-light p-6 rounded-full">
            <Users className="h-12 w-12 text-primary" />
          </div>
          <div className="flex-1 text-center md:text-right">
            <h2 className="text-2xl font-semibold mb-4">2. Найдите попутчиков</h2>
            <p className="text-gray-700 text-lg">
              Просматривайте доступные поездки от других студентов или публикуйте свои. 
              Выбирайте попутчиков по рейтингу, факультету и времени поездки.
            </p>
          </div>
        </div>
        
        {/* Step 3 */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="bg-primary-light p-6 rounded-full">
            <Clock className="h-12 w-12 text-primary" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-semibold mb-4">3. Разделите поездку</h2>
            <p className="text-gray-700 text-lg">
              Подтвердите участие в поездке и встретьтесь с попутчиками в указанное время.
              Приложение автоматически разделит стоимость между всеми участниками.
            </p>
          </div>
        </div>
        
        {/* Step 4 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-6">
          <div className="bg-primary-light p-6 rounded-full">
            <CreditCard className="h-12 w-12 text-primary" />
          </div>
          <div className="flex-1 text-center md:text-right">
            <h2 className="text-2xl font-semibold mb-4">4. Экономьте с премиум-пропуском</h2>
            <p className="text-gray-700 text-lg">
              Оформите премиум-пропуск для дополнительных скидок, приоритетного подбора поездок
              и отсутствия комиссии за транзакции.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-6">Готовы начать экономить?</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/register">
            <Button size="lg" className="bg-primary hover:bg-primary-dark">
              Зарегистрироваться
            </Button>
          </Link>
          <Link to="/rides">
            <Button variant="outline" size="lg">
              Найти поездку
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksPage;
