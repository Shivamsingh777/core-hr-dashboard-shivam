import React from 'react';
import { Settings, BarChart2, Briefcase, Mic, Volume2, PenTool, Users as UsersIcon, Anchor } from 'lucide-react';

const EmployeeCard = ({ name, role, image, badgeIcon: BadgeIcon }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-[2rem] p-8 flex flex-col items-center shadow-sm hover:shadow-md transition-all group">
      <div className="relative mb-5">
        <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-gray-50 group-hover:scale-105 transition-transform">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        {/* The Badge Icon overlay seen in the Figma */}
        <div className="absolute bottom-1 right-1 bg-[#3D3632] p-2 rounded-xl border-4 border-white shadow-sm">
          <BadgeIcon size={14} className="text-white" />
        </div>
      </div>
      
      <h3 className="font-bold text-[#3D3632] text-lg mb-1">{name}</h3>
      <p className="text-gray-400 text-sm font-medium mb-4">{role}</p>
      
      {/* The 4 status indicators from the design */}
      <div className="flex gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FFD43B]"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-[#40C057]"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-[#228BE6]"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-[#FD7E14]"></span>
      </div>
    </div>
  );
};

export default EmployeeCard;