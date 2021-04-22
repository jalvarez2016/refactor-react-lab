import Card from './Card';

export default function CardContainer() {
    const users = [
        {name: "Helen Doe", image: "https://semantic-ui.com/images/avatar/large/helen.jpg", level: 4, points: 2435}, 
        {name: "Daniel Rodriguez", image: "https://semantic-ui.com/images/avatar/large/daniel.jpg", level: 13, points: 5235}, 
        {name: "Joe Jones", image: "https://semantic-ui.com/images/avatar/large/joe.jpg", level: 20, points: 10513}
    ];

    return (
        <div className="card-container">
            {users.map(user => <Card key={user.name} level={user.level} image={user.image} name={user.name}  points={user.points}/>)}
        </div>
    )
}