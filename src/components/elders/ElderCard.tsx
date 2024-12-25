import { Elder } from '@/types';

interface ElderCardProps {
  elder: Elder;
  onClick?: () => void;
}

export default function ElderCard({ elder, onClick }: ElderCardProps) {
  return (
    <div 
      onClick={onClick}
      className="p-6 rounded-lg border hover:shadow-lg transition-shadow cursor-pointer"
    >
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 rounded-full bg-gray-200" />
        <div>
          <h3 className="text-lg font-semibold">{elder.name}</h3>
          <p className="text-gray-600">{elder.description}</p>
        </div>
      </div>
    </div>
  );
}