import React from 'react';
import {  Space,Table } from 'antd';
import {MdDelete,MdModeEdit}from'react-icons/md';
const { Column} = Table;

interface DataType {
  key: React.Key;
 Name: string;
  Price:String;
  Color: string;
  Size:String;
  Description:String;
  Image:String;
}

const data: DataType[] = [
  {
    key: '1',
    Name: 'Jeans',
   Price:'123.00$',
    Color:'yellow',
    Size: 'XXL',
    Description:'jeans yellow .......',
   Image:'image.png',
  },
  {
    key: '2',
    Name: 'Jeans',
   Price:'123.00$',
    Color:'yellow',
    Size: 'XXL',
    Description:'jeans yellow .......',
   Image:'image.png',
  },
  {
    key: '3',
    Name: 'Jeans',
   Price:'123.00$',
    Color:'yellow',
    Size: 'XXL',
    Description:'jeans yellow .......',
   Image:'image.png',
  }, 
];

const ProductList = () => (
  <Table dataSource={data}>
      <Column title="Name" dataIndex="Name" key="Name" />
    <Column title="Price" dataIndex="Price" key="Price" />
    <Column title="Color" dataIndex="Color" key="Color" />
    <Column title="Size" dataIndex="Size" key="Size" />
    <Column title="Description" dataIndex="Description" key="Description" />
    <Column title="Image" dataIndex="Image" key="Image" />
    <Column
      title="Action"
      key="Action"
      render={(_: any, record: DataType) => (
        <Space size="middle">
          <MdDelete/>
          <MdModeEdit/>
        </Space>
      )}
    />
  </Table>
);

export default ProductList;