import React, { Component } from 'react';
import ConfContainerLeft from './Components/ConfContainerLeft';
import ConfContainerRight from './Components/ConfContainerRight';

//Data
import {supportFrames, subModulesType, framesForTopMenu, modulesForBottomMenu, PowerSocket} from './Data/data';
import localStrings from './Data/strings';
import emptyConf from './Data/emptyConf';
import dataList from './Data/dataFromTable';

//CSS
import 'simplebar/dist/simplebar.min.css';
import './Style/configurator.css';

class Configurator extends Component {
  
  state = {
    Language: 'en',
    QuantityOfConf: 1,
    ConfNumber: 0,
    Configurations: Array(1).fill(emptyConf),
    maxConfQuantity: 3,
  };

  deep_ConfigurationsCopy = () => JSON.parse(JSON.stringify(this.state.Configurations));

  platformHandler = (frameInf, location, line) => {
    const inf = {...emptyConf.platformСhoiceDesc,...frameInf, location : location, line : line};
    inf.img = "img/" + inf.location.toLowerCase() + "/" + inf.line.toLowerCase() + "/"
    if (inf.location==="TABLE") {
      inf.img+=inf.line.toLowerCase() + "img.png";
      inf.line_desc = localStrings[this.state.Language][14] + ' ' + inf.line.match(/[0-9]/g).join('')
      inf.frame_sub_type = subModulesType[inf.location][inf.line];
      inf.frame_sub_type_desc = Object.keys(inf.frame_sub_type)[0];
      inf.frame_sub_type_article = inf.frame_sub_type[inf.frame_sub_type_desc];
    } else if (inf.location==="WALL") {
      inf.img+=inf.article + ".png";
      inf.line_desc = inf.desc;
      inf["signal-slots"] = inf["support-frame_amount"]*inf["frame-width"];
      
      const support_frame_line = line.match(/[A-Z]{1,}$/)[0]
      inf.support_frame_arr = Array(inf["support-frame_amount"]).fill(supportFrames[support_frame_line][Object.keys(supportFrames[support_frame_line])[0]])
      inf.isCoverHiden = true;
    }
    inf.slots_sum = inf["signal-slots"]+inf["power-sockets"]*3+inf["conference-control"]*3+inf["conference-control-double-frame"]*6;
    if (inf["power-sockets"] > 0) {
      inf.powerSocketList = PowerSocket;
      inf.powerSocketDesc = Object.keys(inf.powerSocketList)[0]
      inf.powerSocketArticle = inf.powerSocketList[inf.powerSocketDesc];
    }
    inf.empty_module = {
      img: "img/layout-parts/empty-signal-slot-" + (line==="Universal Line WP" ? "wp" : "ipl") + ".png",
      display: true,
    }
    const copyOfConfs=this.deep_ConfigurationsCopy();
    copyOfConfs[this.state.ConfNumber].platformСhoiceDesc = inf;
    copyOfConfs[this.state.ConfNumber].Modules = Array(inf["signal-slots"]).fill(inf.empty_module);

    copyOfConfs[this.state.ConfNumber].articlesToPrint=this.articlesToPrint(copyOfConfs[this.state.ConfNumber])

    this.setState({Configurations: copyOfConfs});
  }

