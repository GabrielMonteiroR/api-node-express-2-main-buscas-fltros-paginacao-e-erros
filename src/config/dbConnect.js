import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();


// eslint-disable-next-line no-undef
mongoose.connect(process.env.STRING_CONEXAO_DB);

let db = mongoose.connection;

export default db;