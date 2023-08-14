import {useState, useEffect} from "react"
import { addNewNameToContest, fetchContest } from "../api-client"
import Header from "./header"
import ProposedNames from "./proposed-names"
import NewName from "./new-name"

const Contest = ({initialContest, onContestListClick}) => {
    const [contest, setContest] = useState(initialContest)

    useEffect(() => {
        if (!contest.names){
            fetchContest(contest.id).then((contest) => {
                setContest(contest)
            })
        }
    }, [contest.id, contest.names])

    const handleClickContestList = (event) => {
        event.preventDefault()
        onContestListClick()
    }

    const handleNewNameSubmit = async (event) => {
        event.preventDefault()
        const newNameInput = event.target.newName
        const updatedContest = await addNewNameToContest({ contestId: contest?.id, newNameValue: newNameInput.value })
        setContest(updatedContest)
    }

    return (
        <>
            <Header message={contest.contestName} />
            <div className="contest">
                <div className="title">Contest description</div>
                <div className="description">{contest.description}</div>

                <ProposedNames contest={contest} />
                <NewName handleNewNameSubmit={handleNewNameSubmit}/>

                <a href="/" className="link" onClick={handleClickContestList}>Contest List</a>
            </div>
        </>
    )
}

export default Contest
