import user from 'data/user.json';
import { Profile } from 'components/Profile/Profile';

import data from 'data/data.json';
import { Statistics } from 'components/Statistics/Statistics';

import friends from 'data/friends.json';
import { FriendList } from 'components/FriendList/FriendList';

import transactions from 'data/transactions.json';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.container}>
      <Profile username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
