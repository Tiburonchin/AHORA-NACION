(function(){
    // Interactive components: carousel, FAQ accordion, presence map click handlers
    let init = function(){
        initTestimonials();
        initFAQ();
        initMapRegions();
    };

    function initTestimonials(){
        const container = document.querySelector('.testimonials-inner');
        if(!container) return;
        const slides = Array.from(container.querySelectorAll('.testimonial-slide'));
        const dotsArea = container.querySelector('.testimonials-dots');
        let current = 0;
        function show(i){
            slides.forEach((s,idx)=> s.classList.toggle('active', idx===i));
            const dots = dotsArea ? Array.from(dotsArea.querySelectorAll('button')) : [];
            dots.forEach((d,idx)=> d.classList.toggle('active', idx===i));
            current = i;
        }
        // create dots if not present
        if(dotsArea && dotsArea.children.length === 0){
            slides.forEach((_,i)=>{
                const b = document.createElement('button');
                b.addEventListener('click', ()=> show(i));
                dotsArea.appendChild(b);
            })
        }
        // prev/next
        const prev = container.querySelector('.testimonials-prev');
        const next = container.querySelector('.testimonials-next');
        prev && prev.addEventListener('click', ()=> show((current-1+slides.length)%slides.length));
        next && next.addEventListener('click', ()=> show((current+1)%slides.length));
        // auto-rotate
        let timer = setInterval(()=> show((current+1)%slides.length), 6000);
        container.addEventListener('mouseenter', ()=> clearInterval(timer));
        container.addEventListener('mouseleave', ()=> timer = setInterval(()=> show((current+1)%slides.length), 6000));
        show(0);
    }

    function initFAQ(){
        const items = document.querySelectorAll('.faq-item');
        items.forEach(item=>{
            const q = item.querySelector('.faq-question');
            q && q.addEventListener('click', ()=>{
                const open = item.classList.toggle('open');
                // optionally close others
                items.forEach(it=>{ if(it!==item) it.classList.remove('open') });
            })
        })
    }

    function initMapRegions(){
        const regions = document.querySelectorAll('.map-region');
        const info = document.querySelector('.map-info');
        if(!regions.length || !info) return;
        regions.forEach(r=> r.addEventListener('click', ()=>{
            const title = r.getAttribute('data-title') || r.textContent;
            const text = r.getAttribute('data-desc') || 'Con presencia en esta región, trabajamos con organizaciones locales y redes comunitarias.';
            info.querySelector('h4').textContent = title;
            info.querySelector('p').textContent = text;
            // highlight
            regions.forEach(x=> x.classList.remove('active')); r.classList.add('active');
        }))
        // initialize with first
        if(regions[0]) regions[0].click();
    }

    // Initialize on DOM ready or after includes loaded
    function tryInit(){
        try{ init(); }catch(e){ console.error('interactive init error', e); }
    }

    document.addEventListener('DOMContentLoaded', tryInit);
    document.addEventListener('includesLoaded', tryInit);
})();
