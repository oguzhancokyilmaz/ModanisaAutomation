# Getting Started with Gauge



## Display number of items

* Go to modanisa
* Browser wait "3000"
* If there is popup close "div[id='insider-notification-content'] i[id*='icon-close-button']"
* Click "div[id='sign']" element
* Browser wait "3000"
* Click "input[data-label='by Email']" element
* Browser wait "3000"
* Login e-mail "oguzalex@hotmail.com" with "input[id='email']" and password "Q1w2e3r4" with "input[id='password']"
* Click "input[value='ÜYE GİRİŞİ']" element
* Browser wait "3000"
* If there is popup close "div[id='insider-notification-content'] i[id*='icon-close-button']"
* Browser wait "3000"
* Click "input[id='search']" element
* Write "abiye"
* Click "a[id='newHeaderFooter-search']" element
* Click "//*[@id='productsList']/li[1]" element
* Compare price "div[class='productPriceInfo-campaignText'] bdi[style='font-size:120%;font-weight:600;']" basket price "bdi[style='font-size:120%;font-weight:600;']" 
* Delete item from cart "a[class*='basketList-removeBasket']" "a[id*='basketList-removePopupRemoveButton']"

Add task "first task"
Must display "1 item left"
Add task "second task"
Must display "2 items left"

