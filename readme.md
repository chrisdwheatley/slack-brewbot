#![BrewBot][1] Slack BrewBot

## Who's turn is it to make a brew? Let BrewBot decide.

BrewBot integrates quickly and easily with Slack, deciding randomly who'll be making the next round of tea or coffee for your team.

## Getting Started

#### Creating the WebHook process

* Choose somewhere to run your BrewBot process, Heroku is quick and easy to get setup.
* Clone the repository `$ git clone {{git url}}`
* Run the node process with a list of people you'd like to include in BrewBot's decision, e.g. `bin/slack-brewbot Sterling 'Cheryl Tunt' Lana 'Malory'`
* Your process is now ready to be called from within your Slack instance.
z
#### Within Slack

* Create a new Outgoing WebHook integration.
* Choose which channel you want to enable BrewBot in.
* Decide upon a trigger word or words, something such as '!brewbot' or 'brewbot decide'.
* Add the URL the node process is running on.
* Add the Outgoing WebHook integration, head to the channel(s) you enabled BrewBot in and give it a whirl.
 
### License

Released under the MIT license: [opensource.org/licenses/MIT][2]

  [1]: http://i.imgur.com/KTB3ZVm.png
  [2]: http://opensource.org/licenses/MIT