"use client";

interface Template {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: "template";
  gradient?: string;
  framework: string;
}

interface TemplatesSectionProps {
  selectedTemplate: string;
  onTemplateSelect: (template: Template) => void;
}

export const TemplatesSection = ({
  selectedTemplate,
  onTemplateSelect,
}: TemplatesSectionProps) => {
  const templates: Template[] = [
    {
      id: "nextjs",
      name: "Next.js",
      description: "Build full-stack React apps with Next.js",
      icon: "/nextjs-logo.png",
      category: "template",
      gradient: "from-black to-gray-800",
      framework: "nextjs",
    },
    {
      id: "react",
      name: "React.js",
      description: "Frontend library with Vite build tool",
      icon: "/react-logo.png",
      category: "template",
      gradient: "from-blue-500 to-cyan-600",
      framework: "react",
    },
    {
      id: "php",
      name: "PHP",
      description: "Server-side scripting with Apache",
      icon: "/php-logo.png",
      category: "template",
      gradient: "from-purple-600 to-indigo-700",
      framework: "php",
    },
    {
      id: "nuxtjs",
      name: "Nuxt.js",
      description: "Vue.js framework for production",
      icon: "/vue-logo.png",
      category: "template",
      gradient: "from-green-500 to-emerald-600",
      framework: "nuxtjs",
    },
    {
      id: "flutter",
      name: "Flutter",
      description: "Cross-platform mobile development",
      icon: "/flutter-logo.png",
      category: "template",
      gradient: "from-blue-400 to-sky-500",
      framework: "flutter",
    },
    {
      id: "express",
      name: "Express.js",
      description: "Node.js web application framework",
      icon: "/express-logo.png",
      category: "template",
      gradient: "from-gray-700 to-gray-900",
      framework: "express",
    },
    {
      id: "django",
      name: "Django",
      description: "High-level Python web framework",
      icon: "/django-logo.png",
      category: "template",
      gradient: "from-green-600 to-teal-700",
      framework: "django",
    },
  ];

  const handleTemplateSelect = (template: Template) => {
    onTemplateSelect(template);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Frameworks</h2>
          <p className="text-gray-400">
            Choose your preferred framework to get started instantly.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {templates.map((template) => (
          <button
            key={template.id}
            onClick={() => handleTemplateSelect(template)}
            className={`group relative bg-gray-900/40 hover:bg-gray-800/60 border rounded-xl p-4 transition-all duration-300 backdrop-blur-lg cursor-pointer text-left ${
              selectedTemplate === template.name
                ? "border-purple-500/60 bg-purple-500/10"
                : "border-gray-700/40 hover:border-gray-600/60"
            }`}
          >
            <div className="flex flex-col">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center shadow-lg overflow-hidden bg-black mb-3">
                {template.icon.startsWith("/") ? (
                  <img
                    src={template.icon}
                    alt={template.name}
                    className="w-8 h-8 object-contain"
                  />
                ) : (
                  <span className="text-lg font-bold text-white">
                    {template.icon}
                  </span>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-semibold mb-1 group-hover:text-gray-100 transition-colors">
                  {template.name}
                </h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                  {template.description}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};