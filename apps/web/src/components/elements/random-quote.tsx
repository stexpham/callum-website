"use client";

import { useEffect, useState } from "react";
import { LinkWithArrow } from "@repo/ui/link-variants";
import { quotes } from "@/data/quotes";

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
