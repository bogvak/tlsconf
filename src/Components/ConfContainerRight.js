import React, { useState, Component , useRef, Fragment} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ComponentToPrint from './ConfWindowForPrint';
import SimpleBar from 'simplebar-react';
import ReactToPrint from 'react-to-print';

const ConfContainerRight = (props) => {
    return (
        <div className="conf-main-right">
            <ConfContainerRightTop 
              Configuration={props.Configurations[props.ConfNumber]}
              frame_sub_typeHandler={props.frame_sub_typeHandler}
            />
            <ConfContainerRightBottom 
              Configurations={props.Configurations}
              QuantityOfConf={props.QuantityOfConf}
              ModuleMenuHandler={props.ModuleMenuHandler}
              ModuleResetHandler={props.ModuleResetHandler}
              frameResetHandler={props.frameResetHandler}
              PowerSocketMenuHandler={props.PowerSocketMenuHandler}
            />
        </div>
    );
}

const ConfContainerRightTop = (props) => {
  return (
    <div className="conf-main-right-top">
      {(props.Configuration.PlatformСhoiceDesc.line) ? <Fragment>
      <div className="conf-main-right-top-img-wrapper">
        <img
          className="conf-main-right-top-img"
          src={props.Configuration.PlatformСhoiceDesc.img}
          alt={props.Configuration.PlatformСhoiceDesc.line}
        />
      </div>
      <div className="conf-main-right-top-frameName">
        {props.Configuration.PlatformСhoiceDesc.line_desc}
      </div>
      <div className="conf-main-right-top-subFrameMenu">
        {(props.Configuration.PlatformСhoiceDesc.frame_sub_type) ?  
          <FrameSubMenu 
            frame_sub_type={props.Configuration.PlatformСhoiceDesc.frame_sub_type}
            frame_sub_type_article={props.Configuration.PlatformСhoiceDesc.frame_sub_type_article}
            frame_sub_typeHandler={props.frame_sub_typeHandler}
          />
        : null}
      </div>
      </Fragment> : ''}
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
      {Object.keys(props.frame_sub_type).map((inf, index) => {
        return(
          <div key={inf} className={["conf-main-right-top-subFrameMenu-list-line", backgroundColor(index)].join(" ")}>
            <p style={{"fontWeight": (props.frame_sub_type[inf] === props.frame_sub_type_article) ? "bold" : null}} className="conf-main-right-top-subFrameMenu-list-line-text">{props.frame_sub_type[inf]} : {inf}</p>
            <button
              onClick={props.frame_sub_typeHandler.bind(this, {frame_sub_type_desc: inf, frame_sub_type_article: props.frame_sub_type[inf]})}
              className="conf-main-right-top-subFrameMenu-list-line-check-box"
            >
              {(props.frame_sub_type[inf] === props.frame_sub_type_article) ? "✓" : null}
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
        {props.Configurations.map((conf, confNumber) => <Tab 
          className="conf-main-right-bottom_l0-list-tab" 
          selectedClassName="conf-main-right-bottom_l0-list-tab--selected" 
          key={confNumber}
        >
          Configuration {confNumber+1}
        </Tab>)}
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
                confNumber={confNumber}
                Configuration={conf}
                ModuleMenuHandler={props.ModuleMenuHandler}
                ModuleResetHandler={props.ModuleResetHandler}
                frameResetHandler={props.frameResetHandler}
                PowerSocketMenuHandler={props.PowerSocketMenuHandler}
              /> ,
              <PrintConfButton articlesToPrint={props.Configurations[confNumber].articlesToPrint} key={conf} />
            ] : null}
          </TabPanel>)
        })}
    </Tabs>
  );
}

const ConfDescLine = props => {
  const elementClassName=[
    props.elementClassName,
    props.elementClassName+((props.display || props.display===undefined)? '--visible': '--hidden'),
    'zebra-striped',
  ].join(' ');
  if (props.article) {
    return (<div className={elementClassName}>
      <div className={props.elementClassName+"-article"}>{props.article}</div>
      {(props.MenuHandler&&props.MenuContent)?
        <SubMenuRightBottom
          elementClassName={props.elementClassName+"-specs-menu"}
          MenuContent={props.MenuContent}
          MenuHandler={props.MenuHandler}
          index={props.index}
        />
      :<div className={props.elementClassName+"-space"}/>}
      <div className={props.elementClassName+"-desc"}>{props.children}</div>
      {(props.ReseteHandler) ?
        <div className={props.elementClassName+"-remove-button"} onClick={props.ReseteHandler.bind(this, props.confNumber, props.index)}>x</div> 
      : null}
    </div>)
  } else {
    return ""
  }
}

