import uniqid from 'uniqid';

const Item = ({user, callback, isActive}) => {
    return (
      <li data-key={uniqid()} data-id={user.id} onClick={callback} className={isActive ? 'active' : ''}>
        {user.name}
      </li>
    )
}

export default Item;