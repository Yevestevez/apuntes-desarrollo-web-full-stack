import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Exportamos la configuración de Vite con el plugin de React
export default defineConfig({
    plugins: [react()],
});