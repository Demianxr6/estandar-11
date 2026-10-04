document.getElementById('notaForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const curso = document.getElementById('curso').value;
  const nota = parseFloat(document.getElementById('nota').value);
  const totalClases = parseInt(document.getElementById('totalClases').value);
  const inasistencias = parseInt(document.getElementById('inasistencias').value);

  if (inasistencias > totalClases) {
    alert("Las inasistencias no pueden superar el total de clases.");
    return;
  }

  const maxInasistencias = totalClases * 0.20;

  let notaDefinitiva = nota;
  let anotacion = "";
  let esDesaprobado = false;

  if (inasistencias > maxInasistencias) {
    notaDefinitiva = 0;
    anotacion = `Desaprobado: Excedió el 20% de inasistencias permitidas (${inasistencias} faltas de ${totalClases} clases).`;
    esDesaprobado = true;
  } else {
    anotacion = "Asistencia regular. Nota mantenida.";
  }

  document.getElementById('resNombre').textContent = nombre;
  document.getElementById('resCurso').textContent = curso;

  const resNota = document.getElementById('resNota');
  resNota.textContent = notaDefinitiva;
  resNota.className = `nota-numero ${esDesaprobado ? 'desaprobado' : 'aprobado'}`;

  document.getElementById('resAnotacion').textContent = anotacion;

  document.getElementById('resultado').classList.remove('hidden');
});