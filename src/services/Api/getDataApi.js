import axios from "axios";
import UserMainData from "../../classes/UserMainData";
import UserActivity from "../../classes/UserActivity";
import UserSession from "../../classes/UserSession";
import UserPerformance from "../../classes/UserPerformance";
import {
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_MAIN_DATA,
    USER_PERFORMANCE
} from "../mock/dataMocked.js";


// modify this const for use back end API
const ENV = "dev";

/**
 * Fetch and format the main user's data
 * @param {number} id
 * @returns {Object} all of the user's information
 */

export const getUserMainData = async (id) => {
    if (ENV === "dev") {
        const data = USER_MAIN_DATA.find(
            (element) => element.id.toString() === id
        );
        const user = new UserMainData(data);
        return user;
    } else {
        try {
            const data = await axios
                .get(`http://localhost:3000/user/${id}`)
                .then((response) => response.data.data);
            const user = new UserMainData(data);
            return user;
        } catch (error) {
            console.error("ERREUR API : " + error);
            alert("Erreur API, veuillez réessayer ultérieurement.");
        }
    }
};

/**
 * Fetch and format the user's activities data
 * @param {number} id
 * @returns {Object} all of the user's activity data
 */

export const getUserActivity = async (id) => {
    if (ENV === "dev") {
        const data = USER_ACTIVITY.find(
            (element) => element.userId.toString() === id
        );
        const activity = new UserActivity(data);
        return activity;
    } else {
        try {
            const data = await axios
                .get(`http://localhost:3000/user/${id}/activity`)
                .then((response) => response.data.data);
            const activity = new UserActivity(data);
            return activity;
        } catch (error) {
            console.error("ERREUR API : " + error);
            alert("Erreur API, veuillez réessayer ultérieurement.");
        }
    }
};

/**
 * Fetch and format all of the users' session data
 * @param {number} id
 * @returns {Object} all of the user's session data
 */

export const getUserSession = async (id) => {
    if (ENV === "dev") {
        const data = USER_AVERAGE_SESSIONS.find(
            (element) => element.userId.toString() === id
        );
        const sessions = new UserSession(data);
        return sessions;
    } else {
        try {
            const data = await axios
                .get(`http://localhost:3000/user/${id}/average-sessions`)
                .then((response) => response.data.data);
            const sessions = new UserSession(data);
            return sessions;
        } catch (error) {
            console.error("ERREUR API : " + error);
            alert("Erreur API, veuillez réessayer ultérieurement.");
        }
    }
};

/**
 * fetch and format all of the user's performance data
 * @param {number} id
 * @returns {Object} all of the user's performance data
 */

export const getUserPerformance = async (id) => {
    if (ENV === "dev") {
        const data = USER_PERFORMANCE.find(
            (element) => element.userId.toString() === id
        );
        const performance = new UserPerformance(data);
        return performance;
    } else {
        try {
            const data = await axios
                .get(`http://localhost:3000/user/${id}/performance`)
                .then((response) => response.data.data);
            const performance = new UserPerformance(data);
            return performance;
        } catch (error) {
            console.error("ERREUR API : " + error);
            alert("Erreur API, veuillez réessayer ultérieurement.");
        }
    }
};
