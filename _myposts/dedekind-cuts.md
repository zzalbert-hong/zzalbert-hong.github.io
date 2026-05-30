---
title: Dedekind Cuts, Big Picture
description: Just testing. $\forall x\in\mathbb{R}$
date: 2025-04-04
wordcount: 500
tags: [ "analysis", "foundationsOfMathematics", ]
context: |-
  This is a revision of an MAT157 Piazza post that I wrote after our lecture on
  Dedekind cuts. I found many of my classmates struggling to understand the point
  of proving $a + b = b + a$, etc. in such a complicated way, and so I tried to
  explain the big picture behind it by providing some philosophical context.
  (And for what it is worth, my Piazza post received 16 "good note" reactions and
  was endorsed by the professor, which I am very proud of. &#128512;)
prerequisites:
  The article assumes knowledge about the axioms of fields, ....... .......,
  or at least you should know that ..... .... (consider using a separate mybox
  for this, as opposed to using the "context" page variable).
# related:
#   - proofs-and-axioms
#   - (list of related articles in the :slug format)............................................................................
---

You might have heard about statements like "Dedekind cuts is a rigorous way to
construct the reals," or "Dedekind cuts are the reals," etc. But in my opinion,
to *truly* understand Dedekind cuts, you must first forget about these statements,
learn what Dedekind cuts are---directly and literally from its formal definitions,
and then come back to look at how it connects to the reals. Usually, mathematical
concepts make more sense when you learn about the context along with the technical
details. Yet for Dedekind cuts, having contextual knowledge at the back of your
head as you learn the formal definitions and related proofs just makes everything
even more confusing.

So let us start from the basics.

We know 

<p> I think today's material is better understood by thinking analogously
    to vector spaces. If you recall, a vector space consists of a Domain,
    a Vector Addition operator, and a Scalar Multiplication operator.
    An example---we first define:
    <ul>
        <li>Domain: {(x,y) |x,y &isin; Q}
            i.e. the set of rational pairs</li>
        <li>Vector Addition: (x,y) + (a,b) = (x+a,y+b)</li>
        <li>Scalar Multiplication: c(x,y) = (cx,cy)</li>
    </ul>
    Then, we verify such a structure satisfies the axioms of vector spaces.
</p>
<p> We do something similar for fields. Just like we deployed the notion of Q
    and constructed the vector space Q^2, this time we want to deploy, still,
    the notion of Q, and construct an interesting ordered field, called R.
    I will explain the philosophical "why we do" in a moment, but for now
    just focus on the "what we do"---we first define the Domain,
    Addition, Multiplication, Order, etc. of R, as follows:
    (remember, the ultimate goal of this discussion is to construct R, which
    means at this point we should not beg the question and assume R already
    existed, and so the following definitions avoid deploying the notion of R)
    <ul>
        <li>Domain: &alpha; &sub; Q | a is a Dedekind Cut
            i.e. the set of Dedekind Cuts (a Dedekind Cut is a subset
            of Q that has specific properties)</li>
        <li>Addition: &alpha;+&beta; = x+y | x in a, y in b</li>
        <li>Multiplication: ...</li>
        <li>... etc. (as defined in class)</li>
    </ul>
    Then, we verify (or "discover," if you wish) that such a structure
    satisfies (P1)-(P13).
</p>
<p> After all of that, we simply define R:=R, with numbers in R just being
    shorthand notations for Dedekind Cuts in R. For instance, the (true)
    statement about R:<br>
    circled1 0 + 1 = 1<br>
    can be contracted to:<br>
    circled2 0 + 1 = 1<br>
    Or we can also say, when we write down statements about R,
    such as circled2, it is actually something like circled1 in disguise.
</p>
<p> The reason why we go through all of these cumbersome tasks and define R
    in such a complicated way is that, philosophically we want to make as few
    assumptions as possible, especially about what kinds of structures exist.
    Recall the natural numbers. (HAVE NOT FINISHED REVISING THE REST)
</p>
<p> the fact that there is actually a structure satisfying the Peano Axioms of
    Natural Number is not obvious at all. So the existence of N is really just
    an assumption---we presuppose the existence of N and then do arithmetics.
    We HAVE TO accept that presupposition, otherwise we cannot do any math.
</p>
<p> Now you might think, we also HAVE TO "assume" that there is a structure
    satisfying the Axioms of Reals (i.e. (P1)-(P13)),
    but the genius thing about Dedekind Cuts is that, we don't! As we have shown,
    by only assuming the existence of N, we can then so to speak
    "construct (no longer assuming)" the existence of structures like Z, Q,
    and (using Dedekind Cuts) R. In short, Dedekind Cuts allow us to not "assume"
    the existence of R, but "construct" it!
</p>