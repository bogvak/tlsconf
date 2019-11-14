import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {ConfLayOutTable, ConfLayOutFloor, ConfLayOutWall} from './ConfLayOut'

const ConfContainerLeft = (props) => {
    return (
        <div className="conf-main-left">
            <ConfContainerLeftTop
                TypeOfFrame={props.TypeOfFrame}
                LocalStrings={props.LocalStrings}
                ModulesContent={props.ModulesContent}
                Language={props.Language}
                desc={props.Configuration.PlatformСhoiceDesc.desc}
                //Handlers
                PlatformСhoiceDescHandler={props.PlatformСhoiceDescHandler}
            />
            <ConfContainerLeftInstructionTop 
                Language={props.Language}
                LocalStrings={props.LocalStrings}
            />
            <ConfContainerLeftMiddle 
                QuantityOfConf={props.QuantityOfConf}
                Configuration={props.Configuration}
                ConfNumberHandler={props.ConfNumberHandler}
                AddConfHandler={props.AddConfHandler}
                CurrentSlotHandler={props.CurrentSlotHandler}
            />    
            <ConfContainerLeftBottom
                TypeOfModule={props.TypeOfModule}
                LocalStrings={props.LocalStrings}
                Language={props.Language}
                ModulesForBottomMenu={props.ModulesForBottomMenu}
                ModuleChoiceHandler={props.ModuleChoiceHandler}
            />
            <ConfContainerLeftInstructionBottom
                Language={props.Language}
                LocalStrings={props.LocalStrings}
            />
        </div>
    );
}

const ConfContainerLeftTop = (props) => {
    return (
        <Tabs className="conf-main-left-top-container_l0">
            <TabList className="conf-main-left-top-container_l0-list">
                {Object.keys(props.TypeOfFrame).map((lacation) => {
                    return<Tab 
                        className="conf-main-left-top-container_l0-list-tab" 
                        selectedClassName="conf-main-left-top-container_l0-list-tab--selected" 
                        key={lacation}
                    >
                        {props.LocalStrings[props.Language][props.TypeOfFrame[lacation]['menuname']]}
                    </Tab>
                })}
            </TabList>
                {Object.keys(props.TypeOfFrame).map((lacation) => {
                    return (<TabPanel 
                        className="conf-main-left-top-container_l0-panel" 
                        selectedClassName="conf-main-left-top-container_l0-panel--selected" 
                        key={lacation}
                    >
                        <ModuleSeriesListTop
                            desc={props.desc} 
                            lacation={lacation} 
                            PlatformСhoiceDescHandler={props.PlatformСhoiceDescHandler}  
                            ModuleSeriesListTop={props.ModulesContent[lacation]}
                        />
                    </TabPanel>)
                })}   
        </Tabs>
    );
}

const ModuleSeriesListTop = (props) => {
    return (
        <Tabs className="conf-main-left-top-container_l1">
            <TabList className="conf-main-left-top-container_l1-list">
                {Object.keys(props.ModuleSeriesListTop).map((line) => {
                    return (<Tab
                        className="conf-main-left-top-container_l1-list-tab" 
                        selectedClassName="conf-main-left-top-container_l1-list-tab--selected" 
                        key={line}
                    >
                        {line}
                    </Tab>)
                })}
            </TabList>
                {Object.keys(props.ModuleSeriesListTop).map((line) => {
                    return (<TabPanel
                        className="conf-main-left-top-container_l1-panel" 
                        selectedClassName="conf-main-left-top-container_l1-panel--selected"
                        key={line}>
                        <CurrentSeriesTop 
                            lacation={props.lacation} 
                            desc={props.desc} 
                            PlatformСhoiceDescHandler={props.PlatformСhoiceDescHandler} 
                            line={line} 
                            CurrentSeriesTop={props.ModuleSeriesListTop[line]}
                        />
                    </TabPanel>)
                })}
        </Tabs>
    );
}

