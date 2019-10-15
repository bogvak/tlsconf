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
              <ConfContainerRightTop 
                Configurations={this.props.Configurations}
              />
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
        <div className="conf-main-right-top-img-wrapper">
          <img
            className="conf-main-right-top-img"
            src={"s"}
            alt=""
          />
        </div>
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
              key={index}
            >
              {(module.SubArticle) ? <div
                className="conf-main-right-bottom_l2-module-article"
              >
                {module.SubArticle}
              </div> : null} 
              {(module["article-list"]) ? 
                <div 
                  className="conf-main-right-bottom_l2-module-specs-menu"
                  onMouseEnter={
                    this.props.AwokenTabHandler.bind(this, index)
                  }
                  onMouseLeave={
                    this.props.AwokenTabHandler.bind(this, null)
                  }
                >
                  <SubMenu 
                    ArticleList={module["article-list"]} 
                    Display={(this.props.Configuration.IndexOfAwokenTab === index) ? "inline" : "none"}
                    AwokenTabIndex={index}
                    SubMenuHandler={this.props.SubMenuHandler}
                  />
                </div>
              : null}
              {(module.desc && module.SubDesc) ? <div 
                className="conf-main-right-bottom_l2-module-desc"
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
  isBordered = (index) =>{
    if (index+1 < Object.keys(this.props.ArticleList).length) {
      return "conf-main-right-bottom_l2-module-specs-menu-list-li--bordered";
    }
  }
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
                className={["conf-main-right-bottom_l2-module-specs-menu-list-li", this.isBordered(index)].join(" ")}
                onClick={this.props.SubMenuHandler.bind(this, {AwokenTabIndex: this.AwokenTabIndex ,SubDesc: article, SubArticle: this.props.ArticleList[article]})}
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