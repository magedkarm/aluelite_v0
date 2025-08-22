import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const handleWhatsAppClick = () => {
  // Replace with actual WhatsApp number
  console.log("hi");
  const phoneNumber = "201023326386";
  const message = "مرحباً، أود الاستفسار عن منتجات الألومنيوم";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};
export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: "https://images.pexels.com/photos/859220/pexels-photo-859220.jpeg",
      title: "حلول الألومنيوم المتقدمة",
      subtitle: "نقدم أفضل منتجات وخدمات الألومنيوم عالية الجودة",
    },
    {
      image:
        "https://images.pexels.com/photos/9301028/pexels-photo-9301028.jpeg",
      title: "تصاميم عصرية ومبتكرة",
      subtitle: "نواكب أحدث التطورات في صناعة الألومنيوم",
    },
    {
      image:
        "https://images.pexels.com/photos/7534168/pexels-photo-7534168.jpeg",
      title: "خبرة تمتد لسنوات",
      subtitle: "فريق متخصص وخبرة واسعة في مجال الألومنيوم",
    },
  ];

  const products = [
    {
      id: 1,
      title: "الفواصل الجدارية",
      description: "أنظمة فواصل مكتبية عصرية وعملية",
      image:
        "https://images.pexels.com/photos/7534168/pexels-photo-7534168.jpeg",
    },
    {
      id: 2,
      title: "أبواب ونوافذ الألومنيوم",
      description: "تشكيلة واسعة من الأبواب والنوافذ العصرية",
      image: "https://images.pexels.com/photos/859220/pexels-photo-859220.jpeg",
    },
    {
      id: 3,
      title: "واجهات زجاجية",
      description: "واجهات زجاجية أنيقة للمباني التجاية والسكنية",
      image:
        "https://images.pexels.com/photos/9301028/pexels-photo-9301028.jpeg",
    },
    {
      id: 4,
      title: "درابزين وسور",
      description: "درابزين وأسوار ألومنيوم بتصاميم عصرية",
      image:
        "https://images.pexels.com/photos/14100342/pexels-photo-14100342.jpeg",
    },
  ];

  const projects = [
    {
      image:
        "https://images.pexels.com/photos/9301028/pexels-photo-9301028.jpeg",
      title: "مشروع تجاري - الرياض",
    },
    {
      image: "https://images.pexels.com/photos/859220/pexels-photo-859220.jpeg",
      title: "فيلا سكنية - جدة",
    },
    {
      image:
        "https://images.pexels.com/photos/7534168/pexels-photo-7534168.jpeg",
      title: "مجمع تجاري - الدمام",
    },
    {
      image:
        "https://images.pexels.com/photos/14620110/pexels-photo-14620110.jpeg",
      title: "مبنى إداري - الخبر",
    },
    {
      image:
        "https://images.pexels.com/photos/14100342/pexels-photo-14100342.jpeg",
      title: "منتجع سياحي - أبها",
    },
    {
      image: "https://images.pexels.com/photos/859220/pexels-photo-859220.jpeg",
      title: "مستشفى - المدينة المنورة",
    },
  ];

  const testimonials = [
    {
      name: "أحمد محمد",
      role: "مهندس معماري",
      content: "خدمة ممتازة وجودة عالية في التنفيذ. أنصح بالتعامل معهم.",
      rating: 5,
    },
    {
      name: "فاطمة العلي",
      role: "مالكة فيلا",
      content: "تم تنفيذ المشروع في الوقت المحدد بجودة فائقة.",
      rating: 5,
    },
    {
      name: "خالد السعد",
      role: "مطور عقاري",
      content: "شريك موثوق لجميع مشاريعنا العقارية.",
      rating: 5,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length,
    );
  };

  return (
    <div>
      {/* Hero Section */}
      <section id="home" className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/60"></div>
            </div>
          ))}
        </div>

        <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 slide-in-up text-shadow">
              {heroSlides[currentSlide].title}
            </h1>
            <p
              className="text-xl md:text-2xl mb-8 slide-in-up text-shadow"
              style={{ animationDelay: "0.2s" }}
            >
              {heroSlides[currentSlide].subtitle}
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="bg-secondary hover:bg-secondary/90 text-primary px-8 py-4 rounded-lg text-xl font-semibold transition-colors slide-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              احصل على استشارة مجانية
            </button>
          </div>
        </div>

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
        >
          <ChevronRight size={24} />
        </button>

        {/* Slider Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 space-x-reverse">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-secondary" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              منتجاتنا
            </h2>
            <p className="text-xl text-gray-600">
              تشكيلة واسعة من منتجات الألومنيوم عالية الجودة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow fade-in"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <a
                    href={`/product/${product.id}`}
                    className="inline-block bg-secondary hover:bg-secondary/90 text-primary px-6 py-2 rounded-lg font-semibold transition-colors"
                  >
                    المزيد من التفاصيل
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              مشاريعنا
            </h2>
            <p className="text-xl text-gray-600">
              معرض لأعمالنا السابقة ومشاريعنا المنجزة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-lg fade-in"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <h3 className="text-white text-xl font-semibold text-center px-4">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              آراء عملائنا
            </h2>
            <p className="text-xl text-gray-600">
              شهادات حقيقية من عملائنا الكرام
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg fade-in"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-secondary fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <h4 className="font-semibold text-primary">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              اتصل بنا
            </h2>
            <p className="text-xl text-gray-600">
              نحن هنا لخدمتك والإجابة على استفساراتك
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="fade-in">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    الاسم
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="اسمك الكريم"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    رقم الهاتف
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="رقم هاتفك"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="بريدك الإلكتروني"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    الرسالة
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="اكتب رسالتك هنا..."
                  />
                </div>
                <button className="w-full bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  إرسال الرسالة
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="fade-in">
              <div className="space-y-8">
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="bg-secondary p-3 rounded-full">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">الهاتف</h3>
                    <p className="text-gray-600">+966 50 123 4567</p>
                    <p className="text-gray-600">+966 11 234 5678</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="bg-secondary p-3 rounded-full">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">
                      البريد الإلكتروني
                    </h3>
                    <p className="text-gray-600">info@aluminum-co.com</p>
                    <p className="text-gray-600">sales@aluminum-co.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="bg-secondary p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">العنوان</h3>
                    <p className="text-gray-600">
                      الرياض، المملكة العربية السعودية
                    </p>
                    <p className="text-gray-600">شارع الملك فهد، حي الأعمال</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
