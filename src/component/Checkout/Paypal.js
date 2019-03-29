import React, {Component} from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

export default class Paypal extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const client = {
            sandbox:    'Adda3ob6Xml_xU1dqUhVA1yyE13Lp3EzoaBIQrhtEtY1UENbCTm6XfPsBOe2FmPeKRMdB-TBXIWCRBYT',
            production: 'YOUR-PRODUCTION-APP-ID',
        }
        return (
            <PaypalExpressBtn client={client} currency={'USD'} total={this.props.total} />
        );
    }
}