import { useEffect, useRef } from "react";
import { type HomeTab } from "../data/homeTabsData";
import { useHomeTabStore } from "../store/useHomeTabStore";

/**
 * Custom hook that manages bidirectional scroll synchronization (Scrollspy).
 *
 * @returns An object containing the HTML container reference.
 */
export const useHomeScroll = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const {
    activeTab,
    isTabClicked: isNavClick,
    setActiveTab,
    setTabClicked,
  } = useHomeTabStore();

  useEffect(() => {
    const totalSections =
      scrollContainerRef.current?.querySelectorAll("[data-section]");
    if (!totalSections) return;

    const syncTabsOnScroll = (visibleElements: IntersectionObserverEntry[]) => {
      if (isNavClick) return;

      visibleElements.forEach((currentElement) => {
        if (currentElement.isIntersecting) {
          setActiveTab(currentElement.target.id as HomeTab);
        }
      });
    };

    const scrollSpyObserver = new IntersectionObserver(syncTabsOnScroll, {
      root: scrollContainerRef.current,
      rootMargin: "-20% 0px -50% 0px",
    });

    totalSections.forEach((section) => scrollSpyObserver.observe(section));
    return () => scrollSpyObserver.disconnect();
  }, [isNavClick, setActiveTab]);

  useEffect(() => {
    const targetSection = document.getElementById(activeTab);
    const scrolledContainer = scrollContainerRef.current;

    if (targetSection && scrolledContainer) {
      const containerTopCoordinate =
        scrolledContainer.getBoundingClientRect().top;
      const targetSectionTopCoordinate =
        targetSection.getBoundingClientRect().top;

      const absoluteScrollDestination =
        scrolledContainer.scrollTop +
        (targetSectionTopCoordinate - containerTopCoordinate);

      scrolledContainer.scrollTo({
        top: absoluteScrollDestination,
        behavior: "smooth",
      });

      const finalizeNavigationChange = () => {
        setTabClicked(false);
      };

      scrolledContainer.addEventListener("scrollend", finalizeNavigationChange);

      return () => {
        scrolledContainer.removeEventListener(
          "scrollend",
          finalizeNavigationChange,
        );
      };
    }
  }, [activeTab, setTabClicked]);

  return { containerRef: scrollContainerRef };
};
