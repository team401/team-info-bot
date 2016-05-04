module['exports'] = function team(hook) {

  // hook.io has a range of node modules available - see
  // https://hook.io/modules.
  // We use request (https://www.npmjs.com/package/request) for an easy way to
  // make the HTTP request.
  var request = require('request-promise');
  var cheerio = require('cheerio');

  // The parameters passed in via the slash command POST request.
  var params = hook.params;
  var url = 'http://www.thebluealliance.com/team/' + params.text;

  var firstLine;
  var secLine;
  request(url).then(function (result) {
    $ = cheerio.load(result);
    firstLine = $('#team-info h2').text();
    secLine = $('#event-results').next().text();
    // Set up the options for the HTTP request.
    var options = {

      // Use the Webhook URL from the Slack Incoming Webhooks integration.
      uri: hook.env.team_url,
      method: 'POST',

      // Slack expects a JSON payload with a "text" property.
      json: {
        'channel': params.channel_id,
        'text': '@' + params.user_name + ', here\'s your info: \n' + firstLine + '\n' + secLine + '\n' + url,
        'parse': 'full'
      }
    };
    // Make the POST request to the Slack incoming webhook.
    request(options, function (error, response, body) {

      // Pass error back to client if request endpoint can't be reached.
      if (error) {
        hook.res.end(error.message);
      }

      // Finally, send the response. This will be displayed to the user after
      // they submit the slash command.
      hook.res.end('Team info successfully found!');
    });
  }, function (error) {
    console.error(error);
  });
};