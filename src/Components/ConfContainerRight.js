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
              ModuleMenuHandler={props.ModuleMenuHandler}
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
              className="conf-main-right-top-subFrameMenu-list-line-check-box"
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
                ModuleMenuHandler={props.ModuleMenuHandler}
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

const ConfDescLine = (props) => <div className={props.elementClassName}>
  <div className={props.elementClassName+"-article"}>{props.article}</div>
  {(props.IsMenuAwokenHandler&&props.MenuHandler&&props.MenuContent)?
    <SubMenuRightBottom
      elementClassName={props.elementClassName+"-specs-menu"}
      IsMenuAwokenHandler={props.IsMenuAwokenHandler}
      IsVisible={props.IsVisible}
      MenuContent={props.MenuContent}
      MenuHandler={props.MenuHandler}
    />
  :<div className={props.elementClassName+"-space"}/>}
  <div className={props.elementClassName+"-desc"}>{props.desc}</div>
  {(props.ReseteHandler) ?
    <div className={props.elementClassName+"-remove-button"} onClick={props.ReseteHandler.bind(this, props.ConfNumber)}>x</div> 
  : null}
</div>

const SubMenuRightBottom = (props) => <div
  className={props.elementClassName}
  onMouseEnter={props.IsMenuAwokenHandler.bind(this, (props.index===0||props.index)?props.index:true)}
  onMouseLeave={props.IsMenuAwokenHandler.bind(this, false)}
>
  <ul className={[props.elementClassName+"-list", props.elementClassName+((props.IsVisible)?"-list--visible":"-list--hiden")].join(" ")}>
    {Object.keys(props.MenuContent).map((desc,i,arr) => <li
      className={!(i===arr.length-1)?props.elementClassName+"-list-li--bordered":null}
      key={desc}
      onClick={props.MenuHandler.bind(this, props.MenuContent[desc], desc)}
    >{desc}</li>)}
  </ul>
</div>

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
  
  const elementClassName = "conf-main-right-bottom_l1-conf-list";
  const platformСhoiceDesc = props.Configuration.PlatformСhoiceDesc;
  return (
    <SimpleBar className={elementClassName}>
      <ConfDescLine 
        elementClassName={elementClassName+"-subFrameType"}
        article={platformСhoiceDesc.subFrameArticle}
        desc={`
          ${platformСhoiceDesc.line} (${platformСhoiceDesc.subFrameDesc})
        `}
      />
      <ConfDescLine 
        elementClassName={elementClassName+"-frameType"}
        article={platformСhoiceDesc.article}
        desc={`
          ${platformСhoiceDesc.line} - Support frame:
          ${platformСhoiceDesc["all-slots"]} signal slots; Type: ${platformСhoiceDesc["type"]}
        `}
        ReseteHandler={props.FrameReseteHandler}
      />
      {(platformСhoiceDesc["support-frame"]) ? <ConfDescLine
        elementClassName={elementClassName+"-support-frame"}
        article={platformСhoiceDesc["support-frame-article"]}
        desc={`
          ${platformСhoiceDesc["support-frame-desc"]} (x${platformСhoiceDesc["support-frame"]})
        `}
      /> : null}
      {(platformСhoiceDesc["power-sockets"]) ? <ConfDescLine 
        elementClassName={elementClassName + "-powerSocket"}
        article={platformСhoiceDesc.powerSocketArticle}
        desc={`
          ${platformСhoiceDesc.powerSocketDesc} (x${platformСhoiceDesc["power-sockets"]})
        `}
        IsMenuAwokenHandler={props.IsPSmenuAwokenHandler}
        IsVisible={props.Configuration.IsPSmenuAwoken}
        MenuContent={platformСhoiceDesc.powerSocketList}
        MenuHandler={props.PowerSocketMenuHandler}
      /> : null}
      {props.Configuration.Modules.map((module, index) => {
        return (
          <div 
            className={[elementClassName + "-module", elementClassName + "-module-" + zebraColor(index)].join(' ')}
            key={index}
          >
            {(module.SubArticle) ? <div
              className={elementClassName + "-module-article"}
            >
              {module.SubArticle}
            </div> : null} 
            {(module.desc || module.SubDesc) ?
              <SubMenuRightBottom
                index={index}
                elementClassName={elementClassName + "-module-specs-menu"}
                IsMenuAwokenHandler={props.AwokenTabHandler}
                MenuContent={module["article-list"]}
                IsVisible={props.Configuration.IndexOfAwokenTab===index}
                MenuHandler={props.ModuleMenuHandler}
              />
            : null}
            {(module.desc && module.SubDesc) ? <div 
              className={elementClassName + "-module-desc"}
            >
              {module.desc}({module.SubDesc})
            </div>: null}
            {(module.desc && module.SubDesc) ? <div
              onClick={props.ModuleResetHandler.bind(this, index)}
              className={elementClassName + "-module-remove-button"}
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