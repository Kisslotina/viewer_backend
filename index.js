import config from 'config';
import app from './src/app';

const PORT = config.get('port');

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
