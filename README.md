# Sendgrid Node.js

This library allows you to quickly and easily use the Sendgrid API V3 via Node.js.

## Getting Started

### Installing

The following recommended installation requires [npm](https://npmjs.org/). If you are unfamiliar with npm, see the [npm docs](https://docs.npmjs.com/).

```
npm install --save sendgrid-v3-node
```

### Dependencies

* [axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js

## Quick Start

Sending a Single Email to a Single Recipient

```
const sendgrid = require('sendgrid-v3-node');

const mailOptions = {
    sendgrid_key: SENDGRID_KEY,
    from_email: FROM_EMAIL,
    from_name: FROM_NAME,
    to: TO_EMAIL
};

mailOptions.subject = SUBJECT;
mailOptions.content = CONTENT;
sendgrid.send_via_sendgrid(mailOptions).then(response => {
    console.log(response);
    console.log('New welcome email sent to:', email);
});
```

Sending a Single Email to a Single Recipient With a CC

```
const sendgrid = require('sendgrid-v3-node');

const mailOptions = {
    sendgrid_key: SENDGRID_KEY,
    from_email: FROM_EMAIL,
    from_name: FROM_NAME,
    to: TO_EMAIL
    cc: TO_CC
};

mailOptions.subject = SUBJECT;
mailOptions.content = CONTENT;
sendgrid.send_via_sendgrid(mailOptions).then(response => {
    console.log(response);
    console.log('New welcome email sent to:', email);
});
```

Sending a Single Email to a Single Recipient With a CC and a BCC

```
const sendgrid = require('sendgrid-v3-node');

const mailOptions = {
    sendgrid_key: SENDGRID_KEY,
    from_email: FROM_EMAIL,
    from_name: FROM_NAME,
    to: TO_EMAIL,
    cc: TO_CC,
    bcc: TO_BCC
};

mailOptions.subject = SUBJECT;
mailOptions.content = CONTENT;
sendgrid.send_via_sendgrid(mailOptions).then(response => {
    console.log(response);
    console.log('New welcome email sent to:', email);
});
```

Sending the same Email to Multiple Recipients

```
const sendgrid = require('sendgrid-v3-node');

const mailOptions = {
    sendgrid_key: SENDGRID_KEY,
    from_email: FROM_EMAIL,
    from_name: FROM_NAME,
    to: [TO_EMAIL1, TO_EMAIL2, ...]
};

mailOptions.subject = SUBJECT;
mailOptions.content = CONTENT;
sendgrid.send_via_sendgrid(mailOptions).then(response => {
    console.log(response);
    console.log('New welcome email sent to:', email);
});
```

Sending a Single Email to a Single Recipient With Multiple CCs/BCCs

```
const sendgrid = require('sendgrid-v3-node');

const mailOptions = {
    sendgrid_key: SENDGRID_KEY,
    from_email: FROM_EMAIL,
    from_name: FROM_NAME,
    to: TO_EMAIL,
    cc: [TO_CC1, TO_CC2, ...],
    bcc: [TO_BCC1, TO_BCC2, ...]
};

mailOptions.subject = SUBJECT;
mailOptions.content = CONTENT;
sendgrid.send_via_sendgrid(mailOptions).then(response => {
    console.log(response);
    console.log('New welcome email sent to:', email);
});