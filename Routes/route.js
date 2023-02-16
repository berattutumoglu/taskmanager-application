const express = require ('express');
const router = express.Router();
module.exports = router;
// Express'ten router kullanıldı ve dışarı aktarıldı.

router.post ('/post', async (req, res) => {

    const data = new Model( {
        name: req.body.name,
        title: req.body.title,
        description: req.body.description,
        isDone: req.body.isDone,
        time: req.body.time
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }

    catch(err) {
        res.status(400).json({message: err.message})
    }

    //POST METHODU

})

router.get ('/get_data', async (req, res) => {

    try {
        const data = await Model.find();
        res.json(data)
    }

    catch(err) {
        res.status(500).json({message: err.message})
    }

    // GET METHODU (Tüm veriler için)

})

router.get('/get/:id', async (req, res) => {

    try {
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(err) {
        res.status(500).json({message: err.message})
    }

    // GET METHODU (Bir ID'ye göre)
})

router.patch('/update/:id', async (req, res) => {

    const id = req.params.id;
    const updateData = req.body;
    const options = {new:true};

    const result = await Model.findByIdAndUpdate(
        id, updateData, options
    )
    res.send(result);

    // UPDATE METHODU (Bir ID'ye göre)

})

router.delete('/delete/:id', async (req, res) => {

    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted!`)
    }
    catch (err) {
        res.status(400).json({message: err.message})
    }
    // DELETE METHODU (Bir ID'ye göre)

})

const Model = require('../Models/models');