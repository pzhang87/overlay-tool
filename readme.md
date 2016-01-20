# Overlay Tool

This is a web-app that builds and serves pages to be used as stream overlays.

Initial design for use by the Collegiate Starleague. Potential extension to: One Nation of Gamers.

If at some point this becomes proprietary software, I'm going to take this repo down.

## User Stories / Planning

https://trello.com/b/XMCjmnju/overlay-tool

## Motivation

The weekly production asset pipeline for CSL overlays sucks. I'm getting real tired of having to input the same text into different fields of separate PSD files, having to save them locally and upload them to Dropbox for streamers/casters to retrieve and then load into OBS.

I'd rather input the text once somewhere online and render the pages, then have streamers/casters put it into OBS whether through download or online app. Potential benefit could be adding dynamic/animated elements to these pages.

At some point, if CSL API endpoints become a real thing, I'd love to be able to hit that API for some JSON and pass it into this app so I don't even have to manually do stuff, just select a match to generate overlays for.

## Options:
1. Write directly using HTML canvas onto a static background image, save page to PNG.
2. Write to HTML, have casters use CLR Browser to fetch page into OBS (options for local download). Add a script requirement (or have rendered templates in the head).

# Potential Technologies

* https://github.com/DanielHoffmann/jquery-bigtext
* https://html2canvas.hertzen.com/examples.html
* MongoDB
* ExpressJS/Node
* Backbone (or Angular or React)
