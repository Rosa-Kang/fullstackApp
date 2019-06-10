const photosJsonFile = `${__dirname}/../model/data.json`;
const helper = require("../helper/helper");

const photoController = {
  getList: () => {
    return helper.readJSONFile(photosJsonFile);
  },
  incrementLikes: id => {
    const photos = helper.readJSONFile(photosJsonFile);
    const updatedPhotos = photos.map(photo => {
      if (photo.id === id) {
        return { ...photo, likes: photo.likes + 1 };
      }
      return { ...photo };
    });
    helper.writeJSONFile(photosJsonFile, updatedPhotos);
    const updatedPhoto = updatedPhotos.find(photo => photo.id === id);
    return updatedPhoto;
  },

  controlSave: id => {
    console.log("working");
    const photos = helper.readJSONFile(photosJsonFile);
    const updatedPhotos = photos.map(photo => {
      if (photo.id === id) {
        if (photo.tags === 0) {
          return { ...photo, tags: 1 };
        } else {
          return { ...photo, tags: 0 };
        }
      }
      return { ...photo };
    });
    helper.writeJSONFile(photosJsonFile, updatedPhotos);
    const updatedPhoto = updatedPhotos.find(photo => photo.id === id);
    return updatedPhoto;
  }
};

module.exports = photoController;
