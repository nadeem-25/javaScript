import {defineConfig} from "vite";
import { resolve } from "path";

export default defineConfig({
    root:".",
    server:{
        port:7777,
        open:true    
    },

    build:{
        outDir:"dist",
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                home: resolve(__dirname, "src/Home/home.html"),
                cart: resolve(__dirname, "src/Cart/cart.html"),
            }
        }
    }
})
