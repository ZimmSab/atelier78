"use client";
import Image from "next/image";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F3EA] text-[#292929]">

      <div className="max-w-6xl mx-auto px-8">

        {/* Navigation */}
        <nav className="flex justify-between items-center py-10">

<div
  className="
    text-[#20334F]
    font-serif
    tracking-[0.08em]
    uppercase
    text-lg
    font-normal
  "
>
  Atelier N°78
</div>

 <div className="flex gap-8 text-sm text-[#7D7A72]">

  <a href="#perspective">
    Perspective
  </a>

  <a href="#how-I-work">
    How I work
  </a>

  <a href="#support">
    How I support organizations
  </a>

  <a href="#thoughts">
    Thoughts
  </a>

  <a href="#contact">
    Conversation
  </a>

</div>

        </nav>


{/* Hero */}
<section
  className="
    relative
    min-h-screen
    flex
    items-center
    overflow-hidden
  "
>

  <div className="absolute inset-0">
    <Image
      src="/buero.jpg"
      alt="Office"
      fill
      sizes="100vw"
      className="object-cover scale-110 opacity-45"
    />
  </div>

  <div className="absolute inset-0 bg-[#F7F3EA]/35" />


  <div className="relative z-10 max-w-6xl mx-auto px-8 w-full">

    <div className="grid md:grid-cols-2 gap-24 items-center">


      {/* Text links */}

      <div>

        <h1
          className="
            font-serif
            text-[#20334F]
            text-6xl
            md:text-7xl
            leading-[0.95]
            max-w-xl
          "
        >
          Sabrina Zimmermann
        </h1>
<h2
  className="
    mt-6
    text-2xl
    md:text-3xl
    font-light
    text-[#20334F]
  "
>
  Atelier N°78
  <br />
  Executive Advisory
</h2>

<p
  className="
    mt-8
    max-w-xl
    text-lg
    leading-relaxed
  "
>

  Trust is designed.
  Not assumed.
  <br />
  <br />
  Executive advisory for leaders navigating critical decisions across security, governance and technology.
</p>


 <a
  href="#contact"
  className="
    mt-12
    w-fit
    border
    border-[#20334F]
    inline-flex
    self-start
    px-8
    py-4
    text-[#20334F]
    transition
    hover:bg-[#20334F]
    hover:text-[#F7F3EA]
  "
>
  Start a conversation
</a>
      </div>


      {/* Portrait rechts */}

      <div
        className="
          relative
          w-[500px]
          h-[500px]
          justify-self-end
          rounded-full
          border
          border-[#B79D68]/40
          p-4
        "
      >

        <Image
          src="/portrait2.jpg"
          alt="Portrait"
          fill
          sizes="500px"
          className="rounded-full object-cover"
        />

      </div>


    </div>

  </div>


</section>


{/* Perspective */}

<section
  id="perspective"
  className="
    py-28
    border-t
    border-[#20334F]/10
  "
>

  <h2
    className="
      font-serif
      text-[#20334F]
      text-5xl
      md:text-6xl
      leading-tight
      max-w-4xl
    "
  >
    Technology alone does not create resilient organizations.
  </h2>


  <div
    className="
      mt-12
      max-w-2xl
      text-lg
      leading-relaxed
    "
  >

    <p>
      Neither do regulations, frameworks or controls.
    </p>


    <p className="mt-8">
      The organizations that succeed build the structures,
      governance and capabilities that allow technology,
      security and people to work together.
    </p>


    <p className="mt-8">
      Resilience is not created by a single solution.
    </p>


    <p>
      It is the result of systems that are intentionally designed.
    </p>

  </div>


</section>


{/* How I work */}

<section
  id="how-I-work"
  className="
    py-28
    border-t
    border-[#20334F]/10
  "
>

  <h2
    className="
      font-serif
      text-[#20334F]
      text-5xl
      md:text-6xl
      leading-tight
      max-w-4xl
    "
  >
    How I work.
  </h2>


  <div
  className="
    mt-16
    max-w-3xl
    space-y-10
    text-xl
    leading-relaxed
    text-[#2B2B2B]
  "
>

  <div className="flex gap-8">

    <div className="text-[#20334F] text-xl">
      01
    </div>

    <div>
      <h3 className="font-serif text-3xl">
        Listen deeply
      </h3>

      <p className="mt-2">
        Understanding the context, the people, the ambitions and the constraints before proposing solutions.
      </p>
    </div>

  </div>


  <div className="flex gap-8">

    <div className="text-[#20334F] text-xl">
      02
    </div>

    <div>
      <h3 className="font-serif text-3xl">
        Recognize patterns
      </h3>

      <p className="mt-2">
        Connecting technology, governance, organizational dynamics and risk to understand what is really happening.
      </p>
    </div>

  </div>


  <div className="flex gap-8">

    <div className="text-[#20334F] text-xl">
      03
    </div>

    <div>
      <h3 className="font-serif text-3xl">
        Uncover hidden capabilities
      </h3>

      <p className="mt-2">
        Identifying strengths, untapped potential and opportunities that often remain invisible inside complex organizations.
      </p>
    </div>

  </div>


  <div className="flex gap-8">

    <div className="text-[#20334F] text-xl">
      04
    </div>

    <div>
      <h3 className="font-serif text-3xl">
        Create alignment
      </h3>

      <p className="mt-2">
        Bringing together different perspectives to enable confident decisions across leadership, technology and governance.
      </p>
    </div>

  </div>


  <div className="flex gap-8">

    <div className="text-[#20334F] text-xl">
      05
    </div>

    <div>
      <h3 className="font-serif text-3xl">
        Design systems
      </h3>

      <p className="mt-2">
        Designing governance structures, operating models and decision frameworks that enable organizations to operate effectively.
      </p>
    </div>

  </div>


  <div className="flex gap-8">

    <div className="text-[#20334F] text-xl">
      06
    </div>

    <div>
      <h3 className="font-serif text-3xl">
        Build lasting capability
      </h3>

      <p className="mt-2">
        Developing capabilities that last beyond the engagement.
      </p>
    </div>

  </div>


</div>


</section>


{/* Areas of Engagement */}

<section
  className="
    -mx-8
    px-8
    py-28
    bg-[#20334F]
    text-[#F7F3EA]
  "
>

  <h2
    className="
      font-serif
      text-[#F7F3EA]
      text-5xl
      md:text-6xl
      max-w-4xl
    "
  >
    Areas of Engagement
  </h2>


  <div
    className="
      mt-20
      grid
      md:grid-cols-3
      gap-x-6
      gap-y-8
    "
  >

    <article
      className="
        h-72
        p-8
        flex
        flex-col
      "
    >

      <p
        className="
          text-base
          text-[#C8A96A]
        "
      >
        Security & Governance
      </p>

      <h3
        className="
          mt-3
          font-serif
          text-3xl
          text-[#F7F3EA]
        "
      >
        Strategic Security
        & Governance
      </h3>

      <p
        className="
          mt-4
          max-w-[220px]
          text-lg
          leading-relaxed
          text-[#F7F3EA]/80
        "
      >
        Designing governance structures
        for complex organizations.
      </p>

    </article>



    <article
      className="
        h-72
        p-8
        flex
        flex-col
      "
    >

      <p
        className="
          text-base
          text-[#C8A96A]
        "
      >
        Leadership & Strategy
      </p>

      <h3
        className="
          mt-3
          font-serif
          text-3xl
          text-[#F7F3EA]
        "
      >
        Critical Decisions
      </h3>

<p
  className="
    mt-4
    max-w-[190px]
    text-lg
    leading-relaxed
    text-[#F7F3EA]/80
  "
>
  Independent perspective
  for complex decisions.
</p>

    </article>



    <article
      className="
        h-72
        p-8
        flex
        flex-col
      "
    >

      <p
        className="
          text-base
          text-[#C8A96A]
        "
      >
        Security & Regulation
      </p>

      <h3
        className="
          mt-3
          font-serif
          text-3xl
          text-[#F7F3EA]
        "
      >
        Sovereign & Regulated
        Environments
      </h3>

      <p
        className="
          mt-4
          max-w-[220px]
          text-lg
          leading-relaxed
          text-[#F7F3EA]/80
        "
      >
        Supporting organizations
        under strict requirements.
      </p>

    </article>



    <article
      className="
        h-72
        p-8
        flex
        flex-col
      "
    >

      <p
        className="
          text-base
          text-[#C8A96A]
        "
      >
        Organization & Capability
      </p>

      <h3
        className="
          mt-3
          font-serif
          text-3xl
          text-[#F7F3EA]
        "
      >
        Organizational
        Capability
      </h3>

      <p
        className="
          mt-4
          max-w-[220px]
          text-lg
          leading-relaxed
          text-[#F7F3EA]/80
        "
      >
        Strengthening capabilities
        for long-term resilience.
      </p>

    </article>



    <article
      className="
        h-72
        p-8
        flex
        flex-col
      "
    >

      <p
        className="
          text-base
          text-[#C8A96A]
        "
      >
        Emerging Technology
      </p>

      <h3
        className="
          mt-3
          font-serif
          text-3xl
          text-[#F7F3EA]
        "
      >
        AI & Emerging
        Technologies
      </h3>

      <p
        className="
          mt-4
          max-w-[220px]
          text-lg
          leading-relaxed
          text-[#F7F3EA]/80
        "
      >
        Governance for
        evolving technologies.
      </p>

    </article>



    <article
      className="
        h-72
        p-8
        flex
        flex-col
      "
    >

      <p
        className="
          text-base
          text-[#C8A96A]
        "
      >
        Complexity & Change
      </p>

      <h3
        className="
          mt-3
          font-serif
          text-3xl
          text-[#F7F3EA]
        "
      >
        Complex
        Transformation
      </h3>

      <p
        className="
          mt-4
          max-w-[220px]
          text-lg
          leading-relaxed
          text-[#F7F3EA]/80
        "
      >
        Navigating complexity
        across organizations.
      </p>

    </article>


  </div>

</section>
{/* Contact */}

<section
  id="contact"
  className="
    py-32
    border-t
    border-[#20334F]/10
  "
>
  <div className="max-w-3xl">

    <h2
      className="
        font-serif
        text-[#20334F]
        text-5xl
        md:text-6xl
        leading-tight
      "
    >
      Start a confidential conversation.
    </h2>

    <p
      className="
        mt-10
        max-w-2xl
        text-lg
        leading-relaxed
        text-[#4A4A4A]
      "
    >
      Every engagement begins with a personal conversation.
      <br /><br />
      If you are navigating complex decisions at the intersection
      of security, governance and technology, I would be pleased
      to hear from you.
    </p>

    <div className="mt-16">

      <p
        className="
          text-sm
          uppercase
          tracking-[0.12em]
          text-[#7D7A72]
        "
      >
        Confidential inquiries
      </p>

      <a
        href="mailto:hello@atelier78.com"
        className="
          mt-3
          inline-block
          font-serif
          text-3xl
          md:text-4xl
          text-[#20334F]
          hover:text-[#B79D68]
          transition-colors
        "
      >
        sabrina.zimmermann@atelier78.com
      </a>

    </div>

    <div className="mt-10">

      <a
        href="https://www.linkedin.com/in/sabrina-z-434548a6"
        target="_blank"
        rel="noopener noreferrer"
        className="
          text-[#20334F]
          border-b
          border-[#20334F]/30
          hover:border-[#20334F]
          transition
        "
      >
        LinkedIn
      </a>

    </div>

  </div>
</section>


<footer
  className="
    border-t
    border-[#20334F]/10
    py-12
    mt-20
    text-sm
    text-[#7D7A72]
    flex
    justify-between
    items-end
  "
>

  <div>
    <p
      className="
        font-serif
        text-[#20334F]
        text-xl
      "
    >
      Atelier N°78
    </p>

    <p className="mt-2">
      Executive Advisory
    </p>
  </div>


  <div>
    <p>
      © 2026
    </p>
  </div>

</footer>


      </div>

    </main>
  );
}