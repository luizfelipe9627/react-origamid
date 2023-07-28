import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Importa o plugin svgr.
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Executa o svgr para converter os arquivos svg em componentes React.
    svgr(),
  ],
});
