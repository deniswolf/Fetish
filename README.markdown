#Fetish

Notification Dashboard, which helps you to mark status of projects, servers and comment on their current state.

## Credits

Written by Denis Wolf

##License

Copyright (c) 2012 Wix.com, Inc

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---


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
