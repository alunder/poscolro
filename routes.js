const nextRoutes = require('next-routes');

const routes = (module.exports = nextRoutes());

routes.add('dashboard', '/dashboard');

routes.add('vendors/approved/index', '/vendors/approveds');
routes.add('vendors/pending/index', '/vendors/pending');
routes.add('vendors/blacklisted/index', '/vendors/blacklisted');

routes.add('settings/profile', '/user/profile');
routes.add('account/registration', '/user/registration');
routes.add('projects/new/index', '/projects/new');
routes.add('projects/index', '/projects/:status(active|draft|terminated)');
routes.add('projects/show', '/projects/:id');
routes.add('tenders/new/index', '/tenders/new');
routes.add('tenders/details/index', '/tenders/:id');
routes.add('track-my-bids/index', '/track-my-bids');
routes.add('tenders/products/index', '/tenders/products');
routes.add('tenders/product/index', '/tenders/product');
routes.add('login');
