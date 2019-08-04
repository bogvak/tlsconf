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
    PlatformСhoiceDesc: {
      line: null,
      id: null,
      desc: null,
      lacation: null,
      type: null,
    },
    QuantityOfConf: 3
  };

  platformСhoiceDescHandler = (inf) => {
    if (!inf.type) inf.type="Standart"
    this.setState({PlatformСhoiceDesc: {line: inf.line, id: inf.id, desc: inf.desc, lacation: inf.lacation, type: inf.type}})
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
        QuantityOfConf={this.state.QuantityOfConf}
        PlatformСhoiceDesc={this.state.PlatformСhoiceDesc}
        //Handlers
        PlatformСhoiceDescHandler={this.platformСhoiceDescHandler}
        PlatformChoiceHandler={this.platformChoiceHandler}
      />
			<ConfContainerRight
        PlatformСhoiceDesc={this.state.PlatformСhoiceDesc}
       />
		</div>
    );
  }
}

export default Configurator;
