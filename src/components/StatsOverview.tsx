import type { Stats } from '../types/api';
import { Card } from './ui/Card';
import { CheckCircle2, Clock, XCircle, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

interface StatsOverviewProps {
    stats: Stats;
}

export function StatsOverview({ stats }: StatsOverviewProps) {
    const statItems = [
        {
            label: 'Approved',
            value: stats.aprobados,
            icon: CheckCircle2,
            color: 'text-emerald-400',
            bg: 'bg-emerald-400/10',
            border: 'border-emerald-400/20'
        },
        {
            label: 'Pending',
            value: stats.pendientes,
            icon: Clock,
            color: 'text-amber-400',
            bg: 'bg-amber-400/10',
            border: 'border-amber-400/20'
        },
        {
            label: 'Rejected',
            value: stats.rechazados,
            icon: XCircle,
            color: 'text-rose-400',
            bg: 'bg-rose-400/10',
            border: 'border-rose-400/20'
        },
        {
            label: 'Anomalies',
            value: stats.anomalias,
            icon: AlertTriangle,
            color: 'text-purple-400',
            bg: 'bg-purple-400/10',
            border: 'border-purple-400/20'
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {statItems.map((item, index) => {
                const Icon = item.icon;
                return (
                    <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Card className={`relative overflow-hidden border ${item.border}`}>
                            <div className={`absolute top-0 right-0 p-3 opacity-10 ${item.color}`}>
                                <Icon className="w-24 h-24 transform translate-x-4 -translate-y-4" />
                            </div>
                            <div className="relative z-10 flex items-center gap-4">
                                <div className={`p-3 rounded-xl ${item.bg} ${item.color} ring-1 ring-white/5`}>
                                    <Icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-400">{item.label}</p>
                                    <p className="text-3xl font-bold text-white tabular-nums">
                                        {item.value}
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                );
            })}
        </div>
    );
}
