Cookie Notice plugin
====================

This is a simple plugin wich either uses MooTools (or jQuery, working on it) to add a nice Cookie notice bar to your site. 
![Screenshot](http://disain.nl/images/cookie-notice.png)

Requires
----------

* A website
* MooTools (with cookie-support)
* (jQuery support will come soon)
* Twitter Bootstrap CSS

Options
-------
* position | Can either be top or bottom
* contentWidth | Width of the element that has te notice. (Default = 650). Element wil be centered, not the text.
* message | The actual notice message
* okText | Text the ok button wil have (Default= "Ok");
* moreInfoText | Text the more info button wil have in case of "moreInfoLink"
* moreInfoLink | link to a page with your cookie policy
* cookieName | Name of the cookie that will be used to save you acceptance

Usage
-----
Include MooTools (or in the future jQuery), the Twitter Bootstrap CSS and include cookie-notice.js just before the closing body tag. We need this because we check if MooTools (or jQuery) has been loaded.

Set your options in cookie-notice.js 

Now you'll have a nice notice bar so your customers / users will know you use cookies. Wich we all do, because of Facebook, Google analytics, etc.



