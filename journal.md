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

### Content Population

> Commit capturing this state: [d3b94de](https://github.com/watermanpdx/CS563-Final-Project/commit/d3b94de)

The initial content "skeleton" was set up including basic links, html structure, and initial inclusion/implementation of Bootstrap for the Nav bar.

In this step I tried to focus on getting the bulk of the page information defined, with limited consideration to styling or final layout. My thought/approach is to try and avoid getting too caught up in design details too early before having a rough overview of what content would be included. I think it will be interesting to see if this helps the design (knowing what content to structure) or will cause challenges with needing to refactor as I finalize the design. Likewise, when structuring html, I already started adding some class and id information, but judiciously chose to not pre-define too much.

I use the Bootstrap resources [https://getbootstrap.com/docs/5.3/components/navbar/#nav](https://getbootstrap.com/docs/5.3/components/navbar/#nav) as a template to set up my navbar. One small issue I encountered was that I both mistakenly included the wrong version of Bootstrap in my html file, as well as forgot to include the Bootstrap javascript file. This caused issues with the coloring theme (changed syntax between versions) as well as an inability to use the navbar collapse feature without javascript.

### Page Presentation, Initial Javascript, and Card Layout

> Commit capturing this state: [d19f4bf](https://github.com/watermanpdx/CS563-Final-Project/commit/d19f4bf)

In this update I added Javascript to hide/show the different "pages" on my site via Javascript. Rather than implementing as multiple .html files I chose insted to use Javascript on the navbar clicks to dynamicaly enable/disable visibility. I did this via manipulation of the Bootstrap "d-none" class to hide elements in the dom when not in view. One small complication was that to ensure mutual-exclusivity between sections, the Javascript code needed, at each click, to iterate over all other nav elements to explicitly enable/disable them.

Next I added in a background image and started to convert the text-contents into bootstrap cards. One complication (that I have to admit I still don't understand, but have found via research) I encountered was "margin collapsing". I made my navigation bar fixed so that the user would always see it. that worked, but the content behind it was partially hidden. Initially I fixed this by adding a margin on top of "main". This worked, but I then wanted to add general margins to the content within main. I then decided to add a "dummy" element "nav-reserve" to insert padding at the top of the document of equivalent height to the navbar. This kind-of worked, but when I then applied margins to main, I had expected that the margin from nav-reserve and main would add, but they didn't; the top of main was always flush with the navbar. From research I learned that "margin collapsing" can cause margins to overlap. I still (as of this entry) do not understand the logic which leads to a "collapse", but switching nav-reserve to a padding rather than margin removed this. Now the margin on main is preserved, and does not merge with the header/nav. I will need to research/test this further to better understand...

Last, I moved the majority of the contents to Bootstrap cards as the layout, backfill, etc was a more visually-pleasing way of seeing the data. Unfortunately, to do this, that meant undoing a lot of the `<ul>`/`<li>` structures I had previously defined. To my previous remarks; this did require a bit of refactoring, but design-wise I found it helpful to have the general content defined before styling, even if it required reformatting. I found itentifying the "what" of the contents was less difficult than refactoring the "how."

### Background Cleanup and Footer Addition

> Commit capturing this state: [f43c65f](https://github.com/watermanpdx/CS563-Final-Project/commit/f43c65f)

I found after pushing my commit to GitHub, accessing my site via mobile resulted in tiling of my image. The first changes I needed to make involved adjustment to my custom styles.css to force my background image to fit to the vertical height of the viewport. I found this rather challenging, and had to try several iterations to find the right combination of attributes to use. Ultimately it came down to several iterations trying to identify what attributes (css) I really wanted to control and what supported the most responsiveness. Honestly, it required a lot of trial-and-error. At times it became difficult to separate out what was my lack of knowledge on css syntax and what was my misunderstanding of what I actually wanted to acheive (what dimensions I _really_ wanted to control)...

I also populated my footer and added into it links to some of my external accounts/profiles (GitHub and LinkedIn). I built it based on the bootstrap templates defined here: [https://getbootstrap.com/docs/5.3/examples/footers/](https://getbootstrap.com/docs/5.3/examples/footers/). Populating the content was rather trivial, but getting the formatting I wanted ended up being a little challenging. Specifically, when the content of the page was smaller (About and Contact) the footer would "float" in the middle of the page as the body didn't paint the entire viewport. I was able to find a solution by using bootstrap .flex-fill on <main> and .min-vh-100 on <body>. This forced the body to take up the entire viewport when the content was small, and "inflate" the main section in order to "push" the footer to the bottom. This last feature took a disproportionatly long time compared to others, and ultimately I had to find it out through a series of searches and references in the Bootstrap documentation [https://getbootstrap.com/docs/4.1/utilities/flex/](https://getbootstrap.com/docs/4.1/utilities/flex/) until I found something that provided the functionality that I wanted...

### Refinement of About

> Commit capturing this state: [9baedfc](https://github.com/watermanpdx/CS563-Final-Project/commit/9baedfc)

In this set of updates I decided to update my About section. Initially, I recycled some text from LinkedIn and my personal resume, but it felt too formal and focused on just my career and education. I decided to change the wording and expand on a bit more personal content as well as include a set of personal photos. As one of my (very amateur) hobbies is photography, I chose to add a bunch of photos including my family, our travels, and interesting pics.

To display the photos, I assembled them together in a bootstrap grid, including options to adjust the number of columns with screen-size to make it more responsive. When in large screens there are 3 columns, mid 2, and small 1. I felt this gave a natural repsonsiveness "feel" when scaling the viewport width.

One challenge/limitation I ran into was the management of my "About" section photo-gallery. I decided to add many photos (per above), but found that hard-coding it into the html was not the most efficient, scalable, nor pleasant... There were many divs I needed to copy repeatedly, and it was a pain to update as I changed photo order and the number of photos. I chose to use Javascript to populate the contents via insertion of html strings [https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML). This allowed me to just define the properties I wanted once, in one place and reduced a lot of repetitious code in my main html document. I defined in Javascript an array of files to iterate over and populate each div. This works, but I don't like the hard-coding of the photos. Ideally, I would have preferred to just let it identify and iterate over the files in `images/gallery/`, but I wasn't able to find a "vanilla" way to do so without using modules or frameworks outside of the scope of this course.

### Shift of Contacts to Modal and Link Updates

> Commit capturing this state: [9ba85a3](https://github.com/watermanpdx/CS563-Final-Project/commit/9ba85a3)

In this update I chose to move the contact section away from being a dedicated page into a modal element + form. In it I wanted to include an email and message to allow the user to reach out and send a message. Along with that I want it to summarize some of my key links/accounts (GitHub, LinkedIn).

In adding in these links I immediately found an issue in which clicking the link replaced the existing page. I decided for all of the links on my site, this was not the behavior I desired. After some research I identified that the `<a>` tags support in html the `target="_blank"` attribute [https://www.w3schools.com/tags/att_a_target.asp](https://www.w3schools.com/tags/att_a_target.asp) which redirects the link to open in a parallel tab.

I spent some time managing the form. The initial form setup into the modal element (referenced from Bootstrap [https://getbootstrap.com/docs/5.0/components/modal/](https://getbootstrap.com/docs/5.0/components/modal/), [https://getbootstrap.com/docs/4.1/components/forms/](https://getbootstrap.com/docs/4.1/components/forms/)) was pretty straight-forward. What I had the most challenge with was finding out and understanding the syntax for how to both retreive the form contents and close the modal easily. I slightly expected that the default behavior for the primary button would already allow for closing the modal and triggering Javascript. What I found was that I had to prevent default behavior and explicitly hide the modal to get the behavior I wanted. Likewise, I had to use the `FormData()` object to access the form data and extract it further with `.get()` object methods. The combination I found also invalidated the default email validation... I may come back to this in future iterations.

I also spent some time trying to get my form data to receive properly. For some time I wasn't able to get the data from my form as expected. However, I found this was basic user error. The use of `FormData()` was very convenient in getting all the form data from one query (rather than having to access every element), but missed some key tag in my html which caused the data to not be parsed appropriately. My primary issue was missing `name` attributes for my message data. Without this the `FormData()` object was unable to extract from it. Resolving this, the use of it was very clear.

Last, I chose to not actually connect the form/contact data to anything live (as in actually sending an email etc). I chose to do so both considering the scope of this project, but also as it will be hosted on a live, public, GitHub page, I don't want to necessarily, _actually_ expose personal contact in this way. Instead, I chose to just have the data printed to the console to show that it had been retreived and parsed into a json struct as expected.

### Contact Toast and Experience Overhaul

> Commit capturing this state: [](https://github.com/watermanpdx/CS563-Final-Project/commit/)

After some initial testing I didn't like how "silent" the contact request modal was to the user and decided to push some kind of alert when the request form was submitted. I found that Bootstrap has a nice and convenient features for this: Toast [https://getbootstrap.com/docs/5.3/components/toasts/](https://getbootstrap.com/docs/5.3/components/toasts/). I used the template here to add a toast linked with my form submission in Javascript. The toast automatically closes after a period or can be dismissed by the user. All of this logic was already implemented in Bootstrap making the integration very easy; I just needed to configure my html and then call the toast content in Javascript!

The major change I made in this section was to update the experience section of my site. In this section I included a lot of content. Most of my design decisions were driven by this. First I chose to include the Bootstrap accordion feature [https://getbootstrap.com/docs/5.3/components/accordion/](https://getbootstrap.com/docs/5.3/components/accordion/) to allow for the major sub-sections to be expanded and collapsed. I found this rather intuitive from the Bootstrap documentation, but had some difficulty with controlling the opacity of the contents. Since I have a background image, I don't want too much of my content to be opaque, but allow the background to bleed through. I initialy tried using native bootstrap keywords, but had to resort to overriding via CSS. Even after doing this I encountered some difficulty in how the bootstrap properties are inherited; it was not just the accordion body that needed to be touched. Ultimately it took a lot of trial-and-error to find a combination with the desired effect I wanted; I still wouldn't say I fully understand how the properties apply/flow through the accordion heirarchy...

Next for most of the contents I found that I wanted to implement a consistent layout between sub-elements. Similar to what I encountered with my photo-gallery, it also ended up taking up a lot of html real-estate and became very challenging to maintain. I chose to convert the content from this section into json structs into my javascript section and have the contents automatically populated by Javascript. This had the benefit of deploying updates instantly across all elements from one place, but had the downside of making my Javascript code more complex. It also meant that I didn't get the samy syntax highlighting from my IDE in the html doc in Javascript, since it was expecting another language (when describing the repeated code). This made the debugging at times a bit challenging. Also, it obscures whats going on in the .html; reading just the .html its less easy to understand what is actually happening in that section. All that said, I chose to keep it as the repeatability and updatability (once the base script was implemented) made general development more easy.

## References

### Included Images

- “iPhone‑Wallpaper 8Ogfqvw15Rg,” Unsplash, Accessed: Nov. 9, 2025. [Online]. Available: https://unsplash.com/photos/iphone-wallpaper-8Ogfqvw15Rg
- “LinkedIn free icon,” Flaticon, Accessed: Nov. 10, 2025. [Online]. Available: https://www.flaticon.com/free-icon/linkedin_3536505?term=linkedin&page=1&position=1&origin=search&related_id=3536505
- “GitHub free icon,” Flaticon, Accessed: Nov. 10, 2025. [Online]. Available: https://www.flaticon.com/free-icon/github_3291695
