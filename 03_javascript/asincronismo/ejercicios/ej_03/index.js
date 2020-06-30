const wait = n => new Promise(resolve => setTimeout(resolve, n))
const random = _ => (Math.floor(Math.random() * 4) + 1) / 2 * 1000;

const ALUMNAS = [{ nombre: 'Ada Lovelace', codigoCurso: 'A0001' }, { nombre: 'Hedy Lamarr', codigoCurso: 'A0001' }, { nombre: 'Grace Hopper', codigoCurso: 'A0001' }, { nombre: 'Katherine Johnson', codigoCurso: 'A0002' }, { nombre: 'Mary Jackson', codigoCurso: 'A0002' }, { nombre: 'Dorothy Vaughan', codigoCurso: 'A0002' }, { nombre: 'Radia Perlman', codigoCurso: 'A0003' }, { nombre: 'Carol Shaw', codigoCurso: 'A0003' }, { nombre: 'Katie Bouman', codigoCurso: 'A0003' }];
const CURSOS = [{ nombre: '1ra Generación', codigo: 'A0001' }, { nombre: '2da Generación', codigo: 'A0002' }, { nombre: '3ra Generación', codigo: 'A0003' } ];

const fetchAlumnas = () => {
  return new Promise(resolve => {
    wait(random())
      .then(_ => resolve(ALUMNAS))
  });
};

const fetchCursos = () => {
  return new Promise(resolve => {
    wait(random())
      .then(_ => resolve(CURSOS))
  });
}