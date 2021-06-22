import express from "express";
import router1 from "./router1/router1";
import router2 from "./router2/router2";

const router = express.Router();

router.use("/router1", router1);
router.use("/router2", router2);
export default router;
