import React from 'react';
import { 
  Search, Download, Filter, Plus, LayoutGrid, 
  Clock, Settings, Mic, Volume2, Anchor, 
  Mail, FileEdit, ChevronLeft, ChevronRight, Share, Network 
} from 'lucide-react';
import EmployeeCard from '../components/EmployeeCard';

const employees = [
  { name: 'Ethan Lee', role: 'IT Specialist', image: 'https://i.pravatar.cc/150?u=1', badgeIcon: Settings },
  { name: 'Emily Baker', role: 'Marketing Manager', image: 'https://i.pravatar.cc/150?u=2', badgeIcon: Settings },
  { name: 'Micheal Shaun', role: 'Sales Director', image: 'https://i.pravatar.cc/150?u=3', badgeIcon: Share },
  { name: 'Liam Carter', role: 'Product Designer', image: 'https://i.pravatar.cc/150?u=4', badgeIcon: Anchor },
  { name: 'Grace Kim', role: 'Customer Lead', image: 'https://i.pravatar.cc/150?u=5', badgeIcon: Anchor },
  { name: 'Noah Williams', role: 'Finance Head', image: 'https://i.pravatar.cc/150?u=6', badgeIcon: Mic },
  { name: 'Isabella Rossi', role: 'Operations Manager', image: 'https://i.pravatar.cc/150?u=7', badgeIcon: Volume2 },
  { name: 'Ava Thompson', role: 'HR Executive', image: 'https://i.pravatar.cc/150?u=8', badgeIcon: Anchor },
];

const PeopleGrid = () => {
  return (
    <div className="p-8 max-w-[1600px] mx-auto flex flex-col min-h-screen">
      {/* Top Header */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-2xl font-bold text-[#3D3632]">People</h1>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-100 shadow-sm text-sm font-medium text-[#3D3632]">
            <span className="border-r border-gray-200 pr-2">MST</span>
            <Clock size={16} className="text-gray-400" />
            <span>02:03:02</span>
            <FileEdit size={16} className="ml-2 text-gray-400 cursor-pointer" />
          </div>
          <div className="p-2.5 bg-white border border-gray-100 rounded-full shadow-sm text-gray-500 cursor-pointer hover:bg-gray-50">
            <Mail size={20} />
          </div>
          <img src="https://i.pravatar.cc/150?u=99" className="w-10 h-10 rounded-full border-2 border-white shadow-md ml-1" alt="Profile" />
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex flex-wrap gap-4 justify-between items-center mb-8">
        <div className="relative flex-1 min-w-[300px] max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search by Employee Name or Number" 
            className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:ring-2 focus:ring-[#3D3632]/10 outline-none transition-all placeholder:text-gray-400 text-sm"
          />
        </div>
        
        <div className="flex items-center gap-3">
          <button className="p-3 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 text-gray-600"><Download size={20}/></button>
          <button className="p-3 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 text-gray-600"><Filter size={20}/></button>
          <button className="p-3 bg-[#3D3632] text-white rounded-xl shadow-lg hover:opacity-90"><Plus size={20}/></button>
          
          {/* View Switcher Segmented Control */}
          <div className="flex items-center bg-white border border-gray-200 rounded-2xl p-1 shadow-sm">
            {/* Grid View (Active) */}
            <button className="p-2 bg-[#3D3632] text-white rounded-xl transition-all">
              <LayoutGrid size={22} strokeWidth={2.5} />
            </button>
            
            {/* List View */}
            <button className="p-2 text-gray-400 hover:text-[#3D3632] transition-all px-4">
              <div className="flex flex-col gap-1">
                 <span className="w-5 h-1.5 border-2 border-current rounded-sm"></span>
                 <span className="w-5 h-1.5 border-2 border-current rounded-sm"></span>
              </div>
            </button>
            
            {/* Hierarchy/Org View */}
            <button className="p-2 text-gray-400 hover:text-[#3D3632] transition-all pr-2">
              <Network size={22} strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 flex-1">
        {employees.map((emp, i) => (
          <EmployeeCard key={i} {...emp} />
        ))}
      </div>

      {/* FOOTER: Rows per page & Pagination */}
      <div className="mt-12 flex justify-between items-center text-sm font-medium text-gray-500 border-t border-gray-100 pt-6">
        <div className="flex items-center gap-3">
          <span>Rows per page:</span>
          <div className="relative border border-gray-200 rounded-lg px-3 py-1.5 flex items-center gap-3 bg-white cursor-pointer hover:bg-gray-50 transition-colors">
            <span className="text-[#3D3632]">100</span>
            <ChevronRight size={14} className="rotate-90 text-gray-400" />
          </div>
        </div>
        <div className="flex items-center gap-8">
          <span>1-100 of 500</span>
          <div className="flex gap-6 items-center">
            <ChevronLeft size={20} className="cursor-pointer text-gray-300 hover:text-gray-500" />
            <ChevronRight size={20} className="cursor-pointer text-[#3D3632] hover:opacity-70" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleGrid;