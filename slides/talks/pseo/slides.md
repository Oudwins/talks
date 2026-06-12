---
theme: seriph
title: How we send 2M+ users/month to ElevenLabs with code
subtitle: Programmatic SEO systems
author: Tristan May
info: |
  Building systems that identify opportunities across millions of data points. Generating high-quality AI content at scale without human review. Optimizing thousands of pages at once to drive sign-ups.
class: text-center
drawings:
  persist: false
transition: slide-left
canvasWidth: 1920
aspectRatio: '16/9'
comark: true
duration: 35min
highlighter: shiki
mdc: true
---

<div class="h-full flex flex-col items-center justify-center px-16">
  <div class="mb-10 flex items-center gap-3 text-[#b8b8b8] text-sm tracking-wide uppercase">
    <div class="w-8 h-px bg-[#666]" />
    <span></span>
    <div class="w-8 h-px bg-[#666]" />
  </div>
  <h1 class="!text-[56px] !leading-[1.1] !font-bold text-white max-w-4xl tracking-tight">
    How we send 2M+ users/month to ElevenLabs with code
  </h1>
  <p class="mt-7 text-xl font-medium text-[#b8b8b8] max-w-3xl leading-relaxed">
Building systems that identify opportunities across millions of data points. Generating high-quality AI content at scale without human review. Optimizing thousands of pages at once to drive sign-ups.
  </p>
</div>

<!--
Hey from comment
-->


---
layout: image-right
layoutClass: gap-14
image: /assets/kid.jpg
---

<h1 class="!text-white !text-4xl !font-bold !tracking-tight">Who am I?</h1>

<div class="mt-8 space-y-4 text-lg text-[#a1a1a1]">
  <div class="flex items-start gap-4">
    <span class="text-[#444] mt-0.5">/01</span>
    <span>Wrote my first line of code at 10 or 11 trying to build a Unity game</span>
  </div>
  <div class="flex items-start gap-4">
    <span class="text-[#444] mt-0.5">/02</span>
    <span>Founder of many failed or sunset startups and side projects</span>
  </div>
  <div class="flex items-start gap-4">
    <span class="text-[#444] mt-0.5">/03</span>
    <span>Before Eleven, I worked as an SDE on software for operating spacecraft</span>
  </div>
  <div class="flex items-start gap-4">
    <span class="text-[#444] mt-0.5">/04</span>
    <span>I do a lot of open source work; biggest claim to fame is <code>Zog</code>, a validation library for Go</span>
  </div>
  <div class="flex items-start gap-4">
    <span class="text-[#444] mt-0.5">/05</span>
    <span>I work mostly on the marketing website</span>
  </div>
</div>



<!--
Say only
- Spacecraft
- Zog
-->



---
layout: image-right
image: /assets/loot.jpeg
class: bg-top
layoutClass: gap-14
---

<h1 class="!text-white !text-4xl !font-bold !tracking-tight">And also!</h1>

<div class="mt-8 space-y-4 text-lg text-[#a1a1a1]">
  <div class="flex items-start gap-4">
    <span class="text-[#444]">--</span>
    <span>I run my own home server</span>
  </div>
  <div class="flex items-start gap-4">
    <span class="text-[#444]">--</span>
    <span>I play Dungeons and Dragons and airsoft</span>
  </div>
</div>




---
layout: default
---

<div class="h-full px-16">
  <div class="pseo-shell -m-20 p-20">
    <div class="pseo-content flex flex-col justify-center px-10">
      <p class="pseo-kicker mb-10">Shared language</p>
      <div class="pseo-terms">
        <div class="pseo-term">
          <p class="pseo-term-label">Clicks</p>
          <p class="pseo-term-copy">
        Search engines sending users to our site.
          </p>
        </div>
        <div class="pseo-term">
          <p class="pseo-term-label">Attribution</p>
          <p class="pseo-term-copy">
        First page a user visits on our site.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!--
Clicks are mainly from Google and AI surfaces.
Signups and subscriptions are attributed to the first page they landed on inside the conversion window.
-->



---
layout: image
image: /assets/signups-by-source-pie.png
backgroundSize: contain
---


---
layout: default
---

<div class="h-full px-16 text-center">
  <div class="pseo-shell">
    <div class="pseo-content h-full flex flex-col items-center justify-center">
      <p class="pseo-kicker mb-8">Part 2</p>
      <h1 class="pseo-title">Oceans</h1>
    </div>
  </div>
</div>


---
layout: image
image: /assets/elevenlabs-semantic-oceans-pseo.png
backgroundSize: contain
---


---
layout: image
image: /assets/ocean-fishing-pattern-pseo.png
backgroundSize: contain
---


---
layout: default
---

<div class="h-full px-16 text-center">
  <div class="pseo-shell -m-20 p-20">
    <div class="pseo-content h-full flex flex-col items-center justify-center">
      <div class="pseo-rule w-72 mb-10" />
      <h1 class="pseo-title max-w-4xl mx-auto">
        But how effective is this really?
      </h1>
      <p class="pseo-subtitle mt-8 max-w-3xl mx-auto">
        Are the main keywords still what matter most?
      </p>
      <div class="pseo-rule w-72 mt-10" />
    </div>
  </div>
</div>


---
layout: image
image: /assets/google-nonbranded-clicks-by-page-type.png
backgroundSize: contain
---


---
layout: image
image: /assets/pseo-mental-model.jpg
backgroundSize: contain
---


---
layout: default
---

<div class="h-full px-16 text-center">
  <div class="pseo-shell -m-20 p-20">
    <div class="pseo-content h-full flex flex-col items-center justify-center">
      <p class="pseo-kicker mb-8">Part 1</p>
      <h1 class="pseo-title">Finding opportunities</h1>
    </div>
  </div>
</div>


---
layout: default
---

<div class="pseo-shell -m-20 p-20">
  <div class="pseo-content h-full flex flex-col justify-center px-8">
    <div class="flex items-end justify-between mb-10">
      <div>
        <p class="pseo-kicker mb-4">Opportunity engine</p>
        <h1 class="!text-white !text-5xl !font-bold !tracking-[-0.05em] !leading-none">From search behavior to pages</h1>
      </div>
      <div class="text-right">
        <p class="pseo-stat">10M+</p>
        <p class="pseo-stat-label mt-12">searches</p>
      </div>
    </div>
    <div class="pseo-process">
      <div class="pseo-step">
        <p class="pseo-step-index">01 / input</p>
        <h2 class="pseo-step-title">Clean internal searches</h2>
        <p class="pseo-step-meta">Deduplicate, normalize, remove noise.</p>
      </div>
      <div class="pseo-step">
        <p class="pseo-step-index">02 / context</p>
        <h2 class="pseo-step-title">Enrich</h2>
        <div class="pseo-chip-row">
          <span class="pseo-chip">language</span>
          <span class="pseo-chip">safety</span>
          <span class="pseo-chip">intent</span>
        </div>
      </div>
      <div class="pseo-step">
        <p class="pseo-step-index">03 / shape</p>
        <h2 class="pseo-step-title">Cluster</h2>
        <p class="pseo-step-meta">Group searches into semantic demand.</p>
      </div>
      <div class="pseo-step">
        <p class="pseo-step-index">04 / output</p>
        <h2 class="pseo-step-title">Fill gaps</h2>
        <div class="pseo-command">$ create-page --from-cluster</div>
      </div>
    </div>
  </div>
</div>

<!--
For SFX, last time I looked we had around 10M internal searches.
Enrichment includes language detection, safety, and similar classification.
Then we identify gaps in existing pages and output commands to create new pages.
-->


---
layout: default
---

<div class="h-full px-16 text-center">
  <div class="pseo-shell -m-20 p-20">
    <div class="pseo-content h-full flex flex-col items-center justify-center">
      <p class="pseo-kicker mb-8">The ask</p>
      <h1 class="pseo-title max-w-4xl mx-auto">Add search to every product</h1>
      <p class="pseo-subtitle mt-8">It powers the loop.</p>
    </div>
  </div>
</div>

<!--
This is how we learn what users actually want.
-->


---
layout: default
---

<div class="h-full px-16 text-center">
  <div class="pseo-shell -m-20 p-20">
    <div class="pseo-content h-full flex flex-col items-center justify-center">
      <p class="pseo-kicker mb-8">Part 3</p>
      <h1 class="pseo-title">Page creation</h1>
      <p class="pseo-subtitle mt-8 max-w-3xl mx-auto">
        At this scale, page creation has to be AI-assisted.
      </p>
    </div>
  </div>
</div>


