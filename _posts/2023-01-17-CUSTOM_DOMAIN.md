---
layout: post
title:  "Using A Custom Domain With Github Pages"
summary: "Learn how to set up a custom domain in github pages settings"
author: SoticOfficial
date: '2022-02-02'
category: ['github', 'gh-pages']
tags: GitHub, Guthub-Pages, Custom Domains
thumbnail: /assets/img/posts/code.jpg
keywords: git, github, domains
usemathjax: false
permalink: /blog/using-a-custom-domain/
---

I use [Google Domains](https://domains.google.com/) for my own domains so I will be using that in my example. The process is pretty simple if you are comfortable with configuring things like DNS Records, A Names, CNAME records etc. Nothing more complicated that that. The first step is to purchase your domain name. After that is done navigave to the DNS section on your account. 
<!--more-->
![custom-domain-names](https://user-images.githubusercontent.com/14003326/216833078-a52954cd-9c18-4f32-8ea1-79ff02775d4d.jpg)

## Table of Contents
- [Custom CNAME Records](#custom-cname-records)
- [Custom A Records](#custom-a-records)
- [Head Over To Github](#head-over-to-github)
- [Potential Errors](#potential-errors)

## Custom CNAME Records

Now we are going to add a CNAME, during the process of setting up your custom domain in Github settings it will create a CNAME file in the root directory of your github pages site to compare to the CNAME here. For the CNAME we will add it like the image below. Set up both your `Apex` domain `sitename.domain` and a `www` subdomain. Set them both for your username `<your-domain-name>.com`.

<!-- Configure CNAME records image -->

## Custom A Records

Then we will add 4 `A` records in the same panel.

<!-- Configure A NAME records image -->

## Head Over To Github

Once you have all of that set up you will head over to GitHub and go to the repository you want to serve up. It is common for most github users to have a repo named `{username}.github.io` which will be served up on github.io as a subdomain using your username. Once you have made that repo ([follow this tutorial](https://gist.github.com/yosileyid/6716c82e95be5fb57fd0bc17fb2ad0b9) to accomplish that if you don't have one) click on settings and head down to "Pages". In there scroll down to custom domain name settings and add your domain name. After it passes the checks click on "Enforce HTTPS" and you should be all set. If you run into any issues feel free to reach out to me. My contact info can be found in my GitHub profile. 

## Potential Errors

If you do not have everything set up exactly as it should be Github will throw you an error:

```
Both <your-domain-name>.com and its alternate name are improperly configured

Domain does not resolve to the GitHub Pages server. For more information, see Learn more (NotServedByPagesError). We recommend you add an A record pointed to our IP addresses, or an ALIAS record pointing to <your-username>.github.io.
```

If you run into this, check your DNS settings over where you manage those settings and make sure everything is set correctly. 