import React, { Component } from 'react';
import ConfContainerLeft from './Components/ConfContainerLeft';
import ConfContainerRight from './Components/ConfContainerRight';

//Data
import {TypeOfFrame, TypeOfModule, SubModulesType, ModulesContent, ModulesForBottomMenu} from './Data/data';
import LocalStrings from './Data/strings';
import emptyConf from './Data/emptyConf'

//SimpleBar
import SimpleBar from 'simplebar-react';

//CSS
import 'simplebar/dist/simplebar.min.css';
import './Style/configurator.css';


class Configurator extends Component {
  
  state = {
    Language: 'en',
    QuantityOfConf: 1,
    ConfNumber: 0,
    Configurations: Array(1).fill(emptyConf),
    IndexOfSignalSlots: null,
  };

  platformСhoiceDescHandler = (inf) => {
    inf = {...emptyConf.PlatformСhoiceDesc,...inf};
    inf["all-slots"] = inf["signal-slots"]+inf["power-sockets"]*3+inf["conference-control"]*3+inf["conference-control-double-frame"]*6;
    inf.img = "img/" + inf.line.toLowerCase().replace(/\s/g, "") + "/" + inf.line.toLowerCase().replace(/\s/g, "") + "img.png";
    inf.subFrameType = SubModulesType[inf.location][inf.line];
    inf.subFrameDesc = Object.keys(inf.subFrameType)[0];
    inf.subFrameArticle = inf.subFrameType[inf.subFrameDesc];
    if (inf["power-sockets"] > 0) {
      inf.powerSocketDesc = "Power sockets DE White"
      inf.powerSocketArticle = "863 9204"
    }
    if (inf.line.match(/[A-Z]/g).join('')==="TAM") {
      inf.fullLine = LocalStrings['en'][14] + ' ' + inf.line.match(/[0-9]/g).join('')
    }
    const copyOfConfs=JSON.parse(JSON.stringify(this.state.Configurations));
    copyOfConfs[this.state.ConfNumber].PlatformСhoiceDesc = {...copyOfConfs[this.state.ConfNumber].PlatformСhoiceDesc, ...inf};
    copyOfConfs[this.state.ConfNumber].Modules = Array(inf["signal-slots"]).fill(emptyConf.Modules[0]);
    this.setState({Configurations: copyOfConfs});
  }

  moduleChoiceHandler = (inf) => {
    const copyOfConfs=this.state.Configurations.slice();
    const ConfNumber=this.state.ConfNumber;
    const IndexOfSelectedSlot = this.state.Configurations[ConfNumber].IndexOfSelectedSlot;
    inf.FirstArticle = inf["article-list"][Object.keys(inf["article-list"])[0]];
    inf.SubArticle = inf.FirstArticle;
    inf.SubDesc = Object.keys(inf["article-list"])[0]
    if (!copyOfConfs[ConfNumber].Modules[IndexOfSelectedSlot+(inf["slots-takes"]-1)] || IndexOfSelectedSlot===null) return;
    inf.img="img/" + inf.TypeOfModules + "/" + inf.FirstArticle.replace(/\s/g, "") + ".png"; 
    for (let i = 1; i<copyOfConfs[ConfNumber].Modules[IndexOfSelectedSlot]["slots-takes"]; i++) {
      copyOfConfs[ConfNumber].Modules[IndexOfSelectedSlot+i].display = true;
    }
    for (let i = 1; i<inf["slots-takes"]; i++) {
      const test = copyOfConfs[ConfNumber].Modules[IndexOfSelectedSlot+i]["slots-takes"];
      for (let j = 1;j<test; j++) {
        copyOfConfs[ConfNumber].Modules[IndexOfSelectedSlot+i+j].display=true;
      }
      console.log(test)
      copyOfConfs[ConfNumber].Modules[IndexOfSelectedSlot+i] = {...emptyConf.Modules[0], display: false};
    }
    copyOfConfs[ConfNumber].Modules[IndexOfSelectedSlot] = {...copyOfConfs[ConfNumber].Modules[IndexOfSelectedSlot], ...inf};
    this.setState({Configurations: copyOfConfs})
  }

  confNumberHandler = (number) => {
    this.setState({ConfNumber: number})
  }

  addConfHandler = () => {
    if (this.state.QuantityOfConf >= 2) return;
    const copyOfConfs = this.state.Configurations.slice();
    copyOfConfs.push(emptyConf);
    this.setState({QuantityOfConf: this.state.QuantityOfConf+1, Configurations: copyOfConfs});
  }

