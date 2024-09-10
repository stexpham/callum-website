"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@repo/ui/carousel";
import { SnapCard } from "@/components/card/snap-card";
import { type Post } from "contentlayer/generated";

export function HomeCarousel({ cards }: { cards: Post[] }) {
  return (
    <Carousel
      className="w-full"
      // For loop to work, must use Autoplay
      // https://github.com/shadcn-ui/ui/issues/3393#issuecomment-2054058059
      // opts={{
      //   loop: true,
      // }}
    >
      <CarouselContent>
        {cards.map((card) => (
          <CarouselItem key={card._id}>
            <SnapCard className="span-center" key={card.title} post={card} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
