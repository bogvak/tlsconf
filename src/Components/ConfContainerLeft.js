import React, {Component} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

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
                <ConfContainerLeftMiddle 
                    QuantityOfConf={this.props.QuantityOfConf}
                    Configuration={this.props.Configuration}
                    ConfNumberHandler={this.props.ConfNumberHandler}
                    AddConfHandler={this.props.AddConfHandler}
                    CurrentSlotHandler={this.props.CurrentSlotHandler}
                />
                <ConfContainerLeftBottom 
                    ModulesForBottomMenu={this.props.ModulesForBottomMenu}
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
                    TypeOfFrame={this.props.TypeOfFrame}
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
                    {Object.keys(this.props.TypeOfFrame).map((lacation) => {
                        return<Tab key={lacation}>
                            {this.props.LocalStrings[this.props.Language][this.props.TypeOfFrame[lacation]['menuname']]}
                        </Tab>
                    })}
                </TabList>
                    {Object.keys(this.props.TypeOfFrame).map((lacation) => {
                        return (<TabPanel key={lacation}>
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
            <Tabs>
                <TabList>
                    {Object.keys(this.props.ModuleSeriesListTop).map((line) => {
                        return (<Tab key={line}>
                            {line}
                        </Tab>)
                    })}
                </TabList>
                    {Object.keys(this.props.ModuleSeriesListTop).map((line) => {
                        return (<TabPanel 
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
            <div className="horizontal-menu-top">
                {Object.keys(this.props.CurrentSeriesTop).map((item) => {
                    if (this.props.CurrentSeriesTop[item].article && this.props.line) {
                        return (<img
                            className="card-img-top"
                            alt="" 
                            src={"img/" + this.props.line + "/" + this.props.CurrentSeriesTop[item].article.replace(/\s/g, "") + ".png"} 
                            height="90px" 
                            width="auto" 
                            style={ 
                                (item===this.props.desc) ? {border: "1px solid rgb(243, 103, 220)"} : null
                            } 
                            key={item} 
                            onClick={this.props.PlatformСhoiceDescHandler.bind(this, {...this.props.CurrentSeriesTop[item], location: this.props.lacation, line: this.props.line, desc: item})} 
                            />)
                    } else {
                        return (<div 
                            className="card-div-top" 
                            style={ 
                                (item===this.props.desc) ? {border: "1px solid rgb(243, 103, 220)"} : null
                            } 
                            key={item} 
                            onClick={this.props.PlatformСhoiceDescHandler.bind(this, {...this.props.CurrentSeriesTop[item], location: this.props.lacation, line: this.props.line, desc: item})}>{item}
                        </div>)
                    };
                })}
            </div>
        );
    }
}

class ConfContainerLeftMiddle extends Component {

    render () {
        return (
            <Tabs className="conf-main-left-middle">
                <TabList className="conf-list-middle">
                    {[...Array(this.props.QuantityOfConf).keys()].map((number) => {
                        return (<Tab 
                            onClick={this.props.ConfNumberHandler.bind(this, number)} 
                            key={number}>
                                Configuration: {number+1}
                        </Tab>)
                    })}
                    <button 
                        className="addTabs" 
                        onClick={this.props.AddConfHandler.bind(this)}
                    >
                        +
                    </button>
                </TabList>
                    {(this.props.Configuration.PlatformСhoiceDesc["article"]) ? 
                        [...Array(this.props.QuantityOfConf).keys()].map((number) => {
                            return(<TabPanel
                                selectedClassName="representation-of-conf-box"
                                key={number}>
                                    <RepresentationOfConf 
                                        Configuration={this.props.Configuration} 
                                        CurrentSlotHandler={this.props.CurrentSlotHandler}
                                    />
                            </TabPanel>)
                        }
                    ) : null}
            </Tabs>
        );
    }
}

class RepresentationOfConf extends Component {

    render () {
        return (
            <div className="representation-of-conf">
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
            <div className="conf-desc">
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
            <div className="conf-layout">
                <div className="conf-layout-top" />
                <div className="conf-layout-middle">
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
                                conference-control-double-frame
                            </div>)
                        }),
                    )}
                </div>
                <div className="conf-layout-bottom" />
            </div>
        );
    }
}

class ConfContainerLeftBottom extends Component {
    render() {
        return (
            <div className="conf-main-left-bottom">
                <ModuleListBottom 
                    ModulesForBottomMenu={this.props.ModulesForBottomMenu}
                    ModuleChoiceHandler={this.props.ModuleChoiceHandler}
                />    
            </div>
        );
    }
}

class ModuleListBottom extends Component {
    render() {
        return (
            <Tabs>
                <TabList>
                    {Object.keys(this.props.ModulesForBottomMenu).map((item) => {
                        return(<Tab key={item}>
                            {item}
                        </Tab>)
                    })}
                </TabList>
                    {Object.keys(this.props.ModulesForBottomMenu).map((item) => {
                        return(<TabPanel key={item}>
                            <ModuleSeriesListBottom  
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
            <Tabs>
                <TabList>
                    {Object.keys(this.props.ModuleSeriesListBottom).map((typeOfModules) => {
                        return (<Tab key={typeOfModules}>
                            {typeOfModules}
                        </Tab>)
                    })}
                </TabList>
                    {Object.keys(this.props.ModuleSeriesListBottom).map((typeOfModules) => {
                        return (<TabPanel key={typeOfModules} >
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
            <div className="horizontal-menu-bottom">
                {Object.keys(this.props.CurrentModulesBottom).map((module) => {
                    return (<img 
                            className="card-bottom"
                            key={module}
                            src={this.props.CurrentModulesBottom[module].article ? "img/" + this.props.TypeOfModules + "/" + this.props.CurrentModulesBottom[module].article.replace(/\s/g, "") + ".png" : null}
                            onClick={this.props.ModuleChoiceHandler.bind(this, {...this.props.CurrentModulesBottom[module], TypeOfModules: this.props.TypeOfModules, desc1: module})}
                            alt=""
                    />)
                })}
            </div>
        );
    }
}

export default ConfContainerLeft;