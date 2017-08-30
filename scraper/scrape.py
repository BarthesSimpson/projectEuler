# This script scrapes the number of solutions posted for each problem in the set.
# I was interested to see whether this follows a power law distribution

import urllib.request
from bs4 import BeautifulSoup
import re
from matplotlib import pyplot

def scrape(html, data, seen):
    soup = BeautifulSoup(html, 'html.parser')
    for row in soup.findAll('td', { 'class' : 'id_column' }):
        if not row.text in seen:
            seen.add(row.text)
            data.append(int(row.parent.find('div').text))



if __name__ == '__main__':
    data = []
    seen = set({})
    root = 'https://projecteuler.net/archives;page='
    i=1
    while(i<15):
        html = urllib.request.urlopen(root + str(i))
        print('scraping page %i' % i)
        if html.getcode() != 200:
            break
        scrape(html, data, seen)
        i+=1
    print(data)
    pyplot.subplot(2,1,1)
    pyplot.plot(data, color='blue', lw=2)
    # pyplot.plot(sorted(data, reverse=True), color='blue', lw=2)
    pyplot.yscale('log')
    pyplot.show()
