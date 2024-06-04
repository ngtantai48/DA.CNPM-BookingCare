let dataSchedule = await db.dataSchedule.findAll({
    where:{},
    include:[
        { model: db.Allcode,as:'timeTypeData',attributes:['valueEn','valueVi']},
        { model: db.User,as:'doctorData',attributes:['firstName','lastName']},

    ],
})