import React from 'react';

interface FormInputProps {
  label: string;
  type: string;
  placeholder: string;
  icon?: React.ReactNode;
}

export function FormInput({ label, type, placeholder, icon }: FormInputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
        <input
          type={type}
          className={`w-full ${icon ? 'pl-10' : 'px-4'} py-2 rounded-lg border border-gray-300 
                     focus:ring-2 focus:ring-electric-blue focus:border-transparent`}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}