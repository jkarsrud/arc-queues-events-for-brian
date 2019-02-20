let arc = require('@architect/functions')

function handler(record, callback) {
	console.log('Handling event "send-email"');
  console.log(JSON.stringify(record, null, 2))
  callback()
}

exports.handler = arc.events.subscribe(handler)
