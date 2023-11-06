const { getUserHistory } = require("../models/user-history.model");

const { getPagination } = require("../utils/query");

const httpGetUserHistory = async (req, res, next) => {
  try {
    const id = Number(req.query.id);
    const { skip, limit } = getPagination(req.query);
    const userHistory = await getUserHistory({ skip, limit, id });
    res.status(200).json(userHistory);
  } catch (err) {
    next(err);
  }
};

module.exports = { httpGetUserHistory };
