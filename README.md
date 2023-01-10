# node.js Random emoji Generator

> Generate random or chosen emojis on the command line

## Usage

> Generate random emoji:

```bash
node index.js
🍂
node index.js
😀
```

Or choose an emoji:

```bash
$ node index.js "strawberry"
🍓
```

If a emoji name cannot be found, throw an exeption:

```bash
$ node index.js "noEmoji"
This emoji does not exist
```
