---
layout: default
title: Tweet Deck
---

[Home](/) > [Tools](/tools/index.html) > {{page.title}}


**Use these tweets to target select audiences** these all have less than 120 chars so you can add a bit more to it if you like, maybe a link to your blog or something?

* * *
# Tweets
<script>
    fetch('json/tweets.json').then(response => response.json()).then(function(key) {
      console.log(key.length)
      // Get a reference to the HTML element where you want to append the new 'p' elements
    const parentElement = document.querySelector('#parent-element');

      // Loop through the array of objects
      key.forEach((item) => {
        // Create a new 'p' element
        const pElement = document.createElement('p');
  
        // Set the 'innerHTML' of the 'p' element to the value of the 'body' property of the current object
        pElement.innerHTML = item.body;
  
        // Append the 'p' element to the parent element
        parentElement.appendChild(pElement);
      });
    })
  </script>
  <p id="parent-element"></p>