const SubMenuRightBottom = props => {
  const [isVisible, IsVisibleHandler] = useState(false);

  return(<div
  className={props.elementClassName}
  onMouseEnter={() => IsVisibleHandler(true)}
  onMouseLeave={() => IsVisibleHandler(false)}
>
  <ul className={[props.elementClassName+"-list", props.elementClassName+((isVisible)?"-list--visible":"-list--hiden")].join(" ")}>
    {Object.keys(props.MenuContent).map((desc,i,arr) => <li
      className={!(i===arr.length-1)?props.elementClassName+"-list-li--bordered":null}
      key={desc}
      onClick={props.MenuHandler.bind(this, props.MenuContent[desc], desc, props.index)}
    >{desc}</li>)}
  </ul>
</div>)}

const ConfList = props => {
  
  const elementClassName = "conf-main-right-bottom_l1-conf-list";
  const platformСhoiceDesc = props.Configuration.PlatformСhoiceDesc;
  return (
    <SimpleBar className={elementClassName}>
      {(platformСhoiceDesc.frame_sub_type_article) ? <ConfDescLine
        elementClassName={elementClassName+"-line"}
        article={platformСhoiceDesc.frame_sub_type_article}
        confNumber={props.confNumber}
      >
        {platformСhoiceDesc.line} ({platformСhoiceDesc.frame_sub_type_desc})
      </ConfDescLine> : null}
      <ConfDescLine
        elementClassName={elementClassName+"-line"}
        article={platformСhoiceDesc.article}
        ReseteHandler={props.frameResetHandler}
        confNumber={props.confNumber}
      >
        {platformСhoiceDesc.line} - Support frame: {platformСhoiceDesc.slots_sum} signal slots; Type: {platformСhoiceDesc["type"]}
      </ConfDescLine>
      {(platformСhoiceDesc.support_frame_arr) ? platformСhoiceDesc.support_frame_arr.map((frame, index) => <ConfDescLine
        elementClassName={elementClassName+"-line"}
        article={frame.article}
        confNumber={props.confNumber}
        key={frame+index}
      >
        {frame.desc}
      </ConfDescLine>) : null}
      {(platformСhoiceDesc["power-sockets"]) ? <ConfDescLine
        elementClassName={elementClassName + "-line"}
        article={platformСhoiceDesc.powerSocketArticle}
        MenuContent={platformСhoiceDesc.powerSocketList}
        MenuHandler={props.PowerSocketMenuHandler}
        confNumber={props.confNumber}
      >
        {platformСhoiceDesc.powerSocketDesc} (x{platformСhoiceDesc["power-sockets"]})
      </ConfDescLine> : null}
      {props.Configuration.Modules.map((module, index) => <ConfDescLine
        confNumber={props.confNumber}
        elementClassName={elementClassName + "-line"}
        article={module.article}
        display={module.display}
        MenuContent={module["article-list"]}
        MenuHandler={props.ModuleMenuHandler}
        index={index}
        ReseteHandler={props.ModuleResetHandler}
        key={module+index}
      >
        {module.desc} {module.sub_desc}
      </ConfDescLine>
      )}
    </SimpleBar>
  );
}

const PrintConfButton = props => {

  const onBeforeGetContent = () => {
    if (props.articlesToPrint) {
      return true;
    } else {
      alert('All slots should to be filled')
      return false;
    }
  }

  const componentRef = useRef();
  return (
    <div className="conf-main-right-bottom_l1-print-conf-list">
      <ReactToPrint
        trigger={() => <button className="conf-main-right-bottom_l1-print-conf-list-button">Print Configuration List</button>}
        content={() => componentRef.current}
        onBeforeGetContent={onBeforeGetContent}
      />
      <div style={{display: 'none'}}>
        <ComponentToPrint articlesToPrint={props.articlesToPrint} ref={componentRef} />
      </div>
    </div>
  );
};

export default ConfContainerRight;