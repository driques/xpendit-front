import { Search, Filter, Download, MoreVertical, ChevronLeft, ChevronRight, BadgeAlert } from 'lucide-react';
import type { ValidationResult } from '../../types/api';
import { cn } from '../../lib/utils';

interface ExpenseTableProps {
    expenses: ValidationResult[];
}

export function ExpenseTable({ expenses }: ExpenseTableProps) {
    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            {/* Table Header / Filters */}
            <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Buscar por ID..."
                        className="w-full pl-10 pr-4 py-2 bg-gray-50 border-none rounded-lg text-sm focus:ring-2 focus:ring-emerald-500/20 text-gray-900 placeholder:text-gray-400 font-medium"
                    />
                </div>

                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                        <Filter className="w-4 h-4" />
                        Filtros
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                        <Download className="w-4 h-4" />
                        Exportar CSV
                    </button>
                </div>
            </div>

            {/* Table Content */}
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b border-gray-100">
                            <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Expense ID</th>
                            <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider text-center">Estado</th>
                            <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Alertas</th>
                            <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider text-center">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {expenses.map((expense, idx) => (
                            <tr key={expense.expenseId || idx} className="group hover:bg-gray-50/50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex flex-col">
                                        <span className="text-sm font-bold text-gray-900">{expense.expenseId}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center">
                                    <span className={cn(
                                        "inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide gap-1.5",
                                        expense.status === 'APROBADO' && "bg-emerald-100 text-emerald-700",
                                        expense.status === 'PENDIENTE' && "bg-amber-100 text-amber-700",
                                        expense.status === 'RECHAZADO' && "bg-rose-100 text-rose-700"
                                    )}>
                                        <span className={cn("w-1.5 h-1.5 rounded-full",
                                            expense.status === 'APROBADO' && "bg-emerald-500",
                                            expense.status === 'PENDIENTE' && "bg-amber-500",
                                            expense.status === 'RECHAZADO' && "bg-rose-500"
                                        )} />
                                        {expense.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex flex-wrap gap-2">
                                        {expense.alerts.length > 0 ? (
                                            expense.alerts.map((alert, i) => (
                                                <span
                                                    key={i}
                                                    className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-red-50 text-red-600 border border-red-100 text-[10px] font-bold uppercase tracking-wide"
                                                >
                                                    <BadgeAlert className="w-3 h-3" />
                                                    {alert.replace(/_/g, ' ')}
                                                </span>
                                            ))
                                        ) : (
                                            <span className="text-xs text-gray-400 italic">Sin alertas</span>
                                        )}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center">
                                    <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                                        <MoreVertical className="w-4 h-4" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination (Static for now) */}
            <div className="p-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-400 font-medium">Mostrando {expenses.length} registros</span>

                <div className="flex items-center gap-2">
                    <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg border border-gray-200">
                        <ChevronLeft className="w-3 h-3" />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center bg-emerald-700 text-white rounded-lg text-xs font-bold">1</button>
                    <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg border border-gray-200">
                        <ChevronRight className="w-3 h-3" />
                    </button>
                </div>
            </div>
        </div>
    );
}
