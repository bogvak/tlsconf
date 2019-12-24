import React, { Component } from 'react';
import dataList from '../Data/dataFromTable';

class ComponentToPrint extends Component {

    isDefiend = (path, obj) => {
        if(!obj) obj = dataList;
        const errM = "Module wasn't found!"
        return path.split(/\./).reduce((o,i)=>(o)?o[i]:errM, obj)
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

    tableHeader = ["Pos.", "Desc.", "Quantity"]

    render () {
        if (this.props.articlesToPrint) {
            return (
                <div className="component-to-print-wrapper">
                    <div className="top-left-logo-container">
                        <img className="top-left-logo" src="https://www.tls-electronics.de/custom/tls_electro/img/top_left_logo.png" alt="logo"/>
                    </div>
                    <table className="print-conf-table">
                        <thead>
                            <tr className="print-conf-table-head">
                                {this.tableHeader.map((title) => <th key={title}>{title}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.articlesToPrint.map((inf, index) => {
                                const article = inf.article.replace(/\s/g, "");
                                return (<tbody key={article}>
                                    <tr className="print-conf-table-body_l0" key={index}>
                                        <td>
                                            {index}
                                        </td>
                                        <td>
                                            {inf.article}
                                        </td>
                                        <td>
                                            {inf.quantity}
                                        </td>
                                    </tr>
                                    <tr className="print-conf-table-body_l1">
                                        <td />
                                        <td>{this.isDefiend(`${article}.Type`)}:</td>
                                        <td>{this.isDefiend(`${article}.Description2`)}</td>
                                    </tr>
                                    <tr className="print-conf-table-body_l2">
                                        <td />
                                        <td>Other:  </td>
                                        <td>{this.isDefiend(`${article}.Description1`)}</td>
                                    </tr>
                                </tbody>)
                            })}
                        </tbody>
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
        } else {
            return 'Error'
        }
       
    }
}


export default ComponentToPrint;