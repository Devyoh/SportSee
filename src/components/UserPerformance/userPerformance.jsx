import React from "react";
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    ResponsiveContainer
} from "recharts";
import PropTypes from "prop-types";
import "./userPerformance.css";

/**
 *
 * @component - shows the user's performance inside a RadarChart
 * @param {Array} Array of users performance
 * @returns Performance component
 */

const UserPerformance = ({ performance }) => {
    return (
        <div className="performance">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart
                    cx="50%"
                    cy="50%"
                    outerRadius="60%"
                    data={performance}
                >
                    <PolarGrid />
                    <PolarAngleAxis
                        dataKey="kind"
                        stroke="white"
                        tickLine={false}
                    />
                    <Radar dataKey="value" fill="#FF0101" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
};

UserPerformance.propTypes = {
    performance: PropTypes.arrayOf(
        PropTypes.shape({
            kind: PropTypes.string,
            value: PropTypes.number
        })
    )
};

export default UserPerformance;
