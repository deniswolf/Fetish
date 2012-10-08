#BDSM-Fetish

Notification Dashboard, which helps you to mark status of projects, servers and comment on their current state.


## Installation

1. Clone repository and run:

  *. `npm install`
  *. `npm install -g locomotive'

2. Configure authorization

  *. `https://code.google.com/apis/console/b/0/` - create app
  *. go to `API Access`
  *. create Client ID for `Web app`
  *. edit settings as:
    *. redirect url: `http://localhost:3000/auth/callback`
    *. origin: `http://localhost:3000`

  *. copy `config/config.json-template` to `config/config.json` and fill in parameters from the step above

3. Configure database:

  *. if you want - change database host and name in `config/database.json`
