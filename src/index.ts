import app from './app'
import env from './api/V2/environnement'

const PORT = env.getPort()
app.listen(PORT, () => {
    console.log(`App listening port ${PORT}`)
})
