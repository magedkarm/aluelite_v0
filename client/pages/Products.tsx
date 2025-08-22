import { ArrowRight, Star, Eye } from "lucide-react";

export default function Products() {
  const products = [
    {
      id: 1,
      title: "الفواصل الجدارية",
      description:
        "أنظمة فواصل مكتبية عصرية وعملية للمساحات التجارية والإدارية مع خيارات متنوعة من الزجاج والخشب والقماش",
      image:
        "https://images.pexels.com/photos/7534168/pexels-photo-7534168.jpeg",
      category: "أنظمة مكتبية",
      features: [
        "عزل صوتي",
        "سهولة التركيب",
        "تصاميم متنوعة",
        "مقاومة للرطوبة",
      ],
      rating: 5,
    },
    {
      id: 2,
      title: "أبواب ونوافذ الألومنيوم",
      description:
        "تشكيلة واسعة من الأبواب والنوافذ العصرية عالية الجودة مع عزل حراري ممتاز",
      image: "https://images.pexels.com/photos/859220/pexels-photo-859220.jpeg",
      category: "أبواب ونوافذ",
      features: [
        "عزل حراري",
        "تصاميم عصرية",
        "مقاومة العوامل الجوية",
        "سهولة التشغيل",
      ],
      rating: 5,
    },
    {
      id: 3,
      title: "واجهات زجاجية",
      description:
        "واجهات زجاجية أنيقة للمباني التجارية والسكنية بتقنيات حديثة وتصاميم متطورة",
      image:
        "https://images.pexels.com/photos/9301028/pexels-photo-9301028.jpeg",
      category: "واجهات",
      features: [
        "زجاج عالي الجودة",
        "عزل حراري",
        "تصميم حديثة",
        "مقاومة الكسر",
      ],
      rating: 5,
    },
    {
      id: 4,
      title: "درابزين وسور الألومنيوم",
      description:
        "درابزين وأسوار ألومنيوم بتصاميم عصرية آمنة ومتينة لجميع أنواع المباني",
      image:
        "https://images.pexels.com/photos/14100342/pexels-photo-14100342.jpeg",
      category: "درابزين وسور",
      features: ["مقاومة التآكل", "تصاميم أنيقة", "سهولة الصيانة", "أمان عالي"],
      rating: 5,
    },
    {
      id: 5,
      title: "مظلات وبرجولات",
      description:
        "حلول مبتكرة للحماية من الشمس والأمطار بتصاميم جمالية ووظيفية",
      image:
        "https://images.pexels.com/photos/14620110/pexels-photo-14620110.jpeg",
      category: "مظلات",
      features: [
        "حماية من الشمس",
        "مقاومة الأمطار",
        "تصاميم جذابة",
        "متانة عالية",
      ],
      rating: 4,
    },
    {
      id: 6,
      title: "أبواب الحماية",
      description: "أبواب ألومنيوم مقاومة للحريق والسطو مع أنظمة أمان متطورة",
      image: "https://images.pexels.com/photos/859220/pexels-photo-859220.jpeg",
      category: "أمان وحماية",
      features: ["مقاومة الحريق", "أمان عالي", "تصاميم قوية", "أقفال متطورة"],
      rating: 5,
    },
  ];

  const categories = [
    "الكل",
    "أنظمة مكتبية",
    "أبواب ونوافذ",
    "واجهات",
    "درابزين وسور",
    "مظلات",
    "أمان وحماية",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">منتجاتنا</h1>
          <p className="text-xl md:text-2xl">
            تشكيلة شاملة من منتجات الألومنيوم عالية الجودة
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full transition-colors ${
                  index === 0
                    ? "bg-primary text-white"
                    : "bg-white text-gray-700 hover:bg-primary hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-secondary text-primary px-3 py-1 rounded-full text-sm font-semibold">
                    {product.category}
                  </div>
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a
                      href={`/product/${product.id}`}
                      className="bg-white text-primary px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 space-x-reverse hover:bg-gray-100 transition-colors"
                    >
                      <Eye size={20} />
                      <span>عرض التفاصيل</span>
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center mb-3">
                    {[...Array(product.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-secondary fill-current"
                      />
                    ))}
                    <span className="text-gray-500 text-sm mr-2">
                      ({product.rating}.0)
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {product.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">
                      المميزات الرئيسية:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {product.features.slice(0, 3).map((feature, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                        >
                          {feature}
                        </span>
                      ))}
                      {product.features.length > 3 && (
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                          +{product.features.length - 3} المزيد
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex space-x-2 space-x-reverse">
                    <a
                      href={`/product/${product.id}`}
                      className="flex-1 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-center"
                    >
                      التفاصيل الكاملة
                    </a>
                    <button className="bg-secondary hover:bg-secondary/90 text-primary px-4 py-2 rounded-lg font-semibold transition-colors">
                      طلب عرض سعر
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">
            لم تجد ما تبحث عنه؟
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            تواصل معنا للحصول على حلول مخصصة لاحتياجاتك
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              تواصل معنا
            </a>
            <a
              href="tel:+966501234567"
              className="bg-secondary hover:bg-secondary/90 text-primary px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              اتصل الآن
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
