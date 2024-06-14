import axios from "axios";

const IssueAPI = "http://localhost:8000/api/v1/issues";

// post tasks

export const postIssue = async (issueObj) => {
  try {
    const { data } = await axios.post(IssueAPI, issueObj);
    console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
// get tasks

export const getIssues = async () => {
  try {
    const { data } = await axios.get(IssueAPI);
    console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
// update tasks

export const updateIssue = async (updateObj) => {
  try {
    const { data } = await axios.patch(IssueAPI, updateObj);
    console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
// delete tasks

export const deleteIssue = async (_id) => {
  try {
    const { data } = await axios.delete(IssueAPI + "/" + _id);
    console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
