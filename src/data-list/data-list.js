import React from 'react';
import DataItem from './data-item';

const DataList = (props) => {
  const {props: {dataList, filterValue}} = props;
  return <div>
    {dataList
      .filter(e => {
        return (e.body.toLowerCase().indexOf(filterValue) >= 0)
      })
      .map(e => {
        return <DataItem itemData={e} />
      })
    }
  </div>
};

export default DataList;