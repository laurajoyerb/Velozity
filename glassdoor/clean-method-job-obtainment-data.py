var script = 'var obtainedStatsContainerElements=document.getElementsByClassName("tbl dataTbl fill toggleable")[0].childNodes;function addClassToStatsRow(){for(var t=0;t<obtainedStatsContainerElements.length;t++){"row "==obtainedStatsContainerElements[t].className&&obtainedStatsContainerElements[t].classList.add("method-obtained")}}var obtainedElements=document.getElementsByClassName("method-obtained");function addClassesToMethodStats(){for(var t=0;t<obtainedElements.length;t++){var e=obtainedElements[t].childNodes;e[0].childNodes[1].classList.add("method-name"),e[1].childNodes[0].classList.add("method-pct")}}addClassToStatsRow(),addClassesToMethodStats();''  