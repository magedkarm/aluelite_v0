import { ArrowRight } from "lucide-react";

export default function Testimonials() {
  return (
    <div className="min-h-screen bg-white">
      {/* Placeholder Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-6">
            صفحة آراء العملاء
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            هذه الصفحة قيد التطوير حالياً
          </p>
          <div className="bg-gray-50 p-8 rounded-lg max-w-md mx-auto">
            <p className="text-gray-700 mb-4">
              لإضافة محتوى هذه الصفحة، يرجى المتابعة في المحادثة وطلب تفاصيل
              صفحة آراء العملاء.
            </p>
            <a
              href="/"
              className="inline-flex items-center space-x-2 space-x-reverse bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              <ArrowRight size={20} />
              <span>العودة للرئيسية</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
