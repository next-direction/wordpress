import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import { createPinia } from 'pinia'
import messages from './i18n';
import Prices from './components/Prices';

const i18n = createI18n({
    locale: document.querySelector('html').getAttribute('lang'),
    fallbackLocale: 'en',
    messages,
});

const app = createApp(Prices);

app.use(i18n);
app.use(createPinia());

app.mount('#myWidget');