import React, {Component} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

class ConfContainerLeft extends Component {
    render() {
        return (
            <div className="conf-main-left">
                <ConfContainerLeftTop
                    TypeOfModules={this.props.TypeOfModules}
                    LocalStrings={this.props.LocalStrings}
                    ModulesContent={this.props.ModulesContent}
                    Language={this.props.Language}
                    desc={this.props.Configuration.PlatformСhoiceDesc.desc}
                    //Handlers
                    PlatformСhoiceDescHandler={this.props.PlatformСhoiceDescHandler}
                />
                <ConfContainerLeftMiddle 
                    QuantityOfConf={this.props.QuantityOfConf}
                    Configuration={this.props.Configuration}
                    ConfNumberHandler={this.props.ConfNumberHandler}
                    AddConfHandler={this.props.AddConfHandler}
                    CurrentSlotHandler={this.props.CurrentSlotHandler}
                />
                <ConfContainerLeftBottom 
                    ModulesForButtomMenu={this.props.ModulesForButtomMenu}
                    ModuleChoiceHandler={this.props.ModuleChoiceHandler}
                />
            </div>
        );
    }
}

class ConfContainerLeftTop extends Component {
    render() {
        return(
            <div className="conf-main-left-top">
                <ModuleListTop 
                    TypeOfModules={this.props.TypeOfModules}
                    LocalStrings={this.props.LocalStrings}
                    ModulesContent={this.props.ModulesContent}
                    Language={this.props.Language}
                    desc={this.props.desc}
                    //Handlers
                    PlatformСhoiceDescHandler={this.props.PlatformСhoiceDescHandler}
                />
            </div>
        );
    }
}

class ModuleListTop extends Component {

	render() {
        return (
            <Tabs>
                <TabList>
                    {Object.keys(this.props.TypeOfModules).map((lacation) => <Tab key={lacation}>{this.props.LocalStrings[this.props.Language][this.props.TypeOfModules[lacation]['menuname']]}</Tab>)}
                </TabList>
                    {Object.keys(this.props.TypeOfModules).map((lacation) => <TabPanel key={lacation}><ModuleSeriesListTop desc={this.props.desc} lacation={lacation} PlatformСhoiceDescHandler={this.props.PlatformСhoiceDescHandler}  ModuleSeriesListTop={this.props.ModulesContent[lacation]} /></TabPanel>)}
            </Tabs>
        );
	}
}

class ModuleSeriesListTop extends Component {
	render() {
        return (
            <Tabs>
                <TabList>
                    {Object.keys(this.props.ModuleSeriesListTop).map((line) => <Tab key={line}>{line}</Tab>)}
                </TabList>
                    {Object.keys(this.props.ModuleSeriesListTop).map((line) => <TabPanel key={line}><CurrentSeriesTop lacation={this.props.lacation} desc={this.props.desc} PlatformСhoiceDescHandler={this.props.PlatformСhoiceDescHandler} line={line} CurrentSeriesTop={this.props.ModuleSeriesListTop[line]} /></TabPanel>)}
            </Tabs>
        );
	}
}

class CurrentSeriesTop extends Component {
    render() {
        return (
            <div className="horizontal-menu-top">
                {Object.keys(this.props.CurrentSeriesTop).map((item) => (this.props.CurrentSeriesTop[item]["img"]) ? <img alt="" src={"/ModulesImg/" + this.props.CurrentSeriesTop[item]["img"]} height="90px" width="auto" style={{padding: "2px", boxSizing: "border-box",border: (item===this.props.desc) ? "1px solid rgb(243, 103, 220)" : null}} key={item} onClick={this.props.PlatformСhoiceDescHandler.bind(this, {...this.props.CurrentSeriesTop[item], location: this.props.lacation, line: this.props.line, desc: item})} /> : <button style={{border: (item===this.props.desc) ? "1px solid rgb(243, 103, 220)" : null}} key={item} onClick={this.props.PlatformСhoiceDescHandler.bind(this, {...this.props.CurrentSeriesTop[item], location: this.props.lacation, line: this.props.line, desc: item})} className='card-top'>{item}</button>)}
            </div>
        );
    }
}

class ConfContainerLeftMiddle extends Component {

    render() {
        return (
            <div className="conf-main-left-middle">
                <ConfListMiddle 
                    QuantityOfConf={this.props.QuantityOfConf}
                    Configuration={this.props.Configuration}
                    ConfNumberHandler={this.props.ConfNumberHandler}
                    AddConfHandler={this.props.AddConfHandler}
                    CurrentSlotHandler={this.props.CurrentSlotHandler}
                />
            </div>
        );
    }
}

class ConfListMiddle extends Component {

