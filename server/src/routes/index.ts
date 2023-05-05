import express from "express";
import usersRoutes from "./users";
import menuRoutes from "./menu";

const router = express.Router();

router.use("/users", usersRoutes);
router.use("/posts", menuRoutes);

export default router;
