import React, { Component } from 'react';
import ConfContainerLeft from './Components/ConfContainerLeft';
import ConfContainerRight from './Components/ConfContainerRight';
import './Style/configurator.css';
//Data
import {TypeOfModules, ModulesContent, ModulesForButtomMenu} from './Data/data';
import LocalStrings from './Data/strings';

class Configurator extends Component {
  state = {
    TypeOfModules: TypeOfModules,
    LocalStrings: LocalStrings,
    ModulesContent: ModulesContent,
    ModulesForButtomMenu: ModulesForButtomMenu,
    Language: 'en',
    platformChoose: {
      id: 0,
      desc: 0,
    }
  };

  currentSelectHandler = (id, desc) => {
    this.setState({platformChoose: {id: id, desc: desc}})
  }

  render() {
    return (
		<div className="conf-main">
			<ConfContainerLeft 
        TypeOfModules={this.state.TypeOfModules}
        LocalStrings={this.state.LocalStrings}
        ModulesContent={this.state.ModulesContent}
        ModulesForButtomMenu={this.state.ModulesForButtomMenu}
        Language={this.state.Language}
        Click={(id, desc) => this.currentSelectHandler(id, desc)}
      />
			<ConfContainerRight
        platformChoose={this.state.platformChoose}
       />
		</div>
    );
  }
}

export default Configurator;
