import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Car, Users, Ticket } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const HomePage: React.FC = () => {
  const { authState } = useAuth();
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
                Поездки в университет стали проще
              </h1>
              <p className="text-xl mb-8 opacity-90 animate-fade-in">
                Найдите попутчиков среди студентов КФУ и экономьте до 70% на поездках в такси
              </p>
              <div className="flex space-x-4 animate-fade-in">
                <Link to={authState.isAuthenticated ? "/rides" : "/register"}>
                  <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                    {authState.isAuthenticated ? 'Найти поездку' : 'Начать'}
                  </Button>
                </Link>
                <Link to="/how-it-works">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="bg-[#333] text-white border-[#333] hover:bg-[#444] hover:border-[#444] hover:text-white"
                  >
                    Как это работает
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="/hero-car-sharing.svg" 
                alt="Студенты делятся поездками в университет" 
                className="max-w-full rounded-lg shadow-lg animate-fade-in"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают HopIn</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="bg-primary-light p-4 rounded-full mb-6">
                <Car className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Экономия до 70%</h3>
              <p className="text-gray-600">
                Разделите стоимость поездки с другими студентами и существенно сократите расходы на дорогу
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="bg-primary-light p-4 rounded-full mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Проверенные попутчики</h3>
              <p className="text-gray-600">
                Ездите только с проверенными студентами вашего университета, гарантируя безопасные поездки
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="bg-primary-light p-4 rounded-full mb-6">
                <Ticket className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Премиум-пропуск</h3>
              <p className="text-gray-600">
                Получите дополнительные скидки и приоритетный доступ к поездкам с нашим премиум-пропуском
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Готовы сэкономить на поездках?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Присоединяйтесь к сообществу студентов, которые уже экономят время и деньги с HopIn
            </p>
            <Link to={authState.isAuthenticated ? "/rides" : "/register"}>
              <Button size="lg" className="bg-primary hover:bg-primary-dark">
                {authState.isAuthenticated ? 'Найти поездку' : 'Зарегистрироваться'}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
