import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const ENV = loadEnv(mode, process.cwd());
  return {
    plugins: [react(), svgr(), tsconfigPaths()],
    server: {
      port: parseInt(ENV.VITE_PORT),
      host: ENV.VITE_HOST,
    },
  }
})
