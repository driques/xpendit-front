import { useState } from 'react';
import type { AnalysisResponse } from './types/api';
import { uploadExpenses } from './services/api';
import { FileUpload } from './components/FileUpload';
import { StatCard } from './components/dashboard/StatCard';
import { ExpenseTable } from './components/dashboard/ExpenseTable';
import { Layout } from './components/layout/Layout';
import { CheckCircle2, Clock, XCircle, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [data, setData] = useState<AnalysisResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async (file: File) => {
    setLoading(true);
    try {
      const data = await uploadExpenses(file);
      await new Promise(resolve => setTimeout(resolve, 800)); // Smooth transition
      setData(data);
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Failed to upload file. Please ensure the backend is running.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setData(null);
  };

  return (
    <Layout>
      <AnimatePresence mode="wait">
        {!data ? (
          <motion.div
            key="upload"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex flex-col items-center justify-center min-h-[60vh]"
          >
            <FileUpload onUpload={handleUpload} isLoading={loading} />
          </motion.div>
        ) : (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Action Bar for Reset (Optional, or rely on Header 'Nuevo Gasto' if wired) */}
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-800">Resumen de Análisis</h3>
              <button
                onClick={handleReset}
                className="text-sm text-emerald-600 font-medium hover:text-emerald-700 underline"
              >
                Subir otro archivo
              </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                title="Aprobados"
                value={data.stats.aprobados.toString()}
                icon={CheckCircle2}
                iconColor="text-emerald-500"
                subtext="Gastos listos para pago"
                subtextClass="text-emerald-600"
              />
              <StatCard
                title="Pendientes"
                value={data.stats.pendientes.toString()}
                icon={Clock}
                iconColor="text-amber-500"
                subtext="Requieren revisión manual"
                subtextClass="text-amber-600"
              />
              <StatCard
                title="Rechazados"
                value={data.stats.rechazados.toString()}
                icon={XCircle}
                iconColor="text-rose-500"
                subtext="No cumplen políticas"
                subtextClass="text-rose-600"
              />
              <StatCard
                title="Anomalías"
                value={data.stats.anomalias.toString()}
                icon={AlertTriangle}
                iconColor="text-purple-500"
                subtext="Detectadas por IA"
                subtextClass="text-purple-600"
              />
            </div>

            {/* Main Table */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Detalle de Gastos</h3>
              <ExpenseTable expenses={data.results} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}

export default App;
