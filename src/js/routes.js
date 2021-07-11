
import HomePage from '../pages/home.f7.html';
import SongViewPage from '../pages/song-view.f7.html';
import SongEditPage from '../pages/song-edit.f7.html';
import LineEditPage from '../pages/line-edit.f7.html';
import NotFoundPage from '../pages/404.f7.html';
import SettingsPanel from '../panels/settings.f7.html';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/song/view/:songId/',
    component: SongViewPage,
  },
  {
    path: '/song/edit/:songId/',
    component: SongEditPage,
  },
  {
    path: '/song/line/edit/:songId/:verseId/:lineId/', // needs to include song id...
    component: LineEditPage,
  },
  {
    path: '/settings/',
    panel: {
      component: SettingsPanel,
    }
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = routeTo.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            context: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;