---
layout: image
image: /assets/sound-effects-v0-p1.png
backgroundSize: contain
---


---
layout: image
image: /assets/sound-effects-v0-p2.jpeg
backgroundSize: contain
---

<!--
AI-generated images, even with a consistent style, looked awful.
-->


---
layout: image
image: /assets/sound-effects-v1-p1.png
backgroundSize: contain
---


---
layout: image
image: /assets/sound-effects-v1-p2.jpeg
backgroundSize: contain
---

<!--
We moved to a more on-brand flat black-and-white style, removed the black background, centered the subject, and placed it on random colorful backgrounds.
The extra trick was generating a single subject first so the image stayed clean instead of visually busy.
-->


---
layout: default
---

<div class="h-full px-16 text-center">
  <div class="pseo-shell">
    <div class="pseo-content h-full flex flex-col items-center justify-center px-36">
      <p class="pseo-kicker mb-8">Image generation</p>
      <h1 class="pseo-title max-w-5xl mx-auto">Make the model design inside constraints</h1>
      <div class="pseo-process mt-16 w-full text-left">
        <div class="pseo-step">
          <p class="pseo-step-index">01</p>
          <h2 class="pseo-step-title">Single subject</h2>
          <p class="pseo-step-meta">Keep the composition clean before styling.</p>
        </div>
        <div class="pseo-step">
          <p class="pseo-step-index">02</p>
          <h2 class="pseo-step-title">Flat BW style</h2>
          <p class="pseo-step-meta">Generate consistent, on-brand artwork.</p>
        </div>
        <div class="pseo-step">
          <p class="pseo-step-index">03</p>
          <h2 class="pseo-step-title">Remove background</h2>
          <p class="pseo-step-meta">Extract the subject from the black canvas.</p>
        </div>
        <div class="pseo-step">
          <p class="pseo-step-index">04</p>
          <h2 class="pseo-step-title">Add color</h2>
          <p class="pseo-step-meta">Center it on a random colorful background.</p>
        </div>
      </div>
    </div>
  </div>
</div>


---
layout: default
---

<div class="h-full px-16 text-center">
  <div class="pseo-shell -m-20 p-20">
    <div class="pseo-content h-full flex flex-col items-center justify-center">
      <p class="pseo-kicker mb-8">Part 4</p>
      <h1 class="pseo-title">CRO</h1>
      <p class="pseo-subtitle mt-8 max-w-3xl mx-auto">
        These pages send users into the app.
      </p>
    </div>
  </div>
</div>


---
layout: image
image: /assets/sound-effects-v2-p1.png
backgroundSize: contain
---


---
layout: image
image: /assets/sound-effects-v2-p2.png
backgroundSize: contain
---

<!--
Please help us keep these conversion flows working when you make changes.
For v2, we improved the design and AB tested it.
-->


---
layout: default
---

<div class="h-full px-16 text-center">
  <div class="pseo-shell">
    <div class="pseo-content h-full flex flex-col items-center justify-center px-36">
      <p class="pseo-kicker mb-8">CRO / The bridge</p>
      <h1 class="pseo-title max-w-5xl mx-auto">Anonymous value, then app depth</h1>
      <div class="pseo-process mt-16 w-full text-left">
        <div class="pseo-step">
          <p class="pseo-step-index">01</p>
          <h2 class="pseo-step-title">Generate</h2>
          <p class="pseo-step-meta">Let users try the model immediately.</p>
        </div>
        <div class="pseo-step">
          <p class="pseo-step-index">02</p>
          <h2 class="pseo-step-title">Create value</h2>
          <p class="pseo-step-meta">Example: generate a music track.</p>
        </div>
        <div class="pseo-step">
          <p class="pseo-step-index">03</p>
          <h2 class="pseo-step-title">Gate depth</h2>
          <p class="pseo-step-meta">Download or edit further after signup.</p>
        </div>
        <div class="pseo-step">
          <p class="pseo-step-index">04</p>
          <h2 class="pseo-step-title">Protect flows</h2>
          <p class="pseo-step-meta">They convert users and make money.</p>
        </div>
      </div>
    </div>
  </div>
</div>



---
layout: center
class: text-center
---

<div>
  <h1 class="!text-6xl !font-bold !tracking-tight text-white">Questions?</h1>
  <div class="w-16 h-px bg-[#333] mx-auto mt-8" />
</div>

