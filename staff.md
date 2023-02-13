---
layout: default
title: Hasidic Development Group
---

[Home](../) > {{ page.title }}

# HDG (חד"ג)

## Hasidic Development Group

We are (*as the name suggests*) a group of hasidic developers. Currently we have four teams and three members and we work as a team to help contribute to open source projects on github, we all work together to create websites, applications and do graphic designs for those who need them. We welcome new programmers to join our team and grow with us into a robust web company. Membership begins with joining our discord server and getting to know us, then we invite you to be a part of our company. All of us are active on GitHub and you can tag all of these teams on there for assistance on your repos.


{% for author in site.authors %}

## [{{ author.name }}](/authors/{{ author.github }})

### **{{ author.position }}**

{{ author.content }}

{% endfor %}

<hr/>

## GitHub Teams

We love to contribute on GitHub and we designed our teams to be able to do that. If you own a repo and are stuck on some element of your program or website, Simply create a new issue in your repo and tag whatever team below applies to your situation and we will jump right in and help if we are able.

<dl>
  <dt>@hasidicdevs/web</dt>  
    <dd>For help on web issues. Whether this be with a web application {JavaScript || Python} or an extension / app that is installed in a browser like @ChromeOS or @mozilla, we want to help.</dd>
  <dt>@hasidicdevs/bot</dt>  
    <dd>For help with our bots. If you are using one of our prebuilt bot packages from npm and are having an issue, or if you are in one of our servers and are having an issue, just tag this team and raise the issue and we will come right in.</dd>
  <dt>@hasidicdevs/api</dt>  
    <dd>For help on our Sefaria API. We are in the process of building a better API to use with sefaria.org if you have access to that and are running into an error please tag us and we will help resolve it.</dd>
  <dt>@hasidicdevs/graphics</dt>  
    <dd>For help on graphics. If you need a new logo designed or some video editing done for tiktok, facebook, twitter or anything else Brian is amazing and he is available daily to assist you.</dd>
</dl>