import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import PrinfConfWindow from './ConfWindowForPrint';
import SimpleBar from 'simplebar-react';

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
              IsPSmenuAwokenHandler={props.IsPSmenuAwokenHandler}
              PowerSocketMenuHandler={props.PowerSocketMenuHandler}
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
                IsPSmenuAwokenHandler={props.IsPSmenuAwokenHandler}
                PowerSocketMenuHandler={props.PowerSocketMenuHandler}
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
      return "--bordered";
    } else {
      return ""
    }
  }

  const rootClassName = "conf-main-right-bottom_l1-conf-list"

  return (
    <SimpleBar forceVisible="y" autoHide="false" className={rootClassName}>
      <div className={rootClassName + "-subFrameType"}>
          <div className={rootClassName + "-subFrameType-article"}>
            {props.Configuration.PlatformСhoiceDesc.subFrameArticle}
          </div>
          <div className={rootClassName + "-subFrameType-space"} />
          <div className={rootClassName + "-subFrameType-desc"}>
            {props.Configuration.PlatformСhoiceDesc.line} ({props.Configuration.PlatformСhoiceDesc.subFrameDesc})
          </div>
      </div>
      <div className={rootClassName + "-frameType"}>
          <div className={rootClassName + "-frameType-article"}>
            {props.Configuration.PlatformСhoiceDesc.article}
          </div>
          <div className={rootClassName + "-frameType-space"} />
          <div className={rootClassName + "-frameType-desc"}>
            {props.Configuration.PlatformСhoiceDesc.line} - Support frame:
            <br/>
            {props.Configuration.PlatformСhoiceDesc["all-slots"]} signal slots; Type: {props.Configuration.PlatformСhoiceDesc["type"]}
          </div>
          <div 
            className={rootClassName + "-frameType-remove-button"}
            onClick={props.FrameReseteHandler.bind(this, props.ConfNumber)}
          >
            x
          </div>
      </div>
      {(props.Configuration.PlatformСhoiceDesc["support-frame"]) ? <div className={rootClassName + "-support-frame"}>
          <div className={rootClassName + "-support-frame-article"}>
            {props.Configuration.PlatformСhoiceDesc["support-frame-article"]}
          </div>
          <div className={rootClassName + "-support-frame-space"} />
          <div className={rootClassName + "-support-frame-desc"}>
            {props.Configuration.PlatformСhoiceDesc["support-frame-desc"]} (x{props.Configuration.PlatformСhoiceDesc["support-frame"]})
          </div>
      </div> : null}
      {(props.Configuration.PlatformСhoiceDesc["power-sockets"]) ? <div className={rootClassName + "-powerSocket"}>
          <div className={rootClassName + "-powerSocket-article"}>
            {props.Configuration.PlatformСhoiceDesc.powerSocketArticle}
          </div>
          <div 
            className={rootClassName + "-powerSocket-specs-menu"}
            onMouseEnter={
              props.IsPSmenuAwokenHandler.bind(this, true)
            }
            onMouseLeave={
              props.IsPSmenuAwokenHandler.bind(this, false)
            }
          >
            <ul
              className={rootClassName + "-powerSocket-specs-menu-list"}
              style={{display: (props.Configuration.IsPSmenuAwoken) ? "inline" : "none"}}
            >
              {Object.keys(props.Configuration.PlatformСhoiceDesc.powerSocketList).map((desc, index)=>{
                return (
                  <li
                    className={[rootClassName + "-powerSocket-specs-menu-list-li", rootClassName + "-powerSocket-specs-menu-list-li" + isBordered(index, props.Configuration.PlatformСhoiceDesc.powerSocketList)].join(" ")}
                    onClick={props.PowerSocketMenuHandler.bind(this, {powerSocketDesc: desc, powerSocketArticle: props.Configuration.PlatformСhoiceDesc.powerSocketList[desc]})}
                    key={desc}
                  >
                  {desc}
                  </li>
                )
              })}
            </ul>
          </div>
          <div className={rootClassName + "-powerSocket-desc"}>
            {props.Configuration.PlatformСhoiceDesc.powerSocketDesc} (x{props.Configuration.PlatformСhoiceDesc["power-sockets"]})
          </div>
      </div> : null}
      {props.Configuration.Modules.map((module, index) => {
        return (
          <div 
            className={[rootClassName + "-module", rootClassName + "-module-" + zebraColor(index)].join(' ')}
            key={index}
          >
            {(module.SubArticle) ? <div
              className={rootClassName + "-module-article"}
            >
              {module.SubArticle}
            </div> : null} 
            {(module.desc || module.SubDesc) ? 
              <div 
                className={rootClassName + "-module-specs-menu"}
                onMouseEnter={
                  props.AwokenTabHandler.bind(this, index)
                }
                onMouseLeave={
                  props.AwokenTabHandler.bind(this, null)
                }
              >
                <ul
                  className={rootClassName + "-module-specs-menu-list"}
                  style={{display: (props.Configuration.IndexOfAwokenTab === index) ? "inline" : "none"}}
                >
                  {Object.keys(module["article-list"]).map((desc, index)=>{
                    return (
                      <li
                        className={[rootClassName + "-module-specs-menu-list-li", rootClassName + "-module-specs-menu-list-li" + isBordered(index, module["article-list"])].join(" ")}
                        onClick={props.SubMenuHandler.bind(this, {SubDesc: desc, SubArticle: module["article-list"][desc]})}
                        key={desc}
                      >
                      {desc}
                      </li>
                    )
                  })}
                </ul>
              </div>
            : null}
            {(module.desc && module.SubDesc) ? <div 
              className={rootClassName + "-module-desc"}
            >
              {module.desc}({module.SubDesc})
            </div>: null}
            {(module.desc && module.SubDesc) ? <div
              onClick={props.ModuleResetHandler.bind(this, index)}
              className={rootClassName + "-module-remove-button"}
            >
              x
            </div>: null}
          </div>
        )
      })}
    </SimpleBar>
  );
}

const PrintConfButton = (props) => {
  const [IsClick, flipIsClick] = useState(false);
  const [ArticleList, setArticleList] = useState(null);

  return (
    <div className="conf-main-right-bottom_l1-print-conf-list">
      <button 
        className="conf-main-right-bottom_l1-print-conf-list-button"
        onClick={() => {
          flipIsClick(!IsClick)
          setArticleList(props.BuildArticlesArray(props.ConfNumber))
        }}
      >
        Print Configuration List
      </button>
      {(IsClick && ArticleList) ? <PrinfConfWindow ResetIsClick={() => flipIsClick(false)} ArticleList={ArticleList} /> : null}
    </div>  
  )
}

export default ConfContainerRight;