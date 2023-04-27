import React, {useEffect, useState} from 'react';
import Header from "@/components/Header";
import axios from "axios";
import styles from "@/styles/Leaderboard.module.css";
import _ from 'lodash';

function Leaderboard(props) {
    const [charts, setCharts] = useState([]);

    useEffect(() => {
        const getLeaderboard = async () => {
            const {data} = await axios.get('api/leaderboard');
            console.log(data);
            setCharts(() => {
                return _.orderBy(data, ['score'], ['desc']);
            });
        }

        getLeaderboard();
    }, [])
    return (<>
            <Header page={'leaderboard'}/>
            <div className={styles.leaderboard}>
                {charts && charts.length > 0 && <table className={styles.table}>
                    <tr>
                        <th className={styles.th}>username</th>
                        <th className={styles.th}>score</th>
                    </tr>
                    {charts.map(chart => <tr>
                        <td className={styles.td}>{chart.username}</td>
                        <td className={styles.td}>{chart.score}</td>
                    </tr>)}
                </table>}
            </div>
        </>
    );
}

export default Leaderboard;