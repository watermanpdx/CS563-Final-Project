# Journal - CS563 Final Project, Tayte Waterman

**Author:** Tayte Waterman  
**Course:** CS56, Intro to Web Development  
**Org:** Portland State University  
**Project:** Final Project, Personal Webpage  
**Date:** Nov 23, 2025

## Project Location

Deployed site: [https://watermanpdx.github.io/CS563-Final-Project/](https://watermanpdx.github.io/CS563-Final-Project/)  
Source repository: [https://github.com/watermanpdx/CS563-Final-Project](https://github.com/watermanpdx/CS563-Final-Project)

## Journal Entries

### Initial Setup

> Commit capturing this state: [b368d40](https://github.com/watermanpdx/CS563-Final-Project/commit/b368d40)

The base repo was set up and initialized with an initial README.md, journal (this document), and "Hello World" `index.html`. At the time of this commit, no major content was added to `index.html` and no styling or `JavaScript` were included. The purpose of this initial update was to ensure that the GitHub repository `index.html` hosting was working as expected.

I decided to capture my journal as a markdown file similar to the README.md as it makes it easy to format, and deploy directly together with the code.

One challenge that I encountered was that I have a personal GitHub account that I use for personal projects. I ran into issues on my local machine trying to clarify which account I was using and what credentials to use. I couldn't get my PDX credentials and account to work locally along with my personal account. Not wanting to disrupt my personal account, I chose instead to add my personal account [`TayticusPrime`](https://github.com/TayticusPrime) as a collaborator and author my changes from this account.

> **Disclaimer**
> Changes to this repository will show up from the account [`TayticusPrime`](https://github.com/TayticusPrime). This personal account is owned by me, Tayte Waterman, and the work contained in this repo is solely my own.

### Content Population

> Commit capturing this state: [d3b94de](https://github.com/watermanpdx/CS563-Final-Project/commit/d3b94de)

The initial content "skeleton" was set up, including basic links, `HTML` structure, and initial inclusion/implementation of `Bootstrap` for the `navbar`.

In this step I tried to focus on getting the bulk of the page information defined, with limited consideration to styling or final layout. My thought/approach is to try to avoid getting too caught up in design details too early before having a rough overview of what content would be included. I think it will be interesting to see if this helps the design (knowing what content to structure) or will cause challenges with needing to refactor as I finalize the design. Likewise, when structuring `HTML`, I already started adding some class and id information, but judiciously chose to not pre-define too much.

I use the `Bootstrap` resources [https://getbootstrap.com/docs/5.3/components/navbar/#nav](https://getbootstrap.com/docs/5.3/components/navbar/#nav) as a template to set up my `navbar`. One small issue I encountered was that I both mistakenly included the wrong version of `Bootstrap` in my `HTML` file, as well as forgot to include the `Bootstrap` `JavaScript` file. This caused issues with the coloring theme (the syntax changed between `Bootstrap` versions) as well as an inability to use the `navbar` collapse feature without `JavaScript`.

### Page Presentation, Initial JavaScript, and Card Layout

> Commit capturing this state: [d19f4bf](https://github.com/watermanpdx/CS563-Final-Project/commit/d19f4bf)

In this update I added `JavaScript` to hide/show the different "pages" on my site via `JavaScript`. Rather than implementing as multiple `.html` files I chose instead to use `JavaScript` on the `navbar` clicks to dynamically enable/disable visibility. I did this via manipulation of the `Bootstrap` "d-none" class to hide elements in the `DOM` when not in view. One small complication was that to ensure mutual exclusivity between sections, the `JavaScript` code needed, at each click, to iterate over all other nav elements to explicitly enable/disable them.

Next I added in a background image and started to convert the text-contents into `Bootstrap` cards. One complication (that I have to admit I still don't understand, but have found via research) I encountered was "margin collapsing". I made my navigation bar fixed so that the user would always see it. That worked, but the content behind it was partially hidden. Initially I fixed this by adding a margin on top of "main". This worked, but I then wanted to add general margins to the content within main. I then decided to add a "dummy" element "nav-reserve" to insert padding at the top of the document of equivalent height to the `navbar`. This kind of worked, but when I then applied margins to main, I had expected that the margin from nav-reserve and main would add, but they didn't; the top of main was always flush with the `navbar`. From research I learned that "margin collapsing" can cause margins to overlap. I still (as of this entry) do not understand the logic which leads to a "collapse", but switching nav-reserve to a padding rather than margin removed this. Now the margin on main is preserved, and does not merge with the header/nav. I will need to research/test this further to better understand...

Last, I moved the majority of the contents to `Bootstrap` cards as the layout, backfill, etc. was a more visually-pleasing way of seeing the data. Unfortunately, to do this, that meant undoing a lot of the `<ul>`/`<li>` structures I had previously defined. To my previous remarks; this did require a bit of refactoring, but design-wise I found it helpful to have the general content defined before styling, even if it required reformatting. I found identifying the "what" of the contents was less difficult than refactoring the "how."

### Background Cleanup and Footer Addition

> Commit capturing this state: [f43c65f](https://github.com/watermanpdx/CS563-Final-Project/commit/f43c65f)

I found after pushing my commit to GitHub, accessing my site via mobile resulted in tiling of my image. The first changes I needed to make involved adjustment to my custom `styles.css` to force my background image to fit to the vertical height of the viewport. I found this rather challenging, and had to try several iterations to find the right combination of attributes to use. Ultimately it came down to several iterations trying to identify what attributes (`CSS`) I really wanted to control and what supported the most responsiveness. At times it became difficult to separate out what was my lack of knowledge on `CSS` syntax and what was my misunderstanding of what I actually wanted to achieve (what dimensions I _really_ wanted to control)...

I also populated my footer and added into it links to some of my external accounts/profiles (GitHub and LinkedIn). I built it based on the `Bootstrap` templates defined here: [https://getbootstrap.com/docs/5.3/examples/footers/](https://getbootstrap.com/docs/5.3/examples/footers/). Populating the content was rather trivial, but getting the formatting I wanted ended up being a little challenging. Specifically, when the content of the page was smaller (About and Contact) the footer would "float" in the middle of the page as the body didn't paint the entire viewport. I was able to find a solution by using `Bootstrap` .flex-fill on <main> and .min-vh-100 on <body>. This forced the body to take up the entire viewport when the content was small, and "inflate" the main section in order to "push" the footer to the bottom. This last feature took a disproportionately long time compared to others, and ultimately I had to find it out through a series of searches and references in the `Bootstrap` documentation [https://getbootstrap.com/docs/4.1/utilities/flex/](https://getbootstrap.com/docs/4.1/utilities/flex/) until I found something that provided the functionality that I wanted...

### Refinement of About

> Commit capturing this state: [9baedfc](https://github.com/watermanpdx/CS563-Final-Project/commit/9baedfc)

In this set of updates I decided to update my About section. Initially, I recycled some text from LinkedIn and my personal resume, but it felt too formal and focused on just my career and education. I decided to change the wording and expand on a bit more personal content as well as include a set of personal photos. As one of my (very amateur) hobbies is photography, I chose to add a bunch of photos including my family, our travels, and interesting photos.

To display the photos, I assembled them together in a `Bootstrap` grid, including options to adjust the number of columns with screen-size to make it more responsive. When in large screens there are 3 columns, mid 2, and small 1. I felt this gave a natural responsiveness "feel" when scaling the viewport width.

One challenge/limitation I ran into was the management of my "About" section photo-gallery. I decided to add many photos (per above), but found that hard-coding it into the `HTML` was not the most efficient, scalable, nor pleasant... There were many divs I needed to copy repeatedly, and it was a pain to update as I changed photo order and the number of photos. I chose to use `JavaScript` to populate the contents via insertion of `HTML` strings [https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML). This allowed me to just define the properties I wanted once, in one place and reduced a lot of repetitious code in my main `HTML` document. I defined in `JavaScript` an array of files to iterate over and populate each div. This works, but I don't like the hard-coding of the photos. Ideally, I would have preferred to just let it identify and iterate over the files in `images/gallery/`, but I wasn't able to find a "vanilla" way to do so without using modules or frameworks outside of the scope of this course.

### Shift of Contacts to Modal and Link Updates

> Commit capturing this state: [9ba85a3](https://github.com/watermanpdx/CS563-Final-Project/commit/9ba85a3)

In this update I chose to move the contact section away from being a dedicated page into a modal element + form. In it, I wanted to include an email and message to allow the user to reach out and send a message. Along with that I want it to summarize some of my key links/accounts (GitHub, LinkedIn).

In adding in these links I immediately found an issue in which clicking the link replaced the existing page. I decided for all of the links on my site, this was not the behavior I desired. After some research I identified that the `<a>` tags support in `HTML` the `target="_blank"` attribute [https://www.w3schools.com/tags/att_a_target.asp](https://www.w3schools.com/tags/att_a_target.asp) which redirects the link to open in a parallel tab.

I spent some time managing the form. The initial form setup into the modal element (referenced from `Bootstrap` [https://getbootstrap.com/docs/5.0/components/modal/](https://getbootstrap.com/docs/5.0/components/modal/), [https://getbootstrap.com/docs/4.1/components/forms/](https://getbootstrap.com/docs/4.1/components/forms/)) was pretty straight-forward. What I had the most challenge with was finding out and understanding the syntax for how to both retrieve the form contents and close the modal easily. I slightly expected that the default behavior for the primary button would already allow for closing the modal and triggering `JavaScript`. What I found was that I had to prevent default behavior and explicitly hide the modal to get the behavior I wanted. Likewise, I had to use the `FormData()` object to access the form data and extract it further with `.get()` object methods. The combination I found also invalidated the default email validation... I may come back to this in future iterations.

I also spent some time trying to get my form data to receive properly. For some time I wasn't able to get the data from my form as expected. However, I found this was basic user error. The use of `FormData()` was very convenient in getting all the form data from one query (rather than having to access every element), but missed some key tag in my `HTML` which caused the data to not be parsed appropriately. My primary issue was missing `name` attributes for my message data. Without this the `FormData()` object was unable to extract from it. Resolving this, the use of it was very clear.

Last, I chose to not actually connect the form/contact data to anything live (as in actually sending an email etc.). I chose to do so both considering the scope of this project, but also as it will be hosted on a live, public, GitHub page, I don't want to necessarily, _actually_ expose personal contact in this way. Instead, I chose to just have the data printed to the console to show that it had been retrieved and parsed into a `JSON` struct as expected.

### Contact Toast and Experience Overhaul

> Commit capturing this state: [ca38201](https://github.com/watermanpdx/CS563-Final-Project/commit/ca38201)

After some initial testing I didn't like how "silent" the contact request modal was to the user and decided to push some kind of alert when the request form was submitted. I found that `Bootstrap` has a nice and convenient features for this: Toast [https://getbootstrap.com/docs/5.3/components/toasts/](https://getbootstrap.com/docs/5.3/components/toasts/). I used the template here to add a toast linked with my form submission in `JavaScript`. The toast automatically closes after a period or can be dismissed by the user. All of this logic was already implemented in `Bootstrap` making the integration very easy; I just needed to configure my `HTML` and then call the toast content in `JavaScript`!

The major change I made in this section was to update the experience section of my site. In this section I included a lot of content. Most of my design decisions were driven by this. First I chose to include the Bootstrap accordion feature [https://getbootstrap.com/docs/5.3/components/accordion/](https://getbootstrap.com/docs/5.3/components/accordion/) to allow for the major sub-sections to be expanded and collapsed. I found this rather intuitive from the `Bootstrap` documentation, but had some difficulty with controlling the opacity of the contents. Since I have a background image, I don't want too much of my content to be opaque, but allow the background to bleed through. I initially tried using native `Bootstrap` keywords, but had to resort to overriding via `CSS`. Even after doing this I encountered some difficulty in how the `Bootstrap` properties are inherited; it was not just the accordion body that needed to be touched. Ultimately it took a lot of trial-and-error to find a combination with the desired effect I wanted; I still wouldn't say I fully understand how the properties apply or flow through the accordion hierarchy...

Next for most of the contents I found that I wanted to implement a consistent layout between sub-elements. Similar to what I encountered with my photo-gallery, it also ended up taking up a lot of `HTML` real-estate and became very challenging to maintain. I chose to convert the content from this section into `JSON` structs into my `JavaScript` section and have the contents automatically populated by `JavaScript`. This had the benefit of deploying updates instantly across all elements from one place, but had the downside of making my `JavaScript` code more complex. It also meant that I didn't get the same syntax highlighting from my IDE in the `HTML` doc in `JavaScript`, since it was expecting another language (when describing the repeated code). This made the debugging at times a bit challenging. Also, it obscures what's going on in the `.html`; reading just the `.html` it's less easy to understand what is actually happening in that section. All that said, I chose to keep it as the repeatability and updatability (once the base script was implemented) made general development more easy.

### Projects Page Update

> Commit capturing this state: [7f186ba](https://github.com/watermanpdx/CS563-Final-Project/commit/7f186ba)

In this section I updated the Projects section of my site. One item I wanted to add was a video of at least one of my projects (the RPi-Stepper). Initially, I wanted to directly embed this into my site and learn how to play/control it via `HTML` directly. However, from the video-size and hosting off of GitHub this was infeasible. However, I found a very easy and convenient solution. I hosted the desired video on YouTube and referenced it directly via `<iframe>`. This was really nice as I didn't have to worry about local storage or challenges with video UI. Also, considering the popularity of YouTube, using its UI seemed to be a generally good approach. One issue I encountered was that I was unable to add my YouTube URL directly into the `<iframe>` tag. Doing so, I ran into security issues flagged by my browser alerting that the YouTube security policy wouldn't allow direct embedded references to the URL. However, this was easy to overcome. It turns out that in YouTube itself, using share/embedded, YouTube provides a specific embedded URL, and even formats it into an `<iframe>` tag directly. I was able to include this directly to link to the video. Beyond that, I was able to use basic `Bootstrap` formatting on it as if it were any other type of image or div.

I also updated my project layouts. I moved the date and link for each into a footer and transferred each to a card. I chose not to do this programmatically as with the experience section as I wanted more flexibility with each to customize them. I also only had three sections to manage. I also updated my title (including on my About page) to be a card. Although I know this isn't really how cards are generally used, I liked the look of it given my background image.

I also chose to add a footer to each of my project cards with a GitHub icon linking to my source code. I may revisit this. I like how it looks visually, but I'm also concerned that it's not apparent that the icons themselves are links. Normally, there is so much on webpages in terms of icons and links I personally tend to ignore such icons; yet they seem to be common. I'd be curious from a design (not technical-design) whether there are better, or more standard practices.

### Aesthetics and Content Review

> Commit capturing this state: [e04b28b](https://github.com/watermanpdx/CS563-Final-Project/commit/e04b28b)

In this update, my goal is to finalize the website; final touches and checks for accessibility, errors, responsiveness etc.

One immediate, minor visual item I changed was I changed the color of my "header cards" that titled subsections and the coloring of the "skill" blocks in my Experience section. As previously described, I used `Bootstrap` cards for this, but not really as cards; this was more a custom use-case. As such, I also needed to add my own color styling in `CSS` to control these elements. I created my own classes `bg-title` and `bg-skill` to define these custom background colors. I had to use the `!important` modifier to ensure they overrode the `Bootstrap` defaults. I wanted to match the title cards colors to the nav banner. I wasn't able to get quite the same shade/color I wanted via the provided `Bootstrap` classes/features, but I wanted it to roughly match. I used the inspector to extract the banner rgb values and then manually adjusted them (lightened) in `CSS` until I got what I wanted.

I also decided to move my non-accordion sections into cards with headers, shifting my "cards as headers" to headers in cards. I also added a semi-translucent background to help visually hold the cohesiveness of a section and make it more similar to the accordion layout. To achieve the translucency I used the `rgba()` utility in `CSS` to set a white background but adjust the alpha value to achieve the desired transparency level. One challenge I ran into however was the application of consistent properties. I attempted in my `CSS` to have one class defined for key items, such as the background translucency via `bg-translucent`. This generally worked except for the accordions. I was unable to find a single spot where this class could be applied to get the desired behavior. Likewise, removing the background color from my existing `CSS` overrides for the accordion somehow also made the border reappear (I had set it to transparent here as well)! I struggle a bit with understanding how properties flow through this construction and where they are most appropriately defined... In the end I decided that I was still able to unify most content into a single class, it was just the accordion `CSS` definitions which required a redundant `rgba()` definition, and I would leave it. I achieved the desired behavior, but with more time/review I feel this could be cleaned up a bit.

I took the opportunity in this update to rearrange the sections in my `HTML`. In example, I initially had the Experience section displayed before the Projects section. I swapped this in a previous update in the nav-bar, but not in the `HTML`. This doesn't impact the behavior of the site, but made the `HTML` layout not reflect the general structure of the website; from the developer perspective it made the `HTML` a little more difficult to scan through/review.

I also updated the contents of my About section wording; I just didn't like the wording and wanted some small tweaks.

### Accessibility, Code Review, and Testing

> Commit capturing this state: [627bd8e](https://github.com/watermanpdx/CS563-Final-Project/commit/627bd8e)

#### Accessibility and Best-Practices

In this update I jointly used WAVE, Lighthouse, and manually reviewed through my code to identify where accessibility, or generally helpful/necessary tags may be missing. Below is a summary of some of the items that I uncovered:

- Links missing `title` attribute. This attribute helps provide contextual information like a short description when the mouse hovers over it
- Missing `alt` descriptions for images
- Lack of use of "lazy" loading for images and iframe references
- Missing `meta` info in header about website (for search engine optimization)
- Missing link references in `navbar-brand`, recommended for search engine optimization

#### Code Review

I found several syntactic and malformed items that benefited from being updated:

- duplicate `education-contents` ID, removed
- duplicate `collapsed` class definition in first accordion

#### Testing

I also tested the application across multiple aspect ratios via the developer tools, as well as on separate devices; my laptop and personal phone. I uncovered several issues when testing against different environments.

- I found that the nav-bar automatically collapsed and provided a drop-down menu as expected on smaller screens. However, when clicking a link, the menu did not close, obscuring the contents of the page. It seems that by default `Bootstrap` doesn't support this as its assumed the links lead to another page (which is a fair assumption). In my case with one page, I had to control this directly via `JavaScript`. To do so I had to get the `Bootstrap` collapse entity [https://getbootstrap.com/docs/5.0/components/collapse/](https://getbootstrap.com/docs/5.0/components/collapse/) and call its `.hide()` method. I encountered some minor issues with attempting to grab this entity before it was initialized. The `getOnCreateInstance()` method helped with this as it supports the fetching of it only after the object is initialized. However, it had a secondary side effect of setting the collapsed state to expanded immediately on load; the menu started expanded. After digging, I found that it is also possible to pass initial states to the `getOnCreateInstance()` [https://stackoverflow.com/questions/75949166/why-does-bootstrap-5s-getorcreateinstance-method-for-collapsibles-immediately](https://stackoverflow.com/questions/75949166/why-does-bootstrap-5s-getorcreateinstance-method-for-collapsibles-immediately).
- I also found that when on smaller screens the right and left margins were too wide. What looked good for a larger screen ate up a lot of screen real-estate on a small one. I updated the `mx` `Bootstrap` classes with explicit screen sizes in the outermost page div; e.g. `mx-md-5`.
- I found that in the contact form, it allowed the user to submit data without actually entering an email or message. It turns out this is super easy to enforce; it can be enforced within `HTML` directly via the `required` attribute [https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/required](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/required).
- Issue with missing favicon. After further research it seems that it is just a general issue with a tab icon not being provided. I included a "W" image from [https://www.flaticon.com/](https://www.flaticon.com/) and the warning disappeared.
- I have many warnings for missing code return types, unsupported features, etc. After researching I found that these are a combination of issues with Firefox supported-features and deprecated features stemming from the inclusion of the YouTube video in my Projects section [https://stackoverflow.com/questions/61624146/feature-policy-skipping-unsupported-feature-name-picture-in-picture-autopl](https://stackoverflow.com/questions/61624146/feature-policy-skipping-unsupported-feature-name-picture-in-picture-autopl). Generally, from what I could find, it seems that this stems from "max complexity" features from YouTube and errors from the inclusion of their minified scripts. My understanding is that these warnings depend on the specific browser, but generally the definition as supplied and included by YouTube (I was provided the `iframe` contents directly from YouTube for my video) should not be changed; these warnings can be ignored.
- "Try it out" link in the Sorting-Algorithm, Projects page looked better as a button.

## Summary and Reflections

Overall I found this project very helpful in learning and applying the skills and technologies of this course. I have had some previous, personal experience (attempts...) at learning and using `HTML`, `CSS`, and `JavaScript` before, but this course and project helped highlight some areas I was not aware of, as well as demonstrate and enforce better practices.

### Bootstrap

The most beneficial topic for me personally was the use and application of the `Bootstrap` framework. I was not previously aware of this framework and had never used it before. It made design and implementation MUCH much easier than "vanilla" `HTML`, `CSS`, and `JavaScript`. The ability to use pre-made classes with features already embedded for responsiveness made managing content layout very easy and intuitive. I also appreciated how many "components" were available in the framework like `cards` and `accordions` all with similar themes. This made it quick to bring up features and have them already looking very modern "out of the box."

I also (as perhaps can be seen in my implementation) really liked the `card` component in how it provided a logical way to manage content, apply supplementary data like titles and footers, but also that you could use it recursively; `cards` within `cards`. It not only made content a bit easier to manage, but helped with the presentation. Personally, I also like how it makes content visually a bit more interesting too; it's not just a list of paragraphs as was common on the early web, but feels more graphically organized and appealing.

### Design Process

At the beginning of the project, I chose to populate all of my content, roughly, in a huge `HTML` document without any `CSS`, `JavaScript`, or `Bootstrap` content. My thought process was to just "flesh out" the content first, and consider the design second. On reflection I think this was a good approach but with some pitfalls. It really helped to have all of the content generally defined up-front so that for the rest of the project I could focus more on the styling and how I wanted to present it.

One thing I would be more cautious about in the future, was the premature assignment of classes and ids. When I created the initial document I already began tagging items with specific ids and classes. My thought was that if they were there, I wouldn't have to touch the `HTML` too much and just focus on the `CSS` and `JavaScript`. However, since I used `Bootstrap` as a framework, I ended up having to modify my `HTML` heavily as I went along. Further, it turned out that my `CSS` code rarely lined up with the initial tags I defined, or even if they did, not in the right spot in the `HTML` document. This ended up requiring me to remove or move many redundant tags.

In future projects I will likely still follow this approach of creating my rough contents up-front, but would avoid any tag assignment beyond immediate needs (`types`, basic dependencies, etc.). I think it would be easier to maintain applying these specific tags only as-needed, along the styling implementation.

### Scalability

As mentioned in some of the journal entries, I had many repeated patterns in my implementation. I chose to control this via `JavaScript` to better enforce consistency. That is, I would declare an `array` of `JSON` objects describing the content and then have `JavaScript` code that iterated over it and inserted it into the main `HTML` document. This helped a lot with consistency and helped avoid needing to make many changes, in many different places, when I chose to adjust the design.

That said, my implementation could still be cleaned up quite a bit. There was a lot of overlap in patterns between sections in Experience. In example, the Education and Work Experience cards were very similar. Also, I chose not to programmatically control the contents of Projects, but on reflection these sections are also very similar. I ended up having many sub-sections of very similar `JavaScript` code that could likely be combined to reduce my overall code, and simplify management of contents.

Were I to revise this further I would try and combine this into one central script with configuration variants that could manage small differences between objects; layout for Work-Experience vs Education as an example. I also would prefer to strip out the `HTML` document injection `JavaScript` code from the configuration and content details. The `JSON` descriptions for the contents I would rather have implemented in an external `config` file, and/or had the `JavaScript` scan over the file contents (for example the contents of `./images/gallery/`) to identify and load what to apply. This could help separate the contents from the styling. It would allow me to add or remove entries in a manner separate from the webpage styling itself.

I briefly looked into this but could not find a good way to do this without the use of modules or frameworks not covered in this course. I therefore chose to leave this out of scope. However, it is something I would consider in future projects.

### Staying Oriented

The biggest challenge I ran into was keeping my general "orientation" of where I was and how I was structuring contents within my page. As previously described, I heavily relied on the `card` component, and applied `cards` within other `cards`. This gave me the desired look I wanted, but I often found myself applying things like `margin` and other properties in the wrong locations; often leading to undesired "stacking" of computed properties. I often found myself getting lost in where content should be applied and how it was combining. In addressing this, I often found myself accidentally applying redundant structures or missing basic structures (`cols` without `rows`, etc.).

I think this is something that likely just comes with practice. However, I found it was something I regularly encountered and needed to keep pausing to make sure I was being mindful of "where" I was in the document regularly. I will say that having tried to manage contents in previous personal projects without frameworks like `Bootstrap` this was much more difficult. Such frameworks really help in unburdening the developer from getting lost in details, but it doesn't completely remove them.

### Accessibility

Accessibility considerations were completely new to me. I have to admit, in previous projects I haven't considered this, or running audits through software like WAVE or Lighthouse. I think this is really important, and was glad to learn and apply it. I also found that using tools like Lighthouse were also helpful in highlighting other practices and issues in my code. The audit-phase checking for this content really helped in adding the final "touches" to my site, and felt like a very valuable skill to apply moving forward.

I was able to successfully remove all errors flagged by WAVE, and achieve a 100/100/100 (Accessibility / Best-Practices / SEO) score via Lighthouse audit.

## References

### Included Images

- Daimler Truck AG, “Daimler Truck AG,” [Online]. Available: [https://www.daimlertruck.com/en](https://www.daimlertruck.com/en). Accessed: Nov. 22, 2025.
- Daimler Truck North America LLC, “Daimler Truck North America,” [Online]. Available: [https://northamerica.daimlertruck.com/](https://northamerica.daimlertruck.com/). Accessed: Nov. 22, 2025.
- Flaticon, “GitHub free icon,” [Online]. Available: [https://www.flaticon.com/free-icon/github_3291695](https://www.flaticon.com/free-icon/github_3291695). Accessed: Nov. 10, 2025.
- Flaticon, “LinkedIn free icon,” [Online]. Available: [https://www.flaticon.com/free-icon/linkedin_3536505?term=linkedin&page=1&position=1&origin=search&related_id=3536505](https://www.flaticon.com/free-icon/linkedin_3536505?term=linkedin&page=1&position=1&origin=search&related_id=3536505). Accessed: Nov. 10, 2025.
- Flaticon, “Search results for ‘German flag’,” [Online]. Available: [https://www.flaticon.com/search?word=german%20flag](https://www.flaticon.com/search?word=german%20flag). Accessed: Nov. 22, 2025.
- Flaticon, “Search results for ‘Spain flag’,” [Online]. Available: [https://www.flaticon.com/search?word=spain%20flag](https://www.flaticon.com/search?word=spain%20flag). Accessed: Nov. 22, 2025.
- Flaticon, “Search results for ‘USA flag’,” [Online]. Available: [https://www.flaticon.com/search?word=usa%20flag](https://www.flaticon.com/search?word=usa%20flag). Accessed: Nov. 22, 2025.
- Flaticon, “Search results for ‘w’,” [Online]. Available: [https://www.flaticon.com/search?word=w](https://www.flaticon.com/search?word=w). Accessed: Nov. 22, 2025.
- Gigaphoton USA Inc., “Gigaphoton USA,” [Online]. Available: [https://www.gigaphoton.com/](https://www.gigaphoton.com/). Accessed: Nov. 22, 2025.
- Oregon Institute of Technology, “Oregon Institute of Technology,” [Online]. Available: [https://www.oit.edu/](https://www.oit.edu/). Accessed: Nov. 22, 2025.
- Oregon State Board of Examiners for Engineering & Land Surveying (OSBEELS), “OSBEELS,” [Online]. Available: [https://www.oregon.gov/osbeels/](https://www.oregon.gov/osbeels/). Accessed: Nov. 22, 2025.
- Portland State University, “Portland State University,” [Online]. Available: [https://www.pdx.edu/](https://www.pdx.edu/). Accessed: Nov. 22, 2025.
- “iPhone‑Wallpaper 8Ogfqvw15Rg,” Unsplash, [Online]. Available: [https://unsplash.com/photos/iphone-wallpaper-8Ogfqvw15Rg](https://unsplash.com/photos/iphone-wallpaper-8Ogfqvw15Rg). Accessed: Nov. 9, 2025.

### Frameworks and Troubleshooting

- Bootstrap, “Bootstrap Documentation (Navbar, Footers, Flex Utilities, Modal, Forms, Toasts, Accordion, Collapse),” [Online]. Available: [https://getbootstrap.com/](https://getbootstrap.com/). Accessed: Nov. 22, 2025.
- MDN Web Docs, “Element.insertAdjacentHTML() — Web APIs,” [Online]. Available: [https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML). Accessed: Nov. 22, 2025.
- MDN Web Docs, “required attribute,” [Online]. Available: [https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/required](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/required). Accessed: Nov. 22, 2025.
- W3Schools, “HTML a target Attribute,” [Online]. Available: [https://www.w3schools.com/tags/att_a_target.asp](https://www.w3schools.com/tags/att_a_target.asp). Accessed: Nov. 22, 2025.
- StackOverflow, “Why does Bootstrap 5’s getOrCreateInstance method for collapsibles immediately initialize?,” [Online]. Available: [https://stackoverflow.com/questions/75949166/why-does-bootstrap-5s-getorcreateinstance-method-for-collapsibles-immediately](https://stackoverflow.com/questions/75949166/why-does-bootstrap-5s-getorcreateinstance-method-for-collapsibles-immediately). Accessed: Nov. 22, 2025.
- StackOverflow, “Feature-policy: Skipping unsupported feature name picture-in-picture autoplay…,” [Online]. Available: [https://stackoverflow.com/questions/61624146/feature-policy-skipping-unsupported-feature-name-picture-in-picture-autopl](https://stackoverflow.com/questions/61624146/feature-policy-skipping-unsupported-feature-name-picture-in-picture-autopl). Accessed: Nov. 22, 2025.
