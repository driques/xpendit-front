import type { ValidationResult } from '../types/api';
import { Card } from './ui/Card';
import { motion } from 'framer-motion';
import { BadgeAlert, CheckCircle2, Clock, XCircle } from 'lucide-react';
import { cn } from '../lib/utils';

interface ResultsListProps {
    results: ValidationResult[];
}

export function ResultsList({ results }: ResultsListProps) {
    const getStatusConfig = (status: string) => {
        switch (status) {
            case 'APROBADO':
                return {
                    icon: CheckCircle2,
                    color: 'text-emerald-400',
                    bg: 'bg-emerald-400/10',
                    border: 'border-emerald-400/20'
                };
            case 'PENDIENTE':
                return {
                    icon: Clock,
                    color: 'text-amber-400',
                    bg: 'bg-amber-400/10',
                    border: 'border-amber-400/20'
                };
            case 'RECHAZADO':
                return {
                    icon: XCircle,
                    color: 'text-rose-400',
                    bg: 'bg-rose-400/10',
                    border: 'border-rose-400/20'
                };
            default:
                return {
                    icon: Clock,
                    color: 'text-gray-400',
                    bg: 'bg-gray-400/10',
                    border: 'border-gray-400/20'
                };
        }
    };

    return (
        <Card className="overflow-hidden p-0">
            <div className="p-6 border-b border-white/5 bg-white/5 backdrop-blur-xl">
                <h3 className="text-xl font-bold text-white">Analysis Details</h3>
                <p className="text-gray-400 text-sm mt-1">Processed {results.length} expenses</p>
            </div>

            <div className="divide-y divide-white/5 max-h-[600px] overflow-y-auto custom-scrollbar">
                {results.map((result, index) => {
                    const statusConfig = getStatusConfig(result.status);
                    const StatusIcon = statusConfig.icon;

                    return (
                        <motion.div
                            key={result.expenseId}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="p-4 hover:bg-white/5 transition-colors group"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex items-start gap-4">
                                    <div className={cn("p-2 rounded-lg mt-1", statusConfig.bg, statusConfig.color)}>
                                        <StatusIcon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium font-mono">{result.expenseId}</h4>
                                        <div className={cn("inline-flex items-center px-2 py-0.5 rounded text-xs font-medium mt-1 uppercase tracking-wider", statusConfig.bg, statusConfig.color)}>
                                            {result.status}
                                        </div>
                                    </div>
                                </div>

                                {result.alerts.length > 0 && (
                                    <div className="flex-1 flex flex-wrap gap-2 justify-end">
                                        {result.alerts.map((alert, i) => (
                                            <span
                                                key={i}
                                                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 text-xs font-medium"
                                            >
                                                <BadgeAlert className="w-3 h-3" />
                                                {alert.replace(/_/g, ' ')}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </Card>
    );
}
