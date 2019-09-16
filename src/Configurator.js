import React, { Component } from 'react';
import ConfContainerLeft from './Components/ConfContainerLeft';
import ConfContainerRight from './Components/ConfContainerRight';
import './Style/configurator.css';
//Data
import {TypeOfFrame, ModulesContent, ModulesForBottomMenu} from './Data/data';
import LocalStrings from './Data/strings';
import emptyConf from './Data/emptyConf'

class Configurator extends Component {
  
  state = {
    TypeOfFrame: TypeOfFrame,
    LocalStrings: LocalStrings,
    ModulesContent: ModulesContent,
    ModulesForBottomMenu: ModulesForBottomMenu,
    Language: 'en',
    QuantityOfConf: 1,
    ConfNumber: 0,
    Configurations: Array(1).fill(emptyConf),
    IndexOfSignalSlots: null,
  };

  platformСhoiceDescHandler = (inf) => {
    inf = {...emptyConf.PlatformСhoiceDesc,...inf}
    inf["all-slots"] = inf["signal-slots"]+inf["power-sokets"]*3+inf["conference-control"]*3+inf["conference-control-double-frame"]*6
    const copyOfConf=JSON.parse(JSON.stringify(this.state.Configurations));
    copyOfConf[this.state.ConfNumber].PlatformСhoiceDesc = {...copyOfConf[this.state.ConfNumber].PlatformСhoiceDesc, ...inf};
    copyOfConf[this.state.ConfNumber].Modules = Array(inf["signal-slots"]).fill(emptyConf.Modules[0]);
    this.setState({Configurations: copyOfConf})
  }

  moduleChoiceHandler = (inf) => {
    const copyOfConf=this.state.Configurations.slice();
    const ConfNumber=this.state.ConfNumber;
    const IndexOfSelectedSlot = this.state.Configurations[ConfNumber].IndexOfSelectedSlot;
    if (!copyOfConf[ConfNumber].Modules[IndexOfSelectedSlot+(inf["slots-takes"]-1)] || IndexOfSelectedSlot===null) return;
    inf.img="img/" + inf.TypeOfModules + "/" + inf.article.replace(/\s/g, "") + ".png"; 
    for (let i = 1; i<copyOfConf[ConfNumber].Modules[IndexOfSelectedSlot]["slots-takes"]; i++) {
      copyOfConf[ConfNumber].Modules[IndexOfSelectedSlot+i].display = true;
    }
    for (let i = 1; i<inf["slots-takes"]; i++) {
      const test = copyOfConf[ConfNumber].Modules[IndexOfSelectedSlot+i]["slots-takes"];
      for (let j = 1;j<test; j++) {
        copyOfConf[ConfNumber].Modules[IndexOfSelectedSlot+i+j].display=true;
      }
      console.log(test)
      copyOfConf[ConfNumber].Modules[IndexOfSelectedSlot+i] = {...emptyConf.Modules[0], display: false};
    }
    copyOfConf[ConfNumber].Modules[IndexOfSelectedSlot] = {...copyOfConf[ConfNumber].Modules[IndexOfSelectedSlot], ...inf};
    this.setState({Configurations: copyOfConf})
  }

  confNumberHandler = (number) => {
    this.setState({ConfNumber: number})
  }

  addConfHandler = () => {
    if (this.state.QuantityOfConf >= 5) return;
    const copyOfConf = this.state.Configurations.slice();
    copyOfConf.push(emptyConf);
    this.setState({QuantityOfConf: this.state.QuantityOfConf+1, Configurations: copyOfConf});
  }

  currentSlotHandler = (IndexOfSelectedSlot) => {
    const copyOfConf=JSON.parse(JSON.stringify(this.state.Configurations));
    copyOfConf[this.state.ConfNumber].IndexOfSelectedSlot = IndexOfSelectedSlot;
    this.setState({Configurations: copyOfConf});
  }

  render() {
    return (
		<div className="conf-main">
			<ConfContainerLeft 
        TypeOfFrame={this.state.TypeOfFrame}
        LocalStrings={this.state.LocalStrings}
        ModulesContent={this.state.ModulesContent}
        ModulesForBottomMenu={this.state.ModulesForBottomMenu}
        Language={this.state.Language}
        QuantityOfConf={this.state.QuantityOfConf}
        Configuration={this.state.Configurations[this.state.ConfNumber]}
        //Handlers
        PlatformСhoiceDescHandler={this.platformСhoiceDescHandler}
        ConfNumberHandler={this.confNumberHandler}
        AddConfHandler={this.addConfHandler}
        CurrentSlotHandler={this.currentSlotHandler}
        ModuleChoiceHandler={this.moduleChoiceHandler}
      />
			<ConfContainerRight
        Configurations={this.state.Configurations}
        QuantityOfConf={this.state.QuantityOfConf}
       />
		</div>
    );
  }
}

export default Configurator;
