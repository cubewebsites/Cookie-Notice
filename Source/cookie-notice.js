/*
---
description: This is a simple plugin which either uses MooTools (or jQuery, working on it) to add a nice Cookie notice bar to your site.

license: MIT-style

authors: Doeke Norg

requires:
- core/1.2.5:Element
- core/1.2.5:Cookie

provides: [Element]

...
*/

document.addEvent("domready",function()
{
    //Configure your notice bar here.
    var position = 'top'; // top or bottom;
    var contentWidth = 650; // width of site normally, you can fiddle with it
    var message = "This site makes use of tracking cookies to better our site. We don't follow you on the internet.";
    var okText = "Allright, thanks!";

    var moreInfoText = null; //name of button
    var moreInfoLink = null; //relative link, of absolute link.
    
    var cookieName = "cookie-notice-read"; //Name of cookie to save setting in. Yes, this also uses Cookies!
    
    //End of configuration, edit below at your own risk.

    var noticeRead = Cookie.read(cookieName || "cookie-notice-read") || false;
    if(!noticeRead)
    {
        var informationBar = new Element('div', { 
            styles : { 
                display: 'block', 
                position: 'fixed',
                zIndex: 999,
                background: 'rgb(0,0,0)',
                background: 'rgba(0,0,0,0.7)',
                left:0,
                right:0,
                color: '#FFF',
                fontSize: 13,
                lineHeight: 17,
                padding: '7px 0'
            }
        });
        var okButton = new Element('a.btn.btn-primary.btn-mini.ok', {
            html: okText || 'Ok',
            href: 'javascript:void(0)'
        });
        informationBar.addEvent('click:relay(.ok)',function(e) {
           e.preventDefault();
           informationBar.fade('out');
           Cookie.write(cookieName || 'cookie-notice-read',true);
        });
        
        if(moreInfoLink != null)
        {
            var moreInfoButton = new Element('a.btn.btn-mini', {
                target: '_blank',
                href: moreInfoLink,
                html: moreInfoText || "More info"
            });
        }                
        
        informationBar.setStyle(position == "top" ? 'top' : 'bottom',0);
        informationBar.innerHTML = '<div style="width:'+(contentWidth || 960)+'px; margin:0 auto;"><span>'+message+'</span> '+okButton.outerHTML+(moreInfoButton ? ' '+moreInfoButton.outerHTML : '')+'</div>';
        
        informationBar.inject(document.body);
    }
    
});