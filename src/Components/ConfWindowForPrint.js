import React, { Component } from 'react';
import ReactToPrint from 'react-to-print';
import NewWindow from 'react-new-window';
import dataList from '../Data/dataFromTable';

class ComponentToPrint extends Component {
    defaultTax = "21%"
    roundNumber= (num, scale) => {
        if(!("" + num).includes("e")) {
          return +(Math.round(num + "e+" + scale)  + "e-" + scale);
        } else {
          var arr = ("" + num).split("e");
          var sig = ""
          if(+arr[1] + scale > 0) {
            sig = "+";
          }
          return +(Math.round(+arr[0] + "e" + sig + (+arr[1] + scale)) + "e-" + scale);
        }
      }
    render () {
    return (
        <div className="component-to-print-wrapper">
            <div className="top-left-logo-container">
                <img className="top-left-logo" src="https://www.tls-electronics.de/custom/tls_electro/img/top_left_logo.png" alt="logo"/>
            </div>
            <table className="print-conf-table">
                <thead>
                    <tr className="print-conf-table-head">
                        <th className="print-conf-table-head-th">Pos.</th>
                        <th className="print-conf-table-head-th">Desc.</th>
                        <th className="print-conf-table-head-th">Quantity</th>
                        <th className="print-conf-table-head-th">Tax%</th>
                        <th className="print-conf-table-head-th">Price</th>
                        <th className="print-conf-table-head-th">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.ArticleList.map((inf, index) => {
                        const article = inf.article.replace(/\s/g, "");
                        return ([
                            <tr className="print-conf-table-body_l0" key={index}>
                                <td className="print-conf-table-body_l0-td">
                                    {index}
                                </td>
                                <td className="print-conf-table-body_l0-td">
                                    {inf.article}
                                </td>
                                <td className="print-conf-table-body_l0-td">
                                    {inf.quantity}
                                </td>
                                <td className="print-conf-table-body_l0-td">
                                    {this.defaultTax}
                                </td>
                                <td className="print-conf-table-body_l0-td">
                                    {dataList[article].EVP+"€"}
                                </td>
                                <td className="print-conf-table-body_l0-td">
                                    {this.roundNumber((parseInt(dataList[article].EVP)*inf.quantity)*(parseInt(this.defaultTax)/100+1), 2)+"€"}
                                </td>
                            </tr>,
                            <tr className="print-conf-table-body_l1">
                                <td />
                                <td className="print-conf-table-body_l1-td">
                                    {dataList[article].Type}:
                                </td>
                                <td className="print-conf-table-body_l1-td">
                                    {dataList[article].Description2}
                                </td>
                            </tr>,
                            <tr className="print-conf-table-body_l2">
                                <td />
                                <td className="print-conf-table-body_l2-td">
                                    Dimensions:
                                </td>
                                <td className="print-conf-table-body_l2-td">
                                    (W*H*D) .comment'coming soon'
                                </td>
                            </tr>,
                            <tr className="print-conf-table-body_l3">
                                <td />
                                <td className="print-conf-table-body_l3-td">
                                    Other:  
                                </td>
                                <td className="print-conf-table-body_l3-td">
                                    {dataList[article].Description1}
                                </td>
                            </tr>
                        ])
                    })}
                </tbody>
                <thead>
                    <tr className="print-conf-table-head">
                        <th className="print-conf-table-head-th">Pos.</th>
                        <th className="print-conf-table-head-th">Desc.</th>
                        <th className="print-conf-table-head-th">Price</th>
                        <th className="print-conf-table-head-th">Quantity</th>
                        <th className="print-conf-table-head-th">Tax</th>
                        <th className="print-conf-table-head-th">Total</th>
                    </tr>
                </thead>
            </table>
        </div>
      )
    }
  }
  
class PrinfConfWindow extends Component {
    style = {
        border: "1px solid black",
        borderCollapse: "collapse"
    }
    render () {
        return (
        <NewWindow>
            <div>
            <ComponentToPrint ArticleList={this.props.ArticleList} ref={el => (this.componentRef = el)} />
            <ReactToPrint
                trigger={() => <button>Print</button>}
                content={() => this.componentRef}
            />
            </div>
        </NewWindow>
        )
    }
}

export default PrinfConfWindow;