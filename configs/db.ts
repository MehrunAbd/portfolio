const { default: mongoose } = require("mongoose");

const connectToDB = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return true;
    } else {
      await mongoose.connect(
        "mongodb://mhunprg8:GPSdJKxyzkqlgK3c@ac-nqe3k8h-shard-00-00.iluibxg.mongodb.net:27017,ac-nqe3k8h-shard-00-01.iluibxg.mongodb.net:27017,ac-nqe3k8h-shard-00-02.iluibxg.mongodb.net:27017/portfolio?replicaSet=atlas-6y6mlo-shard-0&ssl=true&authSource=admin"
      );
      console.log("Connect To DB Successfully :))");
    }
  } catch (err) {
    console.log("DB Connection Has Error =>", err);
  }
};

export default connectToDB;
