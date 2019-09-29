import React, {Component} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class ConfContainerLeft extends Component {
    render() {
        return (
            <div className="conf-main-left">
                <ConfContainerLeftTop
                    TypeOfFrame={this.props.TypeOfFrame}
                    LocalStrings={this.props.LocalStrings}
                    ModulesContent={this.props.ModulesContent}
                    Language={this.props.Language}
                    desc={this.props.Configuration.PlatformСhoiceDesc.desc}
                    //Handlers
                    PlatformСhoiceDescHandler={this.props.PlatformСhoiceDescHandler}
                />
                <ConfContainerLeftInstructionTop 
                    Language={this.props.Language}
                    LocalStrings={this.props.LocalStrings}
                />
                <ConfContainerLeftMiddle 
                    QuantityOfConf={this.props.QuantityOfConf}
                    Configuration={this.props.Configuration}
                    ConfNumberHandler={this.props.ConfNumberHandler}
                    AddConfHandler={this.props.AddConfHandler}
                    CurrentSlotHandler={this.props.CurrentSlotHandler}
                />    
                <ConfContainerLeftBottom
                    TypeOfModule={this.props.TypeOfModule}
                    LocalStrings={this.props.LocalStrings}
                    Language={this.props.Language}
                    ModulesForBottomMenu={this.props.ModulesForBottomMenu}
                    ModuleChoiceHandler={this.props.ModuleChoiceHandler}
                />
                <ConfContainerLeftInstructionBottom
                    Language={this.props.Language}
                    LocalStrings={this.props.LocalStrings}
                />
            </div>
        );
    }
}

class ConfContainerLeftTop extends Component {

	render() {
        return (
            <Tabs className="conf-main-left-top-container_l0">
                <TabList className="conf-main-left-top-container_l0-list">
                    {Object.keys(this.props.TypeOfFrame).map((lacation) => {
                        return<Tab 
                            className="conf-main-left-top-container_l0-list-tab" 
                            selectedClassName="conf-main-left-top-container_l0-list-tab--selected" 
                            key={lacation}
                        >
                            {this.props.LocalStrings[this.props.Language][this.props.TypeOfFrame[lacation]['menuname']]}
                        </Tab>
                    })}
                </TabList>
                    {Object.keys(this.props.TypeOfFrame).map((lacation) => {
                        return (<TabPanel 
                            className="conf-main-left-top-container_l0-panel" 
                            selectedClassName="conf-main-left-top-container_l0-panel--selected" 
                            key={lacation}
                        >
                            <ModuleSeriesListTop
                                desc={this.props.desc} 
                                lacation={lacation} 
                                PlatformСhoiceDescHandler={this.props.PlatformСhoiceDescHandler}  
                                ModuleSeriesListTop={this.props.ModulesContent[lacation]}
                            />
                        </TabPanel>)
                    })}   
            </Tabs>
        );
	}
}

class ModuleSeriesListTop extends Component {
	render() {
        return (
            <Tabs className="conf-main-left-top-container_l1">
                <TabList className="conf-main-left-top-container_l1-list">
                    {Object.keys(this.props.ModuleSeriesListTop).map((line) => {
                        return (<Tab
                            className="conf-main-left-top-container_l1-list-tab" 
                            selectedClassName="conf-main-left-top-container_l1-list-tab--selected" 
                            key={line}
                        >
                            {line}
                        </Tab>)
                    })}
                </TabList>
                    {Object.keys(this.props.ModuleSeriesListTop).map((line) => {
                        return (<TabPanel
                            className="conf-main-left-top-container_l1-panel" 
                            selectedClassName="conf-main-left-top-container_l1-panel--selected"
                            key={line}>
                            <CurrentSeriesTop 
                                lacation={this.props.lacation} 
                                desc={this.props.desc} 
                                PlatformСhoiceDescHandler={this.props.PlatformСhoiceDescHandler} 
                                line={line} 
                                CurrentSeriesTop={this.props.ModuleSeriesListTop[line]}
                            />
                        </TabPanel>)
                    })}
            </Tabs>
        );
	}
}

class CurrentSeriesTop extends Component {
    render() {
        return (
            <div data-simplebar className="conf-main-left-top-container_l2">
                <div class='horizontal-scrolling__wrapper'>
                    {Object.keys(this.props.CurrentSeriesTop).map((item) => {
                        if (this.props.CurrentSeriesTop[item].article && this.props.line) {
                            return (<img
                                className="conf-main-left-top-container_l2-card"
                                alt={item} 
                                src={"img/" + this.props.line.replace(/\s/g, "").toLowerCase() + "/" + this.props.CurrentSeriesTop[item].article.replace(/\s/g, "") + ".png"} 
                                style={{
                                    borderColor: (item===this.props.desc) ?  "rgb(243, 103, 220)" : null
                                }}
                                key={item} 
                                onClick={this.props.PlatformСhoiceDescHandler.bind(this, {...this.props.CurrentSeriesTop[item], location: this.props.lacation, line: this.props.line, desc: item})} 
                                />)
                        };
                    })}
                </div>
            </div>
        );
    }
}

