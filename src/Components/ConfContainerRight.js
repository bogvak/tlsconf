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
                Configuration={this.props.Configurations[this.props.ConfNumber]}
                SubFrameTypeHandler={this.props.SubFrameTypeHandler}
              />
              <ConfContainerRightBottom 
                Configurations={this.props.Configurations}
                QuantityOfConf={this.props.QuantityOfConf}
                SubMenuHandler={this.props.SubMenuHandler}
                AwokenTabHandler={this.props.AwokenTabHandler}
                ModuleResetHandler={this.props.ModuleResetHandler}
                FrameReseteHandler={this.props.FrameReseteHandler}
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
            src={this.props.Configuration.PlatformСhoiceDesc.img}
            alt=""
          />
        </div>
        <div className="conf-main-right-top-frameName">
          {this.props.Configuration.PlatformСhoiceDesc.fullLine}
        </div>
        <div className="conf-main-right-top-subFrameMenu">
          {(this.props.Configuration.PlatformСhoiceDesc.subFrameType) ?  
            <FrameSubMenu 
              SubFrameType={this.props.Configuration.PlatformСhoiceDesc.subFrameType}
              SubFrameArticle={this.props.Configuration.PlatformСhoiceDesc.subFrameArticle}
              SubFrameTypeHandler={this.props.SubFrameTypeHandler}
            />
          : null}
        </div>
      </div>
    );
  }
}

class FrameSubMenu extends Component {
  backgroundColor = (index) => {
    if (index % 2 === 0) {
      return "conf-main-right-top-subFrameMenu-list-line-light"
    } else {
      return "conf-main-right-top-subFrameMenu-list-line-dark"
    }
  }
  render() {
    return (
      <div className="conf-main-right-top-subFrameMenu-list">
        {Object.keys(this.props.SubFrameType).map((inf, index) => {
          return(
            <div key={inf} className={["conf-main-right-top-subFrameMenu-list-line", this.backgroundColor(index)].join(" ")}>
              <p style={{"fontWeight": (this.props.SubFrameType[inf] === this.props.SubFrameArticle) ? "bold" : null}} className="conf-main-right-top-subFrameMenu-list-line-text">{this.props.SubFrameType[inf]} : {inf}</p>
              <button
                onClick={this.props.SubFrameTypeHandler.bind(this, {subFrameDesc: inf, subFrameArticle: this.props.SubFrameType[inf]})}
                className="conf-main-right-top-subFrameMenu-list-line-button"
              >
                {(this.props.SubFrameType[inf] === this.props.SubFrameArticle) ? "✓" : null}
              </button>
            </div>
          )
        })}
      </div>
    )
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
                  ConfNumber={confNumber}
                  Configuration={conf}
                  SubMenuHandler={this.props.SubMenuHandler}
                  AwokenTabHandler={this.props.AwokenTabHandler}
                  ModuleResetHandler={this.props.ModuleResetHandler}
                  FrameReseteHandler={this.props.FrameReseteHandler}
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
      {return "light"} 
    else 
      {return "dark"}
  }
  render() {
    return (
      <div className="conf-main-right-bottom_l1">
        <div className="conf-main-right-bottom_l2-subFrameType">
            <div className="conf-main-right-bottom_l2-subFrameType-article">
              {this.props.Configuration.PlatformСhoiceDesc.subFrameArticle}
            </div>
            <div className="conf-main-right-bottom_l2-subFrameType-space" />
            <div className="conf-main-right-bottom_l2-subFrameType-desc">
              {this.props.Configuration.PlatformСhoiceDesc.line} ({this.props.Configuration.PlatformСhoiceDesc.subFrameDesc})
            </div>
        </div>
        <div className="conf-main-right-bottom_l2-frameType">
            <div className="conf-main-right-bottom_l2-frameType-article">
              {this.props.Configuration.PlatformСhoiceDesc.article}
            </div>
            <div className="conf-main-right-bottom_l2-frameType-space" />
            <div className="conf-main-right-bottom_l2-frameType-desc">
              {this.props.Configuration.PlatformСhoiceDesc.line} - Support frame:
              <br/>
              {this.props.Configuration.PlatformСhoiceDesc["all-slots"]} signal slots; Type: {this.props.Configuration.PlatformСhoiceDesc["type"]}
            </div>
            <div 
              className="conf-main-right-bottom_l2-frameType-remove-button"
              onClick={this.props.FrameReseteHandler.bind(this, this.props.ConfNumber)}
            >
              x
            </div>
        </div>
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
              {(module.desc || module.SubDesc) ? 
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
              {(module.desc && module.SubDesc) ? <div
                onClick={this.props.ModuleResetHandler.bind(this, index)}
                className="conf-main-right-bottom_l2-module-remove-button"
              >
                x
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