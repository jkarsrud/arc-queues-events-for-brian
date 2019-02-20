let arc = require('@architect/functions')

function handler(record, callback) {
  console.log(JSON.stringify(record, null, 2))
	console.log('Publishing event "send-email"');
	arc.events.publish({
		name: 'send-email',
		payload: record.user,
	}, callback);  
}

exports.handler = arc.queues.subscribe(handler)
