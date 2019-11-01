import React, { Component } from 'react';
import ReactToPrint from 'react-to-print';
import NewWindow from 'react-new-window';
import dataList from '../Data/dataFromTable';

class ComponentToPrint extends Component {
    render () {
    return (
        <div>
          <table className="print-conf-table">
            <thead>
                <tr>
                    <th>Pos.</th>
                    <th>Desc.</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {this.props.ArticleList.map((inf, index) => {
                    return (
                        <tr key={index}>
                            <td>{index}</td>
                            <td>
                            <table className="sub-table">
                                <tr>
                                    <td className="sub-table">{inf.article}</td>
                                </tr>
                                <tr>
                                    <td className="sub-table">{dataList[inf.article.replace(/\s/g, "")].Type}</td>
                                </tr>
                                <tr>
                                    <td className="sub-table">{dataList[inf.article.replace(/\s/g, "")].Description2}</td>
                                </tr>
                                <tr>

                                </tr>
                                <tr>

                                </tr>
                            </table>
                            </td>
                            <td>{inf.quantity}</td>
                            <td>{(parseInt(dataList[inf.article.replace(/\s/g, "")].EVP)*inf.quantity)+"€"}</td>
                        </tr>
                    )
                })}
            </tbody>
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