import React, { useState, useEffect } from 'react';

import Header from '../components/header/index.js';
import Table from '../components/table/index.js';

import users from '../__mocks__/users';

function TableUsers() {
  const [usersFiltered, setUsersFiltered] = useState([]);
  const [filter, setFilter] = useState('');

  const getUsers = (_users, _filter) => {
    if (!_filter) return _users.data;
    return _users.data.filter(item => {
      return item.user.toUpperCase().search(_filter.toUpperCase()) !== -1;
    });
  };

  useEffect(() => {
    setUsersFiltered(getUsers(users, filter));
  }, [filter]);

  return (
    <>
      <Header changeFilter={setFilter} />
      <Table usersFiltered={usersFiltered} />
    </>
  );
}

export default TableUsers;
