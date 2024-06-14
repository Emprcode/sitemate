// Task CRUD

import IssuesSchema from "./IssuesSchema.js";

// create
export const createIssue = (task) => {
  return IssuesSchema(task).save();
};

// read
export const getIssues = () => {
  return IssuesSchema.find();
};
export const updateIssue = ({ _id, ...updateObj }) => {
  return IssuesSchema.findByIdAndUpdate(_id, updateObj, { new: true });
};
export const deleteIssue = (_id) => {
  return IssuesSchema.findByIdAndDelete(_id);
};
