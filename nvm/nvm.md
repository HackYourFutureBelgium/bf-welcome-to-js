# NVM

> Node version manger is a tool allows you to download, install, manage, and
> upgrade Node. js versions

## Mac or Linux

1. copy this command and paste it in your terminal

```Markdown
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

depending on the shell you are using `bash` or `zsh` , open a new terminal and
using `ls -la` to show the hidden files, you will have one of those

`.bash_profile, .zshrc, .profile, or .bashrc`

1. open one of the files above using `nano` ex: `nano .zshrc` and paste this at
   the end

```Markdown
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

then `Ctrl + o` and Enter to save the changes and then `Ctrl + x` to exit.

Note : If you are using zsh open `.zshrc` using `nano .zshrc` and add nvm to
plugins plugins=(git nvm) only NO need to paste the above command

1. after that if you type on terminal

```Markdown
nvm --version
```

you should have a version.

## Windows

1. [CLICK HERE](https://github.com/coreybutler/nvm-windows/releases)
2. install nvm-setup.exe
3. restart your laptop
4. open git bash and type

```Markdown
nvm --version
```

You should have a version

## Install node version

1. run the command

```Markdown
nvm install 15
```

1. run the command to make node v15 your default version

```Markdown
nvm alias default 15
```

if you type `node -v` the version should be `15`

1. let us install `study-lenses` package

```Markdown
npm install -g study-lenses
```

now if you type `npm list -g --depth=0` you should see `study-lenses`
