import { connect } from "mongoose";
const { success, error } = require("consola");
// Bring in the app constants
export const createDbConnection = async (): Promise<void> => {
    try {
        // Connection With DB
    await connect(`${process.env.APP_DB}`, {
        useFindAndModify: true,
        useUnifiedTopology: true,
        useNewUrlParser: true,
      });
  
      success({
        message: `Successfully connected with the Database \n${process.env.APP_DB}`,
        badge: true,
      });
    } catch (error) {
        
    }
  };