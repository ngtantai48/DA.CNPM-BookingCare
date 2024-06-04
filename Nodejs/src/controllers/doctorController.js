import doctorService from "../services/doctorService"


let bulkCreateSchedule = async (req, res) => {
    try {
        let info = await doctorService.bulkCreateSchedule(req.body)
        return res.status(200).json(info)
    } catch (error) {
        console.log(error);
        return res.status(200).json({
            errCode: -1,
            errMessage: `Error from the server !`
        })
    }
}

module.exports = {
    bulkCreateSchedule: bulkCreateSchedule
}