"use client";

const CardContainer = ({ children, title, icon, className = "" }) => {
  return (
    <div
      className={`
        bg-white dark:bg-gray-800 
        rounded-xl shadow-lg hover:shadow-lg 
        p-6 transition-all duration-300
        border border-gray-200 dark:border-gray-700
        ${className}
      `}
    >
      {(title || icon) && (
        <div className="flex items-center gap-3 mb-4">
          {icon && <div className="text-2xl">{icon}</div>}
          {title && (
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              {title}
            </h3>
          )}
        </div>
      )}
      <div className="text-gray-700 dark:text-gray-300">{children}</div>
    </div>
  );
};

export default CardContainer;
