import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Form,
  Input,
  Upload,
  Space,Select
} from 'antd';
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const Products = () => {
  return (
    <>
    <h2 >Add Product </h2>
      
      <Form
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 20,
        }}
        layout="horizontal"
        style={{
          maxWidth: 700,
        }}
      >
        <Form.Item label="Name">
          <Input />
        </Form.Item>
        <Form.Item label="Description">
          <TextArea rows={2} />
        </Form.Item>
        <Form.Item label="Price">
          <Input />
        </Form.Item>
        <Form.Item label="Color">
          <Input type="color" />
        </Form.Item>
        <Form.Item label="Category">
          <Select>
            <Select.Option value="jackets">Jackets</Select.Option>
            <Select.Option value="jeans">Jeans</Select.Option>
            <Select.Option value="dresses">Dresses</Select.Option>
            <Select.Option value="pants">Pants</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item> 
        <Space>
    <Space.Compact>
      <Input
        style={{
          width: '60%',
        }}
        defaultValue="S"
      />
      <Input
        style={{
          width: '60%',
        }}
      />
    </Space.Compact>
    <Space.Compact>
      <Input
        style={{
          width: '60%',
        }}
        defaultValue="M"
      />
      <Input
        style={{
          width: '60%',
        }}
      />
    </Space.Compact>
    <Space.Compact>
      <Input
        style={{
          width: '60%',
        }}
        defaultValue="L"
      />
      <Input
        style={{
          width: '60%',
        }}
      />
    </Space.Compact>
    <Space.Compact>
      <Input
        style={{
          width: '60%',
        }}
        defaultValue="XL"
      />
      <Input
        style={{
          width: '60%',
        }}
      />
    </Space.Compact>
    <Space.Compact>
      <Input
        style={{
          width: '60%',
        }}
        defaultValue="XXL"
      />
      <Input
        style={{
          width: '60%',
        }}
      />
    </Space.Compact>
  </Space></Form.Item>
       
        <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined/>
              <div>Upload</div>
            </div>
          </Upload>
          </Form.Item>
        <Form.Item>
          <Button> Add New Product </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default Products ;