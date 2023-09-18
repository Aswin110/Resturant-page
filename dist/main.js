(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var a=n.getElementsByTagName("script");if(a.length)for(var o=a.length-1;o>-1&&!t;)t=a[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"70702a8184c5666ca773.jpg",n=()=>{const e=document.getElementById("content"),n=document.getElementById("container"),a=document.createElement("h1");a.classList.add("heading"),a.textContent="Welcome to SteakHouse",n.appendChild(a);const o=document.createElement("img");o.classList.add("homeImage"),o.src=t,o.height="500",n.appendChild(o);const c=document.createElement("p");c.classList.add("homeDescription"),c.textContent="An evening out at a steakhouse is an occasional indulgence we like to enjoy now and then. It’s a great way to celebrate a birthday, anniversary or maybe to impress a first date.It offers hand-cut steaks, as well as surf and turf steak combos. There are also ribs, chicken and fish dishes on the menu, so no matter what, there is something to satisfy the whole family.",c.style.padding="10px",n.appendChild(c),e.appendChild(n)},a=e.p+"f2b05eec7cdfffb034d8.jpeg",o=e.p+"90c4a313a92063b5f5c4.jpg",c=e.p+"529689c121223897847e.jpg",d=e.p+"c9cf71e8f94620adc0b5.jpg",i=e.p+"ba245e59f6ebb83fbe2c.jpg",s=e.p+"3e925239cdb604b0527f.jpg";function r(e){document.querySelectorAll(".button").forEach((e=>{e!==this&&e.classList.remove("active")})),e.classList.add("active")}(()=>{const e=document.getElementById("content"),t=document.getElementById("container"),l=document.createElement("div"),h=document.createElement("H1");h.textContent="Steak House",e.appendChild(h),h.style.color="grey",l.classList.add("buttonDiv");const m=document.createElement("button"),u=document.createElement("button"),p=document.createElement("button");m.classList.add("button"),m.classList.add("active"),u.classList.add("button"),p.classList.add("button"),m.textContent="Home",u.textContent="menu",p.textContent="contact",m.addEventListener("click",(()=>{for(;t.firstChild;)t.removeChild(t.firstChild);r(m),n()})),u.addEventListener("click",(()=>{for(;t.firstChild;)t.removeChild(t.firstChild);r(u),(()=>{const e=document.getElementById("container"),t=document.createElement("h1");t.textContent="Menu",t.classList.add("heading"),e.appendChild(t);const n=document.createElement("div");n.classList.add("menu");const d=document.createElement("h3");d.textContent="Pittsburgh Blue steak",n.appendChild(d);const i=document.createElement("p");i.textContent="Did you know that there's a way to make your steak even juicier, simply by the cut? When a steak is hand-cut by a professional per your order, the level of liquid is preserved along with the ruby red color. Slicing a steak from a larger section of beef, called a primal or sub-primal cut, creates a fresh surface with the knife that doesn't have time to dry out or get tough. The best steakhouses in the world do this with every steak.",n.appendChild(i);const s=document.createElement("h3");s.textContent="₹249",n.appendChild(s);const r=document.createElement("img");r.classList.add("menuImg"),r.src=a,r.height="200",r.width="200",n.appendChild(r),e.appendChild(n);const l=document.createElement("div");l.classList.add("menu");const h=document.createElement("h3");h.textContent="Surf-Turf",l.appendChild(h);const m=document.createElement("p");m.textContent="Did you know that there's a way to make your steak even juicier, simply by the cut? When a steak is hand-cut by a professional per your order, the level of liquid is preserved along with the ruby red color. Slicing a steak from a larger section of beef, called a primal or sub-primal cut, creates a fresh surface with the knife that doesn't have time to dry out or get tough. The best steakhouses in the world do this with every steak.",l.appendChild(m);const u=document.createElement("h3");u.textContent="₹299",l.appendChild(u);const p=document.createElement("img");p.classList.add("menuImg"),p.src=o,p.height="200",p.width="200",l.appendChild(p),e.appendChild(l);const g=document.createElement("div");g.classList.add("menu");const C=document.createElement("h3");C.textContent="Filet Mignon",g.appendChild(C);const f=document.createElement("p");f.textContent="Filet mignon is the name of the steak cut from the beef tenderloin, a long, cylindrical muscle that runs along the spine. It’s one of the most expensive cuts of beef because the muscle doesn’t get much work, and it’s so tender you could cut through it with a fork. Because they’re already tender, they don’t require a marinade, so try pairing the steak instead with a flavorful sauce or butter like in merlot filet mignon.",g.appendChild(f);const E=document.createElement("h3");E.textContent="₹199",g.appendChild(E);const y=document.createElement("img");y.classList.add("menuImg"),y.src=c,y.height="200",y.width="200",g.appendChild(y),e.appendChild(g)})()})),p.addEventListener("click",(()=>{for(;t.firstChild;)t.removeChild(t.firstChild);r(p),(()=>{const e=document.getElementById("container"),t=document.createElement("h1");t.textContent="Contact Us",t.classList.add("heading"),e.appendChild(t);const n=document.createElement("div");n.classList.add("contact");const a=document.createElement("h3");a.textContent="For Reservation",n.appendChild(a);const o=document.createElement("img");o.src=d,o.height="150",n.appendChild(o);const c=document.createElement("p");c.textContent="+91 860 183 6765",n.appendChild(c),e.appendChild(n);const r=document.createElement("div");r.classList.add("contact");const l=document.createElement("h3");l.textContent="Ordering Service",r.appendChild(l);const h=document.createElement("img");h.src=i,h.height="150",r.appendChild(h);const m=document.createElement("p");m.textContent="+91 976 183 6765",r.appendChild(m),e.appendChild(r);const u=document.createElement("div");u.classList.add("contact");const p=document.createElement("h3");p.textContent="Manager",u.appendChild(p);const g=document.createElement("img");g.src=s,g.height="150",u.appendChild(g);const C=document.createElement("p");C.textContent="+91 709 183 6765",u.appendChild(C),e.appendChild(u)})()})),l.appendChild(m),l.appendChild(u),l.appendChild(p),e.appendChild(l)})(),n()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3RCUCxFQUFRWCxZQUFZYSxFQUFVLEVHbkRsQ3lDLEdBQ0EvRCxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL3NyYy9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL3NyYy9uYXYuanMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBmb29kIGZyb20gJy4vYXNzZXRzL2Zvb2QuanBnJ1xuXG5leHBvcnQgY29uc3QgaG9tZVBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29uc3QgaG9tZVBhZ2VDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKCdoZWFkaW5nJyk7XG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdXZWxjb21lIHRvIFN0ZWFrSG91c2UnO1xuICAgIGhvbWVQYWdlQ29udGVudC5hcHBlbmRDaGlsZChoZWFkaW5nKTtcblxuICAgIGNvbnN0IGhvbWVJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGhvbWVJbWFnZS5jbGFzc0xpc3QuYWRkKCdob21lSW1hZ2UnKTtcbiAgICBob21lSW1hZ2Uuc3JjID0gZm9vZDtcbiAgICBob21lSW1hZ2UuaGVpZ2h0ID0gJzUwMCc7XG4gICAgaG9tZVBhZ2VDb250ZW50LmFwcGVuZENoaWxkKGhvbWVJbWFnZSk7XG5cbiAgICBjb25zdCBob21lRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaG9tZURlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2hvbWVEZXNjcmlwdGlvbicpO1xuICAgIGhvbWVEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiQW4gZXZlbmluZyBvdXQgYXQgYSBzdGVha2hvdXNlIGlzIGFuIG9jY2FzaW9uYWwgaW5kdWxnZW5jZSB3ZSBsaWtlIHRvIGVuam95IG5vdyBhbmQgdGhlbi4gSXTigJlzIGEgZ3JlYXQgd2F5IHRvIGNlbGVicmF0ZSBhIGJpcnRoZGF5LCBhbm5pdmVyc2FyeSBvciBtYXliZSB0byBpbXByZXNzIGEgZmlyc3QgZGF0ZS5JdCBvZmZlcnMgaGFuZC1jdXQgc3RlYWtzLCBhcyB3ZWxsIGFzIHN1cmYgYW5kIHR1cmYgc3RlYWsgY29tYm9zLiBUaGVyZSBhcmUgYWxzbyByaWJzLCBjaGlja2VuIGFuZCBmaXNoIGRpc2hlcyBvbiB0aGUgbWVudSwgc28gbm8gbWF0dGVyIHdoYXQsIHRoZXJlIGlzIHNvbWV0aGluZyB0byBzYXRpc2Z5IHRoZSB3aG9sZSBmYW1pbHkuXCI7XG4gICAgaG9tZURlc2NyaXB0aW9uLnN0eWxlLnBhZGRpbmcgPSAnMTBweCc7XG4gICAgaG9tZVBhZ2VDb250ZW50LmFwcGVuZENoaWxkKGhvbWVEZXNjcmlwdGlvbik7XG5cblxuICAgIENvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZVBhZ2VDb250ZW50KTtcbn1cbiIsImltcG9ydCB7IGhvbWVQYWdlIH0gZnJvbSBcIi4vaG9tZXBhZ2UuanNcIjtcbmltcG9ydCB7IG1lbnVQYWdlIH0gZnJvbSBcIi4vbWVudS5qc1wiXG5pbXBvcnQgeyBjb250YWN0UGFnZSB9IGZyb20gXCIuL2NvbnRhY3QuanNcIlxuXG5leHBvcnQgY29uc3QgbmF2ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnN0IHBhZ2VDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpXG4gICAgY29uc3QgYnV0dG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCBzdGFrZUhvdXNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnSDEnKTsgXG4gICAgc3Rha2VIb3VzZS50ZXh0Q29udGVudCA9ICdTdGVhayBIb3VzZSc7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChzdGFrZUhvdXNlKVxuICAgIHN0YWtlSG91c2Uuc3R5bGUuY29sb3IgPSBcImdyZXlcIjtcblxuICAgIGJ1dHRvbkRpdi5jbGFzc0xpc3QuYWRkKCdidXR0b25EaXYnKTtcblxuICAgIGNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTsgICAgXG4gICAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIGhvbWVCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJyk7XG4gICAgaG9tZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicpO1xuICAgIGNvbnRhY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJyk7XG5cbiAgICBob21lQnV0dG9uLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICAgIG1lbnVCdXR0b24udGV4dENvbnRlbnQ9ICdtZW51JztcbiAgICBjb250YWN0QnV0dG9uLnRleHRDb250ZW50ID0gJ2NvbnRhY3QnO1xuXG4gICAgaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgd2hpbGUgKHBhZ2VDb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHBhZ2VDb250ZW50LnJlbW92ZUNoaWxkKHBhZ2VDb250ZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIHNldEFjdGl2ZUJ1dHRvbihob21lQnV0dG9uKVxuICAgICAgICBob21lUGFnZSgpXG4gICAgfSk7XG4gICAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgd2hpbGUgKHBhZ2VDb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHBhZ2VDb250ZW50LnJlbW92ZUNoaWxkKHBhZ2VDb250ZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIHNldEFjdGl2ZUJ1dHRvbihtZW51QnV0dG9uKVxuICAgICAgICBtZW51UGFnZSgpXG4gICAgfSk7XG4gICAgY29udGFjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgd2hpbGUgKHBhZ2VDb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHBhZ2VDb250ZW50LnJlbW92ZUNoaWxkKHBhZ2VDb250ZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIHNldEFjdGl2ZUJ1dHRvbihjb250YWN0QnV0dG9uKVxuICAgICAgICBjb250YWN0UGFnZSgpXG4gICAgfSk7XG5cbiAgICBidXR0b25EaXYuYXBwZW5kQ2hpbGQoaG9tZUJ1dHRvbik7XG4gICAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xuICAgIGJ1dHRvbkRpdi5hcHBlbmRDaGlsZChjb250YWN0QnV0dG9uKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGJ1dHRvbkRpdik7XG5cbn1cblxuZnVuY3Rpb24gc2V0QWN0aXZlQnV0dG9uKGJ1dHRvbikge1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJ1dHRvblwiKTtcbiAgXG4gICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgIGlmIChidXR0b24gIT09IHRoaXMpIHtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIFxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICB9IiwiaW1wb3J0IFBpdHRzYnVyZ2ggZnJvbSBcIi4vYXNzZXRzL3BpdHRzYnVyZ2guanBlZ1wiXG5pbXBvcnQgc3VyZlR1cmYxIGZyb20gJy4vYXNzZXRzL3N1cmZUdXJmLmpwZydcbmltcG9ydCBmaWxldFN0ZWFrMSBmcm9tICcuL2Fzc2V0cy9maWxldFN0ZWFrLmpwZydcblxuZXhwb3J0IGNvbnN0IG1lbnVQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IG1lbnVDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICAgIGhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnaGVhZGluZycpO1xuICAgIG1lbnVDb250ZW50LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuXG4gICAgY29uc3QgaGFuZEN1dFN0ZWFrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGFuZEN1dFN0ZWFrLmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcblxuICAgIGNvbnN0IGhhbmRDdXRTdGVha0hlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGhhbmRDdXRTdGVha0hlYWRpbmcudGV4dENvbnRlbnQgPSBcIlBpdHRzYnVyZ2ggQmx1ZSBzdGVha1wiO1xuICAgIGhhbmRDdXRTdGVhay5hcHBlbmRDaGlsZChoYW5kQ3V0U3RlYWtIZWFkaW5nKTtcblxuICAgIGNvbnN0IGhhbmRDdXRTdGVha0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaGFuZEN1dFN0ZWFrQ29udGVudC50ZXh0Q29udGVudCA9IFwiRGlkIHlvdSBrbm93IHRoYXQgdGhlcmUncyBhIHdheSB0byBtYWtlIHlvdXIgc3RlYWsgZXZlbiBqdWljaWVyLCBzaW1wbHkgYnkgdGhlIGN1dD8gV2hlbiBhIHN0ZWFrIGlzIGhhbmQtY3V0IGJ5IGEgcHJvZmVzc2lvbmFsIHBlciB5b3VyIG9yZGVyLCB0aGUgbGV2ZWwgb2YgbGlxdWlkIGlzIHByZXNlcnZlZCBhbG9uZyB3aXRoIHRoZSBydWJ5IHJlZCBjb2xvci4gU2xpY2luZyBhIHN0ZWFrIGZyb20gYSBsYXJnZXIgc2VjdGlvbiBvZiBiZWVmLCBjYWxsZWQgYSBwcmltYWwgb3Igc3ViLXByaW1hbCBjdXQsIGNyZWF0ZXMgYSBmcmVzaCBzdXJmYWNlIHdpdGggdGhlIGtuaWZlIHRoYXQgZG9lc24ndCBoYXZlIHRpbWUgdG8gZHJ5IG91dCBvciBnZXQgdG91Z2guIFRoZSBiZXN0IHN0ZWFraG91c2VzIGluIHRoZSB3b3JsZCBkbyB0aGlzIHdpdGggZXZlcnkgc3RlYWsuXCI7XG4gICAgaGFuZEN1dFN0ZWFrLmFwcGVuZENoaWxkKGhhbmRDdXRTdGVha0NvbnRlbnQpO1xuXG4gICAgY29uc3QgaGFuZEN1dFN0ZWFrUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGhhbmRDdXRTdGVha1ByaWNlLnRleHRDb250ZW50ID0gXCLigrkyNDlcIjtcbiAgICBoYW5kQ3V0U3RlYWsuYXBwZW5kQ2hpbGQoaGFuZEN1dFN0ZWFrUHJpY2UpO1xuXG4gICAgY29uc3QgaGFuZEN1dFN0ZWFrSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaGFuZEN1dFN0ZWFrSW1nLmNsYXNzTGlzdC5hZGQoJ21lbnVJbWcnKTtcblxuICAgIGhhbmRDdXRTdGVha0ltZy5zcmMgPSBQaXR0c2J1cmdoO1xuICAgIGhhbmRDdXRTdGVha0ltZy5oZWlnaHQgPSAnMjAwJztcbiAgICBoYW5kQ3V0U3RlYWtJbWcud2lkdGggPSAnMjAwJztcbiAgICBoYW5kQ3V0U3RlYWsuYXBwZW5kQ2hpbGQoaGFuZEN1dFN0ZWFrSW1nKTtcbiAgICBtZW51Q29udGVudC5hcHBlbmRDaGlsZChoYW5kQ3V0U3RlYWspO1xuXG4gICAgY29uc3Qgc3VyZlR1cmYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzdXJmVHVyZi5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG5cbiAgICBjb25zdCBzdXJmVHVyZkhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHN1cmZUdXJmSGVhZGluZy50ZXh0Q29udGVudCA9IFwiU3VyZi1UdXJmXCI7XG4gICAgc3VyZlR1cmYuYXBwZW5kQ2hpbGQoc3VyZlR1cmZIZWFkaW5nKTtcblxuICAgIGNvbnN0IHN1cmZUdXJmQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBzdXJmVHVyZkNvbnRlbnQudGV4dENvbnRlbnQgPSBcIkRpZCB5b3Uga25vdyB0aGF0IHRoZXJlJ3MgYSB3YXkgdG8gbWFrZSB5b3VyIHN0ZWFrIGV2ZW4ganVpY2llciwgc2ltcGx5IGJ5IHRoZSBjdXQ/IFdoZW4gYSBzdGVhayBpcyBoYW5kLWN1dCBieSBhIHByb2Zlc3Npb25hbCBwZXIgeW91ciBvcmRlciwgdGhlIGxldmVsIG9mIGxpcXVpZCBpcyBwcmVzZXJ2ZWQgYWxvbmcgd2l0aCB0aGUgcnVieSByZWQgY29sb3IuIFNsaWNpbmcgYSBzdGVhayBmcm9tIGEgbGFyZ2VyIHNlY3Rpb24gb2YgYmVlZiwgY2FsbGVkIGEgcHJpbWFsIG9yIHN1Yi1wcmltYWwgY3V0LCBjcmVhdGVzIGEgZnJlc2ggc3VyZmFjZSB3aXRoIHRoZSBrbmlmZSB0aGF0IGRvZXNuJ3QgaGF2ZSB0aW1lIHRvIGRyeSBvdXQgb3IgZ2V0IHRvdWdoLiBUaGUgYmVzdCBzdGVha2hvdXNlcyBpbiB0aGUgd29ybGQgZG8gdGhpcyB3aXRoIGV2ZXJ5IHN0ZWFrLlwiO1xuICAgIHN1cmZUdXJmLmFwcGVuZENoaWxkKHN1cmZUdXJmQ29udGVudCk7XG5cbiAgICBjb25zdCBzdXJmVHVyZlByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBzdXJmVHVyZlByaWNlLnRleHRDb250ZW50ID0gXCLigrkyOTlcIjtcbiAgICBzdXJmVHVyZi5hcHBlbmRDaGlsZChzdXJmVHVyZlByaWNlKTtcblxuICAgIGNvbnN0IHN1cmZUdXJmSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgc3VyZlR1cmZJbWcuY2xhc3NMaXN0LmFkZCgnbWVudUltZycpO1xuXG4gICAgc3VyZlR1cmZJbWcuc3JjID0gc3VyZlR1cmYxO1xuICAgIHN1cmZUdXJmSW1nLmhlaWdodCA9ICcyMDAnO1xuICAgIHN1cmZUdXJmSW1nLndpZHRoID0gJzIwMCc7XG5cbiAgICBzdXJmVHVyZi5hcHBlbmRDaGlsZChzdXJmVHVyZkltZyk7XG4gICAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQoc3VyZlR1cmYpXG5cbiAgICBjb25zdCBmaWxldFN0ZWFrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZmlsZXRTdGVhay5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG5cbiAgICBjb25zdCBmaWxldFN0ZWFrSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgZmlsZXRTdGVha0hlYWRpbmcudGV4dENvbnRlbnQgPSBcIkZpbGV0IE1pZ25vblwiO1xuICAgIGZpbGV0U3RlYWsuYXBwZW5kQ2hpbGQoZmlsZXRTdGVha0hlYWRpbmcpO1xuXG4gICAgY29uc3QgZmlsZXRTdGVha0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZmlsZXRTdGVha0NvbnRlbnQudGV4dENvbnRlbnQgPSBcIkZpbGV0IG1pZ25vbiBpcyB0aGUgbmFtZSBvZiB0aGUgc3RlYWsgY3V0IGZyb20gdGhlIGJlZWYgdGVuZGVybG9pbiwgYSBsb25nLCBjeWxpbmRyaWNhbCBtdXNjbGUgdGhhdCBydW5zIGFsb25nIHRoZSBzcGluZS4gSXTigJlzIG9uZSBvZiB0aGUgbW9zdCBleHBlbnNpdmUgY3V0cyBvZiBiZWVmIGJlY2F1c2UgdGhlIG11c2NsZSBkb2VzbuKAmXQgZ2V0IG11Y2ggd29yaywgYW5kIGl04oCZcyBzbyB0ZW5kZXIgeW91IGNvdWxkIGN1dCB0aHJvdWdoIGl0IHdpdGggYSBmb3JrLiBCZWNhdXNlIHRoZXnigJlyZSBhbHJlYWR5IHRlbmRlciwgdGhleSBkb27igJl0IHJlcXVpcmUgYSBtYXJpbmFkZSwgc28gdHJ5IHBhaXJpbmcgdGhlIHN0ZWFrIGluc3RlYWQgd2l0aCBhIGZsYXZvcmZ1bCBzYXVjZSBvciBidXR0ZXIgbGlrZSBpbiBtZXJsb3QgZmlsZXQgbWlnbm9uLlwiO1xuICAgIGZpbGV0U3RlYWsuYXBwZW5kQ2hpbGQoZmlsZXRTdGVha0NvbnRlbnQpO1xuXG4gICAgY29uc3QgZmlsZXRTdGVha1ByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBmaWxldFN0ZWFrUHJpY2UudGV4dENvbnRlbnQgPSBcIuKCuTE5OVwiO1xuICAgIGZpbGV0U3RlYWsuYXBwZW5kQ2hpbGQoZmlsZXRTdGVha1ByaWNlKTtcblxuICAgIGNvbnN0IGZpbGV0U3RlYWtJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBmaWxldFN0ZWFrSW1nLmNsYXNzTGlzdC5hZGQoJ21lbnVJbWcnKTtcblxuICAgIGZpbGV0U3RlYWtJbWcuc3JjID0gZmlsZXRTdGVhazE7XG4gICAgZmlsZXRTdGVha0ltZy5oZWlnaHQgPSAnMjAwJztcbiAgICBmaWxldFN0ZWFrSW1nLndpZHRoID0gJzIwMCc7XG5cbiAgICBmaWxldFN0ZWFrLmFwcGVuZENoaWxkKGZpbGV0U3RlYWtJbWcpO1xuICAgIG1lbnVDb250ZW50LmFwcGVuZENoaWxkKGZpbGV0U3RlYWspXG5cbn1cbiIsImltcG9ydCByZXNlcnZhdGlvbiBmcm9tICcuL2Fzc2V0cy9yZXNlcnZhdGlvbi5qcGcnO1xuaW1wb3J0IG9yZGVyIGZyb20gJy4vYXNzZXRzL29yZGVyLmpwZyc7XG5pbXBvcnQgTWFuYWdlciBmcm9tICcuL2Fzc2V0cy9NYW5hZ2VyLmpwZyc7XG5cbmV4cG9ydCBjb25zdCBjb250YWN0UGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBjb250YWN0Q29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKTtcblxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkNvbnRhY3QgVXNcIlxuICAgIGhlYWRpbmcuY2xhc3NMaXN0LmFkZChcImhlYWRpbmdcIilcbiAgICBjb250YWN0Q29udGVudC5hcHBlbmRDaGlsZChoZWFkaW5nKTtcblxuICAgIGNvbnN0IHJlc2VydmF0aW9uQ29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJlc2VydmF0aW9uQ29udGFjdC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdFwiKVxuXG4gICAgY29uc3QgcmVzZXJ2YXRpb25IZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICByZXNlcnZhdGlvbkhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkZvciBSZXNlcnZhdGlvblwiO1xuICAgIHJlc2VydmF0aW9uQ29udGFjdC5hcHBlbmRDaGlsZChyZXNlcnZhdGlvbkhlYWRpbmcpO1xuXG4gICAgY29uc3QgcmVzZXJ2YXRpb25JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgIHJlc2VydmF0aW9uSW1nLnNyYyA9IHJlc2VydmF0aW9uO1xuICAgIHJlc2VydmF0aW9uSW1nLmhlaWdodCA9ICcxNTAnO1xuICAgIHJlc2VydmF0aW9uQ29udGFjdC5hcHBlbmRDaGlsZChyZXNlcnZhdGlvbkltZyk7XG5cbiAgICBjb25zdCByZXNlcnZhdGlvbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcmVzZXJ2YXRpb25Db250ZW50LnRleHRDb250ZW50ID0gXCIrOTEgODYwIDE4MyA2NzY1XCI7XG4gICAgcmVzZXJ2YXRpb25Db250YWN0LmFwcGVuZENoaWxkKHJlc2VydmF0aW9uQ29udGVudCk7XG5cbiAgICBjb250YWN0Q29udGVudC5hcHBlbmRDaGlsZChyZXNlcnZhdGlvbkNvbnRhY3QpO1xuXG4gICAgY29uc3Qgb3JkZXJDb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgb3JkZXJDb250YWN0LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0XCIpXG5cbiAgICBjb25zdCBvcmRlckhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIG9yZGVySGVhZGluZy50ZXh0Q29udGVudCA9IFwiT3JkZXJpbmcgU2VydmljZVwiO1xuICAgIG9yZGVyQ29udGFjdC5hcHBlbmRDaGlsZChvcmRlckhlYWRpbmcpO1xuXG4gICAgY29uc3Qgb3JkZXJJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuXG4gICAgb3JkZXJJbWcuc3JjID0gb3JkZXI7XG4gICAgb3JkZXJJbWcuaGVpZ2h0ID0gJzE1MCc7XG4gICAgb3JkZXJDb250YWN0LmFwcGVuZENoaWxkKG9yZGVySW1nKTtcblxuICAgIGNvbnN0IG9yZGVyQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBvcmRlckNvbnRlbnQudGV4dENvbnRlbnQgPSBcIis5MSA5NzYgMTgzIDY3NjVcIjtcbiAgICBvcmRlckNvbnRhY3QuYXBwZW5kQ2hpbGQob3JkZXJDb250ZW50KTtcblxuICAgIGNvbnRhY3RDb250ZW50LmFwcGVuZENoaWxkKG9yZGVyQ29udGFjdCk7XG5cbiAgICBjb25zdCBtYW5hZ2VyQ29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1hbmFnZXJDb250YWN0LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0XCIpO1xuXG4gICAgY29uc3QgbWFuYWdlckhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIG1hbmFnZXJIZWFkaW5nLnRleHRDb250ZW50ID0gXCJNYW5hZ2VyXCI7XG4gICAgbWFuYWdlckNvbnRhY3QuYXBwZW5kQ2hpbGQobWFuYWdlckhlYWRpbmcpO1xuICAgIGNvbnN0IG1hbmFnZXJJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgIG1hbmFnZXJJbWcuc3JjID0gTWFuYWdlcjtcbiAgICBtYW5hZ2VySW1nLmhlaWdodCA9ICcxNTAnO1xuICAgIG1hbmFnZXJDb250YWN0LmFwcGVuZENoaWxkKG1hbmFnZXJJbWcpO1xuXG4gICAgY29uc3QgbWFuYWdlckNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbWFuYWdlckNvbnRlbnQudGV4dENvbnRlbnQgPSBcIis5MSA3MDkgMTgzIDY3NjVcIjtcbiAgICBtYW5hZ2VyQ29udGFjdC5hcHBlbmRDaGlsZChtYW5hZ2VyQ29udGVudCk7XG5cbiAgICBjb250YWN0Q29udGVudC5hcHBlbmRDaGlsZChtYW5hZ2VyQ29udGFjdClcbn0iLCJpbXBvcnQgeyBob21lUGFnZSB9IGZyb20gXCIuL2hvbWVwYWdlXCI7XG5pbXBvcnQgeyBuYXYgfSBmcm9tIFwiLi9uYXZcIjtcblxubmF2KCk7XG5ob21lUGFnZSgpOyJdLCJuYW1lcyI6WyJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiZyIsImdsb2JhbFRoaXMiLCJ0aGlzIiwiRnVuY3Rpb24iLCJlIiwid2luZG93Iiwic2NyaXB0VXJsIiwiaW1wb3J0U2NyaXB0cyIsImxvY2F0aW9uIiwiZG9jdW1lbnQiLCJjdXJyZW50U2NyaXB0Iiwic3JjIiwic2NyaXB0cyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwibGVuZ3RoIiwiaSIsIkVycm9yIiwicmVwbGFjZSIsInAiLCJob21lUGFnZSIsIkNvbnRlbnQiLCJnZXRFbGVtZW50QnlJZCIsImhvbWVQYWdlQ29udGVudCIsImhlYWRpbmciLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwidGV4dENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsImhvbWVJbWFnZSIsImhlaWdodCIsImhvbWVEZXNjcmlwdGlvbiIsInN0eWxlIiwicGFkZGluZyIsInNldEFjdGl2ZUJ1dHRvbiIsImJ1dHRvbiIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwicmVtb3ZlIiwiY29udGVudCIsInBhZ2VDb250ZW50IiwiYnV0dG9uRGl2Iiwic3Rha2VIb3VzZSIsImNvbG9yIiwiaG9tZUJ1dHRvbiIsIm1lbnVCdXR0b24iLCJjb250YWN0QnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsIm1lbnVDb250ZW50IiwiaGFuZEN1dFN0ZWFrIiwiaGFuZEN1dFN0ZWFrSGVhZGluZyIsImhhbmRDdXRTdGVha0NvbnRlbnQiLCJoYW5kQ3V0U3RlYWtQcmljZSIsImhhbmRDdXRTdGVha0ltZyIsIndpZHRoIiwic3VyZlR1cmYiLCJzdXJmVHVyZkhlYWRpbmciLCJzdXJmVHVyZkNvbnRlbnQiLCJzdXJmVHVyZlByaWNlIiwic3VyZlR1cmZJbWciLCJmaWxldFN0ZWFrIiwiZmlsZXRTdGVha0hlYWRpbmciLCJmaWxldFN0ZWFrQ29udGVudCIsImZpbGV0U3RlYWtQcmljZSIsImZpbGV0U3RlYWtJbWciLCJtZW51UGFnZSIsImNvbnRhY3RDb250ZW50IiwicmVzZXJ2YXRpb25Db250YWN0IiwicmVzZXJ2YXRpb25IZWFkaW5nIiwicmVzZXJ2YXRpb25JbWciLCJyZXNlcnZhdGlvbkNvbnRlbnQiLCJvcmRlckNvbnRhY3QiLCJvcmRlckhlYWRpbmciLCJvcmRlckltZyIsIm9yZGVyQ29udGVudCIsIm1hbmFnZXJDb250YWN0IiwibWFuYWdlckhlYWRpbmciLCJtYW5hZ2VySW1nIiwibWFuYWdlckNvbnRlbnQiLCJjb250YWN0UGFnZSIsIm5hdiJdLCJzb3VyY2VSb290IjoiIn0=