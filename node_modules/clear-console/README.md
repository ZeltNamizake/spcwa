# clear-console
Like other console clearing modules but it works on my machine.

## usage
```
var clear = require('clear-console');
clear()
```
## `toStart` option
On Mac OS X terminal, this option clears to start (just like pressing &#8984;K):
```
var clear = require('clear-console');
clear({toStart: true})
```
