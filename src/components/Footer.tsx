
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="font-bold text-xl text-primary">HopIn</Link>
            <p className="mt-2 text-gray-600 max-w-xs">
              Быстрые и экономичные поездки для студентов КФУ с разделением стоимости такси.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">О нас</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-gray-600 hover:text-primary">О сервисе</Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-600 hover:text-primary">Контакты</Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Сервис</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/how-it-works" className="text-gray-600 hover:text-primary">Как это работает</Link>
                </li>
                <li>
                  <Link to="/premium" className="text-gray-600 hover:text-primary">Премиум</Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Поддержка</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/faq" className="text-gray-600 hover:text-primary">FAQ</Link>
                </li>
                <li>
                  <Link to="/support" className="text-gray-600 hover:text-primary">Помощь</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 mb-4 md:mb-0">© 2025 HopIn. Все права защищены.</p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-600 hover:text-primary">Конфиденциальность</Link>
            <Link to="/terms" className="text-gray-600 hover:text-primary">Условия использования</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
