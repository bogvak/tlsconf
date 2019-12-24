import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {ConfLayOutTable, ConfLayOutFloor, ConfLayOutWall} from './ConfLayOut';

const ConfContainerLeft = (props) => {
    return <div className="conf-main-left">
        <TopAndBottomMenu 
            className="conf-main-left-top-container"
            infArray={[]}
            level={0}
            dataObj={props.modulesContent}
            onClick={props.platformHandler}
        />
        <ConfContainerLeftInstruction
            Language={props.Language}
            localStrings={props.localStrings}
            instNumArr={[1, 2]}
            className={"conf-main-left-instruction"}
        />
        <ConfContainerLeftMiddle 
            QuantityOfConf={props.QuantityOfConf}
            Configuration={props.Configuration}
            ConfNumberHandler={props.ConfNumberHandler}
            AddConfHandler={props.AddConfHandler}
            CoverHidenHandler={props.CoverHidenHandler}
            setModule={props.setModule}
        />    
        <TopAndBottomMenu 
            className="conf-main-left-bottom-container"
            infArray={[]}
            level={0}
            dataObj={props.modulesForBottomMenu}
            draggable='true'
            isPowerSocketsModuleAllow={(props.Configuration.PlatformСhoiceDesc.location==="WALL")}
        />
        <ConfContainerLeftInstruction
            Language={props.Language}
            localStrings={props.localStrings}
            instNumArr={[13, 14]}
            className={"conf-main-left-instruction"}
        />
    </div>
}

const TopAndBottomMenu = props => {
    const className=props.className+"_l"+props.level;

    const ifPS = inf => {
        if (inf==="Power Sockets" && props.isPowerSocketsModuleAllow) {
            return true;
        } else if (inf!=="Power Sockets") {
            return true;
        } else {
            return false;
        }
    }

    const reducedDataObj=props.infArray.reduce((obj, el) => (el) ?obj[el]:obj, props.dataObj)
        return <Tabs className={className}>
            <TabList className={className+"-list"}>
                {Object.keys(reducedDataObj).map((inf) => (ifPS(inf)) ? <Tab 
                    className={className+"-list-tab"}
                    selectedClassName={className+"-list-tab--selected"}
                    key={inf}
                >
                    {inf}
                </Tab> : null)}
            </TabList>
                {Object.keys(reducedDataObj).map((inf) => (ifPS(inf)) ? <TabPanel 
                    className={className+"-panel"} 
                    selectedClassName={className+"-panel--selected"} 
                    key={inf}
                >
                    {(typeof Array(2).fill(null).reduce((obj, _) => obj[Object.keys(obj)[0]],reducedDataObj[inf]) === "object") ? 
                        <TopAndBottomMenu 
                            infArray = {[...props.infArray, inf]}
                            level = {props.level+1}
                            dataObj={props.dataObj}
                            className={props.className}
                            onClick={props.onClick}
                            draggable={props.draggable}
                        /> : <CardMenu 
                            infArray = {[...props.infArray, inf]}
                            level = {props.level+1}
                            dataObj={props.dataObj}
                            className={props.className}
                            onClick={props.onClick}
                            draggable={props.draggable}
                        />
                    }
                </TabPanel> : null)}
        </Tabs>
}

const CardMenu = props => {
    const className = props.className+"_l"+props.level;
    const reducedDataObj=props.infArray.reduce((obj, el) => (el) ?obj[el]:obj, props.dataObj)

    const dragStart = (e, module) => {
        e.dataTransfer.setData('module', JSON.stringify(module))
    }

    const dragOver = e => {
        e.preventDefault();
    }

    return <div className={className}>
        {Object.keys(reducedDataObj).map((inf) => {
            const module=reducedDataObj[inf];
            if (module["article-list"]) {
                module.article=module['article-list'][Object.keys(module['article-list'])[0]]
            };
            const img = "img/" + ((props.infArray[1]) ? props.infArray[1].replace(/\/| IPL/g, "").replace(/\s/g, "-").toLowerCase() : "") + "/" + module.article.replace(/\s/g, "") + ".png"

            return <img 
                className={className+"-card"}
                alt={img}
                src={img}
                key={img}
                onClick={() => (props.onClick) ? props.onClick({...reducedDataObj[inf], desc: inf}, ...props.infArray) : null}
                onDragStart={e =>(props.draggable) ? dragStart(e, {...reducedDataObj[inf], desc: inf, module_series: props.infArray[0], module_type: props.infArray[1]}) : null}
                onDragOver={dragOver}
            />
        })}
    </div>
}

const ConfContainerLeftInstruction = (props) => {
    return <div className={props.className}>
        <div className={props.className+"-container"}>
            {props.instNumArr.map(i => <p className={props.className+"-container-p"} key={i+props.className}>
                {(i>9) ? i-10 : i}. {props.localStrings[props.Language][i]}
            </p>)}
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
                        setModule={props.setModule}
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
                setModule={props.setModule}
            /> 
        : (props.Configuration.PlatformСhoiceDesc.location === "WALL") ? 
            <ConfLayOutWall
                Configuration={props.Configuration}
                setModule={props.setModule}
            />
        : 
            <ConfLayOutFloor
                setModule={props.setModule}
                Configuration={props.Configuration} 
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

export default ConfContainerLeft;