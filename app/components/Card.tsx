"use client";

interface CardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode; // optional icon support
}

export default function Card({ title, value, icon }: CardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-600">{title}</h3>
        {icon && <div className="text-gray-400">{icon}</div>}
      </div>

      <div className="text-3xl font-semibold text-gray-900">
        {value}
      </div>
    </div>
  );
}
