// creo un oggetto browserWindow con una proprietà
// tabs che è un array di siti e una activeTab
// che è l'indice della tab aperta in questo momento
let browserWindow = {
  tabs: ['GitHub', 'Facebook', 'PornHub','Instagram', 'Famiglia Cristiana','Instagram'],
  activeTab: 5
}
// creo un array di social 
const socials = ['Facebook', 'Instagram', 'Twitter', 'Parler', 'LinkedIn'];
// scorporo l'oggetto
let {tabs, activeTab} = browserWindow;

// con un filter vado a creare un nuovo array
// contente tutte le tab che non sono social
let filteredTabs = tabs.filter((tab) => {
  if (!socials.includes(tab)) {
    return true;
  } else {
    return false;
  }
})
// aggiorno l'oggetto con il nuovo array di tabs
browserWindow.tabs = filteredTabs;
// se activeTab dopo il filter è più grande della
// lunghezza del nuovo array - 1 (oltre l'indice 
// dell'ultimo elemento), lo diminuisco di 1
// attivando così la tab precedente
if (activeTab > (filteredTabs.length - 1)) {
  browserWindow.activeTab = (filteredTabs.length - 1);
}
// mostro a video l'oggetto
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
