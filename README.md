# Project Euler Solutions (ES6)

[Project Euler](https://projecteuler.net) has a bunch of math problems that I plan to tackle in my (endangered, possibly extinct) spare time. They are easier to solve in python, but I decided to take them on in ES6 for an added challenge.

Occasionally, I've take short-cuts, but for the most part I've tried
to implement everything from scratch and avoid falling back on libraries like bigInt that make some problems trivial.

## Getting Started

The solutions can be run using `node {/path/to/solution/}`. Helper functions have unit tests that require Jasmine as a dependency, so if you want to run those you need to run `npm i` (one time) to install that. Then run `npm test` to execute the tests.

## Web Scraper

I made a simple scraper to investigate the distribution of submitted answers, because I expected them to follow a power law. The file is `scraper/scrape.py`. If you want to run it, you need python3 and a few dependencies like beautifulsoup4 (which you need to install with pip3). The actual data is quite interesting: similar to what I expected, but with one significant quirk.