  currentSlotHandler = (IndexOfSelectedSlot) => {
    const copyOfConfs=JSON.parse(JSON.stringify(this.state.Configurations));
    copyOfConfs[this.state.ConfNumber].IndexOfSelectedSlot = IndexOfSelectedSlot;
    this.setState({Configurations: copyOfConfs});
  }

  awokenTabHandler = (index) => {
    const copyOfConfs=JSON.parse(JSON.stringify(this.state.Configurations));
    if (this.state.Configurations[this.state.ConfNumber].IndexOfAwokenTab===index) {
      copyOfConfs[this.state.ConfNumber].IndexOfAwokenTab = null;
    } else {
      copyOfConfs[this.state.ConfNumber].IndexOfAwokenTab = index;
    }
    this.setState({Configurations: copyOfConfs})
  }

  subMenuHandler = (newSubInf) => {
    const copyOfConfs=JSON.parse(JSON.stringify(this.state.Configurations));
    if (!copyOfConfs[this.state.ConfNumber].Modules[this.state.Configurations[this.state.ConfNumber].IndexOfAwokenTab]) return;
    copyOfConfs[this.state.ConfNumber].Modules[this.state.Configurations[this.state.ConfNumber].IndexOfAwokenTab] = {
      ...copyOfConfs[this.state.ConfNumber].Modules[this.state.Configurations[this.state.ConfNumber].IndexOfAwokenTab],
      ...newSubInf
    }
    this.setState({Configurations: copyOfConfs})
  }

  subFrameTypeHandler = (newSubInf) => {
    const copyOfConfs=JSON.parse(JSON.stringify(this.state.Configurations));
    copyOfConfs[this.state.ConfNumber].PlatformСhoiceDesc = {...this.state.Configurations[this.state.ConfNumber].PlatformСhoiceDesc, ...newSubInf};
    this.setState({Configurations: copyOfConfs});
  }

  moduleResetHandler = (indexOfSlot) => {
    const copyOfConfs=JSON.parse(JSON.stringify(this.state.Configurations));
    for (let i = 1; i<copyOfConfs[this.state.ConfNumber].Modules[indexOfSlot]["slots-takes"]; i++) {
      copyOfConfs[this.state.ConfNumber].Modules[indexOfSlot+i].display = true;
    };
    copyOfConfs[this.state.ConfNumber].Modules[indexOfSlot] = emptyConf.Modules[0];
    this.setState({Configurations: copyOfConfs})
  }

  frameReseteHandler = (indexOfConf) => {
    if (window.confirm("This will erase the whole Configuration, are you sure?") === true) {
      const copyOfConfs=JSON.parse(JSON.stringify(this.state.Configurations));
      copyOfConfs[indexOfConf] = emptyConf;
      this.setState({Configurations: copyOfConfs});
    }
  }

  buildArticlesArray = (confNumber) => {
    const articlesArray = [];
    articlesArray.push(this.state.Configurations[confNumber].PlatformСhoiceDesc.article);
    articlesArray.push(this.state.Configurations[confNumber].PlatformСhoiceDesc.subFrameArticle);
    for (let i=0; i < this.state.Configurations[confNumber].PlatformСhoiceDesc["power-sockets"]; i++) {
      articlesArray.push(this.state.Configurations[confNumber].PlatformСhoiceDesc.powerSocketArticle);
    }
    for (let i = 0; i < this.state.Configurations[confNumber].Modules.length; i++) {
      if (!this.state.Configurations[confNumber].Modules[i].SubArticle && this.state.Configurations[confNumber].Modules[i].display) {
        return;
      } else if (this.state.Configurations[confNumber].Modules[i].SubArticle) {
        articlesArray.push(this.state.Configurations[confNumber].Modules[i].SubArticle)
      }
    }
    console.log(articlesArray);
    return articlesArray;
  }

  render() {
    return (
		<div className="conf-main">
			<ConfContainerLeft 
        TypeOfFrame={TypeOfFrame}
        TypeOfModule={TypeOfModule}
        LocalStrings={LocalStrings}
        ModulesContent={ModulesContent}
        ModulesForBottomMenu={ModulesForBottomMenu}
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
        ConfNumber={this.state.ConfNumber}
        Configurations={this.state.Configurations}
        QuantityOfConf={this.state.QuantityOfConf}
        //Handlers
        SubMenuHandler={this.subMenuHandler}
        AwokenTabHandler={this.awokenTabHandler}
        SubFrameTypeHandler={this.subFrameTypeHandler}
        ModuleResetHandler={this.moduleResetHandler}
        FrameReseteHandler={this.frameReseteHandler}
        BuildArticlesArray={this.buildArticlesArray}
       />
		</div>
    );
  }
}

export default Configurator;
