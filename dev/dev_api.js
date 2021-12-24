/* eslint-disable no-undef */
const schema = {
	type: 'object',
	properties: {
		risk: {
			type: 'object',
			properties: {
				severity: {
					type: 'string',
					faker: 'risk.severity',
				},
				region: {
					type: 'object',
					properties: {
						id: {
							type: 'number',
							faker: 'datatype.uuid',
						},
						name: {
							type: 'string',
							faker: 'address.county',
						},
						country: {
							type: 'string',
							faker: 'address.country',
						},
					},
					required: ['id', 'name'],
				},
				industry: {
					type: 'object',
					properties: {
						id: {
							type: 'number',
						},
						name: {
							type: 'string',
							faker: 'name.jobArea',
						},
					},
					required: ['id', 'name'],
				},
			},
			required: ['region', 'industry'],
		},
	},
	required: ['risk'],
};

/* This script generates mock data for local development.
   This way you don't have to point to an actual API,
   but you can enjoy realistic, but randomized data,
   and rapid page loads due to local, static data.
 */

var jsf = require('json-schema-faker');
var fs = require('fs');

var json = JSON.stringify(jsf.generate(schema));

fs.writeFile('dev/db.json', json, function (err) {
	if (err) {
		return console.log(err);
	} else {
		console.log('Mock data generated.');
	}
});
