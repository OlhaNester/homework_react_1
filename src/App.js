import React from 'react';
import Profile from './components/Profile';
import Statistics from './components/Statistics';
import FriendList from './components/FriendList';
import TransactionHistory from './components/TransactionHistory';

import user from './user.json';
import stats from './statistical-data.json';
import friends from './friends.json';
import transactions from './transaction.json';

const App = () => {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={stats} />
       <Statistics  stats={stats} />
      <FriendList  friends={friends}/>
      <TransactionHistory items={transactions}/>
    </div>
  );
};

export default App;
