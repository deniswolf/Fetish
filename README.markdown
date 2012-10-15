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

### Prerequisites

### Node.js

#### Mac OS X
`brew install node'

#### Windows

Go to [official site](http://nodejs.org/) and grab newest version.

### Locomotive.js

`npm install -g locomotive'

### MongoDB

#### Mac OS X
`brew install mongodb`

#### Windows
[Download](http://www.mongodb.org/downloads) and setup as Windows Service according to [manual](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-windows/#mongodb-as-a-windows-service).
Don't forget to [run cmd as Administrator](http://stackoverflow.com/questions/4098909/got-access-is-denied-when-i-tried-to-install-64-bit-mongodb-in-windows-server).

### Configure



## Installation

1. Clone repository and run:

  *. `npm install`
  *. `npm install -g locomotive'

2. In `config` copy `config.json-template` to `config.json`, check out description below and setup all necessary parameters.

3. Authorization

  *. `https://code.google.com/apis/console/b/0/` - create app
  *. go to `API Access`
  *. create Client ID for `Web app`
  *. edit settings as:
    *. redirect url: `http://localhost:3000/auth/callback`
    *. origin: `http://localhost:3000`

  *. copy `config/config.json-template` to `config/config.json` and fill in parameters from the step above

4. Catabase:

  *. if you want - change database host and name in `config/database.json`

5. Feedback

  You can provide users with button to send you mail. To enable this - fill in parameters for 'feedback' in config.json