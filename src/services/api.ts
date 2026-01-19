import axios from 'axios';
import type { AnalysisResponse } from '../types/api';

//Esto debería estar en un archivo .env o similar, pero para simplicidad lo dejo aquí
const API_URL = 'http://localhost:3000';

export async function uploadExpenses(file: File): Promise<AnalysisResponse> {
    const formData = new FormData();
    formData.append('file', file);

    const response = await axios.post<AnalysisResponse>(`${API_URL}/expenses/upload`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });

    return response.data;
}
