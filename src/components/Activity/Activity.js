import React from 'react';
import { useHistory } from 'react-router-dom';

const Activity = (props) => {
    const { activityImage, activityName } = props.activity;
    const history = useHistory()
    const handleActivityName = () => {
        history.push(`/register/${activityName}/${activityImage}`);
    }
    return (
        <div className="home-bg" onClick={handleActivityName}>
            <div className="row" style={{ float: "left" }}>
                <div className="col-md-3" style={{ padding: "25px" }} ><img style={{ height: "300px" }} src={activityImage} alt="" />
                    <h3>{activityName}</h3>
                </div>
            </div>
        </div>
    );
};

export default Activity;