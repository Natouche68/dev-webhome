# Dev WebHome

A simple homepage for browsers filled with shortcuts to surf across the web using lots of different search engines.

It's made using Svelte and Svelte Kit.

## Search engines

There are multiple search engines you can use. You can easily chooes one using the `!bang` syntax.

Here are the supported search engines:

- Ecosia _(default)_
- Phind : `!ai`
- Github : `!git`
- Youtube : `!yt`
- MDN : `!mdn`
- Dev.to : `!dev`
- Codepen : `!pen`
- Ecosia Images : `!img`

> Feel free to add your own by making a pull request !

## Make it your default search engine

You can easily make it your default search engine :

- Go in the settings of your browser
- Click on `Search engines` > `Manage search engines` and site search
- Add a new search engines with these details :
  - Search engine : **Dev WebHome**
  - Shortcut : `:dev` _(you can choose what you want)_
  - URL : `https://dev-webhome.vercel.app/search/%s`
- Click one the three dots and choose **Set as default**
