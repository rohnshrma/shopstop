import express from "express";
import {
  authUser,
  registerUser,
  deleteUser,
  getUserById,
  getUserProfile,
  getUsers,
  updateUser,
  updateUserProfile,
  logoutUser,
} from "../controllers/userController.js";
const router = express.Router();

router.route("/").get(getUsers).post(registerUser);
router.post("/logout", logoutUser);
router.post("/auth", authUser);
router.route("/profile").get(getUserProfile).put(updateUserProfile);
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

export default router;
