import { List, Avatar, Space,Card } from 'antd';
import React from "react";
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';


function Listt(props) {
  const {item} = props;
  // const data = [
  //   {
  //     title: item[0]?.name,
  //   },
  //   {
  //     title: 'Title 2',
  //   },
  //   {
  //     title: 'Title 3',
  //   },
  //   {
  //     title: 'Title 4',
  //   },
  // ];

  {console.log(item)}

  
const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

  return(
    
    <List grid={{ gutter: 16, column: 4 }} style={{color:"white"}} dataSource={item || []} renderItem={item => (
      <Card title="Card title" bordered={false}>
     
    
      <List.Item
        key={item.title}
        actions={[
          <IconText icon={StarOutlined} text={item.followers} key="list-vertical-star-o" />,
          <IconText icon={LikeOutlined} text={item.following} key="list-vertical-like-o" />,
          <IconText icon={MessageOutlined} text={item.public_repos} key="list-vertical-message" />,
        ]}
       
      ><div style={{backgroundColor:"white"}}>
        <List.Item.Meta
          avatar={<Avatar src={item.avatar_url} />}
          title={<a href={item.html_url}>{item.name}</a>}
          description={item.company}
        /></div>
       
      </List.Item>
      </Card>)}/>

      )
}
export default Listt