import axios from 'axios';
import dataUser from "./mockDatas.json";


console.log(dataUser)
//console.log(dataUser.USER_MAIN_DATA[0].id)


/**
 * Get user infos
 *
 * @param {string} id User id
 * @returns {object} Response
 */

export const mockUserInfos = async (userID) => {

    //console.log(userId.id, "THIS")
    //const data = await axios.get(dataUser);
    //console.log(data.USER_MAIN_DATA.id)

    try {
         
        //console.log(dataUser)
        //const data = await axios.get(dataUser);
        //console.log(dataUser.USER_MAIN_DATA)
        const mainData = dataUser.USER_MAIN_DATA;
        /* for (var i = 0; i < mainData.length; i++){
            // look for the entry with a matching `code` value
            if (mainData[i].id === parseInt(userId.id)) {
                console.log("12", "ok")
               // we found it
              // obj[i].name is the matched result
            }
          } */

        let response = mainData.find((user) => user.id === parseInt(userID));
         console.log(response, "OK")
		return mainData.find((user) => user.id === parseInt(userID));
	} catch (e) {
		console.log(e);
	}
};



/**
 * Get user activity 
 *
 * @param {string} id User id
 * @returns {object} Response
 */
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

/**
 * Get user average session 
 *
 * @param {string} id User id
 * @returns {object} Response
 */
export const mockUserAverageSessions = async (userID) => {
	try {
		//const data = await axios.get(`./../mockDatas.json`);
        const userAverageSessions = dataUser.USER_AVERAGE_SESSIONS;
		return userAverageSessions.find((user) => user.userId === parseInt(userID));
	} catch (e) {
		console.log(e);
	}
};

/**
 * Get user performance 
 *
 * @param {string} id User id
 * @returns {object} Response
 */
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