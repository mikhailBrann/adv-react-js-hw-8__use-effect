import React, { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';
import Loading from './components/Loading';
import Detail from './components/Detail';

function App() {
  const userUrl = import.meta.env.VITE_USERS_URL;
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeUserId, setActiveUserId] = useState(null);
  const [activeUser, setActiveUser] = useState({});

  const fetchData = async (callback, path, loadingFunc) => {
    loadingFunc(true);
    
    const response = await fetch(path)
    const data = await response.json()
    
    callback(data);
    loadingFunc(false);
  }

  const ChangeUser = (event: React.MouseEvent<HTMLLIElement>) => {
    const userId = Number(event.target.dataset.id);

    if(userId == activeUserId) {
      return;
    }

    setActiveUserId(userId);
  }

  useEffect(() => {
    fetchData(setUsers, userUrl + '/users.json', setLoading);
  }, []);

  useEffect(() => {
    if (activeUserId) {
      fetchData(setActiveUser, userUrl + '/' + activeUserId + '.json', setLoading);
    }
  }, [activeUserId]);

  return (
    <>
      <Loading loading={loading} />
      <div className='notebook'>
        <List 
          users={users} 
          callback={ChangeUser} 
          activeId={activeUserId}
        />
        <Detail user={activeUser} />
      </div>
    </>
  )
}

export default App