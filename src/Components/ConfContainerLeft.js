import React, { useState } from 'react';
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

        return <Tabs className={className}>
            <TabList className={className+"-list"}>
                {Object.keys(props.dataObj).map(inf => <Tab 
                    className={className+"-list-tab"}
                    selectedClassName={className+"-list-tab--selected"}
                    key={inf}
                    onClick={(props.isReset) ? () => props.frameResetHandler() : null}
                >
                    {inf}
                </Tab>)}
            </TabList>
                {Object.keys(props.dataObj).map(inf => <TabPanel 
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
                </TabPanel>)}
        </Tabs>
}

const CardMenu = props => {
    const [selected, set_selected] = useState()

    const className = props.className+"_l"+props.level;

    const dragStart = (e, module) => {
        e.dataTransfer.setData('module', JSON.stringify(module))
    }

    const dragOver = e => {
        e.preventDefault();
    }
    return (
        <div className={className}>
            {Object.entries(props.dataObj).map(([desc, module], i, module_list) => {
                if (module["article-list"] && !module.article) {
                    module["article-list"] = Object.entries(module["article-list"]).reduce((outPut, [key, value]) => value ? {...outPut, [key]:value} : outPut, {})
                    module.sub_desc = Object.keys(module["article-list"])[0]
                    module.article=module["article-list"][module.sub_desc]
                };
                module.img = "img/" + props.pathArray.join("/").toLowerCase()+ "/" + module.article + ".png"

                return (
                    <div className={className+"-card"} id={className+"-card_"+i}>
                        <img
                            className={[className+"-card-img", (selected===i ? className+"-card-img--selected" : "")].join(" ")}
                            alt={module.article}
                            src={module.img}
                            key={module.img}
                            onClick={() => {
                                props.onClick && props.onClick({...module, desc: desc}, ...props.pathArray);
                                set_selected(i);
                            }}
                            onDragStart={e => props.draggable && dragStart(e, [{...module, desc: desc}, ...props.pathArray])}
                            onDragOver={dragOver}
                        />
                        <CardDesc
                            className={className+"-card-desc"}
                            isLeftPart={(i<module_list.length/2)}
                        >
                            {desc}
                        </CardDesc>
                    </div>
                )
            })}
        </div>
    )
}

const CardDesc = props => {
    const container_offset = {[(props.isLeftPart ? "left" : "right")] : "50%"}
    const text_offset = {[props.isLeftPart ? "left" : "right"] : "0.4rem"}
    const arrow_offset = {[props.isLeftPart ? "left" : "right"] : "0"}
    const arrow_derection = {[props.isLeftPart ? "border-right" : "border-left"] : "0.4rem solid black"}
    return (
        <div style={container_offset} className={props.className} >
            <span className={props.className+"-arrow"} style={{...arrow_offset, ...arrow_derection}} />
            <span className={props.className+"-text"} style={text_offset}>{props.children}</span>
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
            {(props.PlatformСhoiceDesc.location==="WALL") ? <li>Support frame (x{props.PlatformСhoiceDesc["support-frame_amount"]})</li>: null}
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