import type { LucideIcon } from 'lucide-react';
import { cn } from '../../lib/utils';

interface StatCardProps {
    title: string;
    value: string;
    subtext?: string;
    subtextClass?: string;
    icon: LucideIcon;
    iconColor?: string;
    trend?: {
        value: string;
        isPositive: boolean;
        label: string;
    };
}

export function StatCard({ title, value, subtext, subtextClass, icon: Icon, iconColor = "text-gray-400", trend }: StatCardProps) {
    return (
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
                <span className="text-gray-500 font-medium text-sm">{title}</span>
                <Icon className={cn("w-5 h-5", iconColor)} />
            </div>

            <div className="space-y-1">
                <h3 className="text-3xl font-bold text-gray-900 tracking-tight">{value}</h3>

                {trend ? (
                    <div className="flex items-center gap-2 text-xs font-medium">
                        <span className={cn(trend.isPositive ? "text-emerald-600" : "text-red-500")}>
                            {trend.value}
                        </span>
                        <span className="text-gray-400">{trend.label}</span>
                    </div>
                ) : subtext && (
                    <p className={cn("text-xs font-medium", subtextClass || "text-gray-400")}>
                        {subtext}
                    </p>
                )}
            </div>
        </div>
    );
}
