const express = require('express')
const app = express()
const materialCtrl = require('./controllers/materials')
const SERVER_PORT = 4000

app.use(express.json())

app.get('/api/materials', materialCtrl.allMaterial)
app.post('/api/materials', materialCtrl.addMaterial)
app.put('/api/materials/:material_id', materialCtrl.editMaterial)
app.delete('/api/materials/:material_id', materialCtrl.removeMaterial)

app.listen(SERVER_PORT, () => console.log(`Tracking building supplies on port ${SERVER_PORT}`))
