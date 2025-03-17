export default function FeatureCard({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
        <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
          <Icon className="h-6 w-6 text-indigo-600" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  }
  