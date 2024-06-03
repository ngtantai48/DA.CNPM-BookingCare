import { where } from "sequelize";
import db from "../models/index";
import e from "express";

let getTopDoctorHome = (limitInput) => {
  return new Promise(async (resolve, reject) => {
    try {
      let users = await db.User.findAll({
        limit: limitInput,
        where: { roleId: "R2" },
        order: [["createAt", "DESC"]],
        attribute: {
          exclude: ["password"],
        },
        include: [
          {
            model: db.Allcode,
            as: "positionData",
            attribute: ["valueEn", "valueVi"],
          },
          {
            model: db.Allcode,
            as: "genderData",
            attribute: ["valueEn", "valueVi"],
          },
        ],
        raw: true,
        nest: true,
      });
      resolve({
        errCode: 0,
        data: users,
      });
    } catch {
      reject(e);
    }
  });
};
module.exports = {
  getTopDoctorHome: getTopDoctorHome,
};
