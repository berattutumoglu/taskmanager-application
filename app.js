const express = require("express") // Express eklendi.
const mongoose = require("mongoose") // Mongoose eklendi.

const app = express() // Express, app değişkenine atandı.
app.use(express.json()) // Veriler JSON formatında alındı.
app.listen(3000, () => {
    console.log (`Server started at ${3000} successfully!`);
}) // Port 3000'e sunucu ayarlandı. 

require ('dotenv').config();
const mongoString = process.env.DB; 
// .env dosyası app.js'e import edildi, mongoString adlı değişkene atandı.

mongoose.set("strictQuery", false);
mongoose.connect(process.env.DB, ()=> {
console.log('Connected to MongoDB successfully!')
})

// Mongoose yardımı ile sunucuya bağlanıldı.

const routes = require('./Routes/route') // route.js dosyası import edildi.
app.use('/api', routes); // route.js dosyası kullanıldı.