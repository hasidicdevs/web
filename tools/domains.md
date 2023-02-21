---
layout: default
title: Domain Tool
---

[Dashboard](/dashboard) > Domain Tool

# {{page.title}}


  <div class="container" style="padding-top: 60px;">
    <div class="row">
      <div class="col col-12">
        <label for="clients">Select a client domain name to work with:</label><br/>
        <select id="mySelect"></select>
        <h2 id="client-domain" style="padding-top: 30px;"></h2>
        <dl id="myData">
          <dt>Client Status:</dt>
          <dd id="client-status">&nbsp;</dd>
          <dt>Contact Info:</dt>
          <dd id="client-name">&nbsp;</dd>
          <dt>Phone:</dt>
          <dd id="client-phone">&nbsp;</dd>
          <dt>Street Address</dt>
          <dd id="client-address-street"></dd>
          <dd id="client-address-city"></dd>
        </dl>
      </div>
    </div>
  </div>
  <script defer src="https://code.jquery.com/jquery-3.6.3.min.js"></script>
  <script defer src="scripts/test.js"></script>

