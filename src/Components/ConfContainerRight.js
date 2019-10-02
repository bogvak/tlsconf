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
      <Tabs className="conf-main-right-bottom_l0">
        <TabList className="conf-main-right-bottom_l0-list">
          {this.props.Configurations.map((conf, confNumber) => <Tab className="conf-main-right-bottom_l0-list-tab" selectedClassName="conf-main-right-bottom_l0-list-tab--selected" key={confNumber}>Configuration #{confNumber+1}</Tab>)}
        </TabList>
          {this.props.Configurations.map((conf, confNumber) => {
            return (<TabPanel 
              className="conf-main-right-bottom_l0-panel" 
              selectedClassName="conf-main-right-bottom_l0-panel--selected" 
              key={confNumber}
            >
              {(conf.PlatformСhoiceDesc.line) ?
                <ConfList 
                key={confNumber} 
                Configuration={conf}
              />
              : null}
            </TabPanel>)
          })}
      </Tabs>
    );
  }
}

class ConfList extends Component {
  state ={
    awokenTab: null
  }
  zebraColor = (index) => {
    if (index % 2 === 0) 
      {return "dark"} 
    else 
      {return "light"}
  }
  render() {
    return (
      <div className="conf-main-right-bottom_l1">
        <h3 className="conf-main-right-bottom_l1-platform">
          {this.props.Configuration.PlatformСhoiceDesc.line} - Support frame:
        </h3>
        <p className="conf-main-right-bottom_l1-platform-desc">
          {this.props.Configuration.PlatformСhoiceDesc["all-slots"]} signal slots, Type: {this.props.Configuration.PlatformСhoiceDesc.type}
        </p>
        {this.props.Configuration.Modules.map((module, index) => {
          return (
            <div 
              className={["conf-main-right-bottom_l2-module", "conf-main-right-bottom_l2-module-" + this.zebraColor(index)].join(' ')}
              onClick={
                () => (this.state.awokenTab === index) ? this.setState({awokenTab: null}) : this.setState({awokenTab: index})
              }
            >
              <div className="conf-main-right-bottom_l2-module-article">
                {module.article}
              </div>
              {(module.article) ? 
                <div className="conf-main-right-bottom_l2-module-specs-menu">
                  <ul
                    className="conf-main-right-bottom_l2-module-specs-menu-list"
                    style={{display:
                      (this.state.awokenTab===index) ? "inline" : "none"
                    }}
                  >
                    <li>type 1</li>
                    <li>type 2</li>
                    <li>type 3</li>
                  </ul> 
                </div> 
              : null}
              <div className="conf-main-right-bottom_l2-module-desc">
                  {module.desc}
              </div>
            </div>
          )
        })}
      </div>
    );
  }
}

export default ConfContainerRight;