  setModule = (inf, module_series, module_type, index, support_frame_index) => {
    const copyOfConfs = this.deep_ConfigurationsCopy();
    const modulesList = copyOfConfs[this.state.ConfNumber].Modules;

    inf.module_series = module_series;
    inf.module_type = module_type;

    //Module weight

    const getWeight = article => {
      if (dataList[article]) {
        const slotsWidth_rexEx = /[0-9] slots* width/
        const module_info = Object.values(dataList[article]).filter(Boolean)
        const slots_takes = module_info.map(str => str.match(slotsWidth_rexEx) && str.match(slotsWidth_rexEx)[0]).filter(Boolean)[0]
        return slots_takes && parseInt(slots_takes.replace(/\D+/, ""))
      }
    }

    if (inf["article-list"] && inf.slots_takes===undefined) {
      for (const article of Object.values(inf["article-list"])) {
        inf.slots_takes = getWeight(article)
      }
    } else if (inf.slots_takes===undefined) {
      inf.slots_takes = getWeight(inf.article)
    }
    //post check is slots weight was found
    if (inf.slots_takes===undefined) {
      alert(`Error, module-${inf.article} cant be found in table, write to us!`);
      return;
    }
    const platformСhoiceDesc = copyOfConfs[this.state.ConfNumber].platformСhoiceDesc
    if (platformСhoiceDesc.location==="WALL") {
      let indexInChunk = index % platformСhoiceDesc["frame-width"];
      if (indexInChunk+inf.slots_takes>platformСhoiceDesc["frame-width"]) return;

      const support_frame_line = inf.module_series.match(/[A-Z]{1,}$/)[0]
      platformСhoiceDesc.support_frame_arr[support_frame_index] = {...supportFrames[support_frame_line][inf.module_type]};
    } else if (!modulesList[index+(inf.slots_takes-1)]) {
      return;
    }
    for (let i = 1; i<modulesList[index].slots_takes; i++) {
      modulesList[index+i].display = true;
    }
    for (let i = 1; i<inf.slots_takes; i++) {
      const test = modulesList[index+i].slots_takes;
      for (let j = 1;j<test; j++) {
        modulesList[index+i+j].display=true;
      }
      modulesList[index+i] = {...platformСhoiceDesc.empty_module, display: false};
    }
    
    modulesList[index] = {...platformСhoiceDesc.empty_module, ...inf};

    copyOfConfs[this.state.ConfNumber].articlesToPrint=this.articlesToPrint(copyOfConfs[this.state.ConfNumber])

    this.setState({Configurations: copyOfConfs})
  }

  confNumberHandler = (number) => {
    this.setState({ConfNumber: number})
  }

  addConfHandler = () => {
    if (this.state.QuantityOfConf >= this.state.maxConfQuantity) return;
    const copyOfConfs = this.state.Configurations.slice();
    copyOfConfs.push(emptyConf);
    this.setState({QuantityOfConf: this.state.QuantityOfConf+1, Configurations: copyOfConfs});
  }

  moduleMenuHandler = (article,desc,index) => {
    const copyOfConfs=this.deep_ConfigurationsCopy();
    const newInf={
      sub_desc: `(${desc})`,
      article: article,
    }
    copyOfConfs[this.state.ConfNumber].Modules[index] = {
      ...copyOfConfs[this.state.ConfNumber].Modules[index],
      ...newInf
    }
    this.setState({Configurations: copyOfConfs})
  }

  frame_sub_typeHandler = (newSubInf) => {
    const copyOfConfs=this.deep_ConfigurationsCopy();
    copyOfConfs[this.state.ConfNumber].platformСhoiceDesc = {...this.state.Configurations[this.state.ConfNumber].platformСhoiceDesc, ...newSubInf};
    this.setState({Configurations: copyOfConfs});
  }

  moduleResetHandler = (confNumber, indexOfSlot) => {
    const copyOfConfs=this.deep_ConfigurationsCopy();
    console.log(confNumber, indexOfSlot)
    for (let i = 1; i<copyOfConfs[confNumber].Modules[indexOfSlot].slots_takes; i++) {
      copyOfConfs[confNumber].Modules[indexOfSlot+i] = copyOfConfs[confNumber].platformСhoiceDesc.empty_module;
    };
    copyOfConfs[this.state.ConfNumber].Modules[indexOfSlot] = copyOfConfs[confNumber].platformСhoiceDesc.empty_module;
    this.setState({Configurations: copyOfConfs})
  }