    render () {
        return (
            <Tabs className="wrapperMiddle">
                <TabList className="ConfListMiddle">
                    {[...Array(this.props.QuantityOfConf).keys()].map((number) => <Tab onClick={this.props.ConfNumberHandler.bind(this, number)} key={number}>Configuration: {number+1}</Tab>)}
                    <button className="addTabs" onClick={this.props.AddConfHandler.bind(this)}>+</button>
                </TabList>
                    {[...Array(this.props.QuantityOfConf).keys()].map((number) => <TabPanel key={number}><RepresentationOfConf Configuration={this.props.Configuration} CurrentSlotHandler={this.props.CurrentSlotHandler} /></TabPanel> )}
            </Tabs>
        );
    }
}

class RepresentationOfConf extends Component {

    render () {
        return (
            <div className="representation-of-conf">
                <RepresentationOfConfLeft PlatformСhoiceDesc={this.props.Configuration.PlatformСhoiceDesc} />
                <RepresentationOfConfRight 
                    Configuration={this.props.Configuration} 
                    CurrentSlotHandler={this.props.CurrentSlotHandler}
                />
            </div>
        );
    }
}

class RepresentationOfConfLeft extends Component {

    render () {
        return (
            <div className="representation-of-conf-left">
                <p>{this.props.PlatformСhoiceDesc.line} - Support frame</p>
                <ul>
                    <li>{this.props.PlatformСhoiceDesc.desc}</li>
                    <li>{this.props.PlatformСhoiceDesc.type}</li>
                </ul>
            </div>
        );
    }
}

class RepresentationOfConfRight extends Component {
    conf = (powerSokets, signalSlots, conferenceControl) => {
        powerSokets.splice(1, 0, signalSlots, conferenceControl);
        return (powerSokets);
    }
    style = {
        "selected-signal-slot" : "2px 2px 2px red, 2px -2px 3px red, -2px 2px 2px red, -2px -2px 2px red"
    }
    render () {
        return (
            <div className="representation-of-conf-right">
                {this.conf(
                    [...Array(this.props.Configuration.PlatformСhoiceDesc["power-sokets"]).keys()].map((indexOfPowerSokets) => <div key={indexOfPowerSokets} className="power-sokets"><img src={"/ModulesImg/8639204.png"} width="90" hight="90" alt="power-soket" /></div>),
                    [...Array(this.props.Configuration.PlatformСhoiceDesc["signal-slots"]).keys()].map((indexOfSignalSlot) => <div style={{boxShadow: (indexOfSignalSlot===this.props.Configuration.IndexOfSelectedSlot) ? this.style["selected-signal-slot"] : null}} onClick={this.props.CurrentSlotHandler.bind(this, indexOfSignalSlot)} key={indexOfSignalSlot} className="signal-slots">{this.props.Configuration.Modules[indexOfSignalSlot]["img"] ? <img src={"/ModulesImg/" + this.props.Configuration.Modules[indexOfSignalSlot]["img"]} alt="" width="30" hight="auto" /> : null}</div>),
                    [...Array(this.props.Configuration.PlatformСhoiceDesc["conference-control"]).keys()].map((indexOfConferenceControl) => <div key={indexOfConferenceControl} className="conference-control">conference-control</div>)
                )}
            </div>
        );
    }
}

class ConfContainerLeftBottom extends Component {
    render() {
        return (
            <div className="conf-main-left-bottom">
                <ModuleListButtom 
                    ModulesForButtomMenu={this.props.ModulesForButtomMenu}
                    ModuleChoiceHandler={this.props.ModuleChoiceHandler}
                />    
            </div>
        );
    }
}

class ModuleListButtom extends Component {
    render() {
        return (
            <Tabs>
                <TabList>
                    {Object.keys(this.props.ModulesForButtomMenu).map((item) => <Tab key={item}>{item}</Tab>)}
                </TabList>
                    {Object.keys(this.props.ModulesForButtomMenu).map((item) => <TabPanel key={item}><ModuleSeriesListBottom  ModuleSeriesListBottom={this.props.ModulesForButtomMenu[item]} ModuleChoiceHandler={this.props.ModuleChoiceHandler} /></TabPanel>)}
            </Tabs>
        );    
    }        
}

class ModuleSeriesListBottom extends Component {
    render () {
        return (
            <Tabs>
                <TabList>
                    {Object.keys(this.props.ModuleSeriesListBottom).map((item) => <Tab key={item}>{item}</Tab>)}
                </TabList>
                    {Object.keys(this.props.ModuleSeriesListBottom).map((item) => <TabPanel key={item} ><CurrentModulesBottom CurrentModulesBottom={this.props.ModuleSeriesListBottom[item]} ModuleChoiceHandler={this.props.ModuleChoiceHandler} /></TabPanel>)}
            </Tabs>
        );
    }
}

class CurrentModulesBottom extends Component {
    render () {
        return (
            <div className="horizontal-menu-buttom">
                {Object.keys(this.props.CurrentModulesBottom).map((module) => <button key={module} className="card-buttom" onClick={this.props.ModuleChoiceHandler.bind(this, {...this.props.CurrentModulesBottom[module], desc1: module})}><img alt="" src={"/ModulesImg/" + this.props.CurrentModulesBottom[module]["img"]} width="30" height="auto" /></button>)}
            </div>
        );
    }
}

export default ConfContainerLeft;