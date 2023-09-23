# Shahroodwifi

A command line tool to make `login` | `check credit` process much easier

```bash
$ scripts/run.sh
```

## Installation

```bash
$ git clone git@github.com:pialechini/shahroodwifi.git
$ cd shahroodwifi
$ npm install
$ npm run init
```

Open `auth.json` and enter your username, passwrod pair.

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

## Usage

```bash
$ scripts/run.sh
```

> If you want to access the `shahroodwifi` CLI tool globally (available only on Linux), you could run:
>
> ```bash
> $ npm run install
> ```
>
> then simply run the command below from wherever you want.
>
> ```bash
> $ shahroodwifi
> ```