  frameResetHandler = (indexOfConf) => {
    const copyOfConfs=this.deep_ConfigurationsCopy();
    if (indexOfConf) {
      const isConfirmed = window.confirm("This will erase the whole Configuration, are you sure?")
      if (isConfirmed) {
        copyOfConfs[indexOfConf] = emptyConf;
      }
    } else {
      indexOfConf = this.state.ConfNumber;
      copyOfConfs[indexOfConf] = emptyConf;
    }
    this.setState({Configurations: copyOfConfs});
  }

  articlesToPrint = (configuration) => {
    let articlesToPrint = [];
    let isOkay = true
    articlesToPrint.push({
      article: configuration.platformСhoiceDesc.article, 
      quantity: 1});
    if (configuration.platformСhoiceDesc.frame_sub_type_article) {
      articlesToPrint.push({
        article: configuration.platformСhoiceDesc.frame_sub_type_article, 
        quantity: 1
      });
    }
    if (configuration.platformСhoiceDesc["power-sockets"]) {
      articlesToPrint.push({
        article: configuration.platformСhoiceDesc.powerSocketArticle, 
        quantity: configuration.platformСhoiceDesc["power-sockets"]
      });
    }
    if (configuration.platformСhoiceDesc.support_frame_arr) {
      for (const module of configuration.platformСhoiceDesc.support_frame_arr) {
        articlesToPrint.push({
          article: module.article,
          quantity: 1
        })
      }
    }
    if (configuration.Modules) {
      for (const module of configuration.Modules) {
        if (module.display) {
          articlesToPrint.push({
            article: module.article,
            quantity: 1
          })
        }
      }
    }

    articlesToPrint.map((el, index) => {
      if (!el.article) {
        isOkay=false
      } else {
        let quantity = 1;
        el.posList=[index]
        for (let i = index+1; i<articlesToPrint.length; i++) {
          if (articlesToPrint[i].article === el.article) {
            articlesToPrint[i].article = "duplicate";
            quantity++;
            el.quantity=quantity;
            el.posList.push(i)
          }
        }
      }
      return el;
    })
    articlesToPrint = articlesToPrint.filter(el => el.article!=="duplicate")
    if (isOkay) return articlesToPrint;
    else return null;
  }

  coverHidenHandler = () => {
    const copyOfConfs=this.deep_ConfigurationsCopy();
    copyOfConfs[this.state.ConfNumber].platformСhoiceDesc.isCoverHiden = !copyOfConfs[this.state.ConfNumber].platformСhoiceDesc.isCoverHiden;
    this.setState({Configurations: copyOfConfs});
  }

  render() {
    return (
		<div className="conf-main">
			<ConfContainerLeft 
        localStrings={localStrings}
        framesForTopMenu={framesForTopMenu}
        modulesForBottomMenu={modulesForBottomMenu}
        Language={this.state.Language}
        QuantityOfConf={this.state.QuantityOfConf}
        Configuration={this.state.Configurations[this.state.ConfNumber]}
        //Handlers
        setModule={this.setModule}
        CoverHidenHandler={this.coverHidenHandler}
        platformHandler={this.platformHandler}
        ConfNumberHandler={this.confNumberHandler}
        AddConfHandler={this.addConfHandler}
        maxConfQuantity={this.state.maxConfQuantity}
        frameResetHandler={this.frameResetHandler}
      />
			<ConfContainerRight
        ConfNumber={this.state.ConfNumber}
        Configurations={this.state.Configurations}
        QuantityOfConf={this.state.QuantityOfConf}
        //Handlers
        ModuleMenuHandler={this.moduleMenuHandler}
        frame_sub_typeHandler={this.frame_sub_typeHandler}
        ModuleResetHandler={this.moduleResetHandler}
        frameResetHandler={this.frameResetHandler}
       />
       <button onClick={() => this.buildArticlesArray()} className="test-button">Test conf.</button>
		</div>
    );
  }
}

export default Configurator;
