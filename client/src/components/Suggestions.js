import React from 'react';
import 'antd/dist/antd.css';
// import './index.css';
import { List } from 'antd';

const data = [
  {title: 'BBC sport', url: 'https://www.bbc.co.uk/sport'},
  {title: 'Go for a walk', url: ''},
  {title: 'Guess the weather in Norway', url: 'https://www.bbc.co.uk/weather/3143244'}
];

export const Suggestions = () => (
  <>
    <List
      style={{width: 400}}
      header={<div>BREAK SUGGESTIONS</div>}
      bordered
      dataSource={data}
      renderItem={item => (
        <List.Item>
          {item.url ? <List.Item.Meta
            title={<a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}</a>} 
          /> : <List.Item.Meta
          title={<p>{item.title}</p>} 
          />}
          
          

        </List.Item>
      )}
    />
  </>
);