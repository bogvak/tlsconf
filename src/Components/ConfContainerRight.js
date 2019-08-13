import React, { Component } from 'react';
import SplitPane from 'react-split-pane';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
//Data import
import LocalStrings from '../Data/strings'

class ConfContainerRight extends Component {
    render() {
      return (
            <div className="conf-main-right">
            <SplitPane split="horizontal" defaultSize="50%">
              <ConfContainerRightTop />
              <ConfContainerRightBottom 
                Configurations={this.props.Configurations}
                QuantityOfConf={this.props.QuantityOfConf}
              />
            </SplitPane>
            </div>
      );
    }
  }
  
class ConfContainerRightTop extends Component {
  render() {
    return (
      <div className="conf-main-right-top">
        <span>{LocalStrings['en'][1]}</span>
      </div>
    );
  }
}

class ConfContainerRightBottom extends Component {
  render() {
    return (
      <Tabs className="conf-main-right-bottom">
        <TabList>
          {this.props.Configurations.map((conf, confNumber) => <Tab key={confNumber}>Configuration #{confNumber+1}</Tab>)}
        </TabList>
          {this.props.Configurations.map((conf, confNumber) => <TabPanel key={confNumber}><ConfList key={confNumber} Configuration={conf} /></TabPanel>)}
      </Tabs>
    );
  }
}

class ConfList extends Component {
  zebraColor = (index) => {
    if (index % 2 === 0) 
      {return "Gray"} 
    else 
      {return "White"}
  }
  render() {
    return (
      <div className="ConfList">
        <div style={{backgroundColor: "white"}}>{this.props.Configuration.PlatformСhoiceDesc.line} - Support frame<br/>{this.props.Configuration.PlatformСhoiceDesc["all-slots"]} signal slots, Type: {this.props.Configuration.PlatformСhoiceDesc.type}</div>
        {this.props.Configuration.Modules.map((module, index) => <div key={index} style={{backgroundColor: this.zebraColor(index)}}>{module.article}: {module.desc1}/{module.desc2}</div>)}
      </div>
    );
  }
}

export default ConfContainerRight;
  