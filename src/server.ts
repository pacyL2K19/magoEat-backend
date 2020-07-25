import app from './app'
import env from './environnement'

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`App listening port ${PORT}`)
})
