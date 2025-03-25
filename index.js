import { config } from './config/config.js';
import app from './app.js';

const PORT = config.port;

app.listen(PORT, () => {
  console.log(`Server running on Port: ${PORT}`);
});
