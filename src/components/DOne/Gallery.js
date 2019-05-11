import React from "react";
import { Card,Avatar,Icon,List,Col,Row} from "antd";

const {Meta}=Card;

class Gallery  extends React.Component {
  constructor(props){
    super(props);
    this.state={

    }
  }
    render() {
        return (
        <div>

            <Card
            hoverable
            style={{ width: 240 ,borderRadius:9}}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
            <Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title="Europe Street beat"
              description="www.instagram.com"
            />
          </Card>
         </div>
        );
    }
}

export default Gallery ;