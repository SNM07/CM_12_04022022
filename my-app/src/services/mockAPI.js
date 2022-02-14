import axios from 'axios';
import dataUser from "./mockDatas.json";

/*     const instance = axios.create({
		baseURL: '/user',
		headers: {
			'Content-Type': 'application/json'
		}
}); */

export const mockUserInfos = async (userID) => {

    try {
		/* const datatest = await instance.get(`/${userID}`);
		console.log(datatest.data)
          */
		/* const dataset = await axios.get("https://snm07.github.io/testDBSNM.github.io/mockeddatas.json")
console.log(dataset.data)
console.log(dataset.data.USER_MAIN_DATA)
 */
		
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

