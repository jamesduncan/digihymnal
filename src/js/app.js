import $$ from 'dom7';
import Framework7,  { Template7 }  from 'framework7/framework7.esm.bundle.js';

// Import locales
import './locales.js';

// Import F7 Styles
import 'framework7/css/framework7.bundle.css';

// Import Icons and App Custom Styles

import '../css/app.css';

// Import FontAwesome Icons

import '../../node_modules/@fortawesome/fontawesome-free/css/all.min.css';

// Import Routes
import routes from './routes.js';

// Import main app component
import App from '../app.f7.html';

import { transpose } from "./transpose";
Template7.registerHelper('transpose', transpose);

// Import translation tool
import { translate } from "./translate";
Template7.registerHelper('translate', translate);

var app = new Framework7({
  root: '#app', // App root element
  component: App, // App main component

  name: 'Digital Hymnal', // App name
  theme: 'auto', // Automatic theme detection
  panel: {
    swipe: true,
  },
  autoDarkTheme: true,
  // App routes
  routes: routes,
  // Register service worker
  serviceWorker: {
    path: '/service-worker.js',
  },
});