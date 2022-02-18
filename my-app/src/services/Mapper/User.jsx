export class UserInfos {
  constructor(id, firstName, lastName, age, todayScore, keyData) {
    this.userId = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.todayScore = todayScore;
    this.keyData = keyData;
  }
}

export class UserActivity {
  constructor(id, sessions) {
    this.userId = id;
    this.sessions = sessions;
  }
}

export class UserAverageSessions {
  constructor(id, sessions) {
    this.userId = id;
    this.sessions = sessions;
  }
}

export class UserPerformance {
  constructor(id, kind, data) {
    this.userId = id;
    this.kind = kind;
    this.data = data;
  }
}
