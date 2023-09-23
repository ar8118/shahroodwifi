# Shahroodwifi

A command line tool to make **login | check credit** process much easier

## Installation

```bash
$ git clone git@github.com:pialechini/shahroodwifi.git
$ cd shahroodwifi
$ npm install
$ npm run init
```

Open `auth.json` and replace sample usernames/passwords with yours. (you can add as many **"username": "password"** pairs as you want)

> if chrome couldn't be downloaded during npm install, use the link below,
> download and extract it somewhere (It is recommended to be in the app directory).
> Then in `package.json` add:
>
> ```json
> "config": {
>   "chromeExecutable": "/absolute/path/to/the/chrome/executable"
> }
> ```
>
> [Chrome For Linux Download Link](https://edgedl.me.gvt1.com/edgedl/chrome/chrome-for-testing/117.0.5938.92/linux64/chrome-linux64.zip)

> **Recommended For Linux Users**
>
> If you want to make this tool globally available, run `npm run install`.
> Then instead of `node src/shahroodwifi.js` you can use `shahroodwifi`.

## Usage

### Login

```bash
$ node src/shahroodwifi.js login <username>
# or if is globally installed:
$ shahroodwifi login <username>
```

The `username` must be defined in `auth.json`.

### Show credit

```bash
$ node src/shahroodwifi.js credit <username>
# or if is globally installed:
$ shahroodwifi credit <username>
```

The `username` must be defined in `auth.json`.
