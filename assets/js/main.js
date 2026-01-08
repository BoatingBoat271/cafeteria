$(function () {
  // ====== VALIDACIÓN FORMULARIO (jQuery) ======
  $("#form-contacto").on("submit", function (e) {
    e.preventDefault();

    const nombre = $("#nombre").val().trim();
    const correo = $("#correo").val().trim();
    const mensaje = $("#mensaje").val().trim();

    const $estado = $("#mensaje-estado");

    if (nombre === "" || correo === "" || mensaje === "") {
      $estado
        .removeClass("exito")
        .addClass("error")
        .html("Por favor completa todos los campos.");
      return;
    }

    $estado
      .removeClass("error")
      .addClass("exito")
      .html("Gracias por contactarme, <strong>" + nombre + "</strong>. Responderé pronto.");

    $("#nombre, #correo, #mensaje").val("");
  });

  // ====== SMOOTH SCROLL (navbar -> secciones) + cerrar menú móvil ======
  $(document).on("click", ".navbar a[href^='#']", function (e) {
    e.preventDefault();

    const hash = $(this).attr("href");
    const $destino = $(hash);

    if (!$destino.length) return;

    const offsetNavbar = 80;
    const destinoTop = $destino.offset().top - offsetNavbar;

    $("html, body").stop(true, true).animate(
      { scrollTop: destinoTop },
      700,
      "linear"
    );

    const $menu = $("#navbarNav");
    if ($menu.hasClass("show")) {
      bootstrap.Collapse.getOrCreateInstance($menu[0]).hide();
    }
  });

  // ====== MAPA GOOGLE (Los Ángeles) ======
  const direccion = "Los Ángeles, Biobío, Chile"; // puedes cambiarlo a una dirección exacta
  const iframe = document.getElementById("mapaGoogle");
  const btnMaps = document.getElementById("btnMaps");

  if (iframe) {
    iframe.src = "https://www.google.com/maps?q=" + encodeURIComponent(direccion) + "&output=embed";
  }
  if (btnMaps) {
    btnMaps.href = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(direccion);
  }
});