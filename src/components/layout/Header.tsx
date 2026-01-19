import { Bell, Plus, ChevronDown, Calendar, Building2 } from 'lucide-react';

export function Header() {
    return (
        <header className="h-20 bg-white border-b border-gray-100 px-8 flex items-center justify-between sticky top-0 z-10">
            <div className="flex items-center gap-8">
                <h2 className="text-2xl font-bold text-gray-800">Gestión de Gastos</h2>
                <div className="h-8 w-px bg-gray-200 mx-2" />

                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm font-medium text-gray-600 transition-colors border border-gray-200/50">
                        <Building2 className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-900">Empresa:</span> TechSpA Chile
                        <ChevronDown className="w-3.5 h-3.5 text-gray-400 ml-1" />
                    </button>

                    <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm font-medium text-gray-600 transition-colors border border-gray-200/50">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-900">Periodo:</span> Octubre 2023
                        <ChevronDown className="w-3.5 h-3.5 text-gray-400 ml-1" />
                    </button>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-full transition-colors relative">
                    <Bell className="w-6 h-6" />
                    <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                </button>

                <button className="flex items-center gap-2 pl-4 pr-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg font-medium transition-colors shadow-lg shadow-emerald-700/20">
                    <Plus className="w-5 h-5" />
                    Nuevo Gasto
                </button>
            </div>
        </header>
    );
}
