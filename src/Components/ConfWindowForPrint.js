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
    fullPriceCalc = (inf, isRound) => {
        const article = inf.article.replace(/\s/g, "");
        let price = (parseInt(dataList[article].EVP)*inf.quantity)*(parseInt(this.defaultTax)/100+1);
        if (isRound) {
            return this.roundNumber(price, 2);
        } else {
            return price
        }
    }

    totalPriceCalc = () => {
        let totalPrice = 0;
        this.props.ArticleList.map((inf) => totalPrice+=this.fullPriceCalc(inf));
        totalPrice = this.roundNumber(totalPrice, 2)
        return totalPrice;
    }

    firstRowCI = [
        "Marie-Curie-Str. 20 • D - 40721 Hilden",
        "Telefon: +49(0)211/522875-0",
        "Telefax: +49(0)211/522875-10",
        "E-Mail: office@ecco-online.eu",
        "Internet: www.ecco-online.eu",
    ]

    secondRowCI = {
        "DE Steuer-Nr.:": "103/5724/2402",
        "DE USt-ID;": "DE 281834860",
        "HRG 67133": "Düsseldorf",
        "Geschäftsführer": "Thomas Rüttgers Horst Kleinpeter",
    }
    
    thirdRowCI = {
        "Sparkasse Düsseldorf": ["SWIFT/BIC: DUSSDEDDXXX", "IBAN: DE87 3005 01101007 3139 66"],
        "Kreissparkasse Düsseldorf": ["SWIFT/BIC: WELADED1KSD", "IBAN: DE55 3015 0200 00021361 41"],
        "Deutsche Ban": ["SWIFT/BIC: DEUTDEDBDUE", "IBAN: DE17 3007 0024 0533 6565 00"],
    }

    tableHeader = ["Pos.", "Desc.", "Quantity", "Tax %", "Price", "Total"]
    render () {
    return (
        <div className="component-to-print-wrapper">
            <div className="top-left-logo-container">
                <img className="top-left-logo" src="https://www.tls-electronics.de/custom/tls_electro/img/top_left_logo.png" alt="logo"/>
            </div>
            <table className="print-conf-table">
                <thead>
                    <tr className="print-conf-table-head">
                        {this.tableHeader.map((title) => <th key={title} className="print-conf-table-head-th">{title}</th>)}
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
                                    {this.fullPriceCalc(inf, true)}€
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
                    <tr className="total-price">
                        <th className="total-price">Total: </th>
                        {Array(this.tableHeader.length-2).fill("empty").map(() => <th className="total-price" />)}
                        <th className="total-price">{this.totalPriceCalc()}€</th>
                    </tr>
                </thead>
            </table>
            <div className="contact-info">
                <table className="contact-info-table1">
                    <tr className="contact-info-table1-ECCO">
                        <td>ECCO<span className="contact-info-table1-ECCO-text">CINE UPPLY AND SERVICE GMBH</span></td>
                    </tr>
                    {this.firstRowCI.map((line) => <tr>
                        <td>{line}</td>
                    </tr>)}
                </table>
                <table className="contact-info-table2">
                    {Object.keys(this.secondRowCI).map((line) => <tr>
                        <td>{line}</td>
                        <td>{this.secondRowCI[line]}</td>
                    </tr>)}
                </table>
                <table className="contact-info-table3">
                    {Object.keys(this.thirdRowCI).map((line) => <tr>
                        <td>{line}</td>
                        <td>{this.thirdRowCI[line].map((bankInfo) => [bankInfo, <br />])}</td>
                    </tr>)}
                </table>
            </div>
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