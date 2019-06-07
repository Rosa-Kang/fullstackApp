const journalData = `${__dirname}/../model/journals.json`;
const helper = require("../helper/helper");

const journalController = {
  getList: () => {
    return helper.readJSONFile(journalData);
  }
};

module.exports = journalController;
