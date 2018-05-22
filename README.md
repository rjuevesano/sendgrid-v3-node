# Sendgrid NodeJS Custom

This library allows you to quickly and easily use the Sendgrid API via Node.js.

## Getting Started

### Installing

The following recommended installation requires [npm](https://npmjs.org/). If you are unfamiliar with npm, see the [npm docs](https://docs.npmjs.com/).

```
npm install --save sendgrid-nodejs-custom
```

### Dependencies

* [axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js

## Quick Start

```
const sendgrid = require('sendgrid-nodejs-custom');

const mailOptions = {
    sendgrid_key: 'SENDGRID_KEY',
    from_email: 'FROM_EMAIL',
    from_name: 'FROM_NAME',
    to: TO_EMAIL
};

mailOptions.subject = 'SUBJECT';
mailOptions.content = 'CONTENT';
sendgrid.send_via_sendgrid(mailOptions).then(response => {
    console.log(response);
    console.log('New welcome email sent to:', email);
});
```
