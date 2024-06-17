import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import pathsPlugin from 'vite-tsconfig-paths'
import {VitePWA} from 'vite-plugin-pwa'
import path from 'path'
import {readFileSync} from 'fs'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import {manifest} from './config/manifest.config'
import {workbox} from './config/workbox.config'

export default defineConfig(({mode}) => {
  const {SSL_PRIVATE_KEY_PATH, SSL_PUBLIC_KEY_PATH} = loadEnv(mode, path.resolve(process.cwd()), '')

  return {
    plugins: [
      pathsPlugin(),
      vue(),
      VitePWA({
        registerType: 'autoUpdate',
        manifest,
        workbox,
        devOptions: {enabled: true},
      }),
    ],
    server: {
      port: 3000,
      https:
        SSL_PRIVATE_KEY_PATH && SSL_PUBLIC_KEY_PATH
          ? {
              key: readFileSync(SSL_PRIVATE_KEY_PATH),
              cert: readFileSync(SSL_PUBLIC_KEY_PATH),
            }
          : undefined,
    },
    css: {
      postcss: {
        plugins: [tailwindcss, autoprefixer],
      },
    },
  }
})