class ConfContainerLeftInstructionTop extends Component {

    render () {
        return (
            <div className="conf-main-left-top-instruction">
                <div className="conf-main-left-top-instruction-container">
                    <p className="conf-main-left-top-instruction-container-p">1. {this.props.LocalStrings[this.props.Language][1]}</p>
                    <p className="conf-main-left-top-instruction-container-p">2. {this.props.LocalStrings[this.props.Language][2]}</p>
                </div>
            </div>
        )
    }
}

class ConfContainerLeftMiddle extends Component {

    render () {
        return (
            <Tabs className="conf-main-left-middle-container_l0">
                <TabList className="conf-main-left-middle-container_l0-list">
                    {[...Array(this.props.QuantityOfConf).keys()].map((number) => {
                        return (<Tab
                            className="conf-main-left-middle-container_l0-list-tab"
                            selectedClassName="conf-main-left-middle-container_l0-list-tab--selected"
                            onClick={this.props.ConfNumberHandler.bind(this, number)} 
                            key={number}>
                                Configuration: {number+1}
                        </Tab>)
                    })}
                    <button
                        style={{display: (this.props.QuantityOfConf < 5) ? "inline-block" : "none"}}
                        className="addTabs" 
                        onClick={this.props.AddConfHandler.bind(this)}
                    >
                        +
                    </button>
                </TabList>
                    {[...Array(this.props.QuantityOfConf).keys()].map((number) => {
                        return(<TabPanel
                            className="conf-main-left-middle-container_l0-panel"
                            selectedClassName="conf-main-left-middle-container_l0-panel--selected"
                            key={number}>
                                {(this.props.Configuration.PlatformСhoiceDesc["article"]) ?
                                    <RepresentationOfConf 
                                        Configuration={this.props.Configuration} 
                                        CurrentSlotHandler={this.props.CurrentSlotHandler}
                                    /> : null}
                        </TabPanel>)
                    })}
            </Tabs>
        );
    }
}

class RepresentationOfConf extends Component {

    render () {
        return (
            <div className="conf-main-left-middle-container_l1">
                <ConfDesc
                    PlatformСhoiceDesc={this.props.Configuration.PlatformСhoiceDesc} 
                />
                <ConfLayout
                    Configuration={this.props.Configuration} 
                    CurrentSlotHandler={this.props.CurrentSlotHandler}
                />
            </div>
        );
    }
}

class ConfDesc extends Component {

    render () {
        return (
            <div className="conf-main-left-middle-container_l1-desc">
                <p>{this.props.PlatformСhoiceDesc.line} - Support frame</p>
                <ul>
                    <li>{this.props.PlatformСhoiceDesc.desc}</li>
                    <li>{this.props.PlatformСhoiceDesc.type}</li>
                </ul>
            </div>
        );
    }
}

class ConfLayout extends Component {
    conf = (powerSokets, signalSlots, conferenceControl, conferenceControlDoubleFrame) => {
        let pos;
        (powerSokets.length > 2) ? pos=2 : (conferenceControl.length>0 || conferenceControlDoubleFrame.length>0) ? pos=0 : pos=1;
        powerSokets.splice(pos, 0, conferenceControlDoubleFrame, conferenceControl, signalSlots);
        return (powerSokets);
    }
    render () {
        return (
            <div className="conf-main-left-middle-container_l1-layout">
                <div className="conf-main-left-middle-container_l1-layout-top" />
                <div className="conf-main-left-middle-container_l1-layout-middle">
                    {this.conf(
                        [...Array(this.props.Configuration.PlatformСhoiceDesc["power-sokets"]).keys()].map((indexOfPowerSokets) => {
                            return (<img
                                className="power-soket"
                                key={indexOfPowerSokets}
                                src={"img/8639204.png"} 
                                alt="power-soket" 
                            />)
                        }),
                        <div
                            className="box-for-signal-slots"
                            key="box-for-signal-slots"
                            style={this.props.Configuration.PlatformСhoiceDesc["signal-slots"] ? {display: "flex"} : {display: "none"}}
                        >
                            {[...Array(this.props.Configuration.PlatformСhoiceDesc["signal-slots"]).keys()].map((indexOfSignalSlot) => {
                                return (<img 
                                        className={
                                            (indexOfSignalSlot===this.props.Configuration.IndexOfSelectedSlot) ? 
                                            "selected-signal-slot" : "signal-slot"
                                        }
                                        style={{
                                            display: (this.props.Configuration.Modules[indexOfSignalSlot].display) ? null : "none"
                                        }}
                                        key={indexOfSignalSlot}
                                        onClick={this.props.CurrentSlotHandler.bind(this, indexOfSignalSlot)}
                                        src={this.props.Configuration.Modules[indexOfSignalSlot].article ? this.props.Configuration.Modules[indexOfSignalSlot].img : "img/empty-signal-slot.PNG"} 
                                        alt=""
                                    />)
                            })}
                        </div>,
                        [...Array(this.props.Configuration.PlatformСhoiceDesc["conference-control"]).keys()].map((indexOfConferenceControl) => {
                            return (<img
                                className="conference-control"
                                key={indexOfConferenceControl}
                                src={"img/conference-control.png"} 
                                alt="conference-control"
                            />)
                        }),
                        [...Array(this.props.Configuration.PlatformСhoiceDesc["conference-control-double-frame"]).keys()].map((indexOfConferenceControlDoubleFrame) => {
                            return (<div 
                                key={indexOfConferenceControlDoubleFrame} 
                                className="conference-control-double-frame">
                            </div>)
                        }),
                    )}
                </div>
                <div className="conf-main-left-middle-container_l1-layout-bottom" />
            </div>
        );
    }
}

