import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const Category= () => (
  
  <Card>
    <Card
    hoverable
    style={{ width: 270 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" /> 
  </Card>
  <Card
    hoverable
    style={{ width: 270 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>
    <Card
    hoverable
    style={{ width: 270 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>
  </Card>
);

export default Category;