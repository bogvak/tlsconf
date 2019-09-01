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
      <Tabs className="conf-main-right-bottom-l0">
        <TabList className="conf-main-right-bottom-l0-list">
          {this.props.Configurations.map((conf, confNumber) => <Tab className="conf-main-right-bottom-l0-list-tab" selectedClassName="conf-main-right-bottom-l0-list-tab--selected" key={confNumber}>Configuration #{confNumber+1}</Tab>)}
        </TabList>
          {this.props.Configurations.map((conf, confNumber) => <TabPanel className="conf-main-right-bottom-l0-panel" selectedClassName="conf-main-right-bottom-l0-panel--selected" key={confNumber}><ConfList key={confNumber} Configuration={conf} /></TabPanel>)}
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
      <div className="conf-main-right-bottom-l1">
        <h3 className="conf-main-right-bottom-l1-platform">{this.props.Configuration.PlatformСhoiceDesc.line} - Support frame:</h3>
        <p className="conf-main-right-bottom-l1-platform-desc">
          {this.props.Configuration.PlatformСhoiceDesc["all-slots"]} signal slots, Type: {this.props.Configuration.PlatformСhoiceDesc.type}
        </p>
        {this.props.Configuration.Modules.map((module, index) => {
          return (<li 
            className="conf-main-right-bottom-l1-module" 
            key={index} 
            style={{backgroundColor: this.zebraColor(index)}}
          >
            {(module.article && module.desc) ? (module.article + "-" + module.desc) : (null)}
          </li>)
        })}
      </div>
    );
  }
}

export default ConfContainerRight;