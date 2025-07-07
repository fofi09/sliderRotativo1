(() => {

const contenedorSlides = document.getElementById('contenedor-slides');

    const elementosTextoSlider1 = [

    ];
      
   const textoLinea = document.getElementById('texto-linea');
    
   const barraLinea = document.getElementById('barra-linea');
    
   const elementosTextoSlider2 = [
    
   document.getElementById('frase-slider2-1'),
    
   document.getElementById('frase-slider2-2'),
    
   document.getElementById('frase-slider2-3'),
    
   document.getElementById('frase-slider2-4'),
    
   document.getElementById('frase-slider2-5'),
 ];
    
   
    
   const elementosTextoSlider3 = [
    
   document.getElementById('caja-slider3-1'),
    
   document.getElementById('caja-slider3-2'),
    
   document.getElementById('caja-slider3-3'),
    
   document.getElementById('caja-slider3-4'),
    
  ];
    

    
    function reiniciarTextoSlider3() {
     elementosTextoSlider3.forEach(el => el.classList.remove('activo'));
    
    }
    
    
    
    function animarTextoSlider3() {
    
  elementosTextoSlider3.forEach((el, i) => {
    
   setTimeout(() => el.classList.add('activo'), i * 200);
    
     });
    
   }
    

    
    let sliderActual = 0;
    
    const contadorSlides = 3;
    
    const porcentajeAlturaSlide = 100;
    
    
    function reiniciarTextoSlider1() {
    
    elementosTextoSlider1.forEach((el) => {
    
    el.classList.remove('activo');
    
   });
    
  
    
   if (textoLinea) {
    
   textoLinea.classList.remove('animacion-texto-aparecer');
   
    
    void textoLinea.offsetWidth; 
    
     }
    
    if (barraLinea) {
    
     barraLinea.classList.remove('animacion-linea-crecer');
    

    
   void barraLinea.offsetWidth;
    
    }
    
     }
    
    
    
  function reiniciarTextoSlider2() {
   
    elementosTextoSlider2.forEach((el) => {
    
     el.classList.remove('activo');
    
     });
    
     }
    

  function animarTextoSlider1() {
    
   elementosTextoSlider1.forEach((el, i) => {
    
     setTimeout(() => {
    
     el.classList.add('activo');
     }, i * 250);
     });
    
   // es para reiniciar la animación
    
    if (textoLinea) {
    
    textoLinea.classList.add('animacion-texto-aparecer');
    
   }
    
     if (barraLinea) {
     barraLinea.classList.add('animacion-linea-crecer');
   }
    
 }
    
 function animarTextoSlider2() {
    
    elementosTextoSlider2.forEach((el, i) => {
     
       setTimeout(() => {
    
   el.classList.add('activo');
    
     }, i * 300 + 300); 
    
     });
    
     }

     //para q al hacer scroll, o cuando termine de pasar una vez los sliders, vuelvan a hacer sus animaciones
     //osea no se queden estaticas
    
 function reiniciarAnimaciones() {
    
     if (sliderActual === 0) reiniciarTextoSlider1();
    
    else if (sliderActual === 1) reiniciarTextoSlider2();
    
    else reiniciarTextoSlider3();
    
     }
    

     function reproducirAnimaciones() {
    
     if (sliderActual === 0) animarTextoSlider1();
    
     else if (sliderActual === 1) animarTextoSlider2();
    
     else animarTextoSlider3();
    
    }
    //cambia de slider
    function irASiguienteSlide() {
    
    sliderActual = (sliderActual + 1) % contadorSlides;
    
    contenedorSlides.style.transform = `translateY(-${sliderActual * porcentajeAlturaSlide}%)`;
    
     reiniciarAnimaciones();
    

    
    setTimeout(() => {
    
    reproducirAnimaciones();
    
    }, 900);
    
    }
    
 
    const heroSlider = document.getElementById('hero-slider');
    
     const opcionesObservador = {
    
     root: null,
    
     margenRaiz: '0px',
    
     umbral: 0.5,
    
     };
    
  
    
     const observador = new IntersectionObserver((entradas) => {
    
     entradas.forEach((entrada) => {
    
    if (entrada.isIntersecting) {
    
     reiniciarAnimaciones();
    
     setTimeout(() => {
    
     reproducirAnimaciones();
   }, 100);
    
    }
    
   });
    
   }, opcionesObservador);
    
   
    
    observador.observe(heroSlider);
    
     
    
    window.addEventListener('load', () => {
    
   reproducirAnimaciones();
    
    });
    

    
    setInterval(() => {
    irASiguienteSlide();
    
}, 8000);
        
    
    
 })();