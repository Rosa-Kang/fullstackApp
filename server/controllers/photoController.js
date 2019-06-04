const photoData = `${__dirname}/../model/data.json`;
const helper = require("../helper/helper");

const photoController = {
  getList: () => {
    return helper.readJSONFile(photoData);
  }
};

module.exports = photoController;
