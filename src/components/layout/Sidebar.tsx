import { LayoutDashboard, Receipt, BarChart3, Users, Settings, LogOut } from 'lucide-react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

interface SidebarProps {
    className?: string;
}

const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: false },
    { icon: Receipt, label: 'Gastos', active: true },
    { icon: BarChart3, label: 'Reportes', active: false },
    { icon: Users, label: 'Equipos', active: false },
    { icon: Settings, label: 'Configuración', active: false },
];

export function Sidebar({ className }: SidebarProps) {
    return (
        <div className={cn("w-64 h-screen bg-white border-r border-gray-100 flex flex-col font-sans", className)}>
            {/* Logo Section */}
            <div className="p-6 mb-6">
                <div className="flex items-center gap-3">
                    <div>
                        <img src="/img/xpendit.webp" alt="Xpendit Logo" className="h-6 w-auto" />

                    </div>
                </div>
            </div>

            <nav className="flex-1 px-3 space-y-1">
                {menuItems.map((item) => (
                    <button
                        key={item.label}
                        className={cn(
                            "w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 relative group",
                            item.active
                                ? "bg-emerald-50 text-emerald-700"
                                : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                        )}
                    >
                        {item.active && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute left-0 w-1 h-8 bg-emerald-600 rounded-r-full"
                                initial={false}
                            />
                        )}
                        <item.icon className={cn("w-5 h-5", item.active ? "text-emerald-600" : "text-gray-400 group-hover:text-gray-600")} />
                        {item.label}
                    </button>
                ))}
            </nav>

            <div className="p-4 border-t border-gray-100">
                <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group">
                    <img
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="User"
                        className="w-10 h-10 rounded-full object-cover ring-2 ring-white shadow-sm"
                    />
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-gray-900 truncate">Roberto Donoso</p>
                        <p className="text-xs text-gray-500 truncate">Admin TechSpA</p>
                    </div>
                </div>
                <button className="w-full mt-2 flex items-center gap-2 px-3 py-2 text-xs font-medium text-gray-500 hover:text-gray-900 transition-colors">
                    <LogOut className="w-3.5 h-3.5" />
                    Cerrar sesión
                </button>
            </div>
        </div>
    );
}
