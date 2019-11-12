import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import PrinfConfWindow from './ConfWindowForPrint';

const ConfContainerRight = (props) => {
    return (
        <div className="conf-main-right">
            <ConfContainerRightTop 
              Configuration={props.Configurations[props.ConfNumber]}
              SubFrameTypeHandler={props.SubFrameTypeHandler}
            />
            <ConfContainerRightBottom 
              Configurations={props.Configurations}
              QuantityOfConf={props.QuantityOfConf}
              SubMenuHandler={props.SubMenuHandler}
              AwokenTabHandler={props.AwokenTabHandler}
              ModuleResetHandler={props.ModuleResetHandler}
              FrameReseteHandler={props.FrameReseteHandler}
              BuildArticlesArray={props.BuildArticlesArray}
            />
        </div>
    );
}

const ConfContainerRightTop = (props) => {
  return (
    <div className="conf-main-right-top">
      <div className="conf-main-right-top-img-wrapper">
        <img
          className="conf-main-right-top-img"
          src={props.Configuration.PlatformСhoiceDesc.img}
          alt=""
        />
      </div>
      <div className="conf-main-right-top-frameName">
        {props.Configuration.PlatformСhoiceDesc.fullLine}
      </div>
      <div className="conf-main-right-top-subFrameMenu">
        {(props.Configuration.PlatformСhoiceDesc.subFrameType) ?  
          <FrameSubMenu 
            SubFrameType={props.Configuration.PlatformСhoiceDesc.subFrameType}
            SubFrameArticle={props.Configuration.PlatformСhoiceDesc.subFrameArticle}
            SubFrameTypeHandler={props.SubFrameTypeHandler}
          />
        : null}
      </div>
    </div>
  );
}

const FrameSubMenu = (props) => {
  const backgroundColor = (index) => {
    if (index % 2 === 0) {
      return "conf-main-right-top-subFrameMenu-list-line-light"
    } else {
      return "conf-main-right-top-subFrameMenu-list-line-dark"
    }
  }
  return (
    <div className="conf-main-right-top-subFrameMenu-list">
      {Object.keys(props.SubFrameType).map((inf, index) => {
        return(
          <div key={inf} className={["conf-main-right-top-subFrameMenu-list-line", backgroundColor(index)].join(" ")}>
            <p style={{"fontWeight": (props.SubFrameType[inf] === props.SubFrameArticle) ? "bold" : null}} className="conf-main-right-top-subFrameMenu-list-line-text">{props.SubFrameType[inf]} : {inf}</p>
            <button
              onClick={props.SubFrameTypeHandler.bind(this, {subFrameDesc: inf, subFrameArticle: props.SubFrameType[inf]})}
              className="conf-main-right-top-subFrameMenu-list-line-button"
            >
              {(props.SubFrameType[inf] === props.SubFrameArticle) ? "✓" : null}
            </button>
          </div>
        )
      })}
    </div>
  )
}

