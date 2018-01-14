const fs = require('fs');
const path = require('path');
const marked  = require('marked');

module.exports = function AwesomeRender() {
  const filePath = path.join(__dirname, 'README.md');
  const content = fs.readFileSync(filePath).toString();
  const markdown  = marked(content).toString();

  return markdown.toString();
}
