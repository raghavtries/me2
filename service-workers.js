self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('crm-pwa-cache').then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/manifest.json',
                '/data/crm_data.csv',
                '/
