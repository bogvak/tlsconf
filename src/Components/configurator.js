import React, { Component } from 'react';
import SplitPane from 'react-split-pane';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import './configurator.css';
import localStrings from './strings.js';
import {TypeOfModules, ModulesContent} from './data.js'

class ConfContainer extends Component {

  render() {
    return (
		<div className="conf-main">
			<ConfContainerLeft />
			<ConfContainerRight />
		</div>
    );
  }
}

class ConfContainerLeft extends Component {

  render() {
    return (
		<div className="conf-main-left">
			<div className="conf-main-left-top">
				<ModuleList />
			</div>
			<ConfContainerLeftMiddle />
			<ConfContainerLeftBottom />
		</div>
    );
  }
}

class ModuleList extends Component {

	constructor(props) {
		super(props);
		this.arr = Object.keys(TypeOfModules);
	}

	render() {
	return (
	  	<Tabs>
		    <TabList>
		    	{this.arr.map((item) => <Tab>{localStrings['en'][TypeOfModules[item]['menuname']]}</Tab>)}
		    </TabList>
		    	{this.arr.map((item) => <TabPanel><ModuleSeriesList name={item} /></TabPanel>)}
	    </Tabs>
	);
	}
}

class ModuleSeriesList extends Component {
	
	constructor(props) {
		super(props);
		this.arr = Object.keys(ModulesContent[this.props.name]);
	}

	render() {
	return (
		<Tabs>
			<TabList>
				{this.arr.map((item) => <Tab>{item}</Tab>)}
			</TabList>
				{this.arr.map((item) => <TabPanel>{item}</TabPanel>)}
		</Tabs>
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

class ConfContainerRight extends Component {
  render() {
    return (
      	<div className="conf-main-right">
          <SplitPane split="horizontal" defaultSize="50%">
            <ConfContainerRightTop />
            <ConfContainerRightBottom />
          </SplitPane>
      	</div>
    );
  }
}

class ConfContainerRightTop extends Component {
  render() {
    return (
	<div className="conf-main-right-top">
  		<span>{localStrings['en'][1]}</span>
  	</div>
    );
  }
}

class ConfContainerRightBottom extends Component {
  render() {
    return (
      <div className="conf-main-right-bottom">
        <span>Contents Bottom</span>
      </div>
    );
  }
}

export default ConfContainer;