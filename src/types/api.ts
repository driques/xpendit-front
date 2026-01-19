export type ValidationStatus = 'APROBADO' | 'PENDIENTE' | 'RECHAZADO';

export interface Stats {
    aprobados: number;
    pendientes: number;
    rechazados: number;
    anomalias: number;
}

export interface ValidationResult {
    expenseId: string;
    date?: string;
    merchant?: string;
    category?: string;
    amount?: number;
    currency?: string;
    status: ValidationStatus;
    alerts: string[];
}

export interface AnalysisResponse {
    stats: Stats;
    results: ValidationResult[];
}
