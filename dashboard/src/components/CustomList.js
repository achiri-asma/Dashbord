import React from 'react';
import {  Space,Table } from 'antd';
import {MdDelete}from'react-icons/md';
const { Column} = Table;

interface DataType {
  key: React.Key;
  fullName: string;
  email:String;
  address: string;

}

const data: DataType[] = [
  {
    key: '1',
    fullName: 'John Green',
    email:'jaohn.green@gmail.com',
    password:'john134',
    address: 'New York No. 1 Lake Park',
    telephone:'0798653216',
  
  },
  {
    key: '2',
    fullName: 'John Green',
    email:'jaohn.green@gmail.com',
    address: 'New York No. 1 Lake Park',
    telephone:'0798653216',
  },
  {
    key: '3',
    fullName: 'John Green',
    email:'jaohn.green@gmail.com',
    address: 'New York No. 1 Lake Park',
    telephone:'0798653216',
  
  }, 
  
];

const CustomList = () => (
  <Table dataSource={data}>
      <Column title="Username" dataIndex="fullName" key="fullName" />
    <Column title="Email" dataIndex="email" key="email" />
    <Column title="Address" dataIndex="address" key="address" />
    <Column title="Telephone" dataIndex="telephone" key="telephone" />
    <Column
      title="Delete"
      key="Delete"
      render={(_: any, record: DataType) => (
        <Space size="middle">
          <MdDelete/>
        </Space>
      )}
    />
  </Table>
);

export default CustomList;