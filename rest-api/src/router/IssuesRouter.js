import express from "express";

import {
  createIssue,
  deleteIssue,
  getIssues,
  updateIssue,
} from "../modal/IssuesModal.js";

const router = express.Router();

// create Issue

router.post("/", async (req, res, next) => {
  try {
    const result = await createIssue(req.body);
    console.log(result);
    result._id
      ? res.json({
          status: "success",
          message: "success",
          result,
        })
      : res.json({
          status: "error",
          message: "error",
        });
  } catch (error) {
    next(error);
  }
});
// get/read Issue

router.get("/", async (req, res, next) => {
  try {
    const result = await getIssues();
    console.log(result);
    res.json({
      status: "success",
      message: "success",
      result,
    });
  } catch (error) {
    next(error);
  }
});
// update Issue

router.patch("/", async (req, res, next) => {
  try {
    console.log(req.body);
    const result = await updateIssue(req.body);

    console.log(result);
    result._id
      ? res.json({
          status: "success",
          message: "success",
          result,
        })
      : res.json({
          status: "error",
          message: "error",
        });
  } catch (error) {
    next(error);
  }
});
// delete Issue

router.delete("/:_id", async (req, res, next) => {
  try {
    const { _id } = req.params;
    const result = await deleteIssue(_id);
    result._id
      ? res.json({
          status: "success",
          message: "success",
          result,
        })
      : res.json({
          status: "error",
          message: "error",
        });
  } catch (error) {
    next(error);
  }
});

export default router;
