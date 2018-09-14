# [evekosofskysedgwick.net](evekosofskysedgwick.net)

This is the source code for the Jekyll project that generates the EKS website. If you are not familiar with how Jekyll works, it would be a good idea to familiarize yourself with the [docs](https://jekyllrb.com/docs/home/).

## Environment
Seeing as Jekyll runs on Ruby, you will have to install Ruby before working with this repo. Currently, we are using version `2.5.1` and cannot guarantee compatibility with other versions.

If you don't already have `rvm` on your system, it is highly recommended that you install it to manage your rubies. Find instructions at <https://rvm.io/rvm/install>.

#### Install `ruby-2.5.1`

```
rvm install ruby-2.5.1
rvm use 2.5.1
```

#### Clone the repo

```
https://github.com/eksnet/evesedgwick.git
cd evesedgwick
```

#### Install dependencies

```
bundle install
```

## Usage
You can run Jekyll locally as a development server. Which is what you'll want to do 99% of the time.

```
jekyll serve
## wait a few seconds, then check out your dev site at http://localhost:4000
```

You can also ask Jekyll to generate static assets. This happens automatically during deployment, so you really only need to do this if you are debugging a broken build.

```
jekyll build
```

## Editing
Contents for the site exist mostly as `.textile` or files in the `src/_posts` directory. See [One-off-pages](#one-off-pages) for exceptions to this.

*N.B.:* Files within the `_posts` directory are loosely organized in hierarchical directories, however this is purely for convenience and code hygeine. The location of content files does not affect how the corresponding documents are categorized in the site.

#### Format
Post filenames must fit the format `YYYY-MM-DD-description.textile`, per Jekyll conventions. More info on posts [here](https://jekyllrb.com/docs/posts/). Note that this constraint applies to items in `_posts` but not pages nested directly under `src`. Newer versions of Jekyll support a "Collections" format which is more flexible, but seeing as most of the content on this site predates this feature and the custom plugins assume everything is a 'post', we should continue to follow the post filename convention.

All documents must include a [front matter](https://jekyllrb.com/docs/frontmatter/) section at the top, signified by two lines of `---`. Jekyll will ignore files without this. This is where you specify metadata for the post. Front matter should be well-formatted [YAML](https://docs.ansible.com/ansible/latest/reference_appendices/YAMLSyntax.html).

In addition to the built-in attributes, such as `title`, `permalink`, `category` and `layout`, the custom plugins add a number of additional properties:

These properties are available on all layouts:

```yaml
---
layout: post                    # select which of the layouts in `src/_layouts` will be used
published: true                 # (optional) set to false to mark as a draft
permalink: /my-great-post.html  # (optional, discouraged) force jekyll to use this as page url
nav: blog                       # the high-level section for this post. Corresponds to the top nav bar.
category: blog                  # level of organization, this will be listed on the top-level page for each nav

tags:                           # (optional) used to group items across
  - events
  - lecture

title: "March 29, 2018: Dean Spade will present the Eighth Annual Eve Kosofsky Sedgwick Memorial Lecture at Boston University"
---
```

The following properties are used by layouts: `article`, `artwork`, `biography`, `book`, `document`, `exhibition`, `image`, `resource`:

```yaml
---
sub-title:
with: Michael Moon (first author), Benjamin Gianni, and Scott Weir
index_img: pic000136-01_thumb.jpg
related_media:                          # (optional) names of albums to include
    - { type: album, name: alb000102 }  # See "Albums" for more information.
---
```

The following properties are used by layouts: `article`, `artwork`, `biography`, `document`, `exhibition`, and `post`:

```yaml
---
meta: # (optional) provide structured metadata, to be displayed by the template
  - { key: location, value : Boston University }
  - { key: creation-date, value: 2018 }
  - { key: with, value: Dean Spade }
---
```


The following properties are specific to blog posts (`post` layout):

```yaml
---
related-images:                # (optional) filenames (excluding .jpg)
    - dean-spade-2015          # of one or more images saved in `src/images/blog`
---
```

The following properties are specific to archive items ( `artwork` `article`, `exhibition` layout):

```yaml
---
sub-category: "Adjective Game"  # determines which 'bucket' to place the work in on the category listing page
sub-title: "Adjective Game"
role: artist
type: "artist's book"           # further organizational device, allows content within a sub-category to be grouped
catalog-number: "000025-01"     # (optional)
index-desc: 'Response to C. Jacob Hale's "Leatherdyke Boys and Their Daddies - How to Have Sex Without Women or Men," published in the same special issue of <i>Social Text</i>. Sedgwick writes that Hale's paper begins "the project of articulating subjectivities that purposefully move across the boundaries of gender.''
# (index-desc is optional.) appears on category listing page if defined)
---
```

The following properties are specific to articles (`article` layout):

```yaml
---
pub-date: 1997
in:
    - description:  journal
      publication:  Social Text
      issue:        52/53, Vol. 15, Nos. 3 and 4
      date:         Autumn-Winter, 1997
      editors:
        - Phillip Brian Harper
        - Anne McClintock,
        - José Esteban Muñoz
        - Trish Rosen
---
```


The following properties are used by artworks only (`artwork` layout):

```yaml
---
medium: "book board, fabric"    # only "artwork"
dims: {width: 11, height: 8.5, depth: 0} # only "artwork"
year: ND                        # (optional) only used in certain templates
description: "Passage from Proust on three hinged boards with orange and green handmade papers, and repositionable, velcro-backed adjectives." # (optional)
---
```

The following properties are used by artworks only (`exhibition` layout):

```yaml
---
exhibition-location: "Cedar Creek Gallery, Durham, NC"
exhibition-date: 2000
---
```

The following properties are used by articles only (`article` layout):

```yaml
---
editor:
pub-date: 1996
in:
    - description:  book
      editors:      Eve Kosofsky Sedgwick
      publication:  "<i>Gary in Your Pocket: Stories and Notebooks of Gary Fisher</i>"
      publisher:    Duke University Press
      location:     Durham, NC
      date:         1996
---
```



#### One-off Pages
It doesn't make sense to build a template for information pages that don't need to be listed or categorized. In these cases, prefer to add a `.textile` or `.html` file directly in the `src` dir. See `index.html` `about.textile`, or `foundation.textile` for working examples. Pages added in this way will have a default url generated based on their filename. Note that these pages should *not* use the timestamp-title filename format described above for posts. Use `layout: base` to ensure the page is styled correctly.


### Layouts
Layouts are standardized templates used to render a number of visually/semantically grouped items. These templates live in `src/_layouts` and are referenced by the same name as their filename. They can be composed, and inherit each other. All templates in this site should inherit `_layouts/base`, which includes html boilerplate as well as various wrapper styles common to the whole site. Therefore, changes made to the base layout (such as modifying the navbar) propagate out to all pages. Pages, posts, and other templates must specify a layout using the following front matter:

```yaml
---
layout: base
---
```

Some layouts, such as `category_listing` and `category_posts`, are used exclusively by the plugins to generate listing pages during the build process.
