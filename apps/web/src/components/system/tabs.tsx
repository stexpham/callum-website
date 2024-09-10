"use client";

import { v4 as uuid } from "@lukeed/uuid";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import clsx from "clsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import useMeasure from "react-use-measure";

export interface Tab {
  title: string | React.ReactNode;
  value: string;
  content?: React.ReactNode;
  children?: React.ReactNode;
  grouped?: boolean; // for use when composing layouts
}

interface Props {
  tabs: Tab[];
  handleValueChange: () => void;
  defaultTab: string;
  containTriggers?: boolean;
  showRule?: boolean;
  setTabsListHeight?: (height: number) => void;
  // classNames & styles
  rootClassName?: string;
  listWrapperClassName?: string;
  listWrapperStyle: React.CSSProperties | undefined;
  listClassName?: string;
  triggerClassName?: string;
  contentClassName?: string;
  contentGroupedClassName?: string;
  ruleClassName?: string;
}

const tabStyles = {
  root: "flex flex-col gap-0",
  // sticky top is set by listWrapperStyle
  listWrapper: "relative sticky bg-background z-10",
  list: [
    "flex justify-start w-full gap-3 mobile:gap-1 mobile:whitespace-nowrap",
    "pr-w24 overflow-x-auto overflow-y-hidden mask-right hide-scrollbar mobile:-mx-inset",
  ],
  trigger: [
    "group",
    // layout
    "px-1.5 pt-0 pb-3.5 first:pl-0.5",
    // no text defauts, set only as needed!
    // border
    "border-b border-fill border-opacity-0",
    // "data-[state=inactive]:border-opacity-0",
    "data-[state=active]:border-opacity-100",
    // transitions
    "transition-colors duration-100 ease-in-out",
    // active
    // focus-visible:data-[state=active]:border-b-transparent
    // "focus-visible:dark:data-[state=active]:border-b-transparent",
    // focus
    // "focus:data-[state=active]:border-b-fill",
    "focus:z-10 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75",
  ],
  triggerTheme: [
    "Text-subheading text-solid",
    "mobile:first:ml-inset",
    "data-[state=active]:!text-fill",
    "hover:text-fill/70",
    "border-b-2",
  ],
  rule: "-mt-px border-fill/40",
  content: "container",
};

const Tabs = ({
  tabs,
  handleValueChange,
  defaultTab,
  containTriggers,
  showRule,
  setTabsListHeight = () => {},
  // classNames & styles
  rootClassName,
  listWrapperClassName,
  listWrapperStyle,
  listClassName,
  triggerClassName,
  contentClassName,
  contentGroupedClassName,
  ruleClassName,
}: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [tab, setTab] = useState(defaultTab);
  const by = searchParams.get("by");

  useEffect(() => {
    if (by) {
      // Set the initial state based on the 'by' query parameter.
      setTab(by);
    }
  }, [by]);

  const updateSearchParams = (tabValue: string) => {
    router.push(`${pathname}?by=${tabValue}`);
  };

  const renderTab = (tab: Tab) => {
    const { title, value, content, grouped } = tab;

    if (value.includes("child")) {
      return <Fragment key={uuid()}>{content}</Fragment>;
    } else {
      return (
        <TabsPrimitive.Trigger
          key={uuid()}
          value={value}
          className={clsx(
            tabStyles.trigger,
            tabStyles.triggerTheme,
            triggerClassName,
          )}
          onClick={() => updateSearchParams(value)}
        >
          {title}
        </TabsPrimitive.Trigger>
      );
    }
  };

  // measure tabsList to get its height
  // send this back to the parent to set the sticky top
  const [tabsListRef, { height }] = useMeasure();

  useEffect(() => {
    if (height) {
      setTabsListHeight(height);
    }
  }, [height, setTabsListHeight]);

  return (
    <TabsPrimitive.Root
      defaultValue={by || tab || defaultTab}
      onValueChange={(value) => {
        updateSearchParams(value);
        handleValueChange();
      }}
      className={clsx(tabStyles.root, rootClassName)}
    >
      <div
        // measure tabsList to get its height
        ref={tabsListRef}
        className={clsx(
          tabStyles.listWrapper,
          listWrapperClassName,
          containTriggers && "container",
        )}
        // accept a sticky top style from react-use-measure
        style={listWrapperStyle}
      >
        <TabsPrimitive.List className={clsx(tabStyles.list, listClassName)}>
          <>{tabs.map((tab) => renderTab(tab))}</>
        </TabsPrimitive.List>
        {showRule && (
          <hr
            key={uuid()}
            className={clsx(
              tabStyles.rule,
              ruleClassName,
              containTriggers && "container",
            )}
          />
        )}
      </div>
      {tabs.map(({ value, content, grouped }) => (
        <TabsPrimitive.Content
          key={uuid()}
          value={value}
          className={clsx(
            tabStyles.content,
            contentClassName,
            grouped && contentGroupedClassName,
          )}
        >
          {content}
        </TabsPrimitive.Content>
      ))}
    </TabsPrimitive.Root>
  );
};

const TabDivider = ({ triggerClassName }: { triggerClassName?: string }) => (
  <div className={clsx(tabStyles.trigger, triggerClassName)}>
    <hr className="hr-vertical h-full"></hr>
  </div>
);

// Pseudo tab with same style
const StaticTab = ({
  title,
  children,
  titleSlot,
  wrapperClassName,
  wrapperStyle,
  headingClassName,
}: {
  title: string;
  children?: React.ReactNode;
  titleSlot?: React.ReactNode;
  wrapperClassName?: string;
  // supply a style based on react-use-measure
  wrapperStyle?: React.CSSProperties | undefined;
  headingClassName?: string;
}) => (
  <div className={wrapperClassName} style={wrapperStyle} id={title}>
    <div
      className={clsx(
        "flex w-full gap-w4",
        titleSlot ? "justify-between" : "justify-start",
      )}
    >
      <h2
        className={clsx(
          tabStyles.trigger,
          tabStyles.triggerTheme,
          "!text-fill",
          headingClassName,
        )}
      >
        {title}
      </h2>
      {titleSlot}
    </div>
    <hr className={clsx(tabStyles.rule)} />
    {children}
  </div>
);

export { StaticTab, TabDivider, Tabs, tabStyles };
