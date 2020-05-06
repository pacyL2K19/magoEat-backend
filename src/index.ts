import 'dotenv/config';
import app from './app';

const { PORT = 5000 } = process.env;

app.listen(PORT, (): void => console.log(`Server listening on Port ${PORT}`));