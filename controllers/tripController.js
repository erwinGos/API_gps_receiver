const trip = require("../models/tripModel");

module.exports.createNewPoint = async(req, res) => {
    const longitude = req.query.longitude;
    const latitude = req.query.latitude;
    const speed = req.query.speed;

    if(!latitude || !longitude || !speed) {
        return res.json({message: "Veuillez fournir toutes les informations."})
    }
  
    try {
        await trip.create({
            deviceId: "RS3",
            location: [longitude, latitude],
            speed: speed
        })
        const trips = await trip.find();
        
        req.io.emit('pointCreated', trips);
        return res.send("ok");
    } catch {
        return res.json("error")
    }
    
};


module.exports.getAll = async(req, res) => {
    try {
        const trips = await trip.find();
        return res.json(trips)
    } catch {
        return res.json("error")
    }
}


