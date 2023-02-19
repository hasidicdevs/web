---
layout: default
title: Website Pricing Tool
---

[Dashboard](/tools/dashboard) > Tools > {{page.title}}

# Web Design Pricing Tool

This simple tool will walk you through picking the details for your website, this is just a base form. Once we recieve your email we will assign a member of the sales team to call you and discuss your needs so we can get a much more detailed understanding to prepare us for development. Once this tool has been used to gather basic information on the needs of the site, then go into the script for the [content worksheet](../client/content.md)

<form>
  <h2>Preliminary Information</h2>
  <br/>
  <h3>Domain Registration</h3>
  Do you need us to register a domain for you?
  <label>
    <input type="radio" name="register-domain" value="yes">
    Yes
  </label>
  <label>
    <input type="radio" name="register-domain" value="no">
    No
  </label>
  <br/>

  <blockquote>
    The price for domain registration begins at $50 for a simple domain name, and up to whatever the registrar is charging for the name they really have to have. Domain names can get really expensive, especially for large corporations.
  </blockquote>

  <br/>
  <h3>Legal Info</h3>
  Do you have a mission statement?
  <label>
    <input type="radio" name="mission" value="yes">
    Yes
  </label>
  <label>
    <input type="radio" name="mission" value="no">
    No
  </label>
  <p></p>

  Do you have a company values statement?
  <label>
    <input type="radio" name="values" value="yes">
    Yes
  </label>
  <label>
    <input type="radio" name="values" value="no">
    No
  </label>
  <br/>
  <blockquote>
    If they answer "No" then ask if they would like someone to help them create them for the purpose of the website. We are not lawyers, but we can offer to help build a couple simple pages for these specific reasons.
  </blockquote>
  <br/>

  <h2>Introduction Section</h2>
  <br/>

  <h3>What is the purpose of your website?</h3>
  <blockquote>
    Get as much info as this text box will hold! The more detailed the information the less time we have to spend fixing up errors on the site. We begin building as soon as we receive this form so please describe the intention of their site as good as you can. Also good to incluide here are links to fonts they want to use or color codes to use for the pallete of their website.
  </blockquote>
  <br/>
  <textarea name="message" rows="5" cols="50"></textarea>
  <br/>

  <h3>What sets your business apart from others in your industry?</h3>
  <blockquote>
    Get a general idea, sometimes people dont know what to say so let them be short with the answer if they need
  </blockquote>
  <textarea name="message" rows="5" cols="50"></textarea>
  <br/>

  <h3>Team Member Bios</h3>
  <blockquote>
    Just some basic info on members names and positions with the company, we can gather more data later in the process.
  </blockquote>
  <textarea name="message" rows="5" cols="50"></textarea>
  <br/>

  <h3>Contact information (phone, email, address)</h3>
  <textarea name="message" rows="5" cols="50"></textarea>
  <br/>
  <br/>

  <h2>Site Needs</h2>
  <h3>How many pages do you need?</h3>
  <input type="number" name="quantity" min="1" max="100" placeholder="5">
  <br/>

  <h3>Type of Site</h3>
  <label>
    <input type="radio" name="type" value="static">
    Static Website
  </label><br/>
  <label>
    <input type="radio" name="type" value="dynamic">
    Dynamic Website
  </label><br/>
  <label>
    <input type="radio" name="type" value="spa">
    Single Page Application
  </label>
  <br/>
  <br/>

  <h3>Will your site be image heavy / media heavy?</h3>
  <label>
    <input type="radio" name="media" value="regular">
    Not a lot, but more than 10
  </label>
  <label>
    <input type="radio" name="media" value="heavy">
    Lots of Images or videos
  </label>
  <br/>

  <h3>Give us the URL to your competitor...</h3>
  <input type="url" name="website" placeholder="https://hasidic.dev">
  <br/>

  <input type="submit" value="Submit">
</form>
<div style="padding-bottom: 77px"></div>
<script>

// Information to send

class Client {
  constructor(name, email, phone) {
    this.name  = name
    this.email = email
    this.phone = phone
  }
}

class Business {
  constructor(name, docs, desc) {
    this.name = name
    this.docs = docs
    this.desc = desc
  }
}

class Design {
  constructor(pages, page_names, media, type, purpose) {
    this.pages        = pages
    this.page_names   = page_names
    this.media        = media
    this.type         = type
    this.purpose      = purpose
  }
}

class Extras {
  constructor(registered, hosting, emails, url) {
    this.registered  = registered
    this.hosting     = hosting
    this.emails      = emails
    this.url         = url
  }
}

const Bob = new Client (
  name = "Bob Smith"
  email = "not@real.mail"
  phone = "(999) 999-9999"
)

const ExampleBiz = new Business (
  name = "ExampleBiz"
  docs = { privacy: false, mission: false, terms: false }
  desc = "what distinguishes your business from others...."
)

const DesignExample = new Design (
  pages = 7
  page_names = [ 
    "Home", 
    "About", 
    "Contact", 
    "Gallery", 
    "Blog", 
    "Schedule", 
    "Testimonials" 
  ] 
  media = "heavy"
  type = "static"
  purpose = "This will be a field of text from the description given of their business...."
)

const DomainName_com = new Extras()

</script>