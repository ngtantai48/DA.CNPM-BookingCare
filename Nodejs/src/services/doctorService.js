import { Buffer } from 'buffer';

let getDetailDoctorById = (inputId) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!inputId) {
                resolve({
                    errCode: 1,
                    errMessage: "Missing required parameter!",
                });
            } else {
                let data = await db.User.findOne({
                    where: { id: inputId },
                    attributes: {
                        exclude: ["password"],
                    },
                    include: [
                        {
                            model: db.Markdown,
                            attributes: ["description", "contentHTML", "contentMarkdown"],
                        },
                    ],
                    raw: false,
                    nest: true,
                });

                //convert image tu buffer sang base64
                if (data && data.image) {
                    data.image = new Buffer(data.image, "base64").toString("binary");
                }

                if (!data) {
                    data = {};
                }

                resolve({
                    errCode: 0,
                    data: data,
                });
            }
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = {
    getDetailDoctorById: getDetailDoctorById,
}