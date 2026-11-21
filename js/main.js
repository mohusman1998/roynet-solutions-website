const menuBtn=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav');
if(menuBtn&&nav){menuBtn.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');menuBtn.setAttribute('aria-expanded',String(open));menuBtn.setAttribute('aria-label',open?'Close navigation':'Open navigation')});document.querySelectorAll('.nav a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('is-open');menuBtn.setAttribute('aria-expanded','false')}));document.addEventListener('keydown',e=>{if(e.key==='Escape'){nav.classList.remove('is-open');menuBtn.setAttribute('aria-expanded','false')}})}
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
if('IntersectionObserver'in window){const ob=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in-view');ob.unobserve(e.target)}})},{threshold:.09,rootMargin:'0px 0px -25px 0px'});document.querySelectorAll('.reveal').forEach(el=>ob.observe(el))}else{document.querySelectorAll('.reveal').forEach(el=>el.classList.add('in-view'))}
const form=document.getElementById('partnership-form');if(form)form.addEventListener('submit',event=>{event.preventDefault();if(!form.reportValidity())return;const f=Object.fromEntries(new FormData(form).entries());const topic=`Roynet Partnership Enquiry – ${f.company}`;const body=`Full name: ${f.fullname}
Business email: ${f.email}
Company: ${f.company}
Project region: ${f.region}
Service type: ${f.service}
Preferred timeframe: ${f.date}

Requirements:
${f.message}`;window.location.href=`mailto:info@roynetsolutions.com?subject=${encodeURIComponent(topic)}&body=${encodeURIComponent(body)}`});