class ConfContainerLeftBottom extends Component {
    render() {
        return (
            <Tabs className="conf-main-left-bottom-container_l0">
                <TabList className="conf-main-left-bottom-container_l0-list">
                    {Object.keys(this.props.ModulesForBottomMenu).map((item) => {
                        return(<Tab 
                            className="conf-main-left-bottom-container_l0-list-tab" 
                            selectedClassName="conf-main-left-bottom-container_l0-list-tab--selected" 
                            key={item}
                        >
                            {item}
                        </Tab>)
                    })}
                </TabList>
                    {Object.keys(this.props.ModulesForBottomMenu).map((item) => {
                        return(<TabPanel
                            className="conf-main-left-bottom-container_l0-panel"
                            selectedClassName="conf-main-left-bottom-container_l0-panel--selected" 
                            key={item}
                        >
                            <ModuleSeriesListBottom  
                                TypeOfModule={this.props.TypeOfModule}
                                LocalStrings={this.props.LocalStrings}
                                Language={this.props.Language}
                                ModuleSeriesListBottom={this.props.ModulesForBottomMenu[item]} 
                                ModuleChoiceHandler={this.props.ModuleChoiceHandler} 
                            />
                        </TabPanel>)
                    })}
            </Tabs>
        );    
    }        
}

class ModuleSeriesListBottom extends Component {
    render () {
        return (
            <Tabs className="conf-main-left-bottom-container_l1">
                <TabList className="conf-main-left-bottom-container_l1-list">
                    {Object.keys(this.props.ModuleSeriesListBottom).map((typeOfModules) => {
                        return (<Tab
                            className="conf-main-left-bottom-container_l1-list-tab"
                            selectedClassName="conf-main-left-bottom-container_l1-list-tab--selected"
                            key={typeOfModules}
                        >
                            {this.props.LocalStrings[this.props.Language][this.props.TypeOfModule[typeOfModules]['menuname']]}
                        </Tab>)
                    })}
                </TabList>
                    {Object.keys(this.props.ModuleSeriesListBottom).map((typeOfModules) => {
                        return (<TabPanel
                            className="conf-main-left-bottom-container_l1-panel"
                            selectedClassName="conf-main-left-bottom-container_l1-panel--selected" 
                            key={typeOfModules} 
                        >
                            <CurrentModulesBottom
                                TypeOfModules={typeOfModules.replace(/\//g, "")}
                                CurrentModulesBottom={this.props.ModuleSeriesListBottom[typeOfModules]} 
                                ModuleChoiceHandler={this.props.ModuleChoiceHandler} 
                            />
                        </TabPanel>)
                    })}
            </Tabs>
        );
    }
}

class CurrentModulesBottom extends Component {
    render () {
        return (
            <div data-simplebar className="conf-main-left-bottom-container_l2">
                <div class='horizontal-scrolling__wrapper'>
                    {Object.keys(this.props.CurrentModulesBottom).map((module) => {
                        return (<img 
                                className="conf-main-left-bottom-container_l2-card"
                                key={module}
                                src={this.props.CurrentModulesBottom[module].article ? "img/" + this.props.TypeOfModules + "/" + this.props.CurrentModulesBottom[module].article.replace(/\s/g, "") + ".png" : null}
                                onClick={this.props.ModuleChoiceHandler.bind(this, {...this.props.CurrentModulesBottom[module], TypeOfModules: this.props.TypeOfModules, desc: module})}
                                alt={this.props.CurrentModulesBottom[module].article}
                        />)
                    })}
                </div>
            </div>
        );
    }
}

class ConfContainerLeftInstructionBottom extends Component {

    render () {
        return (
            <div className="conf-main-left-bottom-instruction">
                <div className="conf-main-left-bottom-instruction-container">
                    <p className="conf-main-left-bottom-instruction-container-p">3. {this.props.LocalStrings[this.props.Language][12]}</p>
                    <p className="conf-main-left-bottom-instruction-container-p">4. {this.props.LocalStrings[this.props.Language][13]}</p>
                </div>
            </div>
        )
    }
}

export default ConfContainerLeft;