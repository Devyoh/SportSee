import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";
import { ReactComponent as Dot } from "../../assets/Dot.svg";
import PropTypes from "prop-types";
import "./userActivity.css";

/**
 * @component - Shows a custom ToolTip
 * @param {boolean} active if true the tooltip is displayed
 * @param {Array} payload  array of data displayed in the tooltip
 * @returns custom ToolTip
 */

const CustomToolTip = ({ active, payload }) => {
    return active && payload ? (
        <div className="tooltip">
            <div className="poids">{`${payload[0].value} Kg`}</div>
            <div className="calories">{`${payload[1].value} KCal`}</div>
        </div>
    ) : null;
};

/**
 * @component - Shows de User's activity inside a BarChart
 * @param {Array} Array of user's activity
 * @returns Activity component
 */
const UserActivity = ({ activity }) => {
    return (
        <div className="activity">
            <div className="activity__header">
                <h3>Activité quotidienne</h3>
                <div className="activity__legend">
                    <Dot fill="#282D30" className="legend" />
                    <span>Poids (kg)</span>
                    <Dot fill="#E60000" className="legend" />
                    <span>Calories brûlées (kCal)</span>
                </div>
            </div>

            <ResponsiveContainer width="100%" height="70%">
                <BarChart
                    data={activity}
                    width={500}
                    height={300}
                    barCategoryGap={35}
                    barGap={8}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="day" axisLine={false} tickLine={false} />
                    <YAxis
                        yAxisId={"kil"}
                        domain={["dataMin - 2", "dataMax + 1"]}
                        tickLine={false}
                        orientation="right"
                        dataKey="kilogram"
                        axisLine={false}
                    />
                    <YAxis
                        yAxisId={"cal"}
                        hide={true}
                        domain={["dataMin - 100", "dataMax + 50"]}
                    />
                    <Tooltip content={<CustomToolTip />} />
                    <Bar
                        dataKey="kilogram"
                        fill="#282D30"
                        radius={[50, 50, 0, 0]}
                        yAxisId={"kil"}
                        barSize={15}
                    />
                    <Bar
                        dataKey="calories"
                        fill="#E60000"
                        radius={[50, 50, 0, 0]}
                        yAxisId={"cal"}
                        barSize={15}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

UserActivity.propTypes = {
    activity: PropTypes.arrayOf(
        PropTypes.shape({
            calories: PropTypes.number,
            day: PropTypes.string,
            kilogram: PropTypes.number
        })
    )
};

export default UserActivity;
