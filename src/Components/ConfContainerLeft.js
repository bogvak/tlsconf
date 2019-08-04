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
                {Object.keys(this.props.CurrentSeriesTop).map((item) => <button key={item} onClick={this.props.PlatformСhoiceDescHandler.bind(this, {line: this.props.line ,id: this.props.CurrentSeriesTop[item]["article"], desc: item, lacation: this.props.lacation})} className='card-top'>{item}</button>)}
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
                />
            </div>
        );
    }
}

class ConfListMiddle extends Component {

    render () {
        return (
            <Tabs className="wrapper">
                <TabList>
                    {[...Array(this.props.QuantityOfConf+1).keys()].slice(1).map((number) => <Tab key={number}>Configuration: {number}</Tab> )}
                </TabList>
                    {[...Array(this.props.QuantityOfConf+1).keys()].slice(1).map((number) => <TabPanel key={number}><RepresentationOfConf PlatformСhoiceDesc={this.props.PlatformСhoiceDesc} number={number} /></TabPanel> )}
            </Tabs>
        );
    }
}

class RepresentationOfConf extends Component {

    render () {
        return (
            <div className="representation-of-conf">
                <RepresentationOfConfLeft PlatformСhoiceDesc={this.props.PlatformСhoiceDesc} number={this.props.number}/>
                <RepresentationOfConfRight />
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
                window of conf
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
            <div className="horizontal-menu-top">
                {Object.keys(this.props.CurrentModulesBottom).map((module) => <button className="card-top">{this.props.CurrentModulesBottom[module]["soket-takes"]}</button>)}
            </div>
        );
    }
}

export default ConfContainerLeft;