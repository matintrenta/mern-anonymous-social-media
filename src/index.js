import './database.js'
import app from './app.js'

app.listen(app.get('port'), ()=>{
    console.log('app listening on port:', app.get('port'))
})