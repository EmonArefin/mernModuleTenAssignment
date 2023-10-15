const WorksModel = require("../models/WorksModel");

exports.createWork = async (req, res) => {
    try {
        let reqBody = req.body;
        reqBody.email = req.headers["email"];
        let result = await WorksModel.create(reqBody);

        res.status(200).json({
            status: "Success",
            data: result
        });
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            data: error.toString()
        });
    }
};

exports.readWork = async (req, res) => {
    try {
        let email = req.headers["email"];
        let data = await WorksModel.find({ email: email });

        res.status(200).json({
            status: "Success",
            data: data
        });
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            data: error.toString()
        });
    }
};

exports.updateWork = async (req, res) => {
    try {
        const reqBody = req.body;
        let title = reqBody["title"];
        let classNote = reqBody["classNote"]
        let description = reqBody["description"];
        let id = req.params.id;
        let query = { _id: id };

        let postBody = {
            title: title,
            classNote: classNote,
            description: description
        };

        let result = await WorksModel.updateOne(
            query,
            { $set: postBody },
            { upsert: true }
        );

        res.status(200).json({
            status: "Success",
            data: result
        });
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            data: error.toString()
        });
    }
};

exports.deleteWork = async (req, res) => {
    try {
        let id = req.params.id;
        let query = { _id: id };
        let result = await WorksModel.deleteOne(query);

        res.status(200).json({
            status: "Success",
            data: result
        });
    } catch (error) {
        res.status(404).json({
            status: "Fail",
            data: error.toString()
        });
    }
};