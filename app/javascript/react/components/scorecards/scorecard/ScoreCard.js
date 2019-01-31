import React from 'react'

const ScoreCard = (props) => {
  return(
    <div>
      <div className='table-display'>
        <h4 className='scorecard-title2'>{props.scorecard.golf_course.name} Scorecard</h4><h6 className='date-played'>Played on {dat.split('T')[0]}</h6>
        <table className='scroll' name="Scorecard">
          <thead>
            <tr className="scorecard-holes">
              <th className='scorecard-label'>Hole</th>
              {holes}
            </tr>
          </thead>
          <tbody>
            <tr className="scorecard-yards">
              <td className="scorecard-label">Yards</td>
              {yards}
            </tr>
            <tr className='scorecard-par'>
              <td className='scorecard-label'>Par</td>
              {pars}
            </tr>
            <tr className='scorecard-stroke'>
              <td className='scorecard-label'>Stroke</td>
              {strokes}
            </tr>
          </tbody>
        </table>
        <p className='scorecard-score'>Par: {totalPar} Strokes: {totalStrokes}</p>
      </div>
    </div>
  )
}

export default ScoreXard