const CurrentSeriesTop = (props) => {
    return (
        <div data-simplebar className="conf-main-left-top-container_l2">
            <div className='horizontal-scrolling__wrapper'>
                {Object.keys(props.CurrentSeriesTop).map((item) => {
                    if (props.CurrentSeriesTop[item].article && props.line) {
                        return (<img
                            className="conf-main-left-top-container_l2-card"
                            alt={item} 
                            src={"img/" + props.line.replace(/\s/g, "").toLowerCase() + "/" + props.CurrentSeriesTop[item].article.replace(/\s/g, "") + ".png"} 
                            style={{
                                borderColor: (item===props.desc) ?  "rgb(243, 103, 220)" : null
                            }}
                            key={item} 
                            onClick={props.PlatformСhoiceDescHandler.bind(this, {...props.CurrentSeriesTop[item], location: props.lacation, line: props.line, desc: item})} 
                            />)
                    } else {
                        return null
                    }
                })}
            </div>
        </div>
    );
}

const ConfContainerLeftInstructionTop = (props) => {
    return (
        <div className="conf-main-left-top-instruction">
            <div className="conf-main-left-top-instruction-container">
                <p className="conf-main-left-top-instruction-container-p">1. {props.LocalStrings[props.Language][1]}</p>
                <p className="conf-main-left-top-instruction-container-p">2. {props.LocalStrings[props.Language][2]}</p>
            </div>
        </div>
    )
}

const ConfContainerLeftMiddle = (props) => {
    return (
        <Tabs className="conf-main-left-middle-container_l0">
            <TabList className="conf-main-left-middle-container_l0-list">
                {[...Array(props.QuantityOfConf).keys()].map((number) => {
                    return (<Tab
                        className="conf-main-left-middle-container_l0-list-tab"
                        selectedClassName="conf-main-left-middle-container_l0-list-tab--selected"
                        onClick={props.ConfNumberHandler.bind(this, number)} 
                        key={number}>
                            Configuration: {number+1}
                    </Tab>)
                })}
                <button
                    style={{display: (props.QuantityOfConf < 5) ? "inline-block" : "none"}}
                    className="addTabs" 
                    onClick={props.AddConfHandler.bind(this)}
                >
                    +
                </button>
            </TabList>
                {[...Array(props.QuantityOfConf).keys()].map((number) => {
                    return(<TabPanel
                        className="conf-main-left-middle-container_l0-panel"
                        selectedClassName="conf-main-left-middle-container_l0-panel--selected"
                        key={number}>
                            {(props.Configuration.PlatformСhoiceDesc.article) ?
                                <RepresentationOfConf 
                                    Configuration={props.Configuration} 
                                    CurrentSlotHandler={props.CurrentSlotHandler}
                                /> : null}
                    </TabPanel>)
                })}
        </Tabs>
    );
}

const RepresentationOfConf = (props) => {

    return (
        <div className="conf-main-left-middle-container_l1">
            <ConfDesc
                PlatformСhoiceDesc={props.Configuration.PlatformСhoiceDesc} 
            />
            {(props.Configuration.PlatformСhoiceDesc.location === "TABLE") ? 
                <ConfLayOutTable
                    Configuration={props.Configuration} 
                    CurrentSlotHandler={props.CurrentSlotHandler}
                /> 
            : (props.Configuration.PlatformСhoiceDesc.location === "WALL") ? 
                <ConfLayOutWall
                    Configuration={props.Configuration} 
                    CurrentSlotHandler={props.CurrentSlotHandler}
                />
            : 
                <ConfLayOutFloor
                    Configuration={props.Configuration} 
                    CurrentSlotHandler={props.CurrentSlotHandler}
                /> 
            }
        </div>
    );
}

const ConfDesc = (props) => {

    return (
        <div className="conf-main-left-middle-container_l1-desc">
            <p>{props.PlatformСhoiceDesc.line} - Support frame</p>
            <ul>
                <li>{props.PlatformСhoiceDesc.desc}</li>
                <li>{props.PlatformСhoiceDesc.type}</li>
            </ul>
        </div>
    );
}

