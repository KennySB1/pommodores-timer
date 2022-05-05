import React from 'react';
import 'antd/dist/antd.css';
// import './index.css';
import { List } from 'antd';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
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
          <List.Item.Meta
            title={<a href="www.bbc.co.uk/sport">{item}</a>}
          />
        </List.Item>
      )}
    />
  </>
);