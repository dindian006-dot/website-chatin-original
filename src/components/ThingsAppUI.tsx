import { Search, Inbox, Star, Calendar, Layers, Archive, CheckSquare, PlayCircle } from "lucide-react";

export function ThingsAppUI() {
  return (
    <div className="w-full h-full bg-white pt-14 px-5 flex flex-col">
      {/* Search Bar */}
      <div className="bg-gray-100/80 rounded-xl py-2 px-3 flex items-center gap-2 mb-8">
        <Search className="w-4 h-4 text-gray-400" />
        <span className="text-gray-400 text-[15px] font-medium">Quick Find</span>
      </div>

      {/* List Items */}
      <div className="space-y-5">
        <div className="flex items-center gap-3.5">
          <Inbox className="w-5 h-5 text-blue-500 fill-blue-500/20" />
          <span className="text-gray-900 font-semibold text-[15px]">Inbox</span>
        </div>
        
        <div className="flex items-center gap-3.5">
          <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          <span className="text-gray-900 font-semibold text-[15px]">Today</span>
        </div>

        <div className="flex items-center gap-3.5">
          <Calendar className="w-5 h-5 text-red-500 fill-red-500/20" />
          <span className="text-gray-900 font-semibold text-[15px]">Upcoming</span>
        </div>

        <div className="flex items-center gap-3.5">
          <Layers className="w-5 h-5 text-emerald-500 fill-emerald-500/20" />
          <span className="text-gray-900 font-semibold text-[15px]">Anytime</span>
        </div>

        <div className="flex items-center gap-3.5">
          <Archive className="w-5 h-5 text-amber-700 fill-amber-700/20" />
          <span className="text-gray-900 font-semibold text-[15px]">Someday</span>
        </div>

        <div className="flex items-center gap-3.5">
          <CheckSquare className="w-5 h-5 text-green-500 fill-green-500/20" />
          <span className="text-gray-900 font-semibold text-[15px]">Logbook</span>
        </div>
      </div>

      <div className="h-px bg-gray-100 my-6 w-full"></div>

      <div className="flex items-center gap-3.5">
        <PlayCircle className="w-5 h-5 text-gray-400" />
        <span className="text-gray-600 font-medium text-[15px]">Meet Things for iPhone</span>
      </div>
    </div>
  );
}
