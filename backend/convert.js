const fs = require('fs');
const lines = fs.readFileSync('sample_emails.txt', 'utf-8')
  .trim().split('\n');
const json = lines.map(e => ({ email: e.trim(), breached: true }));
fs.writeFileSync('emails.json', JSON.stringify(json, null, 2));
console.log(`Loaded ${json.length} emails.`);

