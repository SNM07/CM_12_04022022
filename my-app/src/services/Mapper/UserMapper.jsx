import {
  UserInfos,
  UserActivity,
  UserAverageSessions,
  UserPerformance,
} from "./User";

export class UserInfosMapper {
  static fromJson(json) {
    return new UserInfos(
      json.id,
      json.userInfos.firstName,
      json.userInfos.lastName,
      json.userInfos.age,
      json.todayScore,
      json.keyData
    );
  }
}

export class UserActivityMapper {
  static fromJson(json) {
    return new UserActivity(
      json.userId,
      json.sessions.map((obj) => ({ ...obj }))
    );
  }
}

export class UserAverageSessionsMapper {
  static fromJson(json) {
    return new UserAverageSessions(
      json.userId,
      json.sessions.map((obj) => ({ ...obj }))
    );
  }
}

export class UserPerformanceMapper {
  static fromJson(json) {
    return new UserPerformance(
      json.userId,
      json.kind,
      json.data.map((obj) => ({ ...obj }))
    );
  }
}
