import { List, Avatar, Icon,Card } from 'antd';
import React from "react";
import "antd/dist/antd.css";
import Home3 from '../DThree/Home3';

class Contents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  
      List:[]
    };
  }

  
  render() {
    return (
      <div>

      <Card
            hoverable
            style={{borderRadius:9,width:600,marginLeft:470}}
            actions={[<Icon type="like" onClick />, <Icon type="message" />, <Icon type="ellipsis" />]}
          >
          <div style={{textAlign:"left"}}>
            <Avatar style={{float:"left"}}></Avatar>
            <div>
            <span style={{marginLeft:10,fontWeight:"bold"}}>哈哈</span>
            </div>
          </div>
          <div style={{textAlign:"left",marginTop:20}}>
            <span> &nbsp;&nbsp;&nbsp;&nbsp;这个实例实现这样一个功能： 
前端提交学生学号（sno）给Api Api接口返回此学生的基本信息</span>
          </div>
          <List
             style={{width:500,marginTop:20,textAlign:"center"}}
             grid={{ gutter:2, column: 3 }}
          >
          {
            this.state.List.map=(key,value)=>{

          }
        }
             <List.Item style={{width:50,height:50,marginTop:5,overflow:"hidden"}}>
                <img src={require('../../assets/images/ciyuan.png')} />
              </List.Item>
              <List.Item style={{width:50,height:50,marginTop:5,overflow:"hidden"}}>
                <img src={require('../../assets/images/ciyuan.png')} />
              </List.Item>
              <List.Item style={{width:50,height:50,marginTop:5,overflow:"hidden"}}>
                <img src={require('../../assets/images/back.jpg')} />
              </List.Item>
              <List.Item style={{width:50,height:50,marginTop:5,overflow:"hidden"}}>
                <img src={require('../../assets/images/ciyuan.png')} />
              </List.Item>
              <List.Item style={{width:50,height:50,marginTop:5,overflow:"hidden"}}>
                <img src={require('../../assets/images/ciyuan.png')} />
              </List.Item>
              <List.Item style={{width:50,height:50,marginTop:5,overflow:"hidden"}}>
                <img src={require('../../assets/images/ciyuan.png')} />
              </List.Item>
          </List>
         </Card>
         </div>
    );
  }
}

export default Contents;