import React from 'react'
import Engagement from '../models/Engagement'
import ScoreInfoTable from '../components/ScoreInfoTable'

const Details = ({engagement}:{engagement:Engagement}) => {
    const startedAtString : string = engagement.startedAt.toString()
  return (
    <>
    <div>
        <table>
        <tr>
                <th>Date</th>: 
                <td>{startedAtString}</td>
            </tr>
            <tr>
                <th>Start Time</th>: 
                <td>{startedAtString}</td>
            </tr>
            <tr>
                <th>End Time</th>: 
                <td>{startedAtString}</td>
            </tr>
            <tr>
                <th>Duration</th>: 
                <td>{startedAtString}</td>
            </tr>
            <tr>
                <th>Staff Member</th>: 
                <td>{engagement.staff}</td>
            </tr>
            <tr>
                <th>Transcript:</th>: 
                <td>{engagement.transcript}</td>
            </tr>
            <tr>
                <th>Score</th>: 
                <td>{engagement.score}</td>
            </tr>
            <tr>
                <thead>Score Details</thead>:  {/*Need to add colspan */}
                <tbody><ScoreInfoTable phrase={engagement.transcript}/></tbody>
            </tr>

        </table>
    </div>
    </>
  )
}
export default Details