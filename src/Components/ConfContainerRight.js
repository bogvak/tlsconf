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
                SubMenuHandler={this.props.SubMenuHandler}
                AwokenTabHandler={this.props.AwokenTabHandler}
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
                  SubMenuHandler={this.props.SubMenuHandler}
                  AwokenTabHandler={this.props.AwokenTabHandler}
                />
              : null}
            </TabPanel>)
          })}
      </Tabs>
    );
  }
}

class ConfList extends Component {
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
                this.props.AwokenTabHandler.bind(this, index)
              }
              key={index}
            >
              {(module.SubArticle) ? <div 
                onClick={this.props.AwokenTabHandler.bind(this, (index===this.props.Configuration.IndexOfAwokenTab) ? null : index)}
                className="conf-main-right-bottom_l2-module-article"
              >
                {module.SubArticle}
              </div> : null} 
              {(module["article-list"]) ? <div className="conf-main-right-bottom_l2-module-specs-menu">
                <SubMenu 
                  ArticleList={module["article-list"]} Display={(this.props.Configuration.IndexOfAwokenTab === index) ? "inline" : "none"} 
                  SubMenuHandler={this.props.SubMenuHandler}
                />
              </div>: null}
              {(module.desc && module.SubDesc) ? <div 
                className="conf-main-right-bottom_l2-module-desc"
                onClick={this.props.AwokenTabHandler.bind(this, (index===this.props.Configuration.IndexOfAwokenTab) ? null : index)}
              >
                {module.desc}({module.SubDesc})
              </div>: null}
            </div>
          )
        })}
      </div>
    );
  }
}

class SubMenu extends Component {
  render () {
    if (this.props.ArticleList) {
      return (
        <ul
          className="conf-main-right-bottom_l2-module-specs-menu-list"
          style={{display: this.props.Display}}
        >
          {Object.keys(this.props.ArticleList).map((article, index)=>{
            return (
              <li 
                onClick={this.props.SubMenuHandler.bind(this, {SubDesc: article, SubArticle: this.props.ArticleList[article]})}
                key={article}
              >
               {article}
              </li>
            )
          })}
        </ul>
      )
    }
  }
}

export default ConfContainerRight;