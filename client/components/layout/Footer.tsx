import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/", label: "الرئيسية" },
    { href: "/products", label: "المنتجات" },
    { href: "/projects", label: "المشاريع" },
    { href: "/contact", label: "اتصل بنا" }
  ];

  const services = [
    "أبواب ونوافذ",
    "واجهات زجاجية", 
    "مظلات وبرجولات",
    "درابزين وسور",
    "الفواصل الجدارية"
  ];

  const socialLinks = [
    { name: "فيسبوك", href: "#" },
    { name: "تويتر", href: "#" },
    { name: "انستقرام", href: "#" },
    { name: "لينكد إن", href: "#" }
  ];

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">شركة الألومنيوم المتقدم</h3>
            <p className="text-gray-300 mb-4">
              نقدم أفضل حلول الألومنيوم العصرية والمبتكرة لعملائنا الكرام بجودة عالية وخدمة متميزة.
            </p>
            <div className="space-y-2 text-gray-300">
              <p>📞 +966 50 123 4567</p>
              <p>📧 info@aluminum-co.com</p>
              <p>📍 الرياض، المملكة العربية السعودية</p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href} 
                    className="text-gray-300 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">خدماتنا</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300">
                  {service}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4">تابعنا</h4>
            <div className="flex space-x-4 space-x-reverse mb-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-secondary p-2 rounded-full hover:bg-secondary/90 transition-colors"
                  aria-label={social.name}
                >
                  <div className="w-5 h-5 bg-primary rounded"></div>
                </a>
              ))}
            </div>
            <div className="text-gray-300">
              <h5 className="font-semibold mb-2">ساعات العمل</h5>
              <p className="text-sm">السبت - الخميس: 8:00 ص - 6:00 م</p>
              <p className="text-sm">الجمعة: مغلق</p>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            &copy; {currentYear} شركة الألومنيوم المتقدم. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
