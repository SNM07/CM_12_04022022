import axios from "axios";
import dataUser from "./mockDatas.json";

const instance = axios.create({
  baseURL: "http://localhost:8080/user",
});

/**
 * Get user infos
 *
 * @param {string} userID id User id
 * @returns {object} Response from API or mocked datas if API is unavailable
 */
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

/**
 * Get user activity
 *
 * @param {string} userID id User id
 * @returns {object} Response from API or mocked datas if API is unavailable
 */
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

/**
 * Get user average sessions
 *
 * @param {string} userID id User id
 * @returns {object} Response from API or mocked datas if API is unavailable
 */
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

/**
 * Get user performance
 *
 * @param {string} userID id User id
 * @returns {object} Response from API or mocked datas if API is unavailable
 */
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