const ConfContainerLeftBottom = (props) => {
    return (
        <Tabs className="conf-main-left-bottom-container_l0">
            <TabList className="conf-main-left-bottom-container_l0-list">
                {Object.keys(props.ModulesForBottomMenu).map((item) => {
                    return(<Tab 
                        className="conf-main-left-bottom-container_l0-list-tab" 
                        selectedClassName="conf-main-left-bottom-container_l0-list-tab--selected" 
                        key={item}
                    >
                        {item}
                    </Tab>)
                })}
            </TabList>
                {Object.keys(props.ModulesForBottomMenu).map((item) => {
                    return(<TabPanel
                        className="conf-main-left-bottom-container_l0-panel"
                        selectedClassName="conf-main-left-bottom-container_l0-panel--selected" 
                        key={item}
                    >
                        <ModuleSeriesListBottom  
                            TypeOfModule={props.TypeOfModule}
                            LocalStrings={props.LocalStrings}
                            Language={props.Language}
                            ModuleSeriesListBottom={props.ModulesForBottomMenu[item]} 
                            ModuleChoiceHandler={props.ModuleChoiceHandler} 
                        />
                    </TabPanel>)
                })}
        </Tabs>
    );          
}

const ModuleSeriesListBottom = (props) => {
    return (
        <Tabs className="conf-main-left-bottom-container_l1">
            <TabList className="conf-main-left-bottom-container_l1-list">
                {Object.keys(props.ModuleSeriesListBottom).map((typeOfModules) => {
                    if (props.TypeOfModule[typeOfModules]) {
                        return (<Tab
                            className="conf-main-left-bottom-container_l1-list-tab"
                            selectedClassName="conf-main-left-bottom-container_l1-list-tab--selected"
                            key={typeOfModules}
                        >
                            {props.LocalStrings[props.Language][props.TypeOfModule[typeOfModules]['menuname']]}
                        </Tab>)
                    }
                })}
            </TabList>
                {Object.keys(props.ModuleSeriesListBottom).map((typeOfModules) => {
                    return (<TabPanel
                        className="conf-main-left-bottom-container_l1-panel"
                        selectedClassName="conf-main-left-bottom-container_l1-panel--selected" 
                        key={typeOfModules} 
                    >
                        <CurrentModulesBottom
                            TypeOfModules={typeOfModules.replace(/\//g, "")}
                            CurrentModulesBottom={props.ModuleSeriesListBottom[typeOfModules]} 
                            ModuleChoiceHandler={props.ModuleChoiceHandler} 
                        />
                    </TabPanel>)
                })}
        </Tabs>
    );
}

const CurrentModulesBottom = (props) => {
    return (
        <div data-simplebar className="conf-main-left-bottom-container_l2">
            <div className='horizontal-scrolling__wrapper'>
                {Object.keys(props.CurrentModulesBottom).map((module) => {
                    return (<img 
                        className="conf-main-left-bottom-container_l2-card"
                        key={module}
                        src={props.CurrentModulesBottom[module]["article-list"][Object.keys(props.CurrentModulesBottom[module]["article-list"])[0]] ? "img/" + props.TypeOfModules + "/" + props.CurrentModulesBottom[module]["article-list"][Object.keys(props.CurrentModulesBottom[module]["article-list"])[0]].replace(/\s/g, "") + ".png" : null}
                        onClick={props.ModuleChoiceHandler.bind(this, {...props.CurrentModulesBottom[module], TypeOfModules: props.TypeOfModules, desc: module})}
                        alt={props.CurrentModulesBottom[module]["article-list"][Object.keys(props.CurrentModulesBottom[module]["article-list"])[0]]}
                    />)
                })}
            </div>
        </div>
    );
}

const ConfContainerLeftInstructionBottom = (props) => {
    return (
        <div className="conf-main-left-bottom-instruction">
            <div className="conf-main-left-bottom-instruction-container">
                <p className="conf-main-left-bottom-instruction-container-p">3. {props.LocalStrings[props.Language][12]}</p>
                <p className="conf-main-left-bottom-instruction-container-p">4. {props.LocalStrings[props.Language][13]}</p>
            </div>
        </div>
    )
}

export default ConfContainerLeft;