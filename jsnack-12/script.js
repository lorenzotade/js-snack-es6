let browserWindow = {
  tabs: ['GitHub','Facebook', 'PornHub', 'Famiglia Cristiana'],
  activeTab: 1
}

const socials = ['Facebook', 'Instagram', 'Twitter', 'Parler', 'LinkedIn'];

browserWindow.tabs.forEach((tab) => {
  let {tabs, activeTab} = browserWindow;
  console.log(tab);
  let socialTab = socials.filter((social) => tab === social);
  console.log(socialTab);
  let socialIndex = tabs.indexOf(socialTab[0]);
  console.log(socialIndex);
  tabs.splice(socialIndex, 1);
  console.log(tabs);
  /*if (activeTab === socialIndex) {
    activeTab++;
  } */
});
console.log(browserWindow)