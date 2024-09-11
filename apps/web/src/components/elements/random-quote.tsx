"use client";

import { useEffect, useState } from "react";
import { quotes } from "src/data/quotes";
import { LinkWithArrow } from "./link-variants";

export const RandomQuote = () => {
  const [randomQuote, setRandomQuote] = useState(quotes[0]);

  useEffect(() => {
    // Set a random quote when the component mounts
    setRandomQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  return (
    <Quote
      author={randomQuote.author}
      quote={randomQuote.quote}
      source={randomQuote.source}
    />
  );
};

const Quote = ({
  quote,
  author,
  source,
}: {
  quote: string;
  author: string;
  source?: string;
}) => (
  <div className="lg:w-5/6">
    <blockquote className="text-balance">
      <p className="text-title font-medium !text-fill">{quote}</p>
      <p className="text-meta text-solid">
        {source ? (
          <LinkWithArrow className="" href={source}>
            {author}
          </LinkWithArrow>
        ) : (
          author
        )}
      </p>
    </blockquote>
  </div>
);
