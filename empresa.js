mensaje = ''
mensaje2 = ''

function emergencia(em) {
    switch (em) {
        case '1':
            mensaje = '1'
            mensaje2 = 'RESUCITACION'
            break;
        case "2":
            mensaje = '2'
            mensaje2 = 'EMERGENCIA'
            break;
        case "3":
            mensaje = '3'
            mensaje2 = 'URGENCIA'
            break;
        case "4":
            mensaje = '4'
            mensaje2 = 'URGENCIA MENOR'
            break;
        case "5":
            mensaje = '5'
            mensaje2 = 'SIN URGENCIA'
            break;
        default:
            break;
    }
}

function Enviar() {
    n1 = document.getElementById('N1').value
    n1 = n1.toUpperCase()
    n2 = document.getElementById('N2').value
    n2 = n2.toUpperCase()
    p1 = document.getElementById('P1').value
    p1 = p1.toUpperCase()
    p2 = document.getElementById('P2').value
    p2 = p2.toUpperCase()
    d = document.getElementById('doc').value
    dn = document.getElementById('numero').value
    
    const em = 0
    
    console.log('entro a enviar')
    document.getElementById('resultado').innerHTML= " Apellidos:  " +p1+ "  " +p2+ "<br> Nombres:  " +n1+ "  " +n2+ "<br> Documento: " +d+ "<br> Tipo de Documento: " +dn+ "<br> Nivel de Emergencia: " +mensaje+ "<br> Tipo de Urgencia: " +mensaje2 
}
