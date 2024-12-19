import Item from './Item';

const List = ({users, callback, activeId}) => {
    return (
      <ul className='user-list'>
        {users.map((user) => (
          <Item 
            user={user} 
            callback={callback}
            isActive={user.id === activeId}
          />
        ))}
      </ul>
    )
}

export default List;