import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {ConfLayOutTable, ConfLayOutFloor, ConfLayOutWall} from './ConfLayOut';
//object path navigator, in order to check the path for element in objects.
const objPN = (path, obj) => {
    const errM = "Element wasn't found!"
    return path.split(/\./).reduce((o,i)=>(o[i])?o[i]:errM, obj)
}

const ConfContainerLeft = (props) => {
    return <div className="conf-main-left">
        <ConfContainerLeftTop
            TypeOfFrame={props.TypeOfFrame}
            LocalStrings={props.LocalStrings}
            ModulesContent={props.ModulesContent}
            Language={props.Language}
            desc={props.Configuration.PlatformСhoiceDesc.desc}
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
            CoverHidenHandler={props.CoverHidenHandler}
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
}

const ConfContainerLeftTop = (props) => {
    const elementClassName = "conf-main-left-top-container_l0"
    return <Tabs className={elementClassName}>
        <TabList className={elementClassName+"-list"}>
            {Object.keys(props.TypeOfFrame).map((lacation) => <Tab 
                className={elementClassName+"-list-tab"}
                selectedClassName={elementClassName+"-list-tab--selected"}
                key={lacation}
            >
                {props.LocalStrings[props.Language][props.TypeOfFrame[lacation]['menuname']]}
            </Tab>)}
        </TabList>
            {Object.keys(props.TypeOfFrame).map((lacation) => <TabPanel 
                className={elementClassName+"-panel"} 
                selectedClassName={elementClassName+"-panel--selected"} 
                key={lacation}
            >
                <ModuleSeriesListTop
                    desc={props.desc} 
                    lacation={lacation} 
                    PlatformСhoiceDescHandler={props.PlatformСhoiceDescHandler}  
                    ModuleSeriesListTop={props.ModulesContent[lacation]}
                />
            </TabPanel>)}   
    </Tabs>
}

