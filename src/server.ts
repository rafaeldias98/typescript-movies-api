import * as express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.json([{ success: true }]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running in http://localhost:${PORT}`);
});
