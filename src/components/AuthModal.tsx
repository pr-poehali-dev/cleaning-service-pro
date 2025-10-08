import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';

type AuthModalType = 'cleaner' | 'client' | 'login' | null;

interface AuthModalProps {
  type: AuthModalType;
  onClose: () => void;
}

export default function AuthModal({ type, onClose }: AuthModalProps) {
  const [activeTab, setActiveTab] = useState<'cleaner' | 'client'>('cleaner');
  
  if (!type) return null;

  const isLogin = type === 'login';
  const isCleaner = isLogin ? false : (type === 'cleaner' || activeTab === 'cleaner');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#00000073]" onClick={onClose}>
      <div 
        className="bg-white rounded-[24px] w-[448px] p-8 relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
        >
          <Icon name="X" size={20} className="text-[#324755]" />
        </button>

        <h2 className="text-[28px] font-semibold text-[#324755] mb-6">
          {isLogin ? 'Вход' : 'Регистрация'}
        </h2>

        {!isLogin && (
          <div className="flex gap-2 mb-6">
            <Button
              onClick={() => setActiveTab('cleaner')}
              className={`flex-1 h-[44px] rounded-[12px] text-[15px] font-medium transition-colors ${
                activeTab === 'cleaner'
                  ? 'bg-[#324755] text-white hover:bg-[#324755]/90'
                  : 'bg-[#F8FAFB] text-[#324755] hover:bg-[#F8FAFB]/80'
              }`}
            >
              Я клинер
            </Button>
            <Button
              onClick={() => setActiveTab('client')}
              className={`flex-1 h-[44px] rounded-[12px] text-[15px] font-medium transition-colors ${
                activeTab === 'client'
                  ? 'bg-[#324755] text-white hover:bg-[#324755]/90'
                  : 'bg-[#F8FAFB] text-[#324755] hover:bg-[#F8FAFB]/80'
              }`}
            >
              Я клиент
            </Button>
          </div>
        )}

        <form className="space-y-4">
          {!isLogin && (
            <div>
              <label className="block text-[14px] text-[#324755] mb-2">Введите имя пользователя</label>
              <Input 
                placeholder="Имя" 
                className="h-[48px] rounded-[12px] border-[#32475566] focus:border-[#0294FE]"
              />
            </div>
          )}

          <div>
            <label className="block text-[14px] text-[#324755] mb-2">
              {isLogin ? 'Введите e-mail' : 'Введите e-mail'}
            </label>
            <Input 
              type="email"
              placeholder="example@mail.ru" 
              className="h-[48px] rounded-[12px] border-[#32475566] focus:border-[#0294FE]"
            />
          </div>

          <div>
            <label className="block text-[14px] text-[#324755] mb-2">
              {isLogin ? 'Введите пароль' : 'Придумайте пароль'}
            </label>
            <div className="relative">
              <Input 
                type="password"
                placeholder="••••••••" 
                className="h-[48px] rounded-[12px] border-[#32475566] focus:border-[#0294FE] pr-10"
              />
              <button 
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                <Icon name="Eye" size={20} className="text-[#324755]/50" />
              </button>
            </div>
          </div>

          {!isLogin && isCleaner && (
            <div>
              <label className="block text-[14px] text-[#324755] mb-2">Придумайте пароль</label>
              <div className="relative">
                <Input 
                  type="password"
                  placeholder="••••••••" 
                  className="h-[48px] rounded-[12px] border-[#32475566] focus:border-[#0294FE] pr-10"
                />
                <button 
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  <Icon name="Eye" size={20} className="text-[#324755]/50" />
                </button>
              </div>
            </div>
          )}

          {isLogin && (
            <div className="text-right">
              <button type="button" className="text-[14px] text-[#0294FE] hover:underline">
                Забыли пароль?
              </button>
            </div>
          )}

          <Button 
            type="submit"
            className="w-full h-[52px] bg-[#0294FE] hover:bg-[#0294FE]/90 text-white rounded-[12px] text-[16px] font-semibold mt-6"
          >
            {isLogin ? 'Войти' : 'Зарегистрироваться'}
          </Button>

          {!isLogin && (
            <div className="flex items-start gap-2 mt-4">
              <Checkbox id="terms" className="mt-1" />
              <label htmlFor="terms" className="text-[13px] text-[#324755]/80 leading-relaxed">
                Продолжая, я принимаю условия обработки и использования моих персональных данных и даю согласие на их обработку.
              </label>
            </div>
          )}
        </form>

        <div className="mt-6 text-center">
          <button 
            onClick={onClose}
            className="text-[14px] text-[#0294FE] hover:underline flex items-center justify-center gap-2 mx-auto"
          >
            <Icon name="LogIn" size={16} />
            <span>{isLogin ? 'Зарегистрироваться' : 'Продолжить с VK ID'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