const ModuleSeriesListTop = (props) => {
    const elementClassName="conf-main-left-top-container_l1"
    return <Tabs className={elementClassName}>
        <TabList className={elementClassName+"-list"}>
            {Object.keys(props.ModuleSeriesListTop).map((line) => <Tab
                className={elementClassName+"-list-tab"} 
                selectedClassName={elementClassName+"-list-tab--selected"} 
                key={line}
            >
                {line}
            </Tab>)}
        </TabList>
            {Object.keys(props.ModuleSeriesListTop).map((line) => {
                return (<TabPanel
                    className={elementClassName+"-panel"} 
                    selectedClassName={elementClassName+"-panel--selected"}
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
}

const CurrentSeriesTop = (props) => {
    const elementClassName = "conf-main-left-top-container_l2"
    return <div className={elementClassName}>
        {Object.keys(props.CurrentSeriesTop).map((item) => {
            if (props.CurrentSeriesTop[item].article && props.line) {
                return <img
                    className={[elementClassName+"-card", (item===props.desc) ? elementClassName+"-card--selected" : null].join(" ")}
                    alt={item} 
                    src={"img/" + props.line.replace(/\s/g, "").toLowerCase() + "/" + props.CurrentSeriesTop[item].article.replace(/\s/g, "") + ".png"}
                    key={item} 
                    onClick={props.PlatformСhoiceDescHandler.bind(this, {...props.CurrentSeriesTop[item], location: props.lacation, line: props.line, desc: item})} 
                />
            } else {
                return null
            }
        })}
    </div>
}

const ConfContainerLeftInstructionTop = (props) => {
    const elementClassName="conf-main-left-top-instruction"
    return <div className={elementClassName}>
        <div className={elementClassName+"-container"}>
            <p className={elementClassName+"-container-p"}>1. {props.LocalStrings[props.Language][1]}</p>
            <p className={elementClassName+"-container-p"}>2. {props.LocalStrings[props.Language][2]}</p>
        </div>
    </div>
}

const ConfContainerLeftMiddle = (props) => {
    const elementClassName="conf-main-left-middle-container_l0"
    return <Tabs className={elementClassName}>
        <TabList className={elementClassName+"-list"}>
            {[...Array(props.QuantityOfConf).keys()].map((number) => <Tab
                className={elementClassName+"-list-tab"}
                selectedClassName={elementClassName+"-list-tab--selected"}
                onClick={props.ConfNumberHandler.bind(this, number)} 
                key={number}>
                    Configuration: {number+1}
            </Tab>)}
            <button
                style={{display: (props.QuantityOfConf < 5) ? "inline-block" : "none"}}
                className="addTabs" 
                onClick={props.AddConfHandler.bind(this)}
            >
                +
            </button>
        </TabList>
        {[...Array(props.QuantityOfConf).keys()].map((number) => <TabPanel
            className={elementClassName+"-panel"}
            selectedClassName={elementClassName+"-panel--selected"}
            key={number}>
                {(props.Configuration.PlatformСhoiceDesc.article) ?
                    <RepresentationOfConf 
                        CoverHidenHandler={props.CoverHidenHandler}
                        Configuration={props.Configuration} 
                        CurrentSlotHandler={props.CurrentSlotHandler}
                    />
                : null}
        </TabPanel>)}
    </Tabs>
}

const RepresentationOfConf = (props) => {
    const elementClassName="conf-main-left-middle-container_l1"
    return <div className={elementClassName}>
        <ConfDesc
            PlatformСhoiceDesc={props.Configuration.PlatformСhoiceDesc}
            CoverHidenHandler={props.CoverHidenHandler}
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
}

const ConfDesc = (props) => {
    const elementClassName="conf-main-left-middle-container_l1-desc"
    return <div className={elementClassName}>
        <p>{props.PlatformСhoiceDesc.line} - Support frame</p>
        <ul>
            <li>{props.PlatformСhoiceDesc.desc}</li>
            {(props.PlatformСhoiceDesc.location==="WALL") ? <li>Support frame (x{props.PlatformСhoiceDesc["signal-slots"]/3})</li>: null}
            {(props.PlatformСhoiceDesc.location==="WALL") ? <li>
                Hide cover frame{" "}
                <button 
                    onClick={props.CoverHidenHandler.bind(this)} 
                    className={[elementClassName+"-check-box", (props.PlatformСhoiceDesc.isCoverHiden) ? elementClassName+"-check-box--hiden" : null].filter(Boolean).join(" ")}
                >✓</button>
            </li>: null}
            <li>{props.PlatformСhoiceDesc.type}</li>
        </ul>
    </div>
}

const ConfContainerLeftBottom = (props) => {
    const elementClassName="conf-main-left-bottom-container_l0"
    return <Tabs className={elementClassName}>
        <TabList className={elementClassName+"-list"}>
            {Object.keys(props.ModulesForBottomMenu).map((item) => <Tab 
                className={elementClassName+"-list-tab"} 
                selectedClassName={elementClassName+"-list-tab--selected"}
                key={item}
            >
                {item}
            </Tab>)}
        </TabList>
        {Object.keys(props.ModulesForBottomMenu).map((item) => <TabPanel
            className={elementClassName+"-panel"}
            selectedClassName={elementClassName+"-panel--selected"} 
            key={item}
        >
            <ModuleSeriesListBottom  
                TypeOfModule={props.TypeOfModule}
                LocalStrings={props.LocalStrings}
                Language={props.Language}
                ModuleSeriesListBottom={props.ModulesForBottomMenu[item]} 
                ModuleChoiceHandler={props.ModuleChoiceHandler} 
            />
        </TabPanel>)}
    </Tabs>
}

const ModuleSeriesListBottom = (props) => {
    const elementClassName="conf-main-left-bottom-container_l1"
    return <Tabs className={elementClassName}>
        <TabList className={elementClassName+"-list"}>
            {Object.keys(props.ModuleSeriesListBottom).map((typeOfModules) => <Tab
                className={elementClassName+"-list-tab"}
                selectedClassName={elementClassName+"-list-tab--selected"}
                key={typeOfModules}
            >
                {props.LocalStrings[props.Language][objPN(`TypeOfModule.${typeOfModules}.menuname`, props)]}
            </Tab>)}
        </TabList>
        {Object.keys(props.ModuleSeriesListBottom).map((typeOfModules) => <TabPanel
            className={elementClassName+"-panel"}
            selectedClassName={elementClassName+"-panel--selected"} 
            key={typeOfModules} 
        >
            <CurrentModulesBottom
                TypeOfModules={typeOfModules.replace(/\//g, "")}
                CurrentModulesBottom={props.ModuleSeriesListBottom[typeOfModules]} 
                ModuleChoiceHandler={props.ModuleChoiceHandler} 
            />
        </TabPanel>)}
    </Tabs>
}

const CurrentModulesBottom = (props) => {
    const elementClassName = "conf-main-left-bottom-container_l2"
    return <div className={elementClassName}>
        {Object.keys(props.CurrentModulesBottom).map((module) => <img 
            className={elementClassName+"-card"}
            key={module}
            src={"img/" + props.TypeOfModules + "/" + objPN(`CurrentModulesBottom.${module}.article-list`, props)[Object.keys(objPN(`CurrentModulesBottom.${module}.article-list`, props))[0]].replace(/\s/g, "") + ".png"}
            onClick={props.ModuleChoiceHandler.bind(this, {...props.CurrentModulesBottom[module], TypeOfModules: props.TypeOfModules, desc: module})}
            alt={objPN(`CurrentModulesBottom.${module}.article-list`, props)[Object.keys(objPN(`CurrentModulesBottom.${module}.article-list`, props))[0]]}
        />)}
    </div>
}

const ConfContainerLeftInstructionBottom = (props) => {
    const elementClassName="conf-main-left-bottom-instruction"
    return <div className={elementClassName}>
        <div className={elementClassName+"-container"}>
            <p className={elementClassName+"-container-p"}>3. {props.LocalStrings[props.Language][12]}</p>
            <p className={elementClassName+"-container-p"}>4. {props.LocalStrings[props.Language][13]}</p>
        </div>
    </div>
}

export default ConfContainerLeft;