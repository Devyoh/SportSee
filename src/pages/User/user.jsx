import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserActivity from "../../components/UserActivity/userActivity";
import UserSession from "../../components/UserAverageSession/userAverageSession";
import UserPerformance from "../../components/UserPerformance/userPerformance";
import Score from "../../components/Score/Score";
import KeyData from "../../components/KeyData/keyData";
import {
    getUserMainData,
    getUserActivity,
    getUserSession,
    getUserPerformance
} from "../../services/Api/getDataApi";

import './user.css'
/**
 * @component - shows the main page of the dashboard
 * @returns Home Page
 */

const Home = () => {
    const { id } = useParams();
    const [data, setData] = useState({});

    useEffect(() => {
        async function getData() {
            try {
                const user = await getUserMainData(id);
                const activity = await getUserActivity(id);
                const sessions = await getUserSession(id);
                const performance = await getUserPerformance(id);
                setData({ user, activity, sessions, performance });
            } catch (error) {
                console.log(error);
            }
        }
        getData();
    }, [id]);

    return (
        <section className="user">
            <div className="user__infos">
                <h1>
                    Bonjour <span>{data?.user?.firstName}</span>
                </h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>

            <div className="user__charts">
                <article className="charts-container">
                    <UserActivity activity={data?.activity?.sessions} />
                    <div className="charts-container-flex">
                        <UserSession sessions={data?.sessions?.sessionData} />
                        <UserPerformance performance={data?.performance?.formatPerf}/>
                        <Score score={data?.user?.score[0].value} />
                    </div>
                </article>
                <article className="user__informations">
                    <KeyData />
                </article>
            </div>
        </section>
    );
};

export default Home;
