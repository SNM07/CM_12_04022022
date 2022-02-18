import axios from "axios";
import dataUser from "./mockDatas.json";
import {
  UserInfosMapper,
  UserActivityMapper,
  UserAverageSessionsMapper,
  UserPerformanceMapper,
} from "./Mapper/UserMapper";

const serverURL = "http://localhost:8080/";

const serverUserURL = serverURL + "user/";

const instance = axios.create({
  baseURL: serverUserURL,
});

let initStatus = null;
const updatedStatus = (result) => {
  initStatus = result;
};

const isAvailable = async () => {
  const timeout = new Promise((resolve, reject) => {
    setTimeout(reject, 300, "Request timed out");
  });

  const request = await fetch(serverURL);
  
  return Promise.race([timeout, request]).then(() => {
    //console.log("It worked :)");
    updatedStatus(true);
  });
  //.catch((error) => console.log("It timed out :("));
};

isAvailable();

export class userInfosAPI {
  /**
   * Get user infos
   *
   * @param {string} userID id User id
   * @returns {UserInfos} Response from API or mocked datas if API is unavailable
   */
  async userInfosData(userID) {
    if (initStatus === true) {
      try {
        const dataSet = await instance.get(`/${userID}`);
        return UserInfosMapper.fromJson(dataSet.data.data);
      } catch (e) {
        console.log(e);
      }
    } else {
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
    if (initStatus === true) {
      try {
        const dataSet = await instance.get(`/${userID}/activity`);
        return UserActivityMapper.fromJson(dataSet.data.data);
      } catch (e) {
        console.log(e);
      }
    } else {
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
    if (initStatus === true) {
      try {
        const dataSet = await instance.get(`/${userID}/average-sessions`);
        return UserAverageSessionsMapper.fromJson(dataSet.data.data);
      } catch (e) {
        console.log(e);
      }
    } else {
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
    if (initStatus === true) {
      try {
        const dataSet = await instance.get(`/${userID}/performance`);
        return UserPerformanceMapper.fromJson(dataSet.data.data);
      } catch (e) {
        console.log(e);
      }
    } else {
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
