import app from './app';

const port = 3333;

app.listen(port, () =>
  console.log(`🚀 => server running in ${process.env.APP_API_URL}`),
);
