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
                    //Handlers
                    PlatformСhoiceDescHandler={this.props.PlatformСhoiceDescHandler}
                />
                <ConfContainerLeftMiddle 
                    QuantityOfConf={this.props.QuantityOfConf}
                    PlatformСhoiceDesc={this.props.PlatformСhoiceDesc}
                    ConfNumberHandler={this.props.ConfNumberHandler}
                    AddConfHandler={this.props.AddConfHandler}
                />
                <ConfContainerLeftBottom 
                    ModulesForButtomMenu={this.props.ModulesForButtomMenu}
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
                    {Object.keys(this.props.TypeOfModules).map((lacation) => <TabPanel key={lacation}><ModuleSeriesListTop lacation={lacation} PlatformСhoiceDescHandler={this.props.PlatformСhoiceDescHandler}  ModuleSeriesListTop={this.props.ModulesContent[lacation]} /></TabPanel>)}
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
                    {Object.keys(this.props.ModuleSeriesListTop).map((line) => <TabPanel key={line}><CurrentSeriesTop lacation={this.props.lacation} PlatformСhoiceDescHandler={this.props.PlatformСhoiceDescHandler} line={line} CurrentSeriesTop={this.props.ModuleSeriesListTop[line]} /></TabPanel>)}
            </Tabs>
        );
	}
}

class CurrentSeriesTop extends Component {
    render() {
        return (
            <div className="horizontal-menu-top">
                {Object.keys(this.props.CurrentSeriesTop).map((item) => <button key={item} onClick={this.props.PlatformСhoiceDescHandler.bind(this, {...this.props.CurrentSeriesTop[item], location: this.props.lacation, line: this.props.line, desc: item})} className='card-top'>{item}</button>)}
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
                    PlatformСhoiceDesc={this.props.PlatformСhoiceDesc}
                    ConfNumberHandler={this.props.ConfNumberHandler}
                    AddConfHandler={this.props.AddConfHandler}
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
                    {[...Array(this.props.QuantityOfConf).keys()].map((number) => <TabPanel key={number}><RepresentationOfConf PlatformСhoiceDesc={this.props.PlatformСhoiceDesc} /></TabPanel> )}
            </Tabs>
        );
    }
}

class RepresentationOfConf extends Component {

    render () {
        return (
            <div className="representation-of-conf">
                <RepresentationOfConfLeft PlatformСhoiceDesc={this.props.PlatformСhoiceDesc} />
                <RepresentationOfConfRight PlatformСhoiceDesc={this.props.PlatformСhoiceDesc} />
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

    render () {
        return (
            <div className="representation-of-conf-right">
                {[...Array(this.props.PlatformСhoiceDesc["power-sokets"]).keys()].map((quantityOfPowerSokets) => <div key={quantityOfPowerSokets} className="power-sokets">power-sokets</div>)}
                {[...Array(this.props.PlatformСhoiceDesc["signal-slots"]).keys()].map((quantityOfSignalSlots) => <div key={quantityOfSignalSlots} className="signal-slots">signal-slots</div>)}
                {[...Array(this.props.PlatformСhoiceDesc["conference-control"]).keys()].map((quantityOfConferenceControl) => <div key={quantityOfConferenceControl} className="conference-control">conference-control</div>)}
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
                    {Object.keys(this.props.ModulesForButtomMenu).map((item) => <TabPanel key={item}><ModuleSeriesListBottom  ModuleSeriesListBottom={this.props.ModulesForButtomMenu[item]} /></TabPanel>)}
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
                    {Object.keys(this.props.ModuleSeriesListBottom).map((item) => <TabPanel key={item} ><CurrentModulesBottom CurrentModulesBottom={this.props.ModuleSeriesListBottom[item]} /></TabPanel>)}
            </Tabs>
        );
    }
}

class CurrentModulesBottom extends Component {
    render () {
        return (
            <div className="horizontal-menu-buttom">
                {Object.keys(this.props.CurrentModulesBottom).map((module) => <button key={module} className="card-buttom">{module}</button>)}
            </div>
        );
    }
}

export default ConfContainerLeft;