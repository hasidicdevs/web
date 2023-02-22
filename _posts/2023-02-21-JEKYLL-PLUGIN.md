---
layout: post
author: yosileyid
title: "Creating A Youtube Jekyll Plugin For Your Blog"
tags: jekyll-plugin, jekyll, ruby
---

![plugin](https://miro.medium.com/max/1400/1*GbGksiZfHqQ9JCgwoVgGVg.jpeg)

## Introduction

Jekyll is a popular static site generator that allows users to easily create and maintain websites. Jekyll provides a variety of built-in features and functionalities, but users can also create their own plugins to extend the platform's capabilities.
<!--more-->
In this article, we'll go over the basics of how to create a plugin for a Jekyll site. We'll cover the key components of a Jekyll plugin and provide several code examples to demonstrate how to create a functional plugin.

## Prerequisites

Before we get started, you'll need to have a few things set up:

- A basic understanding of the Ruby programming language
- A Jekyll site set up on your local machine
- A text editor or integrated development environment (IDE)

## Understanding Jekyll Plugins

Jekyll plugins are pieces of code that extend the functionality of a Jekyll site. Plugins can be used to add new features, modify existing ones, or automate tasks.

Plugins are written in Ruby and follow a specific structure. The basic components of a Jekyll plugin include a Plugin class, which defines the plugin and its methods, and a series of hooks, which allow the plugin to interact with different parts of the Jekyll platform.

## Creating a Simple Jekyll Plugin
Let's start by creating a simple Jekyll plugin that adds a custom tag to our site. In this example, we'll create a plugin that allows us to embed YouTube videos in our posts.

First, we'll create a new directory in the root of our Jekyll site called _plugins. This directory is where we'll store our plugin files. Within this directory, we'll create a new file called youtube.rb.

In youtube.rb, we'll define our Plugin class and the youtube method, which will render the YouTube video player. Here's the code:

```ruby
module Jekyll
  class YouTube < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super
      @text = text
    end

    def render(context)
      "<div class='video-container'><iframe width='560' height='315' src='https://www.youtube.com/embed/#{@text}' frameborder='0' allowfullscreen></iframe></div>"
    end
  end
end

Liquid::Template.register_tag('youtube', Jekyll::YouTube)
```

Let's break down what's happening in this code:

- We're defining a new YouTube class that extends the Liquid::Tag class. This is the base class for all Jekyll tags.
- In the initialize method, we're setting the @text variable to the ID of the YouTube video we want to embed.
- In the render method, we're returning a string that contains the HTML code to embed the YouTube video player with the specified video ID.
- Finally, we're registering the youtube tag with the Liquid::Template class, so Jekyll knows to use our plugin to render this tag.

## Using the Plugin in a Jekyll Site
Now that we've created our plugin, we can use it in our Jekyll site. To do this, we'll simply add the {% youtube %} tag to our post or page, followed by the ID of the video we want to embed.

Here's an example of how to use our new youtube tag in a Jekyll post:

```yaml
---
layout: post
title: "My First Post"
---

Welcome to my first post! Check out this cool video:

{% youtube XcUUY8liq3M %}
```

When we build our Jekyll site, the {% youtube %} tag will be replaced with the HTML code to embed the YouTube video player with the specified video ID.

## Adding Configuration Options to the Plugin
Our simple Jekyll plugin works great for adding YouTube videos to our site, but what if we want to customize the width and height of the video player?

To allow users to customize the size of the video player, we can add configuration options to our plugin. In Jekyll, configuration options are defined in the _config.yml file in the root of the Jekyll site.

Let's modify our youtube.rb file to allow users to specify the width and height of the video player in the _config.yml file:

```ruby
module Jekyll
  class YouTube < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super
      @text = text
    end

    def render(context)
      site_config = context.registers[:site].config

      width = site_config['youtube_width'] || 560
      height = site_config['youtube_height'] || 315

      "<div class='video-container'><iframe width='#{width}' height='#{height}' src='https://www.youtube.com/embed/#{@text}' frameborder='0' allowfullscreen></iframe></div>"
    end
  end
end

Liquid::Template.register_tag('youtube', Jekyll::YouTube)
```
Here's what we've added:

- In the render method, we're getting the Jekyll site configuration from the context variable. This allows us to access any custom configuration options defined in the _config.yml file.
- We're defining width and height variables, which default to 560 and 315, respectively. If the user has specified custom values for these options in the _config.yml file, they will override these defaults.
- In the HTML code that renders the video player, we're using the width and height variables to set the size of the player.

Now, to customize the size of the video player, users can simply add the following lines to their _config.yml file:

```
youtube_width: 640
youtube_height: 360
```

## Adding a Generator to the Plugin

In addition to adding custom tags, Jekyll plugins can also include generators, which are pieces of code that generate additional content for a Jekyll site.

Let's create a generator that adds a list of recent posts to the footer of our site. We'll create a new file in our _plugins directory called recent_posts.rb.

```ruby
module Jekyll
  class RecentPosts < Generator
    priority :low

    def generate(site)
      posts = site.posts.reverse[0..4]
      recent_posts = "<ul>"
      posts.each do |post|
        recent_posts += "<li><a href='#{post.url}'>#{post.title}</a></li>"
      end
      recent_posts += "</ul>"
      site.config['recent_posts'] = recent_posts
    end
  end
end
```
Here's what's happening in this code:

- We're defining a new RecentPosts class that extends the Generator class.
- In the generate method, we're getting the five most recent posts from the site variable and creating a list of links to these posts.
- We're storing this list in a variable called recent_posts and setting it as a configuration option in the site variable.

Now, we can add the {% raw %}{{ site.recent_posts }}{% endraw %} liquid tag to our _layouts/default.html file to include the list of recent posts in the footer of our site.

```html
<footer>
  <div class="container">
    {{ content }}
    {{ site.recent_posts }}
  </div>
</footer>
```
When we build our Jekyll site, the recent_posts configuration option will be set to the HTML code for the list of recent posts, and this code will be included in the footer of each page.

## Conclusion
In this tutorial, we've covered the basics of creating a Jekyll plugin, including creating custom tags, adding configuration options, and creating generators. With these tools, we can extend the functionality of Jekyll in any way we can imagine.

If you want to explore Jekyll plugins further, take a look at the Jekyll plugin directory, where you'll find a wide variety of plugins created by the Jekyll community. You can also take a look at the Jekyll source code to see how the built-in Jekyll tags are implemented.

Now that you know how to create Jekyll plugins, you can create your own custom tags, generators, and filters to make your Jekyll site even more powerful and flexible. Happy coding!