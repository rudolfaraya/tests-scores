import React, { Component } from 'react'

class CognitiveCompetencies extends Component {
  render() {
    return (
      <div aria-labelledby='headingCognitiveSkills' className='collapse show' id='collapseCognitiveSkills'>
        <div className='list-group list-group-flush d-flex flex-row flex-wrap border-0'>
          <div className='list-group-item list-group-item-action col-md-6 rounded-0'>
            <div className='d-flex w-100 justify-content-between align-items-center mb-1'>
              <div className='d-block'>
                <h5 className='h6 font-weight-bold mb-0 mt-2'>Razonamiento lógico</h5>
                <p className='mb-1'>Razonamiento lógico y planificación a largo plazo</p>
              </div>
              <div className='float-right'>
                <button className='btn btn-link text-info' data-placement='top' data-toggle='tooltip' title=''
                  type='button'
                  data-original-title='Frente a un problema lógico, la herramienta mide la efectividad de los movimientos que realiza ¿Hace pruebas o planifica antes de actuar?'>
                  <i className='fas fa-info-circle fa-lg' />
                </button>
              </div>
            </div>
            <small className='text-info'>
              <strong>
                <i className='fas fa-spinner fa-pulse mr-1' />
                &nbsp;En espera de resultados:
              </strong>&nbsp;
              <span>El candidato no ha rendido esta evaluación</span>
            </small>
          </div>
          <div className='list-group-item list-group-item-action col-md-6 rounded-0'>
            <div className='d-flex w-100 justify-content-between align-items-center mb-1'>
              <div className='d-block'>
                <h5 className='h6 font-weight-bold mb-0 mt-2'>Atención dividida</h5>
                <p className='mb-1'>Manejo de tareas simultáneas</p>
              </div>
              <div className='float-right'>
                <button className='btn btn-link text-info' data-placement='top' data-toggle='tooltip' title=''
                  type='button'
                  data-original-title='En este test se evalúa la habilidad de la persona para realizar progresivamente más tareas y su nivel de efectividad'>
                  <i className='fas fa-info-circle fa-lg' />
                </button>
              </div>
            </div>
            <div className='d-block relative-item'>
              <div className='progress mb-1'>
                <div aria-valuemax='100' aria-valuemin='0' aria-valuenow='86' className='progress-bar progress-bar-striped bg-info' role='progressbar' style={{ maxWidth: '86%' }}>
                  <span className='text-left ml-2 font-weight-bold text-shadow'>86%</span>
                </div>
              </div>
            </div>
            <div className='d-flex justify-content-between text-muted'>
              <small className='text-left'>Monofuncional</small>
              <small className='text-right'>Polifuncional</small>
            </div>
          </div>
          <div className='list-group-item list-group-item-action col-md-6 rounded-0'>
            <div className='d-flex w-100 justify-content-between align-items-center mb-1'>
              <div className='d-block'>
                <h5 className='h6 font-weight-bold mb-0 mt-2'>Memorización</h5>
                <p className='mb-1'>Memorización a corto plazo</p>
              </div>
              <div className='float-right'>
                <button className='btn btn-link text-info' data-placement='top' data-toggle='tooltip' title=''
                  type='button'
                  data-original-title='A partir de frecuencias de números, cada vez más rápidas, ¿Cuánto logra retener y reproducir la persona?'>
                  <i className='fas fa-info-circle fa-lg' />
                </button>
              </div>
            </div>
            <small className='text-info'>
              <strong>
                <i className='fas fa-spinner fa-pulse mr-1' />
                &nbsp;En espera de resultados:
              </strong>&nbsp;
              <span>El candidato no ha rendido esta evaluación</span>
            </small>
          </div>
          <div className='list-group-item list-group-item-action col-md-6 rounded-0'>
            <div className='d-flex w-100 justify-content-between align-items-center mb-1'>
              <div className='d-block'>
                <h5 className='h6 font-weight-bold mb-0 mt-2'>Precisión</h5>
                <p className='mb-1'>Precisión visual</p>
              </div>
              <div className='float-right'>
                <button className='btn btn-link text-info' data-placement='top' data-toggle='tooltip' title=''
                  type='button'
                  data-original-title='Frente a patrones numéricos por un tiempo limitado, ¿Cuán precisa es la persona para retener y reproducir el patrón?'>
                  <i className='fas fa-info-circle fa-lg' />
                </button>
              </div>
            </div>
            <small className='text-info'>
              <strong>
                <i className='fas fa-spinner fa-pulse mr-1' />
                &nbsp;En espera de resultados:
              </strong>&nbsp;
              <span>El candidato no ha rendido esta evaluación</span>
            </small>
          </div>
          <div className='list-group-item list-group-item-action col-md-6 rounded-0'>
            <div className='d-flex w-100 justify-content-between align-items-center mb-1'>
              <div className='d-block'>
                <h5 className='h6 font-weight-bold mb-0 mt-2'>Cambio de tarea</h5>
                <p className='mb-1'>Velocidad de adaptación de una tarea a otra</p>
              </div>
              <div className='float-right'>
                <button className='btn btn-link text-info' data-placement='top' data-toggle='tooltip' title=''
                  type='button'
                  data-original-title='Este test mide la velocidad de adaptación frente a un cambio de tareas'>
                  <i className='fas fa-info-circle fa-lg' />
                </button>
              </div>
            </div>
            <small className='text-info'>
              <strong>
                <i className='fas fa-spinner fa-pulse mr-1' />
                &nbsp;En espera de resultados:
              </strong>&nbsp;
              <span>El candidato no ha rendido esta evaluación</span>
            </small>
          </div>
          <div className='list-group-item list-group-item-action col-md-6 rounded-0'>
            <div className='d-flex w-100 justify-content-between align-items-center mb-1'>
              <div className='d-block'>
                <h5 className='h6 font-weight-bold mb-0 mt-2'>Cambio de esfuerzo</h5>
                <p className='mb-1'>Esfuerzo de adaptación al cambio de tarea</p>
              </div>
              <div className='float-right'>
                <button className='btn btn-link text-info' data-placement='top' data-toggle='tooltip' title=''
                  type='button'
                  data-original-title='¿Cuán dificil es para una persona adaptarse a condiciones o reglas distintas?'>
                  <i className='fas fa-info-circle fa-lg' /></button>
              </div>
            </div>
            <small className='text-info'>
              <strong>
                <i className='fas fa-spinner fa-pulse mr-1' />
                &nbsp;En espera de resultados:
              </strong>&nbsp;
              <span>El candidato no ha rendido esta evaluación</span>
            </small>
          </div>
        </div>
      </div>
    )
  }
}

export default CognitiveCompetencies