const ConfContainerRightBottom = (props) => {
  return (
    <Tabs className="conf-main-right-bottom_l0">
      <TabList className="conf-main-right-bottom_l0-list">
        {props.Configurations.map((conf, confNumber) => <Tab className="conf-main-right-bottom_l0-list-tab" selectedClassName="conf-main-right-bottom_l0-list-tab--selected" key={confNumber}>Configuration #{confNumber+1}</Tab>)}
      </TabList>
        {props.Configurations.map((conf, confNumber) => {
          return (<TabPanel 
            className="conf-main-right-bottom_l0-panel" 
            selectedClassName="conf-main-right-bottom_l0-panel--selected" 
            key={confNumber}
          >
            {(conf.PlatformСhoiceDesc.line) ? [
              <ConfList 
                key={confNumber}
                ConfNumber={confNumber}
                Configuration={conf}
                SubMenuHandler={props.SubMenuHandler}
                AwokenTabHandler={props.AwokenTabHandler}
                ModuleResetHandler={props.ModuleResetHandler}
                FrameReseteHandler={props.FrameReseteHandler}
              /> , 
              <PrintConfButton BuildArticlesArray={props.BuildArticlesArray} ConfNumber={confNumber} key={conf} />
            ] : null}
          </TabPanel>)
        })}
    </Tabs>
  );
}

const ConfList = (props) => {
  const zebraColor = (index) => {
    let isNextLight = (index % 2 === 0) ? true : false;
    if (props.Configuration.PlatformСhoiceDesc["power-sockets"]) {
      isNextLight=!isNextLight
    }
    if (isNextLight)
      {return "light"} 
    else 
      {return "dark"}
  }

  const isBordered = (index, articleList) =>{
    if (index+1 < Object.keys(articleList).length) {
      return "conf-main-right-bottom_l1-conf-list-module-specs-menu-list-li--bordered";
    }
  }

  return (
    <div data-simplebar className="conf-main-right-bottom_l1-conf-list">
      <div className="vertical-scrolling__wrapper">
        <div className="conf-main-right-bottom_l1-conf-list-subFrameType">
            <div className="conf-main-right-bottom_l1-conf-list-subFrameType-article">
              {props.Configuration.PlatformСhoiceDesc.subFrameArticle}
            </div>
            <div className="conf-main-right-bottom_l1-conf-list-subFrameType-space" />
            <div className="conf-main-right-bottom_l1-conf-list-subFrameType-desc">
              {props.Configuration.PlatformСhoiceDesc.line} ({props.Configuration.PlatformСhoiceDesc.subFrameDesc})
            </div>
        </div>
        <div className="conf-main-right-bottom_l1-conf-list-frameType">
            <div className="conf-main-right-bottom_l1-conf-list-frameType-article">
              {props.Configuration.PlatformСhoiceDesc.article}
            </div>
            <div className="conf-main-right-bottom_l1-conf-list-frameType-space" />
            <div className="conf-main-right-bottom_l1-conf-list-frameType-desc">
              {props.Configuration.PlatformСhoiceDesc.line} - Support frame:
              <br/>
              {props.Configuration.PlatformСhoiceDesc["all-slots"]} signal slots; Type: {props.Configuration.PlatformСhoiceDesc["type"]}
            </div>
            <div 
              className="conf-main-right-bottom_l1-conf-list-frameType-remove-button"
              onClick={props.FrameReseteHandler.bind(this, props.ConfNumber)}
            >
              x
            </div>
        </div>
        {(props.Configuration.PlatformСhoiceDesc["power-sockets"]) ? <div className="conf-main-right-bottom_l1-conf-list-powerSocket">
            <div className="conf-main-right-bottom_l1-conf-list-powerSocket-article">
              {props.Configuration.PlatformСhoiceDesc.powerSocketArticle}
            </div>
            <div className="conf-main-right-bottom_l1-conf-list-powerSocket-space"/>
            <div className="conf-main-right-bottom_l1-conf-list-powerSocket-desc">
              {props.Configuration.PlatformСhoiceDesc.powerSocketDesc} (x{props.Configuration.PlatformСhoiceDesc["power-sockets"]})
            </div>
        </div> : null}
        {props.Configuration.Modules.map((module, index) => {
          return (
            <div 
              className={["conf-main-right-bottom_l1-conf-list-module", "conf-main-right-bottom_l1-conf-list-module-" + zebraColor(index)].join(' ')}
              key={index}
            >
              {(module.SubArticle) ? <div
                className="conf-main-right-bottom_l1-conf-list-module-article"
              >
                {module.SubArticle}
              </div> : null} 
              {(module.desc || module.SubDesc) ? 
                <div 
                  className="conf-main-right-bottom_l1-conf-list-module-specs-menu"
                  onMouseEnter={
                    props.AwokenTabHandler.bind(this, index)
                  }
                  onMouseLeave={
                    props.AwokenTabHandler.bind(this, null)
                  }
                >
                  <ul
                    className="conf-main-right-bottom_l1-conf-list-module-specs-menu-list"
                    style={{display: (props.Configuration.IndexOfAwokenTab === index) ? "inline" : "none"}}
                  >
                    {Object.keys(module["article-list"]).map((article, index)=>{
                      return (
                        <li
                          className={["conf-main-right-bottom_l1-conf-list-module-specs-menu-list-li", isBordered(index, module["article-list"])].join(" ")}
                          onClick={props.SubMenuHandler.bind(this, {SubDesc: article, SubArticle: module["article-list"][article]})}
                          key={article}
                        >
                        {article}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              : null}
              {(module.desc && module.SubDesc) ? <div 
                className="conf-main-right-bottom_l1-conf-list-module-desc"
              >
                {module.desc}({module.SubDesc})
              </div>: null}
              {(module.desc && module.SubDesc) ? <div
                onClick={props.ModuleResetHandler.bind(this, index)}
                className="conf-main-right-bottom_l1-conf-list-module-remove-button"
              >
                x
              </div>: null}
            </div>
          )
        })}
      </div>  
    </div>
  );
}

class PrintConfButton extends Component {
  state = {
    isClick: false,
    articleList: null
  }

  render () {
    return (
      <div className="conf-main-right-bottom_l1-print-conf-list">
        <button 
          className="conf-main-right-bottom_l1-print-conf-list-button"
          onClick={() => this.setState({
            isClick: !this.state.isClick, 
            articleList: this.props.BuildArticlesArray(this.props.ConfNumber)
          })}
        >
          Print Configuration List
        </button>
        {(this.state.isClick && this.state.articleList) ? <PrinfConfWindow ArticleList={this.state.articleList} /> : null}
      </div>  
    )
  }
}

export default ConfContainerRight;