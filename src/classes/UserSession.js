export default class UserSession {
    constructor({ sessions, userId }) {
        this.id = userId;
        this.sessions = this.formatDay(sessions.day);
        this.sessionData = sessions.map((session, index) => ({
            ...session,
            sessionLength: session.sessionLength,
            day: this.sessions[index]
        }));
    }

    formatDay() {
        const formatDay = ["L", "M", "M", "J", "V", "S", "D"];
        return formatDay;
    }
}
