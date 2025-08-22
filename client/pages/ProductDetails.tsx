import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ArrowRight, Check, Phone, Mail, MessageCircle, X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProductDetails() {
  const { id } = useParams();
  const [activeImage, setActiveImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);

  // Modal control functions
  const openModal = (index: number) => {
    setModalImageIndex(index);
    setIsModalOpen(true);
    setZoomLevel(1);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setZoomLevel(1);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    const nextIndex = (modalImageIndex + 1) % product.images.length;
    setModalImageIndex(nextIndex);
    setZoomLevel(1);
  };

  const prevImage = () => {
    const prevIndex = (modalImageIndex - 1 + product.images.length) % product.images.length;
    setModalImageIndex(prevIndex);
    setZoomLevel(1);
  };

  const zoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.25, 3));
  };

  const zoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.25, 0.5));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;

      switch (e.key) {
        case 'Escape':
          closeModal();
          break;
        case 'ArrowLeft':
          prevImage();
          break;
        case 'ArrowRight':
          nextImage();
          break;
        case '+':
        case '=':
          zoomIn();
          break;
        case '-':
          zoomOut();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, modalImageIndex]);

  // Product data - in real app this would come from API
  const productData: Record<string, any> = {
    "1": {
      title: "الفواصل الجدارية",
      description: "أنظمة فواصل مكتبية عصرية وعملية للمساحات التجارية والإدارية",
      images: [
        "https://images.pexels.com/photos/7534168/pexels-photo-7534168.jpeg",
        "https://images.pexels.com/photos/859220/pexels-photo-859220.jpeg",
        "https://images.pexels.com/photos/9301028/pexels-photo-9301028.jpeg"
      ],
      features: [
        "مصنوعة من مقاطع الألومنيوم المعالجة وفق أحدث التقنيات الأوروبية",
        "مجهزة بقنوات خاصة للتمديدات الكهربائية أسفل النظام",
        "تحافظ على المظهر الأنيق للنظام",
        "إمكانية تركيب أبواب خشبية أو زجاجية ضمن الأنظمة",
        "سهلة التركيب",
        "تحكم في خصوصية بيئة العمل",
        "سهلة التنظيف"
      ],
      systems: [
        {
          name: "نظام زجاج مغشي",
          description: "يمنح الزجاج مظهراً أنيقاً ويولد بيئة عمل مفتوحة ومشرقة مع العزل الصوتي",
          features: [
            "بيئة عمل مفتوحة ومشرقة",
            "عزل صوتي ممتاز",
            "إمكانية إضافة النقوش والرسومات",
            "يعبر عن هوية الشركة",
            "يناسب الديكورات الداخلية"
          ]
        },
        {
          name: "النظام الخشبي",
          description: "تشكيلة كبيرة من الأنواع الخشبية مع عزل صوتي وحراري ممتاز",
          features: [
            "تشكيلة كبيرة من الأنواع",
            "عزل صوتي وحراري",
            "خصوصية لبيئة العمل",
            "مظهر كلاسيكي أنيق"
          ]
        },
        {
          name: "نظام الخشب مع القماش",
          description: "ألوان متنوعة تثري بيئة العمل وتناسب أسلوب عملك",
          features: [
            "الأخضر: راحة وهدوء",
            "الأبيض: حرية وانفتاح",
            "الأصفر: نشاط وتفاؤل",
            "الأحمر: حيوية وطموح",
            "عزل صوتي وحراري",
            "خصوصية لبيئة العمل",
            "بيئة عمل بألوان مشرقة"
          ]
        }
      ]
    },
    "2": {
      title: "أبواب ونوافذ الألومنيوم",
      description: "تشكيلة واسعة من الأبواب والنوافذ العصرية عالية الجودة",
      images: [
        "https://images.pexels.com/photos/859220/pexels-photo-859220.jpeg"
      ],
      features: [
        "مقاطع ألومنيوم عالية الجودة",
        "عزل حراري ممتاز",
        "تصاميم عصرية ومتنوعة",
        "سهولة في التشغيل والصيانة"
      ]
    }
  };

  const product = productData[id || "1"];

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">المنتج غير موجود</h1>
          <a href="/products" className="text-secondary hover:underline">العودة للمنتجات</a>
        </div>
      </div>
    );
  }

  const handleRequestQuote = () => {
    const phoneNumber = "966501234567";
    const message = `مرحباً، أود طلب عرض سعر لمنتج: ${product.title}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center space-x-2 space-x-reverse text-gray-600">
          <a href="/" className="hover:text-primary">الرئيسية</a>
          <span>/</span>
          <a href="/products" className="hover:text-primary">المنتجات</a>
          <span>/</span>
          <span className="text-primary">{product.title}</span>
        </div>
      </div>

      {/* Product Details */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            {/* Main Image */}
            <div
              className="mb-4 relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
              onClick={() => openModal(activeImage)}
            >
              <img
                src={product.images[activeImage]}
                alt={product.title}
                className="w-full h-96 object-cover transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {activeImage + 1} / {product.images.length}
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3">
                  <ZoomIn className="text-primary" size={24} />
                </div>
              </div>
            </div>

            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((image: string, index: number) => (
                  <div
                    key={index}
                    className={`relative cursor-pointer transition-all duration-200 rounded-lg overflow-hidden ${
                      activeImage === index
                        ? 'ring-3 ring-primary ring-offset-2 shadow-lg'
                        : 'hover:shadow-md hover:scale-105'
                    }`}
                    onClick={() => setActiveImage(index)}
                  >
                    <img
                      src={image}
                      alt={`${product.title} ${index + 1}`}
                      className="w-full h-24 object-cover"
                    />
                    {activeImage === index && (
                      <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-4xl font-bold text-primary mb-4">{product.title}</h1>
            <p className="text-xl text-gray-600 mb-8">{product.description}</p>

            {/* Features */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">المميزات الرئيسية</h2>
              <ul className="space-y-3">
                {product.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start space-x-3 space-x-reverse">
                    <Check className="text-secondary mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Request Quote Buttons */}
            <div className="space-y-4">
              <button 
                onClick={handleRequestQuote}
                className="w-full bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg text-xl font-semibold transition-colors flex items-center justify-center space-x-2 space-x-reverse"
              >
                <MessageCircle size={24} />
                <span>طلب عرض سعر عبر الواتساب</span>
              </button>
              
              <div className="grid grid-cols-2 gap-4">
                <a 
                  href="tel:+966501234567"
                  className="bg-secondary hover:bg-secondary/90 text-primary px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 space-x-reverse"
                >
                  <Phone size={20} />
                  <span>اتصال مباشر</span>
                </a>
                
                <a 
                  href="mailto:info@aluminum-co.com"
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 space-x-reverse"
                >
                  <Mail size={20} />
                  <span>إرسال إيميل</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Systems Details (for wall partitions only) */}
        {product.systems && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">أنواع الأنظمة المتاحة</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {product.systems.map((system: any, index: number) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-primary mb-3">{system.name}</h3>
                  <p className="text-gray-600 mb-4">{system.description}</p>
                  <ul className="space-y-2">
                    {system.features.map((feature: string, featureIndex: number) => (
                      <li key={featureIndex} className="flex items-start space-x-2 space-x-reverse">
                        <Check className="text-secondary mt-1 flex-shrink-0" size={16} />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">منتجات ذات صلة</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(productData)
              .filter(([key]) => key !== id)
              .slice(0, 3)
              .map(([key, relatedProduct]: [string, any]) => (
                <div key={key} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img 
                    src={relatedProduct.images[0]} 
                    alt={relatedProduct.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-primary mb-2">{relatedProduct.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{relatedProduct.description}</p>
                    <a 
                      href={`/product/${key}`}
                      className="text-secondary hover:text-secondary/80 font-semibold"
                    >
                      عرض التفاصيل
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          {/* Modal Content */}
          <div className="relative max-w-7xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-secondary transition-colors z-10"
              aria-label="إغلاق"
            >
              <X size={32} />
            </button>

            {/* Image Counter */}
            <div className="absolute -top-12 left-0 text-white text-lg font-semibold">
              {modalImageIndex + 1} / {product.images.length}
            </div>

            {/* Navigation Arrows */}
            {product.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-secondary transition-colors z-10 bg-black/50 rounded-full p-2"
                  aria-label="الصورة السابقة"
                >
                  <ChevronLeft size={32} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-secondary transition-colors z-10 bg-black/50 rounded-full p-2"
                  aria-label="الصورة التالية"
                >
                  <ChevronRight size={32} />
                </button>
              </>
            )}

            {/* Zoom Controls */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 space-x-reverse bg-black/50 rounded-full p-2">
              <button
                onClick={zoomOut}
                disabled={zoomLevel <= 0.5}
                className="text-white hover:text-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed p-2"
                aria-label="تصغير"
              >
                <ZoomOut size={20} />
              </button>
              <span className="text-white px-3 py-2 text-sm font-semibold">
                {Math.round(zoomLevel * 100)}%
              </span>
              <button
                onClick={zoomIn}
                disabled={zoomLevel >= 3}
                className="text-white hover:text-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed p-2"
                aria-label="تكبير"
              >
                <ZoomIn size={20} />
              </button>
            </div>

            {/* Main Modal Image */}
            <div className="relative overflow-hidden rounded-lg max-h-[80vh] max-w-[90vw]">
              <img
                src={product.images[modalImageIndex]}
                alt={`${product.title} ${modalImageIndex + 1}`}
                className="max-w-full max-h-full object-contain transition-transform duration-300"
                style={{ transform: `scale(${zoomLevel})` }}
                draggable={false}
              />
            </div>

            {/* Thumbnail Navigation */}
            {product.images.length > 1 && (
              <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 space-x-reverse">
                {product.images.map((image: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => {
                      setModalImageIndex(index);
                      setZoomLevel(1);
                    }}
                    className={`w-16 h-16 rounded-lg overflow-hidden transition-all duration-200 ${
                      modalImageIndex === index
                        ? 'ring-2 ring-secondary shadow-lg'
                        : 'opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.title} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Background Click to Close */}
          <div
            className="absolute inset-0 -z-10"
            onClick={closeModal}
          />
        </div>
      )}
    </div>
  );
}
