import app from './app'
import env from './environnement'

const PORT = env.getPort();
app.listen(PORT, () => {
    console.log(`App listening port ${PORT}`)
})
