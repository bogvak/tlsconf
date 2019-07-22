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
                    Click={this.props.Click}
                />
                <ConfContainerLeftMiddle />
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
                    Click={(id, desc) => this.props.Click(id, desc)}
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
                    {Object.keys(this.props.TypeOfModules).map((item) => <Tab key={item}>{this.props.LocalStrings[this.props.Language][this.props.TypeOfModules[item]['menuname']]}</Tab>)}
                </TabList>
                    {Object.keys(this.props.TypeOfModules).map((item) => <TabPanel key={item}><ModuleSeriesListTop Click={(id, desc) => this.props.Click(id, desc)} ModuleSeriesListTop={this.props.ModulesContent[item]} /></TabPanel>)}
            </Tabs>
        );
	}
}

class ModuleSeriesListTop extends Component {
	
	render() {
        return (
            <Tabs>
                <TabList>
                    {Object.keys(this.props.ModuleSeriesListTop).map((item) => <Tab key={item}>{item}</Tab>)}
                </TabList>
                    {Object.keys(this.props.ModuleSeriesListTop).map((item) => <TabPanel key={item}><CurrentSeriesTop Click={(id, desc) => this.props.Click(id, desc)} CurrentSeriesTop={this.props.ModuleSeriesListTop[item]} /></TabPanel>)}
            </Tabs>
        );
	}
}

class CurrentSeriesTop extends Component {
    render() {
        return (
            <div className="horizontal-menu-top">
                {Object.keys(this.props.CurrentSeriesTop).map((item) => <button key={item} onClick={() => this.props.Click(this.props.CurrentSeriesTop[item]["article"], item)} className='card-top'>{item}</button>)}
            </div>
        );
    }
}

class ConfContainerLeftMiddle extends Component {

  render() {
    return (
      <div className="conf-main-left-middle">
      &nbsp;
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
                    {Object.keys(this.props.ModuleSeriesListBottom).map((item) => <TabPanel key={item} >{this.props.ModuleSeriesListBottom[item]["comment__"]} : {item}</TabPanel>)}
            </Tabs>
        );
    }
}

export default ConfContainerLeft;