// Display randomly selected quote
// `<blockquote id="randomExistenceQuote"></blockquote>` in html
const quoteDiv = document.getElementById("randomExistenceQuote");

if (quoteDiv) {

    const quotes = [
        {
            text: `Existence is the most perfect of all things, for it is
            compared to all things as that by which they are made actual;
            for nothing has actuality except insofar as it exists.`,
            author: "Thomas Aquinas",
            source: "Summa Theologiae",
            year: "1274"
        },
        {
            text: "Existence precedes essence.",
            author: "Jean-Paul Sartre",
            source: "Being and Nothingness",
            year: "1943"
        },
        {
            text: `Existence is not something which lets itself be thought of
            from a distance; it must invade you suddenly, master you, weigh
            heavily on your heart like a great motionless beast&mdash;or else
            there is nothing at all.`,
            author: "Jean-Paul Sartre",
            source: "La Naus&eacute;e",
            year: "1938"
        },
        {
            text: `Every existing thing is born without reason,
            prolongs itself out of weakness, and dies by chance.`,
            author: "Jean-Paul Sartre",
            source: "La Naus&eacute;e",
            year: "1938"
        },
        {
            text: `Existence is the child that is born of the infinite and
            the finite, the eternal and the temporal,
            and is therefore a constant striving.`,
            author: "S&oslash;ren Kierkegaard",
            source: "Concluding Unscientific Postscript to Philosophical Fragments",
            year: "1846"
        },
        {
            text: `Existence and the world appear justified only as
            an aesthetic phenomenon.`,
            author: "Friedrich Nietzsche",
            source: "The Birth of Tragedy",
            year: "1872"
        },
        {
            text: "To exist is to be perceived, or to perceive.",
            author: "George Berkeley",
            source: "Treatise Concerning the Principles of Human Knowledge",
            year: "1710"
        },
        {
            text: "I am thinking, therefore I exist.",
            author: "Ren&eacute; Descartes",
            source: "Principia Philosophi&aelig;",
            year: "1644"
        },
        {
            text: "I rebel&mdash;therefore we exist.",
            author: "Albert Camus",
            source: "L'Homme r&eacute;volt&eacute;",
            year: "1951"
        },
        {
            text: `To exist is to change, to change is to mature, to mature
            is to go on creating oneself endlessly.`,
            author: "Henri Bergson",
            source: "L'&Eacute;volution cr&eacute;atrice",
            year: "1907"
        },
        {
            text: "Existence is not a predicate.",
            author: "Immanuel Kant",
            source: "Critique of Pure Reason",
            year: "1781"
        },
        {
            text: `No existence can be validly fulfilled
            if it is limited to itself.`,
            author: "Simone de Beauvoir",
            source: "The Ethics of Ambiguity",
            year: "1947"
        },
        {
            text: `To exist is to stand out, away from the background.
            You aren't thinking or really existing unless you're willing
            to risk even your own sanity in the judgment of your existence.`,
            author: "Frank Herbert",
            source: "Children of Dune",
            year: "1976"
        },
        {
            text: `Existence was the occupation of a space-time. Substance was
            the persistence of a space in its time or the occupation of a space
            by a duration. Causality and reciprocity were relations of substances.`,
            author: "Samuel Alexander",
            source: "Quantity and Intensity",
            year: "1927"
        },
        {
            text: "To exist is to be the value of a bound variable.",
            author: "Willard Van Orman Quine",
            source: "On What There Is",
            year: "1948"
        },
        {
            text: "Why is there something rather than nothing?",
            author: "Gottfried Wilhelm Leibniz",
            source: "Principles of Nature and Grace Founded on Reason",
            year: "1714"
        }
    ];

    const randomQuote =
        quotes[Math.floor(Math.random() * quotes.length)];

    quoteDiv.innerHTML = `<p>"${randomQuote.text}"</p>
        <p>&mdash; <!-- Paraphrased from --> <b>${randomQuote.author}</b>,
        <i>${randomQuote.source}</i> (${randomQuote.year})</p>`;

}



// Generate TOC with <h2> tags only
// `<div class="mybox" id="tocBox"></div>` in html
document.addEventListener("DOMContentLoaded", () => {
    const tocContainer = document.getElementById("tocBox");
    
    // Stop immediately if page has no TOC container
    if (!tocContainer) return;
    // Otherwise set up the TOC
    tocContainer.innerHTML = `<ul><li>Jump to section:</li>
        <ul id="tocList"></ul></ul>`
    const toc = document.getElementById("tocList");
    
    const headings = document.querySelectorAll("h2");
    
    headings.forEach((h2, i) => {
        if (h2.id == "siteHeading") return;
        if (!h2.id) {
        h2.id = `section${i}`;
        }

        const li = document.createElement("li");
        const a = document.createElement("a");

        a.href = "#" + h2.id;
        a.textContent = h2.textContent;

        li.appendChild(a);
        toc.appendChild(li);
    });
    
    // Only display the TOC after everything is done
    // (in case some browser has JavaScript disabled)
    tocContainer.style.display = "block";
});



// Find each <a> link on the page except those with class="plain"
document.querySelectorAll('a').forEach(link => {
    const url = link.getAttribute('href');
    const isPlain = link.getAttribute('class') == 'plain';
    if (!url) return;

    // Check if external
    // const isExternal =
    //     link.protocol.startsWith('http') &&
    //     link.hostname !== window.location.hostname;
    const isExternal =
        url.startsWith('http') &&
        !url.includes('zzalbert.com');

    // Check for (my) files
    const isMyFile = url.startsWith('/assets/');

    // Apply attributes and CSS classes
    if (isPlain && isExternal) {
        link.target = '_blank';
        link.rel = 'noopener noreferrer nofollow';
    } else if (isPlain && isMyFile) {
        link.target = '_blank';
    } else if (isExternal) {
        link.target = '_blank';
        // link.rel = 'noopener noreferrer nofollow';
        link.rel = 'noopener noreferrer';
        link.classList.add('external-link');
    } else if (isMyFile) {
        link.target = '_blank';
        link.classList.add('file-link');
    }
});



// Get the button
let mybutton = document.getElementById("myBtn");

if (mybutton) {

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

}