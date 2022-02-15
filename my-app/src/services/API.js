import axios from "axios";
import dataUser from "./mockDatas.json";

const instance = axios.create({
  baseURL: "http://localhost:8080/user",
});

export const userInfosData = async (userID) => {
  try {
    const dataSet = await instance.get(`/${userID}`);
    return dataSet.data.data;
  } catch (e) {
    console.log(e);
    try {
      const mainData = dataUser.USER_MAIN_DATA;
      return mainData.find((user) => user.id === parseInt(userID));
    } catch (e) {
      console.log(e);
    }
  }
};

export const userActivityData = async (userID) => {
  try {
    const dataSet = await instance.get(`/${userID}/activity`);
    return dataSet.data.data;
  } catch (e) {
    console.log(e);
    try {
      const userActivity = dataUser.USER_ACTIVITY;
      return userActivity.find((user) => user.userId === parseInt(userID));
    } catch (e) {
      console.log(e);
    }
  }
};

export const userAverageSessionsData = async (userID) => {
  try {
    const dataSet = await instance.get(`/${userID}/average-sessions`);
    return dataSet.data.data;
  } catch (e) {
    console.log(e);
    try {
      const userAverageSessions = dataUser.USER_AVERAGE_SESSIONS;
      return userAverageSessions.find(
        (user) => user.userId === parseInt(userID)
      );
    } catch (e) {
      console.log(e);
    }
  }
};

export const userPerformanceData = async (userID) => {
  try {
    const dataSet = await instance.get(`/${userID}/performance`);
    return dataSet.data.data;
  } catch (e) {
    console.log(e);
    try {
      const userPerformance = dataUser.USER_PERFORMANCE;
      return userPerformance.find((user) => user.userId === parseInt(userID));
    } catch (e) {
      console.log(e);
    }
  }
};
