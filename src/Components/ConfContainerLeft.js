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
                <ConfContainerLeftBottom />
            </div>
        );
    }
}

class ConfContainerLeftTop extends Component {
    render() {
        return(
            <div className="conf-main-left-top">
                <ModuleList 
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

class ModuleList extends Component {

	render() {
        return (
            <Tabs>
                <TabList>
                    {Object.keys(this.props.TypeOfModules).map((item) => <Tab>{this.props.LocalStrings[this.props.Language][this.props.TypeOfModules[item]['menuname']]}</Tab>)}
                </TabList>
                    {Object.keys(this.props.TypeOfModules).map((item) => <TabPanel><ModuleSeriesList Click={(id, desc) => this.props.Click(id, desc)} ModuleSeriesList={this.props.ModulesContent[item]} /></TabPanel>)}
            </Tabs>
        );
	}
}

class ModuleSeriesList extends Component {
	
	render() {
        return (
            <Tabs>
                <TabList>
                    {Object.keys(this.props.ModuleSeriesList).map((item) => <Tab>{item}</Tab>)}
                </TabList>
                    {Object.keys(this.props.ModuleSeriesList).map((item) => <TabPanel><CurrentSeries Click={(id, desc) => this.props.Click(id, desc)} CurrentSeries={this.props.ModuleSeriesList[item]} /></TabPanel>)}
            </Tabs>
        );
	}
}

class CurrentSeries extends Component {
    render() {
        return (
            <div className="container-horizontal-menu">
                <Tabs>
                    <TabList className="horizontal-menu">
                        {Object.keys(this.props.CurrentSeries).map((item) => <Tab onClick={() => this.props.Click(this.props.CurrentSeries[item]["article"], item)} className='card'>{item}</Tab>)}
                    </TabList>
                </Tabs>
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
      &nbsp;
      </div>
    );
  }
}

export default ConfContainerLeft;
