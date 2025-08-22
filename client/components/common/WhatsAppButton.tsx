import { MessageCircle, Phone } from 'lucide-react';

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    // Replace with actual WhatsApp number
    const phoneNumber = "966501234567";
    const message = "مرحباً، أود الاستفسار عن منتجات الألومنيوم";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-bounce"
      style={{ animationDuration: '2s' }}
      title="تواصل معنا عبر الواتساب"
    >
      <div className="relative">
        <MessageCircle size={24} />
        <Phone size={12} className="absolute -top-1 -right-1 text-white" />
      </div>
    </button>
  );
}
