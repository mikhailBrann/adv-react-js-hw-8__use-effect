import uniqid from 'uniqid';

const Detail = ({ user }) => {
    if (!user.id) return null;

    return (
      <div className="details" key={uniqid()}>
        <img src={user.avatar} alt={user.name} />
        <div className="info">
          <h2>{user.name}</h2>
          <p>City: {user.details.city}</p>
          <p>Company: {user.details.company}</p>
          <p>Position: {user.details.position}</p>
        </div>
      </div>
    )
}

export default Detail;