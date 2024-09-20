import User from "../models/userModel.js";
import asyncHandler from "../middleware/asyncHandler.js";

// @desc    Auth user & get token
// @route   POST /api/users/login
// @aacess  Public
const authUser = asyncHandler(async (req, res) => {
  res.send("Auth user");
});

// @desc    Register User
// @route   POST /api/users
// @aacess  Public
const registerUser = asyncHandler(async (req, res) => {
  res.send("Register user");
});
// @desc    Logout User / clear cookie
// @route   POST /api/users/logout
// @aacess  Private
const logoutUser = asyncHandler(async (req, res) => {
  res.send("Logout user");
});

// @desc    Get User Profle
// @route   GET /api/users/profile
// @aacess  Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.send("Get user profile");
});

// @desc    Update User Profle
// @route   PUT /api/users/profile
// @aacess  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("Update user profile");
});

// @desc    Get Users
// @route   GET /api/users
// @aacess  Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  res.send("Get users");
});

// @desc    Get Users
// @route   GET /api/users/:id
// @aacess  Private/Admin
const getUserById = asyncHandler(async (req, res) => {
  res.send("Get User by ID");
});

// @desc    Delete Users
// @route   DELETE /api/users/:id
// @aacess  Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  res.send("Delete user");
});

// @desc    Update User
// @route   PUT /api/users/:id
// @aacess  Private/Admin
const updateUser = asyncHandler(async (req, res) => {
  res.send("Update user");
});

export {
  authUser,
  registerUser,
  deleteUser,
  getUserById,
  getUserProfile,
  getUsers,
  updateUser,
  updateUserProfile,
  logoutUser,
};
