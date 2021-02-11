# apache-log-parser
> Nodejs Apache Log Parser

Simple lib to naively parse Apache combined log format logs. Pass in a line from a log, get an object back.

This ONLY works with combined log format logs at the moment. 

Example usage:

```js
const logParser = require('@slaughtr/apache-log-parser');

const logObject = logParser({ string: someLogLine })

```
