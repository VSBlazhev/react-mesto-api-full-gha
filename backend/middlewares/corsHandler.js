const allowedCors = [
  'http://localhost:3001',
  'http://blazhev.mesto.nomoredomains.monster',
  'https://blazhev.mesto.nomoredomains.monster',
  'https://api.blazhev.mesto.nomoredomains.monster',
  'http://api.blazhev.mesto.nomoredomains.monster',
];

module.exports = (req, res, next) => {
  const { origin } = req.headers;
  const { method } = req;
  const ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';
  const requestHeaders = req.headers['access-control-request-headers'];
  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Credentials', true);
  }
  if (method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', ALLOWED_METHODS);
    res.header('Access-Control-Allow-Headers', requestHeaders);
    return res.end();
  }

  return next();
};
