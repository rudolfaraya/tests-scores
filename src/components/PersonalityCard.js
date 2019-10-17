import React, { Component } from 'react'
import CompletedInfo from './CompletedInfo'

class PersonalityCard extends Component {
  render() {
    return (
      <div className='card cognitive-results mb-3'>
        <div className='card-header __with_collapsible-icons' id='headingPersonalityTrait'>
          <button aria-controls='collapsePersonalityTrait' aria-expanded='true'
            className='btn btn-link no_underline p-0 d-block text-left text-dark w-100'
            data-target='#collapsePersonalityTrait' data-toggle='collapse' type='button'>
            <div className='row d-flex align-items-center'>
              <div className='col-lg-10 col-sm-8'>
                <div className='d-inline-block w-100 d-flex align-items-center my-1'>
                  <i className='fas fa-atom fa-pull-left h4 mb-0' />
                  <h3 className='h4 mb-0 d-inline-block'>Rasgos de Personalidad</h3>
                </div>
                <p className='small text-muted mb-0 pr-2 pr-sm-0'>Refleja los patrones característicos de
                  pensamientos, sentimientos y comportamientos de las personas. Los rasgos de personalidad
                  implican consistencia y estabilidad</p>
              </div>
              <div className='col-lg-2 col-sm-4'>
                <span className='badge badge-pill big-badge text-center d-flex align-items-center justify-content-center p-2 my-2 ml-auto mx-md-auto badge-primary'
                  data-placement='top' data-toggle='tooltip' title=''
                  data-original-title='Measurement Total Average'>
                  <span className='h6 font-weight-bold mb-0'>0%</span>
                </span>
                <CompletedInfo />
              </div>
            </div>
          </button>
        </div>
        <div aria-labelledby='headingPersonalityTrait' className='collapse show' id='collapsePersonalityTrait'>
          <div className='list-group list-group-flush d-flex flex-row flex-wrap border-0'>
            <div className='list-group-item list-group-item-action col-md-6 rounded-0'>
              <div className='d-flex w-100 justify-content-between align-items-center mb-1'>
                <div className='d-block'>
                  <h5 className='h6 font-weight-bold mb-0 mt-2'>Control de impulsos</h5>
                  <p className='mb-1'>Frente a cambios, ¿cómo maneja el control impulsos?</p>
                </div>
                <div className='float-right'>
                  <button className='btn btn-link text-info' data-placement='top' data-toggle='tooltip' title=''
                    type='button'
                    data-original-title='En este test se evalúa la habilidad de la persona para realizar progresivamente más tareas y su nivel de efectividad'>
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
            <div className='list-group-item list-group-item-action col-md-6 rounded-0'>
              <div className='d-flex w-100 justify-content-between align-items-center mb-1'>
                <div className='d-block'>
                  <h5 className='h6 font-weight-bold mb-0 mt-2'>Velocidad</h5>
                  <p className='mb-1'>Velocidad de reacción</p>
                </div>
                <div className='float-right'>
                  <button className='btn btn-link text-info' data-placement='top' data-toggle='tooltip' title=''
                    type='button'
                    data-original-title='Mide la velocidad con la que la persona responde frente a situaciones e instrucciones'>
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
                  <h5 className='h6 font-weight-bold mb-0 mt-2'>Necesidad de emoción</h5>
                  <p className='mb-1'>Necesidad de desafío</p>
                </div>
                <div className='float-right'>
                  <button className='btn btn-link text-info' data-placement='top' data-toggle='tooltip' title=''
                    type='button'
                    data-original-title='A mayor desafío, ¿La persona busca estabilidad o persevera?'>
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
                  <h5 className='h6 font-weight-bold mb-0 mt-2'>Evaluación de riesgos</h5>
                  <p className='mb-1'>Evaluación de riesgos/recompensas</p>
                </div>
                <div className='float-right'>
                  <button className='btn btn-link text-info' data-placement='top' data-toggle='tooltip' title=''
                    type='button'
                    data-original-title='Se evalúa el comportamiento de la persona al incrementar riesgos e incentivos'>
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
                  <h5 className='h6 font-weight-bold mb-0 mt-2'>Aversión a la pérdida</h5>
                  <p className='mb-1'>Cuánto evitas perder</p>
                </div>
                <div className='float-right'>
                  <button className='btn btn-link text-info' data-placement='top' data-toggle='tooltip' title=''
                    type='button'
                    data-original-title='Se evalúa el comportamiento de la persona frente a riesgos y situaciones de pérdida'>
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
          </div>
        </div>
      </div>
    )
  }
}

export default PersonalityCard
