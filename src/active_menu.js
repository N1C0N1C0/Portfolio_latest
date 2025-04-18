'use strict'
const sectionIds = ['#home', '#about', '#skills', '#work', '#testimonial', '#contact'];
const sections = sectionIds.map((id) => document.querySelector(id));
const navItems = sectionIds.map(id => document.querySelector(`[href="${id}"]`));

const visibleSectioins = sectionIds.map(() => false);
let activeNavItem = navItems[0];

const options = {
  rootMargin: '-20% 0px 0px 0px',
  threshold: [0, 0.98],
};
const observer = new IntersectionObserver(obserCallback, options);
sections.forEach(section => observer.observe(section));

function obserCallback(entries) {
  let selectLasstOne;
  entries.forEach((entry) => {
    const index = sectionIds.indexOf(`#${entry.target.id}`);
    visibleSectioins[index] = entry.isIntersecting;
    selectLasstOne = index === sectionIds.length - 1 && entry.isIntersecting && entry.intersectionRatio >= 0.95;

    
  });
  const navIndex = selectLasstOne ? sectionIds.length - 1 : findFirstIntersecting(visibleSectioins);
  selectNavItem(navIndex);
}

function findFirstIntersecting(intersections) {
  const index = intersections.indexOf(true);
  return index >= 0 ? index : 0;
}

function selectNavItem(navIndex) {
  const navItem = navItems[navIndex];
  if(!navItem) return;
  activeNavItem.classList.remove('active');
  activeNavItem = navItem;
  activeNavItem.classList.add('active');
}