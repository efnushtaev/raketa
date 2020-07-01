import React, {useState, useEffect} from 'react';
import axios from 'axios';
import App from './app';

const AppContainer = () => {
  const [dataList, setDataList] = useState([]);
  const [filterValue, setFilter] = useState('');
  const [isLoading, setLoading] = useState(false);

  const handleFilterChange = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
  };

  useEffect(() => {
    const dataFetching = async () => {
      setLoading(true);
      const resPosts = await axios.get('https://jsonplaceholder.typicode.com/posts');
      const resUsers = await axios.get('https://jsonplaceholder.typicode.com/users');
      let result = [];
      resPosts.data.map(item => {
        let userId = item['userId'];
        result.push(
          {
            'id': item['userId'],
            "name": resUsers.data[userId-1].name,
            "username": resUsers.data[userId-1].username,
            "body": item.body
          }
        )
      })
      setDataList(result)
      setLoading(false);
    }
    dataFetching()
  }, []);

  return <App 
    dataList={dataList}
    filterValue={filterValue}
    isLoading={isLoading}
    onFilterChange={handleFilterChange}
  />
};

export default AppContainer;
