// Types
import type { App } from 'vue'
import { createPinia } from 'pinia'
import router from '../router'
/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */
import i18n from './i18n'
import motion from './motion'
// Plugins
import vuetify from './vuetify'

export function registerPlugins (app: App) {
  app.use(vuetify)
  app.use(motion)
  app.use(createPinia())
  app.use(i18n)
  app.use(router)
}
