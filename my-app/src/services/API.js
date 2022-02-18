import axios from "axios";
import dataUser from "./mockDatas.json";
import {
  UserInfosMapper,
  UserActivityMapper,
  UserAverageSessionsMapper,
  UserPerformanceMapper,
} from "./Mapper/UserMapper";

const instance = axios.create({
  baseURL: "http://localhost:8080/user",
});

export class userInfosAPI {
  /**
   * Get user infos
   *
   * @param {string} userID id User id
   * @returns {UserInfos} Response from API or mocked datas if API is unavailable
   */
  async userInfosData(userID) {
    try {
      const dataSet = await instance.get(`/${userID}`);
      return UserInfosMapper.fromJson(dataSet.data.data);
    } catch (e) {
      console.log(e);
      try {
        const mainData = dataUser.USER_MAIN_DATA;
        const dataFilter = mainData.find(
          (user) => user.id === parseInt(userID)
        );
        return UserInfosMapper.fromJson(dataFilter);
      } catch (e) {
        console.log(e);
      }
    }
  }
}

export class userActivityAPI {
  /**
   * Get user activity
   *
   * @param {string} userID id User id
   * @returns {UserActivity} Response from API or mocked datas if API is unavailable
   */
  async userActivityData(userID) {
    try {
      const dataSet = await instance.get(`/${userID}/activity`);
      return UserActivityMapper.fromJson(dataSet.data.data);
    } catch (e) {
      console.log(e);
      try {
        const userActivity = dataUser.USER_ACTIVITY;
        const dataFilter = userActivity.find(
          (user) => user.userId === parseInt(userID)
        );
        return UserActivityMapper.fromJson(dataFilter);
      } catch (e) {
        console.log(e);
      }
    }
  }
}

export class userAverageSessionsAPI {
  /**
   * Get user average sessions
   *
   * @param {string} userID id User id
   * @returns {UserAverageSessions} Response from API or mocked datas if API is unavailable
   */
  async userAverageSessionsData(userID) {
    try {
      const dataSet = await instance.get(`/${userID}/average-sessions`);
      return UserAverageSessionsMapper.fromJson(dataSet.data.data);
    } catch (e) {
      console.log(e);
      try {
        const userAverageSessions = dataUser.USER_AVERAGE_SESSIONS;
        const dataFilter = userAverageSessions.find(
          (user) => user.userId === parseInt(userID)
        );
        return UserAverageSessionsMapper.fromJson(dataFilter);
      } catch (e) {
        console.log(e);
      }
    }
  }
}

export class userPerformanceAPI {
  /**
   * Get user performance
   *
   * @param {string} userID id User id
   * @returns {UserPerformance} Response from API or mocked datas if API is unavailable
   */
  async userPerformanceData(userID) {
    try {
      const dataSet = await instance.get(`/${userID}/performance`);
      return UserPerformanceMapper.fromJson(dataSet.data.data);
    } catch (e) {
      console.log(e);
      try {
        const userPerformance = dataUser.USER_PERFORMANCE;
        const dataFilter = userPerformance.find(
          (user) => user.userId === parseInt(userID)
        );
        return UserPerformanceMapper.fromJson(dataFilter);
      } catch (e) {
        console.log(e);
      }
    }
  }
}
