'use strict';
var axios = require('axios');

module.exports.send_via_sendgrid = function(params) {
    var data = {
        'personalizations': [],
        'from': {
            'email': params.from_email,
            'name': params.from_name
        },
        'content': [
            {
                'type': 'text/html',
                'value': params.content
            }
        ]
    };
    var personalizations = {};
    var send_to = [];
    var send_cc = [];
    var send_bcc = [];

    if (!params.hasOwnProperty('to')) {
        throw Error('Missing "to" in params.');
        return
    }

    if (typeof(params.to) == 'object') {
        params.to.forEach(email => {
            send_to.push({ email });
        });
    } else {
        send_to.push({ 'email': params.to });
    }

    personalizations.to = send_to;

    if (params.hasOwnProperty('cc')) {
        if (typeof(params.cc) == 'object') {
            params.cc.forEach(email => {
                send_cc.push({ email });
            });
        } else {
            send_cc.push({ 'email': params.cc });
        }

        personalizations.cc = send_cc;
    }

    if (params.hasOwnProperty('bcc')) {
        if (typeof(params.bcc) == 'object') {
            params.bcc.forEach(email => {
                send_bcc.push({ email });
            });
        } else {
            send_bcc.push({ 'email': params.bcc });
        }

        personalizations.bcc = send_bcc;
    }

    personalizations.subject = params.subject;
    data['personalizations'].push(personalizations)

    return axios({
        method: 'POST',
        url: 'https://api.sendgrid.com/v3/mail/send',
        headers: {
            'Authorization': 'Bearer ' + params.sendgrid_key,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        data: JSON.stringify(data)
    });
}