import axios from 'axios';
import dataUser from "./mockDatas.json";


export const mockUserInfos = async (userID) => {

    try {
         
        const mainData = dataUser.USER_MAIN_DATA;
        
        let response = mainData.find((user) => user.id === parseInt(userID));
         console.log(response, "OK")
		return mainData.find((user) => user.id === parseInt(userID));
	} catch (e) {
		console.log(e);
	}
};



export const mockUserActivity = async (userID) => {
	try {
		//const data = await axios.get(`./../mockDatas.json`);
        const userActivity = dataUser.USER_ACTIVITY;
        let responseAct = userActivity.find((user) => user.userId === parseInt(userID));
         console.log(responseAct, "OK")
		return userActivity.find((user) => user.userId === parseInt(userID));
	} catch (e) {
		console.log(e);
	}
};


export const mockUserAverageSessions = async (userID) => {
	try {
		//const data = await axios.get(`./../mockDatas.json`);
        const userAverageSessions = dataUser.USER_AVERAGE_SESSIONS;
		return userAverageSessions.find((user) => user.userId === parseInt(userID));
	} catch (e) {
		console.log(e);
	}
};


export const mockUserPerformance = async (userID) => {
    try {
        //const data = await axios.get(`./../mockDatas.json`);
        const userPerformance = dataUser.USER_PERFORMANCE;
        console.log({userPerformance})
		return userPerformance.find((user) => user.userId === parseInt(userID));
	} catch (e) {
		console.log(e);
	}
};

