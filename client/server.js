require('zone.js/dist/zone-node');
require('reflect-metadata');

const express = require('express');
const ngUniversal = require('@nguniversal/express-engine');
const {provideModuleMap} = require('@nguniversal/module-map-ngfactory-loader');

const {AppServerModuleNgFactory, LAZY_MODULE_MAP} = require('./dist/recipes-book-server/main');

const angularRouter = (req, res) => {
  console.log('request');
  res.render('index', { req });
};

const app = express();

app.engine('html', ngUniversal.ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.set('view engine', 'html');
app.set('views', 'dist/recipes-book');

app.get('/', angularRouter);

app.use(express.static(`${__dirname}/dist/recipes-book`));

app.get('*', angularRouter);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
