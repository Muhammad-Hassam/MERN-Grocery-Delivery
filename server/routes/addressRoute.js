import express from "express";
import authUser from "../middlewares/authUser.js";
import { addAddresss, getAddress } from "../controllers/addressController.js";

const addressRouter = express.Router();

addressRouter.post("/add", authUser, addAddresss);
addressRouter.post("/get", authUser, getAddress);

export default addressRouter;
