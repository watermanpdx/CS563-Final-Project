# Journal

## About

The following document is a journal documenting the creation of the personal website for the CS563 project. Within is contained documentation of major updates as well as design decisions and challenges faced in the development of the website.

## Journal Entries

### Initial Setup

> Commit capturing this state: [b368d40](https://github.com/watermanpdx/CS563-Final-Project/commit/b368d40)

The base repo was set up and initialized with an initial README.md, journal (this document), and "Hello World" index.html. At the time of this commit, no major content was added to index.html and no styling or javascript was included. The purpose of this initial update was to ensure the github repository index.html hosting was working as expected.

I decided to capure my journal as a markdown file similar to the README.md as it makes it easy to format, and deploy directly together with the code.

One challenge that I encountered was that I have a personal GitHub account that I use for personal projects. I ran into issues on my local machine trying to clarify which account I was using, and what credentials to use. I couldn't quite get my PDX credentials and account to work locally along with my personal account. Not wanting to disrupt my personal account, I chose instead to add my personal account [`TayticusPrime`](https://github.com/TayticusPrime) as a collaborator and author my changes from this account.

> **Disclaimer**
> Changes to this repository will show up from the account [`TayticusPrime`](https://github.com/TayticusPrime). This personal account is owned by me, Tayte Waterman, and the work contained in this repo is soley my own.

### Initial Setup

> Commit capturing this state: [d3b94de](https://github.com/watermanpdx/CS563-Final-Project/commit/d3b94de)

The initial content "skeleton" was set up including basic links, html structure, and initial inclusion/implementation of Bootstrap for the Nav bar.

In this step I tried to focus on getting the bulk of the page information defined, with limited consideration to styling or final layout. My thought/approach is to try and avoid getting too caught up in design details too early before having a rough overview of what content would be included. I think it will be interesting to see if this helps the design (knowing what content to structure) or will cause challenges with needing to refactor as I finalize the design. Likewise, when structuring html, I already started adding some class and id information, but judiciously chose to not pre-define too much.

I use the Bootstrap resources [https://getbootstrap.com/docs/5.3/components/navbar/#nav](https://getbootstrap.com/docs/5.3/components/navbar/#nav) as a template to set up my navbar. One small issue I encountered was that I both mistakenly included the wrong version of Bootstrap in my html file, as well as forgot to include the Bootstrap javascript file. This caused issues with the coloring theme (changed syntax between versions) as well as an inability to use the navbar collapse feature without javascript.
