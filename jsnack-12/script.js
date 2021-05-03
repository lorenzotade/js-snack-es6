let browserWindow = {
  tabs: ['GitHub', 'Facebook', 'PornHub', 'Famiglia Cristiana'],
  activeTab: 1
}

const socials = ['Facebook', 'Instagram', 'Twitter', 'Parler', 'LinkedIn'];

let {tabs, activeTab} = browserWindow;

let filteredTabs = tabs.filter((tab) => {
  if (!socials.includes(tab)) {
    return true;
  } else {
    return false;
  }
})

browserWindow.tabs = filteredTabs;
if (activeTab > (filteredTabs.length - 1)) {
  browserWindow.activeTab = activeTab - 1;
}

console.log(browserWindow)


// ROBE BRUTTE

/* browserWindow.tabs.forEach((tab) => {
  let {tabs, activeTab} = browserWindow;
  console.log(tab);
  let socialTab = socials.filter((social) => tab === social);
  console.log(socialTab);
  let socialIndex = tabs.indexOf(socialTab[0]);
  console.log(socialIndex);
  tabs.splice(socialIndex, 1);
  console.log(tabs);
}); */
