import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react()],
    server: {
      open: true,
    },
    define: {
      NEXT_PUBLIC_SOCKET_URI: JSON.stringify(env.NEXT_PUBLIC_SOCKET_URI),
    },
  };
});
