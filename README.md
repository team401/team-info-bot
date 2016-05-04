# team-info-bot
The team-info bot is a [hook.io](http://hook.io) Javascript microservice that scrapes data from [The Blue Alliance](http://thebluealliance.com) and posts it into [slack](http://slack.com) channels.

## Initial hook.io Setup
1. Go to hook.io
2. Create an account
3. Create a new hook
  1. From your hook main page, click 'Create Hook'
  2. Name your hook
  3. Make sure the selected language is set to JavaScript
  4. Paste in the text of the [team-info](team-info.js), or use the provided [Gist](https://gist.github.com/PChild/5266ebd48443b568a50ee2ecb4e19cae).
  5. Click 'Create new Hook'
  6. Scroll to the 'Service URL' section, and copy the 'Home' URL for use in slack
  
## Slack Slash Command Setup
1. Custom Integration Setup
  1. Go to https://slack.com/apps/build
  2. Click 'Make a Custom Integration'
  3. Click 'Slash Commands'
  4. Set your desired command (we use /team)
  5. Click 'Add Slash Command Integration'
2. Slash Command Settings
  1. Set the URL for the slash command to the Home URL copied from hook.io
  2. Make sure the slash command Method is set to 'POST'
  3. Copy the Token for use in hook.io
  4. Customize the name, icon, help text, and label of the command.
  5. Click 'Save Integration'.
  
## Slack WebHook Setup
1. Custom Integration Setup
  1. Go to https://slack.com/apps/build
  2. Click 'Make a Custom Integration'
  3. Click 'Incoming WebHooks'
2. Default Channel
  1. Select a default channel for the bot (overriden as needed)
  2. Click 'Add Incoming WebHooks integration'
3. Setting up the bot
  1. Copy the WebHook URL for use in hook.io
  2. Set up the label, name, and icon for the bot
  3. Click 'Save Settings'.

## Setting Up hook.io Envioronment Variables
1. Go to https://hook.io/env to setup your environment variables.
  1. Click 'Add new Key'
  2. Name your new key 'team_url'
  3. Set the value as the WebHook incoming URL you copied from slack.
  4. Click 'Add new Key' again
  5. Name the second new key 'team_token'
  6. Set the value as the slash command token value you copied from slack.
  7. Click 'Save Hook Environment Variables'
  
## Using your team-info bot
You should now be able to invoke the slash command /team #### in any message or channel on slack and have the bot report the team name, record, and a link to their page on TBA!
