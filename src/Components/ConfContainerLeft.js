import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {ConfLayOutTable, ConfLayOutFloor, ConfLayOutWall} from './ConfLayOut';

const ConfContainerLeft = (props) => {
    return <div className="conf-main-left">
        <TopAndBottomMenu 
            className="conf-main-left-top-container"
            pathArray={[]}
            level={0}
            dataObj={props.framesForTopMenu}
            onClick={props.platformHandler}
            isReset={true}
            frameResetHandler={props.frameResetHandler}
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
            maxConfQuantity={props.maxConfQuantity}
        />    
        <TopAndBottomMenu 
            className="conf-main-left-bottom-container"
            pathArray={[]}
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

        return <Tabs className={className}>
            <TabList className={className+"-list"}>
                {Object.keys(props.dataObj).map(inf => (ifPS(inf)) ? <Tab 
                    className={className+"-list-tab"}
                    selectedClassName={className+"-list-tab--selected"}
                    key={inf}
                    onClick={(props.isReset) ? () => props.frameResetHandler() : null}
                >
                    {inf}
                </Tab> : null)}
            </TabList>
                {Object.keys(props.dataObj).map(inf => (ifPS(inf)) ? <TabPanel 
                    className={className+"-panel"} 
                    selectedClassName={className+"-panel--selected"} 
                    key={inf}
                >
                    {(props.level<1) ? 
                        <TopAndBottomMenu 
                            pathArray = {[...props.pathArray, inf]}
                            level = {props.level+1}
                            dataObj={props.dataObj[inf]}
                            className={props.className}
                            onClick={props.onClick}
                            draggable={props.draggable}
                            frameResetHandler={props.frameResetHandler}
                        /> : <CardMenu 
                            pathArray = {[...props.pathArray, inf]}
                            level = {props.level+1}
                            dataObj={props.dataObj[inf]}
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

    const dragStart = (e, module) => {
        e.dataTransfer.setData('module', JSON.stringify(module))
    }

    const dragOver = e => {
        e.preventDefault();
    }
    return (
        <div className={className}>
            {Object.keys(props.dataObj).map((inf) => {
                const module=props.dataObj[inf];
                if (module["article-list"] && !module.article) {
                    Object.keys(module["article-list"]).forEach(key => (!module["article-list"][key]) && delete module["article-list"][key])
                    module.sub_desc=Object.keys(module["article-list"])[0]
                    module.article=module["article-list"][module.sub_desc]
                };
                module.img = "img/" + props.pathArray.join("/").toLowerCase()+ "/" + module.article + ".png"
                return <img 
                    className={className+"-card"}
                    alt={module.article}
                    src={module.img}
                    key={module.img}
                    onClick={() => props.onClick && props.onClick({...props.dataObj[inf], desc: inf}, ...props.pathArray)}
                    onDragStart={e => props.draggable && dragStart(e, [{...props.dataObj[inf], desc: inf}, ...props.pathArray])}
                    onDragOver={dragOver}
                />
            })}
        </div>
    )
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
                style={{display: (props.QuantityOfConf < props.maxConfQuantity) ? "inline-block" : "none"}}
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