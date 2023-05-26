import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    Rectangle,
    Tooltip,
    ResponsiveContainer
} from "recharts";
import PropTypes from "prop-types";
import "./userAverageSession.css";

/**
 * @component - shows a custom tooltip
 * @param {boolean} active if true the tooltip is displayed
 * @param {Array} payload array of data displayed in the tooltip
 * @returns custom ToolTip
 */

const CustomToolTip = ({ active, payload }) => {
    return active && payload ? (
        <div className="tooltip-session">
            <div className="min">{`${payload[0].value} min`}</div>
        </div>
    ) : null;
};

/**
 * @component - shows a custom cursor
 * @param {Array} Array of points
 * @returns custom cursor
 */
const Cursor = ({ points }) => {
    return (
        <Rectangle
            fill="#000000"
            opacity={0.1}
            x={points[1].x}
            width={1000}
            height={300}
        />
    );
};

/**
 *
 * @component - shows the user's average session inside a LineChart
 * @param {Array} Array of users session
 * @returns Session component
 */

const UserAverageSession = ({ sessions }) => {
    return (
        <div className="session">
            <div className="session__header">
                <h1>Durée moyenne des sessions</h1>
            </div>

            <ResponsiveContainer width="100%" height="70%">
                <LineChart
                    data={sessions}
                    width={500}
                    height={300}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                    <XAxis
                        tickLine={false}
                        dataKey="day"
                        axisLine={false}
                        stroke="#fff"
                    />
                    <Tooltip content={<CustomToolTip />} cursor={<Cursor />} />
                    <Line
                        type="monotone"
                        dataKey="sessionLength"
                        stroke="#fff"
                        dot={false}
                        activeDot={{ r: 3 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

UserAverageSession.propTypes = {
    sessions: PropTypes.arrayOf(
        PropTypes.shape({
            day: PropTypes.string,
            sessionLength: PropTypes.number
        })
    )
};

export default UserAverageSession;
