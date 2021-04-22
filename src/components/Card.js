export default function Card(props) {
    return (
        <div className="card">
            <div className="user-info">
                <div className="lvl">
                    LEVEL {props.level}
                </div>
                <div className="img">
                    <img alt="user-img" className="user-img" src={`${props.image}`}/>
                </div>
                <div className="points">
                    {props.points} POINTS
                </div>
            </div>
            <div className="user-desc">
                <div className="user-data">
                    <div className="user-name">
                        {props.name}
                    </div>
                    <div className="desc">
                        {props.desc}
                    </div>
                </div>
                <div className="card-help">
                    <p>Mouse Over the Card for more info</p>
                </div>
            </div>
        </div>
    )
};
